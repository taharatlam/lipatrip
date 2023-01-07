import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import navigate from '../images/navigate.svg'
import dummy from '../images/dummy.png'
import lg from '../images/lg.png'

const LogoSlider = () => {
  return (
    <>
        <div className="logo-swiper-wrapper">
          <Swiper
            spaceBetween={100}
            slidesPerView={5}
            breakpoints={{
                0: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                640: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 5,
                    spaceBetween: 30,
                },
            }}
          >
            <SwiperSlide>
              <div className="ft-lg">
                <img src={lg} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="ft-lg">
                <img src={lg} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="ft-lg">
                <img src={lg} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="ft-lg">
                <img src={lg} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="ft-lg">
                <img src={lg} alt="" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
    </>
  )
}

export default LogoSlider