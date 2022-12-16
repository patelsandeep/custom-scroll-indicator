import React, { useState, useRef } from 'react';
import { ScrollView, Text, View, Animated } from 'react-native';


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

    return (
        <>
            {/* <StatusBar style='light' /> */}
            <View style={{ flex: 1, backgroundColor: '#892cdc', paddingTop: 50 }}>
                <View style={{ alignItems: 'center' }}>
                    <Text style={{ color: 'white', fontSize: 28, fontWeight: '700' }}>
                        Custom Scroll Bar
                    </Text>
                </View>
                <View style={{ height: '100%', width: '100%' }}>
                    <View
                        style={{ flex: 1, flexDirection: 'row', paddingHorizontal: 20 }}
                    >
                        <ScrollView
                            contentContainerStyle={{ paddingRight: 14 }}
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
                            {booksData.map((user) => (
                                <View style={{ alignItems: 'center', height: 500, width: 500, backgroundColor: user.color }}>
                                    <Text></Text>
                                </View>
                            ))}
                        </ScrollView>
                        <View
                            style={{
                                height: '100%',
                                width: 6,
                                backgroundColor: '#52057b',
                                borderRadius: 8
                            }}
                        >
                            <Animated.View
                                style={{
                                    width: 6,
                                    borderRadius: 8,
                                    backgroundColor: '#000000',
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