import React, { useState } from 'react'
import {HiOutlineCollection} from 'react-icons/hi'
import { AiTwotoneCalendar } from 'react-icons/ai';

import './index.css';

const navLinks = [
    {
        id:1,
        link: '/tasks',
        Icon:<HiOutlineCollection style={{fontSize:30,color:"#03015d"}}/>,
        label:"Tasks"
    },
    {
        id:2,
        link: "calendar",
        Icon:<AiTwotoneCalendar style={{fontSize:30,color:"#03015d"}}/>,
        label:"Calendar"
    }
]
function Sidebar({collapse}) {
    const [activeItem, setActiveItem] = useState('');

    const handleActiveItem = (item) => {
        setActiveItem(item)
    }

    return (
        <div className={collapse ? "sidebar-collapse" : "sidebar-uncollapse"}>
            <ul className="sidebar-menu">
                {navLinks.map((item) => {
                    const { id, link, Icon, label } = item;
                    return (
                        <li key={id} className="sidebar-menu-item" onClick={() => handleActiveItem(label)}>
                            <p>{Icon}</p>
                            <p 
                                className={collapse ? "item-collapse" : "item-uncollapse"} 
                                style={label === activeItem ? {color: "#03015d"} : {}}
                            >
                                    { label }
                            </p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Sidebar
