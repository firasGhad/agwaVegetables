import {ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST, EMPTY_WISHLIST} from '../actions/types';

const initialState = {
    wishlist: []
};

const wishlistReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_TO_WISHLIST: 
            return {...state, 
                wishlist: state.wishlist.concat({
                    plant: action.plant
                })
            };

        case REMOVE_FROM_WISHLIST:
            return {
                ...state,
                wishlist: state.wishlist.filter( (item) => item.plant.id !== action.id)
            };
        
        case EMPTY_WISHLIST:
            return {
                ...state,
                wishlist: []
            };

        default:
            return state;    
    }
}

export default wishlistReducer;