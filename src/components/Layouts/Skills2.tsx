/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'

type Props = {}

export default function Skills2({ }: Props) {

    return (

        
        <div 
        className='skill-slider flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
            <h2 
            className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                Skills
            </h2>

            <div  
            className="skill-bx relative flex items-center justify-center w-full dark:text-gray-50 ">

                <button 
                type="button" 
                className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" 
                data-carousel-prev
                >
                    <span 
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
                    >
                        <svg 
                        aria-hidden="true" 
                        className="w-6 h-6 text-white dark:text-gray-800" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg">
                            <path 
                            stroke-linecap="round" 
                            stroke-linejoin="round" 
                            stroke-width="2" 
                            d="M15 19l-7-7 7-7"></path>
                            </svg>
                        <span 
                        className="sr-only">
                            Previous
                            </span>
                    </span>
                </button>

                <div 
                className="flex items-center justify-start w-full h-full gap-6 py-4 mx-auto overflow-auto lg:gap-8">
                    <div 
                    className="relative flex flex-shrink-0 w-full sm:w-auto">
                        <img 
                        className="logo object-cover object-center aspect-square dark:bg-gray-500" 
                        src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_640.png" 
                        alt="Image 1" />
                    </div>
                    <div 
                    className="logo relative flex flex-shrink-0 w-full sm:w-auto">
                        <img 
                        className="object-cover object-center aspect-square dark:bg-gray-500" 
                        src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png" 
                        alt="Image 2" />
                    </div>
                    <div 
                    className="logo relative flex flex-shrink-0 w-full sm:w-auto">
                        <img 
                        className="object-cover object-center aspect-square dark:bg-gray-500" 
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png" 
                        alt="Image 3" />
                    </div>
                    <div 
                    className="logo relative flex flex-shrink-0 w-full sm:w-auto">
                        <img 
                        className="object-cover object-center aspect-square dark:bg-gray-500" 
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png" 
                        alt="Image 4" />
                    </div>
                    <div 
                    className="logo relative flex flex-shrink-0 w-full sm:w-auto">
                        <img 
                        className="object-cover object-center aspect-square dark:bg-gray-500" 
                        src="https://www.nicepng.com/png/full/269-2693391_mysql-mysql-logo-png-square.png" 
                        alt="Image 5" />
                    </div>
                    <div 
                    className="logo relative flex flex-shrink-0 w-full sm:w-auto">
                        <img 
                        className="object-cover object-center aspect-square dark:bg-gray-500" 
                        src="https://cdn.worldvectorlogo.com/logos/symfony.svg" 
                        alt="Image 5" />
                    </div>
                    <div 
                    className="logo relative flex flex-shrink-0 w-full sm:w-auto">
                        <img 
                        className="object-cover object-center aspect-square dark:bg-gray-500" 
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" 
                        alt="Image 5" />
                    </div>
                    <div 
                    className="logo relative flex flex-shrink-0 w-full sm:w-auto">
                        <img 
                        className="object-cover object-center aspect-square dark:bg-gray-500" 
                        src="https://www.svgrepo.com/show/354113/nextjs-icon.svg" 
                        alt="Image 5" />
                    </div>
                    <div 
                    className="logo relative flex flex-shrink-0 w-full sm:w-auto">
                        <img 
                        className="object-cover object-center aspect-square dark:bg-gray-500" 
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png" 
                        alt="Image 5" />
                    </div>
                    <div 
                    className="logo relative flex flex-shrink-0 w-full sm:w-auto">
                        <img 
                        className="object-cover object-center aspect-square dark:bg-gray-500" 
                        src="https://cdn3.iconfinder.com/data/icons/popular-services-brands/512/php-512.png" 
                        alt="Image 5" />
                    </div>
                    <div 
                    className="logo relative flex flex-shrink-0 w-full sm:w-auto">
                        <img 
                        className="object-cover object-center aspect-square dark:bg-gray-500" 
                        src="https://cdn.icon-icons.com/icons2/2415/PNG/512/doctrine_plain_logo_icon_146548.png" 
                        alt="Image 5" />
                    </div>
                </div>

                
                <button 
                type="button" 
                className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" 
                data-carousel-next>
                    <span 
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
                    >

                        <svg 
                        aria-hidden="true" 
                        className="w-6 h-6 text-white dark:text-gray-800" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg">
                            <path 
                            stroke-linecap="round" 
                            stroke-linejoin="round" 
                            stroke-width="2" 
                            d="M9 5l7 7-7 7">
                            </path>
                            </svg>
                        <span 
                        className="sr-only">
                            Next
                            </span>
                    </span>
                </button>

            </div>
        </div>
        

    )

}





