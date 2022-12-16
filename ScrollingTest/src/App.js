import React from 'react';
import { View } from 'react-native';
// import CustomFlatListScrollBar from '../src/CustomFlatListScrollBar';
import CustomScrollViewScrollBar from '../src/CustomScrollViewScrollBar';

const App = () => {
    return (
        <View style={{ flex: 1 }}>
            <CustomScrollViewScrollBar />
        </View>
    );
};

export default App;