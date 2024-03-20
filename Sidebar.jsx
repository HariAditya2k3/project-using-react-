import React, { useState } from 'react';
import {FaBars}from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { GrTransaction } from "react-icons/gr";
import { FaDownload } from "react-icons/fa";
import { HiDocumentReport } from "react-icons/hi";
import { RiDashboard3Fill } from "react-icons/ri";

const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon:<RiDashboard3Fill/>
        },
        {
            path:"/about",
            name:"Transaction Report",
            icon:<GrTransaction />
        },
        {
            path:"/analytics",
            name:"Settlement Report",
            icon:<HiDocumentReport/>
        },
        {
            path:"/comment",
            name:"Download Center",
            icon:<FaDownload/>
        },
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "400px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Bijlipay</h1>
                   <div style={{marginLeft: isOpen ? "150px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;