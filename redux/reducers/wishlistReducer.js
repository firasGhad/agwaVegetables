import {ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST, EMPTY_WISHLIST} from '../actions/types';

const initialState = {
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

const wishlistReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_TO_WISHLIST: 
         let ordersForDevices = state.agwaFarmDevices;
         for(let i=0;i<ordersForDevices.length;i++){
             if(ordersForDevices[i].id==action.deviceId){
                ordersForDevices[i].orders.push(action.plant);
               

             }
         }
        
         return {...state, 
            agwaFarmDevices: ordersForDevices
            };

        case REMOVE_FROM_WISHLIST:
             ordersForDevices = state.agwaFarmDevices;
            for(let i=0;i<ordersForDevices.length;i++){
               
                if(ordersForDevices[i].id==action.deviceId){
                    // console.log(ordersForDevices[i].orders, 'fuck')

                    ordersForDevices[i].orders = ordersForDevices[i].orders.filter( (item) => {
                       console.log('item',item);
                       console.log('///////////////////////////action',action);
                      if(item.id === action.id){
                          console.log('daaaaaaaaaam');
                      }
                    return item.id !== action.id

                   }
                   );
                //    console.log( ordersForDevices[i].orders, 'deleted');
                }
            }
            console.log('--------------------------', {...state, 
                agwaFarmDevices: ordersForDevices
                });
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