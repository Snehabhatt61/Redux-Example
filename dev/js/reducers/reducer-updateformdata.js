import { UPDATE_USERITEMS } from '../actions/types';

const INITIAL_STATE ={
    updateItems: {}
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case UPDATE_USERITEMS:
            return {
                ...state,
                updateItems: action.payload
            }
        default:
            return state;
    }
}