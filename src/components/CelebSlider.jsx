import React, {useRef} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import navigate from '../images/navigate.svg'
import dummy from '../images/dummy.png'
import next from '../images/next.svg'
import prev from '../images/prev.svg'

import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";


const CelebSlider = () => {
    const navigationPrevRef = useRef(null)
  const navigationNextRef = useRef(null)
  return (
    <>
        <div className="celeb-swiper-wrapper">
          <Swiper
            spaceBetween={30}
            slidesPerView={4}
            navigation={{
                prevEl: navigationPrevRef.current,
                nextEl: navigationNextRef.current,
            }}
            modules={[Navigation]}
            breakpoints={{
                0: {
                    slidesPerView: 1.3,
                    spaceBetween: 30,
                },
                640: {
                    slidesPerView: 2.3,
                    spaceBetween: 30,
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
            onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = navigationPrevRef.current;
                    swiper.params.navigation.nextEl = navigationNextRef.current;
            }}
          >
            <SwiperSlide>
              <article className="travel-card style-2">
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
              <article className="travel-card style-2">
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
              <article className="travel-card style-2">
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
              <article className="travel-card style-2">
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
          <div className="nav-btns">
            <button className='prev-btn' ref={navigationPrevRef}>
                <img src={prev} alt="" />
            </button>
            <button className='next-btn' ref={navigationNextRef}>
                <img src={next} alt="" />
            </button>
          </div>
        </div>
    </>
  )
}

export default CelebSlider