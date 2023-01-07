import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import navigate from '../images/navigate.svg'
import dummy from '../images/dummy.png'

const TipsSlider = () => {
  return (
    <>
        <div className="blog-swiper-wrapper">
          <Swiper
            spaceBetween={30}
            slidesPerView={4}
            breakpoints={{
                0: {
                    slidesPerView: 1.3,
                    spaceBetween: 20,
                },
                640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                },
            }}
          >
            <SwiperSlide>
            <div className="blog-card">
                    <div className="blog-img">
                    <a href="javascript:void(0)">
                        <img src={dummy} alt="" />
                    </a>
                    </div>
                    <a href="javascript:void(0)">
                    <h3>Discovering New York: From Empire State Building To Everything In Between </h3>
                    </a>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="blog-card">
                    <div className="blog-img">
                    <a href="javascript:void(0)">
                        <img src={dummy} alt="" />
                    </a>
                    </div>
                    <a href="javascript:void(0)">
                    <h3>Discovering New York: From Empire State Building To Everything In Between </h3>
                    </a>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="blog-card">
                    <div className="blog-img">
                    <a href="javascript:void(0)">
                        <img src={dummy} alt="" />
                    </a>
                    </div>
                    <a href="javascript:void(0)">
                    <h3>Discovering New York: From Empire State Building To Everything In Between </h3>
                    </a>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="blog-card">
                    <div className="blog-img">
                    <a href="javascript:void(0)">
                        <img src={dummy} alt="" />
                    </a>
                    </div>
                    <a href="javascript:void(0)">
                    <h3>Discovering New York: From Empire State Building To Everything In Between </h3>
                    </a>
                </div>
            </SwiperSlide>
          </Swiper>
        </div>
    </>
  )
}

export default TipsSlider