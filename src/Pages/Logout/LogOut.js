import React from 'react'
import { useAuth } from "../../Auth/AuthContext";
import { setToSession } from '../../Handlers/DataHandler';

export default function LogOut() {
    const { logout } = useAuth();
    logout();
    setToSession('id', -1);
    setToSession('email',"");
    setToSession('password',"")

}
