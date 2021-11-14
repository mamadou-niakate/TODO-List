import React, { useContext, useState } from 'react'
import {HiOutlineCollection} from 'react-icons/hi'
import { AiTwotoneCalendar } from 'react-icons/ai';
import { BsPlusLg } from 'react-icons/bs';

import { Link } from "react-router-dom";

import './index.css';
import { AppContext } from '../HOC';
import TasksListModalForm from '../Modal/tasksList/TasksListModalForm';

const navLinks = [
    {
        id:1,
        link: '/tasks',
        Icon:<HiOutlineCollection/>,
        label:"Tasks"
    },
    {
        id:2,
        link: "tasks-calendar",
        Icon:<AiTwotoneCalendar/>,
        label:"Calendar"
    }
]
function Sidebar() {
    const { state } = useContext(AppContext)
    const [activeItem, setActiveItem] = useState('');
    const [openModal, setOpenModal] = useState(false);

    const handleActiveItem = (item) => {
        setActiveItem(item)
    }

    return (
        <div 
            className={
                state.collapse ? `sidebar-collapse ${state.switchToDarkMode ? "sidebar-collapse-dark" : "sidebar-collapse-light"}` : `sidebar-uncollapse ${state.switchToDarkMode ? "sidebar-uncollapse-dark" : 'sidebar-uncollapse-light'}`}
        >
            <h1 style={{paddingBottom:-40}}>Todo</h1>
            <ul className="sidebar-menu">
                {navLinks.map((item) => {
                    const { id, Icon, label, link } = item;
                    return (
                        <li key={id} onClick={() => handleActiveItem(label)}>
                            <Link 
                                className={`sidebar-menu-item ${label === activeItem ? 'sidebar-menu-item-active' : 'sidebar-menu-item-inactive'}`} 
                                to={link} 
                            >
                                <p className={state.collapse && "nav-link-icons-collapse"}>{Icon}</p>
                                <p className={state.collapse ? "item-collapse" : "item-uncollapse"}>
                                    { label }
                                </p>
                            </Link>
                        </li>
                    )
                })}
                <li className={`sidebar-menu-item`} onClick={() => setOpenModal(true)}>
                        <p className={state.collapse && "nav-link-icons-collapse"}>
                            <BsPlusLg />
                        </p>
                        <p className={state.collapse ? "item-collapse" : "item-uncollapse"}>
                            Add list
                        </p>
                </li>
            </ul>
            {
                openModal && (
                    <TasksListModalForm 
                        show={openModal} 
                        setOpenModal={setOpenModal}
                        tasksGroup={{title:'',tasks:[]}}
                        method="post"
                    />
                )
            }
        </div>
    )
}

export default Sidebar
