/* eslint-disable @next/next/no-img-element */
import React from 'react'

type Props = {}

export default function Skills2({ }: Props) {
    return (
        <div className='skill-slider flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
            <h2 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                Skills
            </h2>

            <div className="skill-bx relative flex items-center justify-center w-full dark:text-gray-50">
                <button aria-label="Slide back" type="button" className="absolute left-0 z-30 p-2 ml-10 focus:outline-none focus:dark:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400">
                    <svg width="8" height="14" fill="none" viewBox="0 0 8 14" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
                        <path d="M7 1L1 7L7 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                </button>

                <div className="flex items-center justify-start w-full h-full gap-6 py-4 mx-auto overflow-auto lg:gap-8">
                    <div className="relative flex flex-shrink-0 w-full sm:w-auto">
                        <img className="logo object-cover object-center aspect-square dark:bg-gray-500" src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_640.png" alt="Image 1" />
                    </div>
                    <div className="logo relative flex flex-shrink-0 w-full sm:w-auto">
                        <img className="object-cover object-center aspect-square dark:bg-gray-500" src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png" alt="Image 2" />
                    </div>
                    <div className="logo relative flex flex-shrink-0 w-full sm:w-auto">
                        <img className="object-cover object-center aspect-square dark:bg-gray-500" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png" alt="Image 3" />
                    </div>
                    <div className="logo relative flex flex-shrink-0 w-full sm:w-auto">
                        <img className="object-cover object-center aspect-square dark:bg-gray-500" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png" alt="Image 4" />
                    </div>
                    <div className="logo relative flex flex-shrink-0 w-full sm:w-auto">
                        <img className="object-cover object-center aspect-square dark:bg-gray-500" src="https://www.nicepng.com/png/full/269-2693391_mysql-mysql-logo-png-square.png" alt="Image 5" />
                    </div>
                    <div className="logo relative flex flex-shrink-0 w-full sm:w-auto">
                        <img className="object-cover object-center aspect-square dark:bg-gray-500" src="https://cdn.worldvectorlogo.com/logos/symfony.svg" alt="Image 5" />
                    </div>
                    <div className="logo relative flex flex-shrink-0 w-full sm:w-auto">
                        <img className="object-cover object-center aspect-square dark:bg-gray-500" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="Image 5" />
                    </div>
                    <div className="logo relative flex flex-shrink-0 w-full sm:w-auto">
                        <img className="object-cover object-center aspect-square dark:bg-gray-500" src="https://www.svgrepo.com/show/354113/nextjs-icon.svg" alt="Image 5" />
                    </div>
                    <div className="logo relative flex flex-shrink-0 w-full sm:w-auto">
                        <img className="object-cover object-center aspect-square dark:bg-gray-500" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png" alt="Image 5" />
                    </div>
                    <div className="logo relative flex flex-shrink-0 w-full sm:w-auto">
                        <img className="object-cover object-center aspect-square dark:bg-gray-500" src="https://cdn3.iconfinder.com/data/icons/popular-services-brands/512/php-512.png" alt="Image 5" />
                    </div>
                    <div className="logo relative flex flex-shrink-0 w-full sm:w-auto">
                        <img className="object-cover object-center aspect-square dark:bg-gray-500" src="https://cdn.icon-icons.com/icons2/2415/PNG/512/doctrine_plain_logo_icon_146548.png" alt="Image 5" />
                    </div>
                </div>

                <button aria-label="Slide forward" id="next" className="absolute right-0 z-30 p-2 mr-10 focus:outline-none focus:dark:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400">
                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
                        <path d="M1 1L7 7L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                </button>

            </div>
        </div>
    )
}
