// action is an object descriptor that performs an action
import axios from 'axios';

const initialState = {
    user: {},
    profile: {}
}
const GET_USER_DATA = 'GET_USER_DATA';
const GET_USER_INFO = 'GET_USER_INFO';

export function getUser() {
    let userData = axios.get("/auth/user").then( res => res.data);
    return {
        type: GET_USER_DATA,
        payload: userData
    }
}

export function getUserInfo() {
    
    let userData = axios.get(`/api/getUserInfo/`).then( res =>  res.data);
    return {
        type: GET_USER_INFO,
        payload: userData
    }
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        // case GET_USER_DATA +'_PENDING': 
        // case GET_USER_DATA +'_REJECTED': 
        case GET_USER_INFO +"_FULFILLED":
        return Object.assign({}, state, {user: action.payload})
        case GET_USER_DATA +"_FULFILLED": 
        return Object.assign({}, state, {user: action.payload}) 
        default:
            return state
    }
}
// javascript outside of promises is synchronous, it will not wait for the response from the server before executing a function so we use promise middleware

// axios.get('/api/getUserInfo').then(
//     res => {
//       this.setState({id:res.data.id,bio: res.data})
//     }
//   )
// })