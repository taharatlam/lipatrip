import React from 'react'
import './footer.scss'

import logo from '../../images/white-logo.svg'
import face from '../../images/facebook.svg'
import insta from '../../images/insta.svg'
import twitter from '../../images/twitter.svg'
import LogoSlider from '../LogoSlider'

const Footer = () => {
  return (
    <footer className='main-footer'>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <LogoSlider />
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-12">
                    <a href="javascript:void(0)" className="ft-logo">
                        <img src={logo} alt="" />
                    </a>
                    <p className="ft-para">
                    Book your trip in minute, get full Control for much longer.
                    </p>
                </div>
                <div className="col-lg-2 col-md-6 col-12">
                    <h3 className="ft-head">
                    Company
                    </h3>
                    <ul className="ft-list">
                        <li>
                            <a href="javascript:void(0)">
                            About
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0)">
                            Careers
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0)">
                            Mobile
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-2 col-md-6 col-12">
                    <h3 className="ft-head">
                    Company
                    </h3>
                    <ul className="ft-list">
                        <li>
                            <a href="javascript:void(0)">
                            About
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0)">
                            Careers
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0)">
                            Mobile
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-2 col-md-6 col-12">
                    <h3 className="ft-head">
                    Company
                    </h3>
                    <ul className="ft-list">
                        <li>
                            <a href="javascript:void(0)">
                            About
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0)">
                            Careers
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0)">
                            Mobile
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-3 col-12">
                    <ul className="sc-list">
                        <li>
                            <a href="javascript:void(0)">
                                <img src={face} alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0)">
                                <img src={insta} alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="javascript:void(0)">
                                <img src={twitter} alt="" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="ft-btm">
                    <p>All rights reserved@travel.co</p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer