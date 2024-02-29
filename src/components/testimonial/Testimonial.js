import React, { useState } from 'react'
import "./testimonial.css"
import { TestimonialData } from './TestimonialData'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

function Testimonial() {

    return (
        <section className='testimonial container section' id='testimonial'>
            <h2 className='section__title'>Portfolio</h2>
            <span className='section__subtitle'>Most recent works</span>

            <Swiper className='testimonial__container'
                loop={true}
                grabCursor={true}
                // slidesPerView={4}
                spaceBetween={24}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    576: {
                        slidesPerView: 2,
                        // spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 48,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination]}
            >
                {
                    TestimonialData.map(({ id,
                        image,
                        title,
                        category,
                        link }) => {

                        return (
                            <SwiperSlide className='works__card' key={id}>
                                <img className='works__img' src={image} alt=''></img>
                                <h3 className='works__title'>{title}</h3>
                                <a className='works__button' href={link}>
                                    Demo <i className='bx bx-right-arrow-alt works__button-icon'></i>
                                </a>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>

        </section>
    )
}

export default Testimonial
