import React, { useState } from 'react'
import logo from '../../images/logo.svg'
import searchIcon from '../../images/searchIcon.svg'
import drop from '../../images/drop.svg'
import cross from '../../images/cross.svg'
import menu from '../../images/menu.svg'

import './navBar.scss'

const NavBar = () => {
    const [menuToggle, setMenuToggle] = useState(false)
    return (
        <>
            <nav className="main-nav">
                <div className="">
                    <div className="nav-inner">
                        <div className="l-part">
                            <a href="javascript:void(0)" className="logo">
                                <img src={logo} alt="" />
                            </a>
                            <div className="search-bar">
                                <img src={searchIcon} alt="" />
                                <input type="text" placeholder='Search' />
                            </div>
                        </div>
                        <div className="r-part">
                            <ul className="nav-list">
                                <li>
                                    <a href="javascript:void(0)">
                                        Desitnations
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">
                                        Hotels
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">
                                        Flights
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">
                                        Bookings
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">
                                        Login
                                    </a>
                                </li>
                             
                            </ul>
                            <ul className="ot-list">
                                <li>
                                    <div className="lang-selector">
                                        <select name="" id="">
                                            <option value="">EN</option>
                                        </select>
                                        <img src={drop} alt="" />
                                    </div>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" className='navBtn'>
                                        Sign up
                                    </a>
                                </li>
                                <li>
                                    <button onClick={() => setMenuToggle(true)} className='menu-btn'>
                                        <img src={menu} alt="" />
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

            <div className={`mob-menu-wrapper ${menuToggle?'active':''}`}>
                <button onClick={() => setMenuToggle(false)} className='close-btn'>
                    <img src={cross} alt="" />
                </button>
                <ul className="nav-list">
                    <li>
                        <a href="javascript:void(0)">
                            Desitnations
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0)">
                            Hotels
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0)">
                            Flights
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0)">
                            Bookings
                        </a>
                    </li>
                    <li>
                        <a href="javascript:void(0)">
                            Login
                        </a>
                    </li>
                    
                </ul>
            </div>
        </>
    )
}

export default NavBar