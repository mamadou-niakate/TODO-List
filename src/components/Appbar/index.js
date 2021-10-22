import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';
import './index.css';

function Appbar({dispatcher, state}) {
    const handleCollapse = () => {
        if(state.collapse) {
            dispatcher({type:"UNCOLLAPSE"})
        } else {
            dispatcher({type:"COLLAPSE"})
        }
    }
    return (
        <div className="app-bar">
            <div className="logo"> 
                <p style={{cursor:'pointer'}}>
                    {
                        state.collapse ? <GiHamburgerMenu onClick={handleCollapse} /> : <AiOutlineClose onClick={handleCollapse}/>
                    }
                </p> 
            </div>
            <ul className="nav-items">
                <li> Naveen </li>
                <li> Naveen </li>
                <li> Naveen </li>
                <li> Naveen </li>
                <li> Naveen </li>
                <li> <FaUserAlt /> </li>
            </ul>
        </div>
    )
}

export default Appbar
