/**
 * @format
 */

 import React from 'react';
 import {AppRegistry} from 'react-native';
 import App from './App';
 import {name as appName} from './app.json';
 import {Provider} from 'react-redux';
 import {configureStore, persistor} from './redux/store';
// Add
import { PersistGate } from 'redux-persist/integration/react';

 const store = configureStore();
 const ReduxApp = () => (
   <Provider store={store}>
     <PersistGate loading={null} persistor={persistor}>
     <App />
     </PersistGate>
   </Provider>
 );
 
 AppRegistry.registerComponent(appName, () => ReduxApp);
 