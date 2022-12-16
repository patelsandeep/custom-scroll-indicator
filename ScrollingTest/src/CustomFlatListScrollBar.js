import * as React from 'react';
import { Text, View, StyleSheet, Animated, FlatList } from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  }, {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  }, {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  }, {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  }, {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  }, {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  }, {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  }, {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];
const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const renderItem = ({ item }) => (
  <Item title={item.title} />
);
export default class CustomFlatListScrollBar extends React.PureComponent {
  state = {
    indicator: new Animated.Value(0),
    wholeHeight: 1,
    visibleHeight: 0
  }

  render() {
    console.log("RENDERING>>>>>>>>")
    const indicatorSize = this.state.wholeHeight > this.state.visibleHeight ?
      this.state.visibleHeight * this.state.visibleHeight / this.state.wholeHeight :
      this.state.visibleHeight

    const difference = this.state.visibleHeight > indicatorSize ? this.state.visibleHeight - indicatorSize : 1
    return (
      <View style={{ height: 500, backfaceVisibility: 'pink' }}>
        <FlatList
          data={DATA}
          persistentScrollbar={false}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          indicatorStyle={null}
          onContentSizeChange={(width, height) => {
            this.setState({ wholeHeight: height })
          }}
          onLayout={({ nativeEvent: { layout: { x, y, width, height } } }) => this.setState({ visibleHeight: height })}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: this.state.indicator } } }]
          )}
        />

        <View style={styles.indicator_bg}>
          <Animated.View style={[
            styles.indicator, {
              height: indicatorSize,
              transform: [{
                translateY: Animated.multiply(this.state.indicator, this.state.visibleHeight / this.state.wholeHeight).interpolate({
                  inputRange: [0, difference],
                  outputRange: [0, difference],
                  extrapolate: 'clamp'
                })
              }]
            }]} />
        </View>

      </View>
    )
  }
}
const styles = StyleSheet.create({
  indicator: { width: 10, backgroundColor: "black" },
  indicator_bg: { position: "absolute", width: 10, top: 1, right: 0, backgroundColor: "red", height: "100%" },
  container: {
    flex: 1,

  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
})