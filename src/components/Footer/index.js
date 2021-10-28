import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../HOC';
import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai';
import './index.css'
function Footer() {
    const { state } = useContext(AppContext);
    return (
        <footer className={state.switchToDarkMode ? "footer-dark" : "footer"}>
            <div className="contact_copyright">
                <div className="copyright">
                    <span>© 2021 <strong>Mamadou Niakaté</strong>. All rights reserved. Built with Reactjs</span>
                </div>
            </div>
            <div className="social-networks">
                <ul className="social-networks-links">
                    <li>
                        <a href="https://github.com/mamadou-niakate" target="_blank" rel="noreferrer"><AiFillGithub /></a>
                    </li>
                    <li>
                        <a href="https://twitter.com/mr_nkt223" target="_blank" rel="noreferrer"><AiFillTwitterCircle/></a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/mamadou-niakate" target="_blank" rel="noreferrer"><AiFillLinkedin/></a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer
