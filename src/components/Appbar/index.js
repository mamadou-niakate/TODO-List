import React, { useContext } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { FaUserAlt } from 'react-icons/fa';
import './index.css';
import { AppContext } from '../HOC';

function Appbar() {
    const {dispatcher, state} = useContext(AppContext);
    const handleDarkMode = () => {
        if(state.switchToDarkMode) {
            dispatcher({type:"SWITCHTONORMALMODE"})
        } else {
            dispatcher({type:"SWITCHTODARKMODE"})
        }
    }
    const handleCollapse = () => {
        if(state.collapse) {
            dispatcher({type:"UNCOLLAPSE"});
        } else {
            dispatcher({type:"COLLAPSE"});
        }
    }
    return (
        <div className={state.switchToDarkMode ? "app-bar-dark-mode":"app-bar"}>
            <div className="logo"> 
                <p style={{cursor:'pointer'}}>
                    {
                        state.collapse ? <GiHamburgerMenu onClick={handleCollapse} />
                                       : <AiOutlineClose onClick={handleCollapse}/>
                    }
                </p> 
            </div>
            <ul className="nav-items">
                <input type="checkbox" id="switch" onChange={handleDarkMode}/>
                <label for="switch">Toggle</label>
                <li> <FaUserAlt /> </li>
            </ul>
        </div>
    )
}

export default Appbar
