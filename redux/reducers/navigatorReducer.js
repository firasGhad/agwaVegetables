import {SAVE_SCREEN} from '../actions/types';

const initialState = {
    lastPage: null
};

const navigatorReducer = (state = initialState, action) => {
    switch (action.type){
        case SAVE_SCREEN: 
         return {
            lastPage: action.screen,
            plantsParams: action.plantsParams 
            };
        default:
            return state;    
    }
}

export default navigatorReducer;