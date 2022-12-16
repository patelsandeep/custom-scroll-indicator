/**
 * @format
 */

import { AppRegistry } from 'react-native';
// import { AppRegistry } from 'react';
import App from './App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
AppRegistry.runApplication(appName, { rootTag: document.getElementById('root') });
// AppRegistry.registerComponent(appName, () => CustomScrnpm startollViewScrollBar);
