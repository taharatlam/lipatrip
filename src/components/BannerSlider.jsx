import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import navigate from '../images/navigate.svg'
import dummy from '../images/dummy.png'

const BannerSlider = () => {
  return (
    <>
        <div className="banner-swiper-wrapper">
          <Swiper
            spaceBetween={30}
            slidesPerView={4}
            breakpoints={{
                0: {
                    slidesPerView: 1.2,
                    spaceBetween: 20,
                },
                640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                },
            }}
          >
            <SwiperSlide>
              <article className="travel-card">
                <div className="travel-img">
                  <img src={dummy} alt="" />
                </div>
                <div className="travel-det">
                  <div className="tp">
                    <h2>Rome, Italty</h2>
                    <p>$5,42k</p>
                  </div>
                  <div className="navigate">
                    <img src={navigate} alt="" />
                    <span>10 Days Trip</span>
                  </div>
                </div>
              </article>
            </SwiperSlide>
            <SwiperSlide>
              <article className="travel-card">
                <div className="travel-img">
                  <img src={dummy} alt="" />
                </div>
                <div className="travel-det">
                  <div className="tp">
                    <h2>Rome, Italty</h2>
                    <p>$5,42k</p>
                  </div>
                  <div className="navigate">
                    <img src={navigate} alt="" />
                    <span>10 Days Trip</span>
                  </div>
                </div>
              </article>
            </SwiperSlide>
            <SwiperSlide>
              <article className="travel-card">
                <div className="travel-img">
                  <img src={dummy} alt="" />
                </div>
                <div className="travel-det">
                  <div className="tp">
                    <h2>Rome, Italty</h2>
                    <p>$5,42k</p>
                  </div>
                  <div className="navigate">
                    <img src={navigate} alt="" />
                    <span>10 Days Trip</span>
                  </div>
                </div>
              </article>
            </SwiperSlide>
            <SwiperSlide>
              <article className="travel-card">
                <div className="travel-img">
                  <img src={dummy} alt="" />
                </div>
                <div className="travel-det">
                  <div className="tp">
                    <h2>Rome, Italty</h2>
                    <p>$5,42k</p>
                  </div>
                  <div className="navigate">
                    <img src={navigate} alt="" />
                    <span>10 Days Trip</span>
                  </div>
                </div>
              </article>
            </SwiperSlide>
          </Swiper>
        </div>
    </>
  )
}

export default BannerSlider