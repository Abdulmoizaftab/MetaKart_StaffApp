import axios from 'axios';

import { loginStart, loginSuccess, loginFailure } from './LoginRedux';

export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        
        const res = await axios.post("http://192.168.1.28:5000/login", user);
        // console.log(res,"New data")
        dispatch(loginSuccess(res.data));
        console.log("Data==>", res.data);
    } catch (error) {
        dispatch(loginFailure());
        console.log("No data");
    }
}


