import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Accordion from 'react-bootstrap/Accordion';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import PlacesYouWillSeeSlider from '../components/PlacesYouWillSeeSlider';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import BookingForm from '../components/BookingForm';
import SlotsPicker from '../components/SlotsPicker';

const HolidayInner = () => {

    const [isSticky, setIsSticky] = useState(false)
    const ref = useRef()

    useEffect(() => {
        const cachedRef = ref.current,
            observer = new IntersectionObserver(
                ([e]) => setIsSticky(e.intersectionRatio < 1),
                {
                    threshold: [1],
                }
            )

        observer.observe(cachedRef)

        // unmount
        return function () {
            observer.unobserve(cachedRef)
        }
    }, [])

    return (
        <main className='holiday-inner-page-container pb-50 grey-bg'>
            <div className="holiday-top-area-wrapper bg-white">
                <div className="container">
                    <ul className="bread-crumbs">
                        <li>
                            <Link to="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                World
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                Europe
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className='active'>
                                Scandinavia Northern Lights
                            </Link>
                        </li>
                    </ul>
               
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="in-top-inner mt-30" ref={ref}>
                                <div>
                                    <h1 className="sec-head ">
                                        Scandinavia Northern Lights
                                    </h1>
                                    <div className="d-flex align-items flex-wrap g-5">
                                        <p className="dt-item">
                                            <strong>9</strong> Days - <strong>3</strong> Countries | <strong>6</strong> Cities
                                        </p>
                                    </div>
                                </div>
                                <div className="r-part d-flex flex-column align-items-end gap-2">
                                    <span className='cc-tag orange'>Super Deal Price</span>
                                    <div className="price-wrap right">
                                        <h4>₹3,00,000</h4>
                                        <p>*per person on twin sharing basis</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hl-m-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-12">
                            <div className="holiday-main-img-container">
                                <img src="https://img.veenaworld.com/group-tours/world/europe/eunl/eunl-bnn-1.jpg" alt="" />
                                <div className="media-part">
                                    <button className="like-btn"></button>
                                    <button className="share-btn"></button>
                                </div>
                            </div>
                            <div className="hl-main-top-bar">
                                <div className="hl-main-bar">
                                    <ul>
                                        <li>
                                            <a href="" className='active'>
                                                Overview
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                Overview
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                Overview
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                Overview
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <p className="para">
                                You have heard about it… Now its time to experience it! Embark on a remarkable journey to Scandinavia to witness the spectacular natural phenomenon of Northern Lights. Observe the magical lights from the Narvik Sky Station and have the most memorable experience of your lifetime!
                            </p>
                            <div className="hl-inner-sec">
                                <div className="bar-head">
                                    <h3>
                                        Package Includes
                                    </h3>
                                </div>
                                <div className="am-container">
                                    <div className="am-card">
                                        <div className="ic">
                                            <img src="" alt="" />
                                        </div>
                                        <span>Hotels</span>
                                    </div>
                                    <div className="am-card">
                                        <div className="ic">
                                            <img src="" alt="" />
                                        </div>
                                        <span>Hotels</span>
                                    </div>
                                    <div className="am-card">
                                        <div className="ic">
                                            <img src="" alt="" />
                                        </div>
                                        <span>Hotels</span>
                                    </div>
                                    <div className="am-card">
                                        <div className="ic">
                                            <img src="" alt="" />
                                        </div>
                                        <span>Hotels</span>
                                    </div>
                                    <div className="am-card">
                                        <div className="ic">
                                            <img src="" alt="" />
                                        </div>
                                        <span>Hotels</span>
                                    </div>
                                    <div className="am-card">
                                        <div className="ic">
                                            <img src="" alt="" />
                                        </div>
                                        <span>Hotels</span>
                                    </div>
                                </div>
                                <p className="op-text mb-0">
                                    *Except for joining and leaving option, airfare is included for all departure city options.
                                </p>
                            </div>
                            <div className="hl-inner-sec">
                                <div className="bar-head">
                                    <h3>
                                        Itinerary (Day Wise)
                                    </h3>
                                </div>
                                <div className="it-container">
                                    <Accordion className="it-acc">
                                        <Accordion.Item eventKey="0">
                                            <div className="loc-b">
                                                {<FmdGoodOutlinedIcon />}
                                                <span></span>
                                            </div>
                                            <div className="l-part">
                                                <p className="day-text">
                                                    Day 1 <strong>Tromsø</strong>
                                                </p>
                                            </div>
                                            <div className="r-part">
                                                <Accordion.Header>Tromso (2 Nights)</Accordion.Header>
                                                <Accordion.Body>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                    culpa qui officia deserunt mollit anim id est laborum.
                                                </Accordion.Body>
                                            </div>
                                        </Accordion.Item>

                                        <Accordion.Item eventKey="1">
                                            <div className="loc-b">
                                                {<FmdGoodOutlinedIcon />}
                                                <span></span>
                                            </div>
                                            <div className="l-part">
                                                <p className="day-text">
                                                    Day 2 <strong>Tromsø</strong>
                                                </p>
                                            </div>
                                            <div className="r-part">
                                                <Accordion.Header>Tromso (2 Nights)</Accordion.Header>
                                                <Accordion.Body>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                    culpa qui officia deserunt mollit anim id est laborum.
                                                </Accordion.Body>
                                            </div>
                                        </Accordion.Item>

                                        <Accordion.Item eventKey="2">
                                            <div className="loc-b">
                                                {<FmdGoodOutlinedIcon />}
                                                <span></span>
                                            </div>
                                            <div className="l-part">
                                                <p className="day-text">
                                                    Day 2 <strong>Tromsø</strong>
                                                </p>
                                            </div>
                                            <div className="r-part">
                                                <Accordion.Header>Tromso (2 Nights)</Accordion.Header>
                                                <Accordion.Body>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                    culpa qui officia deserunt mollit anim id est laborum.
                                                </Accordion.Body>
                                            </div>
                                        </Accordion.Item>

                                        <Accordion.Item eventKey="3">
                                            <div className="loc-b">
                                                {<FmdGoodOutlinedIcon />}
                                                <span></span>
                                            </div>
                                            <div className="l-part">
                                                <p className="day-text">
                                                    Day 2 <strong>Tromsø</strong>
                                                </p>
                                            </div>
                                            <div className="r-part">
                                                <Accordion.Header>Tromso (2 Nights)</Accordion.Header>
                                                <Accordion.Body>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                    culpa qui officia deserunt mollit anim id est laborum.
                                                </Accordion.Body>
                                            </div>
                                        </Accordion.Item>

                                        <Accordion.Item eventKey="4">
                                            <div className="loc-b">
                                                {<FmdGoodOutlinedIcon />}
                                                <span></span>
                                            </div>
                                            <div className="l-part">
                                                <p className="day-text">
                                                    Day 2 <strong>Tromsø</strong>
                                                </p>
                                            </div>
                                            <div className="r-part">
                                                <Accordion.Header>Tromso (2 Nights)</Accordion.Header>
                                                <Accordion.Body>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                    culpa qui officia deserunt mollit anim id est laborum.
                                                </Accordion.Body>
                                            </div>
                                        </Accordion.Item>

                                        <Accordion.Item eventKey="5">
                                            <div className="loc-b">
                                                {<FmdGoodOutlinedIcon />}
                                                <span></span>
                                            </div>
                                            <div className="l-part">
                                                <p className="day-text">
                                                    Day 2 <strong>Tromsø</strong>
                                                </p>
                                            </div>
                                            <div className="r-part">
                                                <Accordion.Header>Tromso (2 Nights)</Accordion.Header>
                                                <Accordion.Body>
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                    culpa qui officia deserunt mollit anim id est laborum.
                                                </Accordion.Body>
                                            </div>
                                        </Accordion.Item>
                                    </Accordion>
                                </div>
                            </div>
                            <div className="hl-inner-sec">
                                <div className="bar-head">
                                    <h3>
                                        Places You’ll See
                                    </h3>
                                </div>
                                <div className="it-container">
                                    <PlacesYouWillSeeSlider />
                                </div>
                            </div>
                            <div className="hl-inner-sec">
                                <div className="bar-head">
                                    <h3>
                                        Detailed Tour Price
                                    </h3>
                                </div>
                                <div className="strip-table">
                                    <div className="strip-table-head">
                                        <div className="strip-table-cell">
                                            Room Type
                                        </div>
                                        <div className="strip-table-cell">
                                            Basic Price
                                        </div>
                                    </div>
                                    <div className="strip-table-row">
                                        <div className="strip-table-cell">
                                            Single Occupancy
                                        </div>
                                        <div className="strip-table-cell">
                                            ₹3,90,000
                                        </div>
                                    </div>
                                    <div className="strip-table-row">
                                        <div className="strip-table-cell">
                                            Twin Sharing
                                        </div>
                                        <div className="strip-table-cell">
                                            ₹3,00,000
                                        </div>
                                    </div>
                                    <div className="strip-table-row">
                                        <div className="strip-table-cell">
                                            Triple Sharing
                                        </div>
                                        <div className="strip-table-cell">
                                            ₹2,99,000
                                        </div>
                                    </div>
                                    <div className="strip-table-row">
                                        <div className="strip-table-cell">
                                            Child (2 - 11) With Mattress
                                        </div>
                                        <div className="strip-table-cell">
                                            ₹2,25,500
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-4 col-12">
                            <BookingForm isSticky={isSticky} />
                        </div>
                    </div>
                </div>
            </div>
                
            

            {/* <div className="container">
                <div className="row">
                    
                </div>
            </div> */}

            <section className="tour-info-sec bg-white">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-12">
                            <div className="bar-head">
                                <h3>
                                    Tour Info
                                </h3>
                            </div>
                            <div className="inc-exc-wrap mt-30">
                                <Tabs
                                    defaultActiveKey="home"
                                    id="uncontrolled-tab-example"
                                    className="mb-3"
                                >
                                    <Tab eventKey="home" title="Inclusions">
                                        <ul className="info-list inc">
                                            <li>
                                                To and fro economy class air travel for ‘Mumbai to Mumbai Tour’ guests as mentioned in the itinerary
                                            </li>
                                            <li>
                                                Airfare, Airport taxes and Visa Fees
                                            </li>
                                            <li>
                                                Tour Manager Services throughout the tour
                                            </li>
                                            <li>
                                                To and fro economy class air travel for ‘Mumbai to Mumbai Tour’ guests as mentioned in the itinerary
                                            </li>
                                            <li>
                                                To and fro economy class air travel for ‘Mumbai to Mumbai Tour’ guests as mentioned in the itinerary
                                            </li>
                                            <li>
                                                To and fro economy class air travel for ‘Mumbai to Mumbai Tour’ guests as mentioned in the itinerary
                                            </li>
                                            <li>
                                                To and fro economy class air travel for ‘Mumbai to Mumbai Tour’ guests as mentioned in the itinerary
                                            </li>
                                        </ul>
                                    </Tab>
                                    <Tab eventKey="profile" title="Exclusions">
                                        <ul className="info-list exc">
                                            <li>
                                                To and fro economy class air travel for ‘Mumbai to Mumbai Tour’ guests as mentioned in the itinerary
                                            </li>
                                            <li>
                                                Airfare, Airport taxes and Visa Fees
                                            </li>
                                            <li>
                                                Tour Manager Services throughout the tour
                                            </li>
                                            <li>
                                                To and fro economy class air travel for ‘Mumbai to Mumbai Tour’ guests as mentioned in the itinerary
                                            </li>
                                            <li>
                                                To and fro economy class air travel for ‘Mumbai to Mumbai Tour’ guests as mentioned in the itinerary
                                            </li>
                                            <li>
                                                To and fro economy class air travel for ‘Mumbai to Mumbai Tour’ guests as mentioned in the itinerary
                                            </li>
                                            <li>
                                                To and fro economy class air travel for ‘Mumbai to Mumbai Tour’ guests as mentioned in the itinerary
                                            </li>
                                        </ul>
                                    </Tab>

                                </Tabs>
                            </div>

                        </div>
                        <div className="col-lg-6 col-12">
                            <strong>Weather</strong> <br />
                            <ul className='def-ul'>
                                <li>
                                    For detailed Information about weather kindly visit www.accuweather.com
                                </li>
                            </ul>

                            <strong>Transport</strong>
                            <br />
                            Air Travel:
                            <br />
                            <ul className='def-ul'>
                                <li>
                                    Mumbai - Tromso //Rovaniemi - Helsinki //Helsinki - Mumbai. We use combination of Airlines like Turkish Airline /Qatar Airways /Scandinavian Airways etc.
                                </li>
                            </ul>

                            <strong>Coach Tavel</strong>
                            <ul className='def-ul'>
                                <li>
                                    A/C coach - Seating capacity depends upon group size
                                </li>
                            </ul>

                            <strong>Documents Required for Travel</strong>
                            <ul className='def-ul'>
                                <li>
                                    Original passport with minimum 6 months validity from the date of tour arrival along with sufficient blank pages for the stamping of visa
                                </li>
                                <li>
                                    A valid Tourist Visa for the duration of the tour
                                </li>
                                <li>
                                    For all Schengen countries passport validity should not exceed more than 10 years
                                </li>
                                <li>
                                    Handwritten passport is not acceptable
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default HolidayInner