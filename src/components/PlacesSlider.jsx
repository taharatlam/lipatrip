import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import navigate from '../images/navigate.svg'
import dummy from '../images/dummy.png'
import shimla from '../images/shimla.png'
import vc from '../images/vc.jpg'

const PlacesSlider = () => {
  return (
    <>
        <div className="celeb-swiper-wrapper">
          <Swiper
            spaceBetween={30}
            slidesPerView={4}
            centeredSlides={true}
            loop={true}
            breakpoints={{
                0: {
                    slidesPerView: 1.5,
                    spaceBetween: 10,
                },
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                },
            }}
          >
            <SwiperSlide>
                <div className="ev-card">
                    
                        <img src={vc} alt="" />
                        <div className="con">
                            <div class="des-head white sm">
                                <h3>Explore the heaven</h3>
                                <h2>Best of shimla</h2>
                            </div>
                            <div className="fl">
                                <span>10 Days</span>
                                <span>24 Jun</span>
                                <span>$500.00</span>
                            </div>
                            <p className="para">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                            <a href="javascript:void(0)" className="main-btn">
                                <span>Book Now</span>
                            </a>
                        </div>
                   
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="ev-card">
                    
                        <img src={vc} alt="" />
                        <div className="con">
                            <div class="des-head white sm">
                                <h3>Explore the heaven</h3>
                                <h2>Best of shimla</h2>
                            </div>
                            <div className="fl">
                                <span>10 Days</span>
                                <span>24 Jun</span>
                                <span>$500.00</span>
                            </div>
                            <p className="para">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                            <a href="javascript:void(0)" className="main-btn">
                                <span>Book Now</span>
                            </a>
                        </div>
                   
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="ev-card">
                    
                        <img src={vc} alt="" />
                        <div className="con">
                            <div class="des-head white sm">
                                <h3>Explore the heaven</h3>
                                <h2>Best of shimla</h2>
                            </div>
                            <div className="fl">
                                <span>10 Days</span>
                                <span>24 Jun</span>
                                <span>$500.00</span>
                            </div>
                            <p className="para">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                            <a href="javascript:void(0)" className="main-btn">
                                <span>Book Now</span>
                            </a>
                        </div>
                   
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="ev-card">
                    
                        <img src={vc} alt="" />
                        <div className="con">
                            <div class="des-head white sm">
                                <h3>Explore the heaven</h3>
                                <h2>Best of shimla</h2>
                            </div>
                            <div className="fl">
                                <span>10 Days</span>
                                <span>24 Jun</span>
                                <span>$500.00</span>
                            </div>
                            <p className="para">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                            <a href="javascript:void(0)" className="main-btn">
                                <span>Book Now</span>
                            </a>
                        </div>
                   
                </div>
            </SwiperSlide>
            
          </Swiper>
        </div>
    </>
  )
}

export default PlacesSlider