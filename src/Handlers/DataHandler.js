import React from 'react';

    const SESSION_DATA = {
        id:'id',
        username: 'email',
        password: 'password'
    };

    const setToSession = (name, value) => {
        sessionStorage.setItem(name, value);
    };

    const getFromSession = (name) => {
        return sessionStorage.getItem(name);
    };

    const removeFromSession = (name) => {
        sessionStorage.removeItem(name);
    };

    const clearSession = () => {
        sessionStorage.clear();
    };
    


export {SESSION_DATA,setToSession,getFromSession,removeFromSession,clearSession};
