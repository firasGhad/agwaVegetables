import {createStore, combineReducers} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';

import wishlistReducer from './reducers/wishlistReducer';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage
  };

// const rootReducer = combineReducers({
//     wishlistReducer: wishlistReducer
// });

const rootReducer = combineReducers({
    wishlistReducer: persistReducer(persistConfig, wishlistReducer)
  });

export const configureStore = () => createStore(rootReducer);
export const persistor = persistStore(configureStore());

