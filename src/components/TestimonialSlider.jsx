import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import navigate from '../images/navigate.svg'
import dummy from '../images/dummy.png'
import shimla from '../images/shimla.png'
import star from '../images/star.svg'

const TestimonialSlider = () => {
  return (
    <>
        <div className="test-swiper-wrapper">
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
                    slidesPerView: 1.5,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 2.5,
                    spaceBetween: 30,
                },
            }}
          >
            <SwiperSlide>
            <div className="test-card">
              <div className="test-head">
                <h3>Honeymoon special kashmir</h3>
                <div className="rating">
                  <img src={star} alt="" />
                  <span>4.3</span>
                </div>
              </div>
              <div className="test-det">
                <p>
                  “ Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s “
                </p>
                <h4>Ayush  <span>12 - 05 - 2022</span></h4>
              </div>
              <div className="test-gallery">
                <div>
                  <img src={dummy} alt="" />
                </div>
                <div>
                  <img src={dummy} alt="" />
                </div>
                <div>
                  <img src={dummy} alt="" />
                </div>
              </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="test-card">
              <div className="test-head">
                <h3>Honeymoon special kashmir</h3>
                <div className="rating">
                  <img src={star} alt="" />
                  <span>4.3</span>
                </div>
              </div>
              <div className="test-det">
                <p>
                  “ Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s “
                </p>
                <h4>Ayush  <span>12 - 05 - 2022</span></h4>
              </div>
              <div className="test-gallery">
                <div>
                  <img src={dummy} alt="" />
                </div>
                <div>
                  <img src={dummy} alt="" />
                </div>
                <div>
                  <img src={dummy} alt="" />
                </div>
              </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="test-card">
              <div className="test-head">
                <h3>Honeymoon special kashmir</h3>
                <div className="rating">
                  <img src={star} alt="" />
                  <span>4.3</span>
                </div>
              </div>
              <div className="test-det">
                <p>
                  “ Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s “
                </p>
                <h4>Ayush  <span>12 - 05 - 2022</span></h4>
              </div>
              <div className="test-gallery">
                <div>
                  <img src={dummy} alt="" />
                </div>
                <div>
                  <img src={dummy} alt="" />
                </div>
                <div>
                  <img src={dummy} alt="" />
                </div>
              </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="test-card">
              <div className="test-head">
                <h3>Honeymoon special kashmir</h3>
                <div className="rating">
                  <img src={star} alt="" />
                  <span>4.3</span>
                </div>
              </div>
              <div className="test-det">
                <p>
                  “ Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s “
                </p>
                <h4>Ayush  <span>12 - 05 - 2022</span></h4>
              </div>
              <div className="test-gallery">
                <div>
                  <img src={dummy} alt="" />
                </div>
                <div>
                  <img src={dummy} alt="" />
                </div>
                <div>
                  <img src={dummy} alt="" />
                </div>
              </div>
            </div>
            </SwiperSlide>
          </Swiper>
        </div>
    </>
  )
}

export default TestimonialSlider