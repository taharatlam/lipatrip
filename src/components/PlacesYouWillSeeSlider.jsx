import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import navigate from '../images/navigate.svg'
import dummy from '../images/dummy.png'
import shimla from '../images/shimla.png'
import vc from '../images/vc.jpg'

const PlacesYouWillSeeSlider = () => {
  return (
    <>
        <div className="place-u-l-see-swiper mt-20">
          <Swiper
            spaceBetween={30}
            slidesPerView={4}
            centeredSlides={false}
            loop={false}
            breakpoints={{
                0: {
                    slidesPerView: 1.5,
                    spaceBetween: 10,
                },
                640: {
                    slidesPerView: 1.5,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
            }}
          >
            <SwiperSlide>
                <div className="places-u-l-see-wrap">
                    <img src='https://img.veenaworld.com/group-tours/world/europe/eunl/eunl-hlt-2.jpg' alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="places-u-l-see-wrap">
                    <img src="https://img.veenaworld.com/group-tours/world/europe/eunl/eunl-hlt-3.jpg" alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="places-u-l-see-wrap">
                    <img src="https://img.veenaworld.com/group-tours/world/europe/eunl/eunl-hlt-1.jpg" alt="" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="places-u-l-see-wrap">
                    <img src={dummy} alt="" />
                </div>
            </SwiperSlide>
       
            
          </Swiper>
        </div>
    </>
  )
}

export default PlacesYouWillSeeSlider