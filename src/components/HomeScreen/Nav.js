import React, { useEffect, useState } from 'react'
import "../../screens/HomeScreen.css"
import { useNavigate } from 'react-router-dom';
const Nav = () => {
    const [show, handleShow] = useState(false);
    const navigate = useNavigate();
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
                    onClick={() => navigate('/')}
                    className='nav_logo'
                    src='https://www.freepnglogos.com/uploads/netflix-logo-history-png-33.png'
                    alt='netflix logo' />

                <img
                    onClick={() => navigate('/profile')}
                    className='nav_avatar'
                    src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
                    alt='netflix avatar' />
            </div>
        </div >
    )
}

export default Nav
