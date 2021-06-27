import {createStore, combineReducers} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer , persistCombineReducers} from 'redux-persist';
import { PersistGate } from 'redux-persist/lib/integration/react';

import wishlistReducer from './reducers/wishlistReducer';
import navigatorReducer from './reducers/navigatorReducer';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['navigatorReducer', 'wishlistReducer']
  };

// const rootReducer = combineReducers({
//     wishlistReducer: wishlistReducer
// });

// const rootReducer = combineReducers({
//     wishlistReducer: persistReducer(persistConfig, wishlistReducer),
//     navigatorReducer: persistReducer(persistConfig, navigatorReducer)
//   });

  const rootReducer = persistCombineReducers(persistConfig , {wishlistReducer, navigatorReducer})

export const configureStore = () => createStore(rootReducer);
export const persistor = persistStore(configureStore());

