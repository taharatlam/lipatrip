import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import navigate from '../images/navigate.svg'
import dummy from '../images/dummy.png'
import shimla from '../images/shimla.png'
import star from '../images/star.svg'
import offer from '../images/offer.png'
import ofg from '../images/ofg.jpg'

const CardSlider = () => {
  return (
    <>
        <div className="card-swiper-wrapper">
          <Swiper
            spaceBetween={30}
            slidesPerView={4}
            centeredSlides={true}
            loop={true}
            breakpoints={{
                0: {
                    slidesPerView: 1.2,
                    spaceBetween: 0,
                },
                640: {
                    slidesPerView: 2,
                    spaceBetween: 0,
                },
                768: {
                    slidesPerView: 2.5,
                    spaceBetween: 0,
                },
                1024: {
                    slidesPerView: 3.5,
                    spaceBetween: 0,
                },
            }}
          >
            <SwiperSlide>
              <a href="javascript:void(0)" className="off-card">
                <img src={ofg} alt="" />
                <div className="con">
                  <h3>Jodhpur jaisalmer Tent Stay</h3>
                  <p>
                  Our exclusive customized holidays division can cater to every travel need
                  </p>
                  <span>5 Days @ 25,000</span>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
            <a href="javascript:void(0)" className="off-card">
                <img src={ofg} alt="" />
                <div className="con">
                  <h3>Jodhpur jaisalmer Tent Stay</h3>
                  <p>
                  Our exclusive customized holidays division can cater to every travel need
                  </p>
                  <span>5 Days @ 25,000</span>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
            <a href="javascript:void(0)" className="off-card">
                <img src={ofg} alt="" />
                <div className="con">
                  <h3>Jodhpur jaisalmer Tent Stay</h3>
                  <p>
                  Our exclusive customized holidays division can cater to every travel need
                  </p>
                  <span>5 Days @ 25,000</span>
                </div>
              </a>
            </SwiperSlide>
            <SwiperSlide>
            <a href="javascript:void(0)" className="off-card">
                <img src={ofg} alt="" />
                <div className="con">
                  <h3>Jodhpur jaisalmer Tent Stay</h3>
                  <p>
                  Our exclusive customized holidays division can cater to every travel need
                  </p>
                  <span>5 Days @ 25,000</span>
                </div>
              </a>
            </SwiperSlide>
          </Swiper>
        </div>
    </>
  )
}

export default CardSlider