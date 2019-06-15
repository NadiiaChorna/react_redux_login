import {GET_USER_DATA} from './types';

export const getUserData = () => dispatch => {
    fetch('http://localhost:3300/users')
        .then(res=>res.json())
        .then((users) => {
            console.log(users); 
            dispatch({
            type: GET_USER_DATA,
            result: users
        })
    })
}