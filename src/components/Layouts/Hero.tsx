/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'
import BackgroundCircles from './BackgroundCircles'

export default function Hero() {
    return (

        <div 

        className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden '>
            <BackgroundCircles/>

            <img 
            className='relative border-2 border-[#333333] rounded-full h-32 w-32 object-cover'
            src="https://portfolio-yannpezavant.netlify.app/img/avatar2.png" 
            alt="porfile picture" />

            <div className='z-20'>
                <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px] '> Web Developer </h2>
            

        <div className='pt-5'>
            <Link href='#about'>
            <button className='herobtn'>About</button>
            </Link>
            <Link href='#skills'>
            <button className='herobtn'>Skills</button>
            </Link>
            <Link href='#projects'>
            <button className='herobtn'>Projects</button>
            </Link>
        </div>
        </div>



        </div>
        




    )
}

