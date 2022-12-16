/**
 * @format
 */

// import { AppRegistry } from 'react-native';
// import CustomFlatListScrollBar from './lib/CustomFlatListScrollBar';
// // import CustomScrollViewScrollBar from './CustomScrollViewScrollBar';
// import { name as appName } from './app.json';

// AppRegistry.registerComponent(appName, () => CustomFlatListScrollBar);
// AppRegistry.runApplication("CustomFlatListScrollBar", {
//     rootTag: document.getElementById("root")
// });
// // AppRegistry.registerComponent(appName, () => CustomScrnpm startollViewScrollBar);




import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './src/app.json';

AppRegistry.registerComponent(appName, () => App);
AppRegistry.runApplication('App', { rootTag: document.getElementById('root') });