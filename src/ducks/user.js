// action is an object descriptor that performs an action
import axios from 'axios';

const initialState = {
    user: {},
    profile: {}
}
const GET_USER_DATA = 'GET_USER_DATA';

export function getUser() {
    let userData = axios.get("/auth/user").then( res => res.data);
    return {
        type: GET_USER_DATA,
        payload: userData
    }
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        // case GET_USER_DATA +'_PENDING': 
        // case GET_USER_DATA +'_REJECTED': 
        case GET_USER_DATA +"_FULFILLED": 
        return Object.assign({}, state, {user: action.payload}) 
        default:
            return state
    }
}
// javascript outside of promises is synchronous, it will not wait for the response from the server before executing a function so we use promise middleware