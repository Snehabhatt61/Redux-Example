import { GET_USERLIST } from '../actions/types';

const INITIAL_STATE = {
    userlist: []
};
export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case GET_USERLIST:
            return {
                ...state,
                userlist: action.payload
            };
        default:
            return state;
    }
}