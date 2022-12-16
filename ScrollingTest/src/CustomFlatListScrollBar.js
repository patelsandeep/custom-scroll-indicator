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
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba1',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f631',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d721',
    title: 'Third Item',
  }, {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba2',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f632',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d722',
    title: 'Third Item',
  }, {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba3',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f633',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d723',
    title: 'Third Item',
  }, {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba4',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f634',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d724',
    title: 'Third Item',
  }, {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba5',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f635',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d725',
    title: 'Third Item',
  }, {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba6',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f636',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d726',
    title: 'Third Item',
  }, {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba7',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f637',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d727',
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

export default function CustomFlatListScrollBar() {

  const [indicator, setIndicator] = React.useState(new Animated.Value(0));
  const [wholeHeight, setWholeHeight] = React.useState(1);
  const [visibleHeight, setVisibleHeight] = React.useState(0);


  const indicatorSize = (wholeHeight > visibleHeight ?
    visibleHeight * visibleHeight / wholeHeight :
    visibleHeight) - 8


  const difference = visibleHeight > indicatorSize ? visibleHeight - indicatorSize : 1

  return (
    <View style={{ height: 500 }}>
      <FlatList
        data={DATA}
        persistentScrollbar={false}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        indicatorStyle={null}
        onContentSizeChange={(width, height) => {
          setWholeHeight(height)
        }}
        onLayout={({ nativeEvent: { layout: { x, y, width, height } } }) => setVisibleHeight(height)}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: indicator } } }]
        )}
      />

      <View style={styles.indicator_bg}>
        <Animated.View style={[
          styles.indicator, {
            height: indicatorSize,
            transform: [{
              translateY: Animated.multiply(indicator, visibleHeight / wholeHeight).interpolate({
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

const styles = StyleSheet.create({
  indicator: { width: 10, backgroundColor: "#5A5A5A", paddingTop: 2, paddingBottom: 2, borderRadius: 5, paddingRight: 3, paddingLeft: 3, alignContent: 'center', alignItems: 'center', alignSelf: 'center' },
  indicator_bg: { position: "absolute", width: 14, top: 1, right: 0, backgroundColor: "#D3D3D3", height: "100%", paddingTop: 5, paddingBottom: 5, borderRadius: 7 },
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#D3D3D3',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
})