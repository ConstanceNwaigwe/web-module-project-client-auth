import React from "react";
import { axiosWithAuth } from "../auth/auth";

const Logout = () => {
    console.log('log out');

    axiosWithAuth().post('/logout')
        .then(res => {
            localStorage.removeItem('token')
            window.location.pathname = '/login'
        })
        .catch(err => console.log(err))

    return(<div>You Are Logged Out</div>);
}

export default Logout;