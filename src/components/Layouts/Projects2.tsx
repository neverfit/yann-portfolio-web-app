/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { EffectCoverflow, Navigation, Pagination } from 'swiper';
import { SwiperSlide, Swiper } from 'swiper/react';
import IonIcon from '@reacticons/ionicons';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from 'next/link';


type Props = {}

export default function Projects2({ }: Props) {
    return (
        <div className='container  p-16 mx-auto'>
            <h1 className='heading p-4 top-24 uppercase tracking-[20px] text-gray-500 text-2xl text-center py-10'>Projects</h1>


            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={3}
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
                }}
                className="swiper_container "

            >
                <SwiperSlide >
                <Link href='https://projet-quiz.netlify.app/' target="_blank">
                    <div className='swiper-fade border-indigo-500'>
                        {/* <img
                            src="https://portfolio-yannpezavant.netlify.app/img/capture_quiz.png" alt="" /> */}
                        <Image
                        src='/img/portfolio.png'
                        alt='portfolio'
                        width={380}
                        height={519}
                        className='rounded-xl border border-indigo-500'
                        />
                        <h4 className='text-4-xl font-semibold text-center uppercase tracking-[5px] py-5 text-[#F7AB0A]/70'>
                            Portfolio Project - HTML/CSS
                        </h4>
                    </div>
                </Link>
                </SwiperSlide>

                <SwiperSlide >
                <Link href='https://projet-quiz.netlify.app/' target="_blank">
                    <div className='swiper-fade border-indigo-500'>
                        {/* <img
                            src="https://portfolio-yannpezavant.netlify.app/img/capture_quiz.png" alt="" /> */}
                        <Image
                        src='/img/quiz.png'
                        alt='portfolio'
                        width={380}
                        height={519}
                        className='rounded-xl border border-indigo-500'
                        />
                        <h4 className='text-4-xl font-semibold text-center uppercase tracking-[5px] py-5 text-[#F7AB0A]/70'>
                            Quiz Project - HTML/CSS/Typecsript
                        </h4>
                    </div>
                </Link>
                </SwiperSlide>

                <SwiperSlide >
                <Link href='https://projet-jeu.netlify.app/' target="_blank">
                    <div className='swiper-fade'>
                        {/* <img
                            src="https://portfolio-yannpezavant.netlify.app/img/brickbreaker.png" alt="" /> */}
                            <Image
                        src='/img/jsgame.png'
                        alt='js game'
                        width={380}
                        height={519}
                        className='rounded-xl border border-indigo-500'
                        />
                        <h4 className='text-4-xl font-semibold text-center uppercase tracking-[5px] py-5 text-[#F7AB0A]/70'>
                            Game Project - HTML/CSS/TYPESCRIPT
                        </h4>
                    </div>
                    </Link>
                </SwiperSlide>

                <SwiperSlide >
                <Link href='https://gitlab.com/Hisami/mjc-simplon' target="_blank">
                    <div className='swiper-fade'>
                        {/* <img
                            src="https://portfolio-yannpezavant.netlify.app/img/Capture_diag-classes-mjc.PNG" alt="" /> */}
                            <Image
                        src='/img/backendproject.png'
                        alt='backend project'
                        width={380}
                        height={519}
                        className='rounded-xl border border-indigo-500'
                        />
                        <h4 className='text-4-xl font-semibold text-center uppercase tracking-[5px] py-5 text-[#F7AB0A]/70'>
                            BackEnd Project - PHP/MYSQL
                        </h4>
                    </div>
                    </Link>
                </SwiperSlide>

                <SwiperSlide >
                <Link href='https://freshcoffeeshop.netlify.app/' target="_blank">
                    <div className='swiper-fade'>
                    <Image
                        src='/img/freshcoffeeshop.png'
                        alt='freshcoffeeshop'
                        width={380}
                        height={519}
                        className='rounded-xl border border-indigo-500'
                        />
                        <h4 className='text-4-xl font-semibold text-center uppercase tracking-[5px] py-5 text-[#F7AB0A]/70'>
                            Coffeeshop Website - Next.js/Tailwind/FramerMotion
                        </h4>
                    </div>
                    </Link>
                </SwiperSlide>


                <div className="slider-controler">
                    <div className="swiper-button-prev slider-arrow">
                        {/* <IonIcon name="arrow-back-outline" /> */}
                    </div>
                    <div className="swiper-button-next slider-arrow">
                        {/* <IonIcon name="arrow-forward-outline" /> */}
                    </div>

                    <div className="swiper-pagination"></div>
                </div>

            </Swiper>

        </div>



    )
}
