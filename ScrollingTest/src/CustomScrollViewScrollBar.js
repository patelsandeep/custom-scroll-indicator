import React, { useState, useRef } from 'react';
import { ScrollView, Text, View, Animated, StyleSheet, StatusBar } from 'react-native';


export default function CustomScrollViewScrollBar() {

    const booksData = [{
        title: 'The Hunger Games',
        description:
            "",
        color: 'red'
    }, {
        title: 'The Hunger Games 2',
        description:
            "", color: 'pink'
    }, {
        title: 'The Hunger Games 3',
        description:
            "", color: 'black'
    }, {
        title: 'The Hunger Games 4',
        description:
            "", color: 'grey'
    }, {
        title: 'The Hunger Games 5',
        description:
            "", color: 'yellow',

    }, {
        title: 'The Hunger Games 6',
        description:
            "", color: 'blue'
    }, {
        title: 'The Hunger Games',
        description:
            "",
        color: 'red'
    }, {
        title: 'The Hunger Games 2',
        description:
            "", color: 'pink'
    }, {
        title: 'The Hunger Games 3',
        description:
            "", color: 'black'
    }, {
        title: 'The Hunger Games 4',
        description:
            "", color: 'grey'
    }, {
        title: 'The Hunger Games 5',
        description:
            "", color: 'yellow',

    }, {
        title: 'The Hunger Games 6',
        description:
            "", color: 'blue'
    }, {
        title: 'The Hunger Games',
        description:
            "",
        color: 'red'
    }, {
        title: 'The Hunger Games 2',
        description:
            "", color: 'pink'
    }, {
        title: 'The Hunger Games 3',
        description:
            "", color: 'black'
    }, {
        title: 'The Hunger Games 4',
        description:
            "", color: 'grey'
    }, {
        title: 'The Hunger Games 5',
        description:
            "", color: 'yellow',

    }, {
        title: 'The Hunger Games 6',
        description:
            "", color: 'blue'
    }];


    const [completeScrollBarHeight, setCompleteScrollBarHeight] = useState(1);
    const [visibleScrollBarHeight, setVisibleScrollBarHeight] = useState(0);

    const scrollIndicator = useRef(new Animated.Value(0)).current;

    const scrollIndicatorSize =
        completeScrollBarHeight > visibleScrollBarHeight
            ? (visibleScrollBarHeight * visibleScrollBarHeight) /
            completeScrollBarHeight
            : visibleScrollBarHeight;

    const difference =
        visibleScrollBarHeight > scrollIndicatorSize
            ? visibleScrollBarHeight - scrollIndicatorSize
            : 1;

    const scrollIndicatorPosition = Animated.multiply(
        scrollIndicator,
        visibleScrollBarHeight / completeScrollBarHeight
    ).interpolate({
        inputRange: [0, difference],
        outputRange: [0, difference],
        extrapolate: 'clamp'
    });

    const Item = ({ title }) => (
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );



    return (
        <>
            <StatusBar style='light' />
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={{ height: '100%', width: '100%' }}>
                    <View
                        style={{ flex: 1, flexDirection: 'row' }}
                    >
                        <ScrollView
                            contentContainerStyle={{}}
                            showsVerticalScrollIndicator={false}
                            scrollEventThrottle={16}
                            onContentSizeChange={(_, height) => {
                                setCompleteScrollBarHeight(height);
                            }}
                            onLayout={({
                                nativeEvent: {
                                    layout: { height }
                                }
                            }) => {
                                setVisibleScrollBarHeight(height);
                            }}
                            onScroll={Animated.event(
                                [{ nativeEvent: { contentOffset: { y: scrollIndicator } } }],
                                { useNativeDriver: false }
                            )}
                        >
                            {booksData.map((user, index) => (
                                <Item title={user.title} key={index.toString()} />
                            ))}
                        </ScrollView>
                        <View
                            style={{
                                overflow: 'hidden', position: "absolute", width: 8, right: 0, backgroundColor: "#D3D3D3", height: "90%", paddingTop: 5, paddingBottom: 5, borderRadius: 7, alignContent: 'center', alignItems: 'center', alignSelf: 'center', marginEnd: 3
                            }}
                        >
                            <Animated.View
                                style={{
                                    width: 4,
                                    borderRadius: 8,
                                    alignSelf: 'center',
                                    backgroundColor: '#5A5A5A',
                                    height: scrollIndicatorSize,
                                    transform: [{ translateY: scrollIndicatorPosition }]
                                }}
                            />
                        </View>
                    </View>
                </View>
                <View style={{ flex: 4 }} />
            </View>
        </>
    );
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