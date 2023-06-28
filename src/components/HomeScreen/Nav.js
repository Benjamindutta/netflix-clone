import React, { useEffect, useState } from 'react'
import "../../screens/HomeScreen.css"
const Nav = () => {
    const [show, handleShow] = useState(false);
    const transitionNavbar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavbar)
        return () => window.removeEventListener("scroll", transitionNavbar);
    }, [])
    return (
        <div className={`nav ${show && "nav_black"}`} >
            <div className="nav__content">
                <img
                    className='nav_logo'
                    src='https://www.freepnglogos.com/uploads/netflix-logo-history-png-33.png'
                    alt='netflix logo' />

                <img
                    className='nav_avatar'
                    src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
                    alt='netflix avatar' />
            </div>
        </div >
    )
}

export default Nav
