import {ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST, EMPTY_WISHLIST} from './types';

export const add = (item, deviceId) => ({
    type: ADD_TO_WISHLIST,
    plant: item
});

export const remove = (id, deviceId) => ({
    type: REMOVE_FROM_WISHLIST,
    id: id
});

export const empty = (deviceId) => ({
    type: EMPTY_WISHLIST
})