import React from 'react';
import { Text, View } from 'react-native';
import CustomFlatListScrollBar from '../src/CustomFlatListScrollBar';

const App = () => {
    console.log("APPPPPPPPPPPP>>>>>")
    return (
        <View style={{ backgroundColor: 'red', flex: 1 }}>
            <CustomFlatListScrollBar />
        </View>
    );
};

export default App;