import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import navigate from '../images/navigate.svg'
import dummy from '../images/dummy.png'
import shimla from '../images/shimla.png'

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
                    <a href="javascript:void(0)">
                    <img src={shimla} alt="" />
                    </a>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="ev-card">
                    <a href="javascript:void(0)">
                    <img src={shimla} alt="" />
                    </a>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="ev-card">
                    <a href="javascript:void(0)">
                    <img src={shimla} alt="" />
                    </a>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="ev-card">
                    <a href="javascript:void(0)">
                    <img src={shimla} alt="" />
                    </a>
                </div>
            </SwiperSlide>
          </Swiper>
        </div>
    </>
  )
}

export default PlacesSlider