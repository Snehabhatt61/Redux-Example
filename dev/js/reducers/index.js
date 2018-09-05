import {combineReducers} from 'redux';
import form from './reducer-form'
import userlist from './reducer-getformdata';

/*
 * We combine all reducers into a single object before updated data is dispatched (sent) to store
 * Your entire applications state (store) is just whatever gets returned from all your reducers
 * */
const allReducers = combineReducers({
    form,
    userlist
});

export default allReducers;
