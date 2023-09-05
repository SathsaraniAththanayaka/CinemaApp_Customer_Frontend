import React from 'react'
import "./SideBar.css"
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import { Link, useLocation } from 'react-router-dom'; 
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';
import {useState} from 'react';
import { AuthProvider } from '../../Auth/AuthContext';

export default function ({userId}) {

  
  const [sidebar, setSidebar] = useState(false)
  const showSidebar = () => setSidebar(!sidebar)
  return (
    <div class = "all">
        <IconContext.Provider value = {{color: '#fff'}}>
            <div class = "sideBar">
                <Link to = "#" className='menu-bars'>
                    <FaIcons.FaBars onClick={showSidebar}/>
                </Link>  
            </div>
    
            <nav className= {sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className='navbar-toggle'>
                        <Link to="#" className='menu-bars'>
                            <AiIcons.AiOutlineClose/>
                        </Link>
                    </li>
                {SidebarData.map((item, index) => {
                    if(item.titles === "Profile"){
                        return (
                            <li key={index} className={item.cName}>
                              <Link to={`${item.path}/${userId}`}>
                                {item.icon}
                                <span>{item.titles}</span>
                              </Link>
                            </li>
                          );
                    }
                    else{
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.titles}</span>
                                </Link>
                            </li>
                        )
                    }
                    
                })}
                </ul>
            </nav>
        </IconContext.Provider>
    </div>
  )
}
