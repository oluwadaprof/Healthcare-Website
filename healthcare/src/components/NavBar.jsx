import React from 'react'
import Logo from './Logo'

function NavBar() {
    return (
        <nav>
            <Logo />
            <div className='link-container'>
                <li>Home</li>
                <li>Find a doctor</li>
                <li>Apps</li>
                <li>Testimonials</li>
                <li>About Us</li>
            </div>

        </nav>
    )
}

export default NavBar
