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
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';


type Props = {}

export default function Projects2({ }: Props) {
    const router = useRouter();
    const {locale}= router;

    return (
        <div className='container  p-16 mx-auto'>
            <h1 className='heading p-4 top-24 uppercase tracking-[20px] text-gray-500 text-2xl text-center py-10'>
            {locale== 'fr'? 'Projets' : 'Projects'}</h1>


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
                    <div className='swiper-fade '>
                        <motion.img
                        initial={{
                            y: -300,
                            opacity: 0
                        }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5 }}
                        viewport={{ once: true }}
                        src="/img/portfolio.png" alt="" />
                        
                        <h4 className='text-4-xl font-semibold text-center uppercase tracking-[5px] '>
                        {locale== 'fr'? 'Projet Portfolio-HTML/CSS' : 'Portfolio Project - HTML/CSS'}
                            
                        </h4>
                    </div>
                </Link>
                </SwiperSlide>

                <SwiperSlide >
                <Link href='https://projet-quiz.netlify.app/' target="_blank">
                    <div className='swiper-fade '>
                    <motion.img
                        initial={{
                            y: -300,
                            opacity: 0
                        }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5 }}
                        viewport={{ once: true }}
                        src="/img/quiz.png" alt="" />
                        
                        <h4 className='text-4-xl font-semibold text-center uppercase tracking-[5px]  '>
                        {locale== 'fr'? 'Projet Quiz-HTML/CSS/Typescript' : 'Quiz Project - HTML/CSS/Typescript'}
                        
                        </h4>
                    </div>
                </Link>
                </SwiperSlide>

                <SwiperSlide >
                <Link href='https://projet-jeu.netlify.app/' target="_blank">
                    <div className='swiper-fade'>
                    <motion.img
                        initial={{
                            y: -300,
                            opacity: 0
                        }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5 }}
                        viewport={{ once: true }}
                        src="/img/jsgame.png" alt="" />
                        
                        <h4 className='text-4-xl font-semibold text-center uppercase tracking-[5px] '>
                        {locale== 'fr'? 'Projet Jeu-HTML/CSS' : 'Game Project - HTML/CSS/Typescript'}
                        </h4>
                    </div>
                    </Link>
                </SwiperSlide>

                <SwiperSlide >
                <Link href='https://gitlab.com/Hisami/mjc-simplon' target="_blank">
                    <div className='swiper-fade'>
                    <motion.img
                        initial={{
                            y: -300,
                            opacity: 0
                        }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5 }}
                        viewport={{ once: true }}
                        src="/img/backendproject.png" alt="" />
                        
                        <h4 className='text-4-xl font-semibold text-center uppercase tracking-[5px] '>
                        {locale== 'fr'? 'Projet BackEnd-PHP/MySQL' : 'BackEnd Project - PHP/MySQL'}
                        </h4>
                    </div>
                    </Link>
                </SwiperSlide>

                <SwiperSlide >
                <Link href='https://freshcoffeeshop.netlify.app/' target="_blank">
                    <div className='swiper-fade'>
                    <motion.img
                        initial={{
                            y: -300,
                            opacity: 0
                        }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5 }}
                        viewport={{ once: true }}
                        src="/img/freshcoffeeshop.png" alt="" />
                        <h4 className='text-2-xl font-semibold text-center uppercase tracking-[5px]'>
                        {locale== 'fr'? 'Site vitrine-Next.js/Tailwind/Framer' : 'Coffeeshop Website - Next.js/Tailwind/Framer'}
                            
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

                    {/* <div className="swiper-pagination"></div> */}
                </div>

            </Swiper>

        </div>



    )
}
