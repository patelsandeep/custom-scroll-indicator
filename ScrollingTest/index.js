/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './src/app.json';

AppRegistry.registerComponent(appName, () => App);
AppRegistry.runApplication(appName, { rootTag: document.getElementById('root') });
// import { AppRegistry } from 'react-native';
// import CustomFlatListScrollBar from './src/CustomFlatListScrollBar';
// // import CustomScrollViewScrollBar from './CustomScrollViewScrollBar';
// import { name as appName } from './app.json';

// AppRegistry.registerComponent(appName, () => CustomFlatListScrollBar);
// AppRegistry.runApplication("CustomFlatListScrollBar", {
//     rootTag: document.getElementById("root")
// });
// AppRegistry.registerComponent(appName, () => CustomScrnpm startollViewScrollBar);
