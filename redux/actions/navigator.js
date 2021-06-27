import {SAVE_SCREEN} from './types';

export const saveScreen = (screen,plantsParams) => {
    return {
    type: SAVE_SCREEN,
    screen,
    plantsParams
};
}

