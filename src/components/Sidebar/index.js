import React, { useContext, useState } from 'react'
import {HiOutlineCollection} from 'react-icons/hi'
import { AiTwotoneCalendar } from 'react-icons/ai';
import { Link } from "react-router-dom";

import './index.css';
import { AppContext } from '../HOC';

const navLinks = [
    {
        id:1,
        link: '/tasks',
        Icon:<HiOutlineCollection style={{fontSize:30,color:"#03015d"}}/>,
        label:"Tasks"
    },
    {
        id:2,
        link: "tasks-calendar",
        Icon:<AiTwotoneCalendar style={{fontSize:30,color:"#03015d"}}/>,
        label:"Calendar"
    }
]
function Sidebar() {
    const { state } = useContext(AppContext)
    const [activeItem, setActiveItem] = useState('');

    const handleActiveItem = (item) => {
        setActiveItem(item)
    }

    return (
        <div className={state.collapse ? "sidebar-collapse" : "sidebar-uncollapse"}>
            <h1 style={{paddingBottom:-40, marginTop:10}}>Nania</h1>
            <hr/>
            <ul className="sidebar-menu">
                {navLinks.map((item) => {
                    const { id, Icon, label, link } = item;
                    return (
                        <li key={id} onClick={() => handleActiveItem(label)}>
                            <Link className="sidebar-menu-item" to={link}>
                                <p>{Icon}</p>
                                <p 
                                    className={state.collapse ? "item-collapse" : "item-uncollapse"} 
                                    style={label === activeItem ? {color: "#03015d"} : {}}
                                >
                                        { label }
                                </p>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Sidebar
