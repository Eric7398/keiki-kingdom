import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assets/character/logo.png';
import './FooterStyles.css'

const Footer = () => {


    return (
        <>
            <div className="placeholder"></div>

            <footer>
                <div className="container">
                    <img src={logo} alt="" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />

                    <ul>
                        <li className={window.location.pathname === "/" ? "link-hover link__hover-color active" : "link-hover link__hover-color"}><Link to='/'>Home</Link></li>
                        <li className={window.location.pathname === "/about" ? "link-hover link__hover-color active" : "link-hover link__hover-color"}><Link to='/about'>About</Link></li>
                        <li className={window.location.pathname === "/rules" ? "link-hover link__hover-color active" : "link-hover link__hover-color"}><Link to='/rules'>Rules</Link></li>
                        <li className={window.location.pathname === "/price" ? "link-hover link__hover-color active" : "link-hover link__hover-color"}><Link to='/price'>Price</Link></li>
                        <li className={window.location.pathname === "/contact" ? "link-hover link__hover-color active" : "link-hover link__hover-color"}><Link to='/contact'>Contact</Link></li>
                    </ul>
                    <ul>
                        <li className='link-hover link__hover-color'><Link to='#'>Legal</Link></li>
                        <li className='link-hover link__hover-color'><Link to='#'>Privacy Policy</Link></li>

                    </ul>
                    <div className="copyright">
                        <p>Copyright &copy; 2022 Keiki Kingdom</p>
                    </div>
                </div>
            </footer >
        </>
    )
}

export default Footer