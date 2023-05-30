/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React, { useState } from 'react'
import BackgroundCircles from './BackgroundCircles'
import { useRouter } from 'next/router';

export default function Hero() {
    const router = useRouter();
    const {locale} = router;
    
    return (

        <div 

        className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <BackgroundCircles/>

            <img 
            className='relative border-2 border-[#333333] rounded-full h-28 w-28 object-cover'
            src="https://portfolio-yannpezavant.netlify.app/img/avatar2.png" 
            alt="porfile picture" />

            <div className='z-10'>
                <h2 className='text-sm uppercase text-[#F7AB0A]/40 pb-2 tracking-[15px] '>{locale== 'fr'? 'Developpeur web' : 'Web Developer'}  </h2>
            

        <div className='pt-5'>
            <Link href='#about'>
            <button className='herobtn'>{locale== 'fr'? 'A propos' : 'About'}</button>
            </Link>
            <Link href='#skills'>
            <button className='herobtn'>{locale== 'fr'? 'Compétences' : 'Skills'}</button>
            </Link>
            <Link href='#projects'>
            <button className='herobtn'>{locale== 'fr'? 'Projets' : 'Projects'}</button>
            </Link>
            <Link href='https://portfolio-yannpezavant.netlify.app/img/YannPezavantCV.pdf' target="_blank">
            <button className='herobtn'>{locale== 'fr'? 'Mon CV' : 'My CV'}</button>
            </Link>
            <Link href='/interests'>
            <button className='herobtn'>{locale== 'fr'? 'Intérêts' : 'Interests'}</button>
            </Link>
        </div>
        </div>



        </div>
        




    )
}
