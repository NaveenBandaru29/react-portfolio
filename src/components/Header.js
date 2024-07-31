import React from 'react'
import logo from '../images/N32.png'
import "./Header.css"
const Header = () => {
    return (
        <nav className="navbar">
            <img src={logo} alt="logo" />
            <ul className="nav-items">
                {/* <li><a href='/about'>About</a></li>
                <li><a href='/skills'>Skills</a></li>
                <li><a href='/projects'>Projects</a></li>
                <li><a href='/contact'>Contact</a></li> */}
                <li><a href='https://www.canva.com/design/DAFG4hawSm8/yHqy-rUxyIzetx-TuYB9xw/edit?utm_content=DAFG4hawSm8&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton' className="resume">Resume</a></li>
            </ul>
        </nav>

    )
}

export default Header