import React from 'react'
import './home.scss'

import cal from '../../images/cal.svg'
import loc from '../../images/loc.svg'
import wallet from '../../images/wallet.svg'
import searchIcon from '../../images/whiteSearchIcon.svg'
import navigate from '../../images/navigate.svg'
import curve from '../../images/curve.svg'
import ic01 from '../../images/ic01.svg'
import ic02 from '../../images/ic02.svg'
import ic03 from '../../images/ic03.svg'
import abImg from '../../images/ab-img.svg'
import dhop from '../../images/dhop.svg'
import dummy from '../../images/dummy.png'
import tvr from '../../images/tvr.png'
import smiley from '../../images/smiley.svg'
import world from '../../images/world.svg'
import locCircle from '../../images/loc-circle.svg'
import phone from '../../images/white-phone.svg'
import phone2 from '../../images/phone-grey.svg'
import bl01 from '../../images/bl-pt-01.svg'
import bl02 from '../../images/bl-pt-02.svg'
import tpt01 from '../../images/test-pt01.svg'
import star from '../../images/star.svg'
import tpt02 from '../../images/test-pt02.svg'
import bag from '../../images/travel-bag.svg'
import shimla from '../../images/shimla.png'
import offer from '../../images/offer.png'
import ev01 from '../../images/ev-pt01.svg'
import ev02 from '../../images/ev-pt02.svg'
import ev03 from '../../images/ev-pt03.svg'
import cl01 from '../../images/cl01.svg'
import cl02 from '../../images/cl02.svg'
import df from '../../images/df.svg'


import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import BannerSlider from '../../components/BannerSlider'
// import SwiperCore, { EffectFlip, Navigation, Pagination } from “swiper”;

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import CelebSlider from '../../components/CelebSlider'
import PlacesSlider from '../../components/PlacesSlider'
import TestimonialSlider from '../../components/TestimonialSlider'
import CardSlider from '../../components/CardSlider'
import TipsSlider from '../../components/TipsSlider'


const Home = () => {
  return (
    <div>
      <header className="main-header">
        <img src={curve} alt="" />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9 col-12">
              <div className="banner-head">
                <h1>
                  Travel, Enjoy and Live a new and full life
                </h1>
              </div>
              <div className="sw-wrapper">
                <div className="inps">
                  <div className="sw-col">
                    <img src={loc} alt="" />
                    <input type="text" placeholder='Where do you want to travel' />
                  </div>
                  <div className="sw-col">
                    <img src={cal} alt="" />
                    <input type="text" placeholder='month' />
                  </div>
                  <div className="sw-col">
                    <img src={wallet} alt="" />
                    <input type="text" placeholder='Budget' />
                  </div>
                </div>
                <button>
                  <img src={searchIcon} alt="" />
                  <span>Search</span>
                </button>
              </div>

            </div>
            <div className="col-12">
              <BannerSlider />
            </div>
          </div>
        </div>
      </header>

      <section className="travel-sec sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-12">
              <div className="sec-head">
                <p className="sub yellow">Easy and Fast</p>
                <h3>Book your next trip in 3 easy steps</h3>
              </div>
              <ul className="ps-list">
                <li>
                  <img src={ic01} alt="" />
                  <div>
                    <h2>Choose Destination</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.
                    </p>
                  </div>
                </li>
                <li>
                  <img src={ic02} alt="" />
                  <div>
                    <h2>Choose Destination</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.
                    </p>
                  </div>
                </li>
                <li>
                  <img src={ic03} alt="" />
                  <div>
                    <h2>Choose Destination</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-lg-6 offset-lg-1 col-12">
              <div className="ab-img">
                <img src={abImg} alt="" />
                <img src={dhop} className="dhop" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="green-sec">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 col-12">
              <div className="green-img">
                <img src={tvr} alt="" />
              </div>
            </div>
            <div className="col-lg-7 offset-lg-1 col-12">
              <div className="green-con">
                <div className="des-head white sm">
                  <h3>We're curating experiences that</h3>
                  <h2>Present you the perfect vacation</h2>
                </div>
                <div className="counter-wrapper">
                  <div className="counter">
                    <img src={smiley} alt="" />
                    <h3>5,65,000</h3>
                    <p>Happy Guests</p>
                  </div>
                  <div className="counter">
                    <img src={world} alt="" />
                    <h3>7,50,320</h3>
                    <p>Searches</p>
                  </div>
                  <div className="counter">
                    <img src={locCircle} alt="" />
                    <h3>7,50,320</h3>
                    <p>Searches</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='celeb-sec sec'>
        <img src={cl01} alt="" />
        <img src={cl02} alt="" />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="sec-head des text-center mb-50">
                <h3>Celebrate Life</h3>
              </div>
              <Tabs
                defaultActiveKey="dcdc"
                id="uncontrolled-tab-example"
                className="mb-3"
              >
                <Tab eventKey="dcdc" title="On tour Christmas">
                  <CelebSlider />
                </Tab>
                <Tab eventKey="profile" title="On tour New Year">
                  <h1>fv</h1>
                </Tab>
                <Tab eventKey="contact" title="Honeymoon Special">
                  <h1>fv</h1>
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </section>



      <section className="places-sec sec">
        <img src={df} alt="" />
        <div className="ev-card-swiper-wrapper">
         
          <PlacesSlider />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="m-cta-wrap">
                <img src={bag} alt="" />
                <div className="des-head">
                  <h3>We're curating experiences that</h3>
                  <h2>Present you the perfect vacation</h2>
                </div>
                <a href="javascript:void(0)" className="main-btn">
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="test-sec sec">
        <img src={tpt01} alt="" />
        <img src={tpt02} alt="" />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-12">
              <div className="sec-head white text-center">
                <p className="sub">what our happy travelers are saying</p>
                <h3>
                  Our trips have touched hearts globally
                </h3>
              </div>

            </div>
          </div>
        </div>
        <div className="test-swiper-wrapper">
          <TestimonialSlider />
        </div>
      </section>

      <section className="ev-card-sec">

        <div className="container">
          <div className="row ev-wr">
            <div className="col-lg-6 col-12">
              <div className="ev-con">
                <img src={ev01} alt="" />
                <img src={ev02} alt="" />
                <div className="sec-head style2">
                  <h3>
                    The world is waiting to be known, waiting to be experienced!
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="abv-con">
                <img src={ev03} alt="" />
                <p className="para">
                  Our exclusive customized holidays division can cater to every travel need: hotel, air tickets, VISA, sightseeings, transfer or the entire package, all designed keeping in mind your interests!
                  <br /><br />
                  <strong>Want to customize your holiday?</strong>
                </p>
                <div className="eq-wrap style-2">
                  <a href="javascript:void(0)" className="main-btn">
                    Enquire now
                  </a>
                  <span>or</span>
                  <a href="javascript:void(0)" className="phone-link">
                    <img src={phone2} alt="" />
                    <span>1800 22 7979</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="off-card-swiper">
          <CardSlider />
        </div>
      </section>


      <section className="blog-sec">
        <img src={bl01} alt="" className='pt1' />
        <img src={bl02} className="pt2" alt="" />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="sec-head text-center">
                <h3>
                  Travel tips, hacks, tricks and a whole lot more...
                </h3>
              </div>
              <TipsSlider />
              
            </div>
          </div>
        </div>
      </section>

      <section className="cta-sec">
        <div className="container">
          <div className="row justify-content-end">
            <div className="col-lg-6 col-md-8 col-12">
              <div className="cta-con">
                <h1>
                  The world is waiting to be known, waiting to be experienced!
                </h1>
                <div className="eq-wrap mt-30">
                  <a href="javascript:void(0)" className="main-btn">
                    Enquire now
                  </a>
                  <span>or</span>
                  <a href="javascript:void(0)" className="phone-link">
                    <img src={phone} alt="" />
                    <span>1800 22 7979</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="dis-sec sec">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p className='dis-text'>
                <strong>Find the best travel packages at Veena World</strong> <br />
                Booking a travel package when it comes to travelling to new parts of the country or the world is a practice that has slowly gained a lot of popularity. Today, whenever it is about planning a holiday trip, many people have a preferred travel portal in India that is best for their specific needs. Owing to the faith bestowed in our travel services by our patrons, Veena World has established its niche and is counted among the top 10 travel agencies in Mumbai.
                <br /><br />
                We at Veena World understand that nowadays, travelling has become much more than just visiting a new destination. That is why each of our vacation packages offers you the respite that you anticipate from a holiday. As a well-informed traveller, it is only right to expect more from your travel company in India - we strive to ensure the same for our customers. It is no longer about only conveyance and accommodation. For those who enjoy travelling, the best travel packages are those which can offer them holistic holiday experiences. That is exactly what you get when you opt for the best travel company in Mumbai – Veena World.
                Counted among the top 10 travel agencies in Mumbai, Veena World has all the travel services under one roof. In our constant endeavour to be the best travel company in India, everything that we do is based on creating and setting new benchmarks. With extensive travel know-how, end-to-end travel planning and a wide assortment of travel packages, we are counted among the best travel agents in India that ensure the best holiday experiences.
                <br /><br />
                <strong>What makes us one of the best travel companies in India?</strong><br />
                We, at Veena World, know that there is nothing better than the experiences and memories you are able to create when you travel to new places with our holiday packages. With Veena World’s packages, you can head out and indulge in the exploration of an unknown destination or revisit your favourite spots in places that hold a lot of memories, you can meet new people from various walks of life, and mark another spot on the map that you have covered; there is nothing better than travel.
                <br /><br />
                We understand exactly what a simple trip can mean to a person and that is why we have created specially curated travel packages to ensure that you can have the most memorable experience possible. Travel the world with Veena Patil Hospitality as you can find the best of tour packages at Veena World to suit any and every travelling need.
                <br /><br />
                Whether you want to head out for a solo trip or travel with a bunch of like-minded people, Veena World, one of the best travel companies in India, has got you covered. Recognized among the best travel companies in Mumbai and the whole of the country, we offer customised and bespoke services whenever you book holiday packages online with us. Regardless of the duration or destination you choose, our personal touch in every itinerary ensures that every tour is a speciality. Being one of the most well-known travel companies in India, we care about delivering great holiday experiences.
                <br /><br />
                All you have to do is book your holiday packages online at Veena World. After that, get ready for the vacation of a lifetime. The attention we put into crafting each package is one of the reasons why we are regarded as the best travel portal in India.
                <br /><br />
                <strong>Bringing you the best travel packages online</strong><br />
                Making a niche for ourselves as a top online travel company in India, Veena World excels in offering the best in domestic and international tour packages. Our product offerings include guided group tours, speciality tours, exclusive customised holiday packages, corporate MICE travel, and inbound travel. Behind our repute of being the best travel company in India is the vision to provide exclusivity in our tailor-made tours and packages that take you to a huge number of destinations in India and all around the world. Our travel company in India offers speciality tour packages such as Women’s Special, Honeymoon Tours, Seniors’ Packages, Singles Tour Packages, and Weekend Tours, which has helped us differentiate our offerings from other travel companies in Mumbai in both the domestic and international sectors. We offer a wide array of more than 2500 dream vacation options as well as a guest base of more than 5 lakh satisfied guests in a period of 8 years, which has played a major role in us becoming one of the top travel companies in Mumbai.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home