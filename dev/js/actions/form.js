import axios from 'axios';
// import API_BASE_URL from '../common/config/config';
import {
    GET_USERLIST, DELETE_USERITEMS
} from "../actions/types";


export function submitForm(values, successCallback, resetForm) {
    let data = {
        name: values.firstName,
        age: values.userAge
    }
    console.log('Values are:', values.firstName);
    return async function (dispatch) {
        try {
            await axios.post('http://localhost:4000/mydata', data)
            console.log('sneha', data);
            await successCallback(data);
        } catch (e) {
            console.error(e);

        }
    }
};

export function getUserList() {
    return async function (dispatch) {
        try {
            const response = await axios.get('http://localhost:4000/mydata');
            console.log('getdata', response.data);
            await dispatch({ type: GET_USERLIST, payload: response.data });
            // successCallback && successCallback(response.data.success);
        } catch (e) {
            console.error(e);
        }
    }

};

export function deleteUserItem(id) {
    console.log('id', id);
    return async function (dispatch) {
        try {
            const response = await axios.delete(`http://localhost:4000/mydata/${id}`);
            console.log('deleteitem', response);
            await dispatch({ type: DELETE_USERITEMS, payload: response.data })
        } catch (e) {
            console.log(e.response.data);
        }
    }
};

export function updateUserItem(data) {
    return async function (dispatch) {
        try {
            const response = await axios.put(`http://localhost:4000/mydata/${data}`);
            await dispatch({ type: UPDATE_USERITEMS, payload: response.data })
        } catch (e) {
            console.log(e.response.data);
        }
    }
};
