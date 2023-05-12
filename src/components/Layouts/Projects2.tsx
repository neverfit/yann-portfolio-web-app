/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { EffectCoverflow, Navigation, Pagination } from 'swiper';
import {SwiperSlide, Swiper} from 'swiper/react';
import IonIcon from '@reacticons/ionicons';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


type Props = {}

export default function Projects2({ }: Props) {
    return (
        <div className='container max-w-8xl p-16 mx-auto'>
            <h1 className='heading p-4 top-24 uppercase tracking-[20px] text-gray-500 text-2xl text-center py-10'>Projects</h1>

            
            <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            loop={true}
            coverflowEffect={
                {
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                }
            }
            pagination={{ el: '.swiper-pagination', clickable: true }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
                clickable: true,
              }}
            className="swiper_container "

            >
                <SwiperSlide >
                    <img  
                    src="https://portfolio-yannpezavant.netlify.app/img/capture_quiz.png" alt="" />
                </SwiperSlide>

                <SwiperSlide >
                    <img   
                    src="https://portfolio-yannpezavant.netlify.app/img/brickbreaker.png" alt="" />
                </SwiperSlide>

                <SwiperSlide >
                    <img   
                    src="https://portfolio-yannpezavant.netlify.app/img/Capture_diag-classes-mjc.PNG" alt="" />
                </SwiperSlide>


                <div className="slider-controler">
                    <div className="swiper-button-prev slider-arrow">
                        <IonIcon name="arrow-back-outline"/>
                    </div>
                    <div className="swiper-button-next slider-arrow">
                        <IonIcon name="arrow-forward-outline" />
                    </div>
                    
                    <div className="swiper-pagination "></div>
        </div>

            </Swiper>

        </div>



    )
}
