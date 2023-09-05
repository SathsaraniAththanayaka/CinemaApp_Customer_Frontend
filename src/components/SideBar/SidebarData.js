import React from "react";
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as BiIcons from 'react-icons/bi'

export const SidebarData = [
    {
        titles: 'Home',
        path: '/home',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },

    {
        titles: 'Movies',
        path: '/',
        icon: <BiIcons.BiMovie/>,
        cName: 'nav-text'
    },

    {
        titles: 'Bookings',
        path: '/',
        icon: <BiIcons.BiSpreadsheet/>,
        cName: 'nav-text'
    },

    {
        titles: 'Profile',
        path: '/home/profile',
        icon: <BiIcons.BiSolidUser/>,
        cName: 'nav-text'
    },

    {
        titles: 'Settings',
        path: '/',
        icon: <IoIcons.IoMdSettings/>,
        cName: 'nav-text'
    },

    {
        titles: 'Logout',
        path: '/logout',
        icon: <BiIcons.BiLogOut/>,
        cName: 'nav-text'
    }
]
    