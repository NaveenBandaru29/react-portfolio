import React from 'react'
import './Footer.css'

const Footer = () => {
    let currentYear = new Date().getFullYear()
    return (
        <footer className='footer'>
            <p>Copyright &copy; {currentYear}. All rights reserved</p>
        </footer>
    )
}

export default Footer