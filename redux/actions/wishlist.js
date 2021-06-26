import {ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST, EMPTY_WISHLIST} from './types';

export const add = (item, deviceId) => {
    console.log('deviceId', deviceId)
    return {
    type: ADD_TO_WISHLIST,
    plant: item,
    deviceId
};
}

export const remove = (id, deviceId) => ({
    type: REMOVE_FROM_WISHLIST,
    id: id,
    deviceId
});

export const empty = (deviceId) => ({
    type: EMPTY_WISHLIST,
    deviceId
})