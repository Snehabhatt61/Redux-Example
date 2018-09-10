import { DELETE_USERITEMS } from '../actions/types';

const INITIAL_STATE ={
    deleteItems: {}
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case DELETE_USERITEMS:
            return {
                ...state,
                deleteItems: action.payload
            }
        default:
            return state;
    }
}