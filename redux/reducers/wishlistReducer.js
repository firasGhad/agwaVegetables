import {ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST, EMPTY_WISHLIST} from '../actions/types';

const initialState = {
    agwaFarmDevices: [
        {
            id: '1',
            orders: []
        },
        {
            id: '2',
            orders: []
        }
    ]
};

const wishlistReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_TO_WISHLIST: 
         let ordersForDevices = state.agwaFarmDevices, isFound=false;
         for(let i=0;i<ordersForDevices.length;i++){
             if(ordersForDevices[i].id==action.deviceId){
                for(let j=0;j<ordersForDevices[i].orders.length;j++){
                    if(ordersForDevices[i].orders[j].id==action.plant.id){
                        ordersForDevices[i].orders[j].quantity=parseInt(ordersForDevices[i].orders[j].quantity, 10)+parseInt(action.plant.quantity, 10);
                       // ordersForDevices[i].orders[j].quantity+=action.plant.quantity;
                        isFound = true;
                        break;
                    }
                }
                !isFound && ordersForDevices[i].orders.push(action.plant);
             }
         }
        
         return {...state, 
            agwaFarmDevices: ordersForDevices
            };

        case REMOVE_FROM_WISHLIST:
             ordersForDevices = state.agwaFarmDevices;
            for(let i=0;i<ordersForDevices.length;i++){
               
                if(ordersForDevices[i].id==action.deviceId){
                    ordersForDevices[i].orders = ordersForDevices[i].orders.filter((item) => item.id !== action.id);
                }
            }
            return {
                ...state,
                agwaFarmDevices: ordersForDevices
               
            };
        
        case EMPTY_WISHLIST:
            return {
                ...state,
                agwaFarmDevices: [
                    {
                        id: 1,
                        orders: []
                    },
                    {
                        id: 2,
                        orders: []
                    }
                ]
            };

        default:
            return state;    
    }
}

export default wishlistReducer;