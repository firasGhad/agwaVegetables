import {createStore, combineReducers} from 'redux';
import wishlistReducer from './reducers/wishlistReducer';

const rootReducer = combineReducers({
    wishlistReducer: wishlistReducer
});

const configureStore = () => createStore(rootReducer);

export default configureStore;