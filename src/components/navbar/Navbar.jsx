import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import './NavbarStyles.css'
import { Link } from 'react-router-dom';
import logo from '../../assets/character/logo.png';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [color, setColor] = useState(false)


    const handlerNav = () => {
        setNav(!nav)
    }
    const closeMenu = () => {
        setNav(false)
    }

    const changeBackground = () => {
        if (window.scrollY >= 20) {
            setColor(true)
        } else {
            setColor(false)
        }
    }


    window.addEventListener('scroll', changeBackground)

    return (
        <div className={color && !nav ? 'header header-bg' : 'header'}>
            <div className='navbar'>
                <div className="logo">
                    <Link to='/' >
                        <img src={logo} alt="" />
                    </Link>
                </div>

                <div className="hamburger" onClick={handlerNav}>
                    {nav ? <FaTimes size={30} className="fatimes" />
                        : <FaBars size={30} className="fabars" />}
                </div>

                <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
                    <li className='link-hover link__hover-color yellow'><Link to='/' onClick={closeMenu}>Home</Link></li>
                    <li className='link-hover link__hover-color orange'><Link to='about' onClick={closeMenu}>About</Link></li>
                    <li className='link-hover link__hover-color green'><Link to='rules' onClick={closeMenu}>Rules</Link></li>
                    <li className='link-hover link__hover-color pink'><Link to='price' onClick={closeMenu}>Price</Link></li>
                    <li className='link-hover link__hover-color blue'><Link to='contact' onClick={closeMenu}>Contact</Link></li>
                    {/* <button className="cross">Sign in</button> */}
                </ul>

            </div>
        </div>

    )
}

export default Navbar