import React from 'react'
import { Link } from 'react-router-dom';
import {AdminSideBarData} from './AdminSideBarData'
import './AdminEmployeeSideBar.css';


function AdminEmployeeSideBar() {
    return (
        <div className="AdminEmployeeSideBar">
            <ul className="AdminEmployeeSideBarList">
            {AdminSideBarData.map((val, key)=>{
                return(
                <li 
                    key={key}
                    className="row"
                    id={window.location.pathname == val.link ? "active" : ""}
                    onClick={() => {
                        window.location.pathname = val.link;
                    }}
                >
                    <div id="icon">{val.icon}</div><div id="title">{val.title}</div>
                </li>
                );
                })}
            </ul>
        </div>
    );
}

export default AdminEmployeeSideBar
