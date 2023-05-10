import Link from 'next/link'
import React from 'react'

export default function Hero() {
    return (

        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden '>

            

            <div className='z-20'>
                <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px] '> Web Developer </h2>
            </div>

        <div className='pt-5'>
            <Link href='#about'>
            <button className='herobtn'>About</button>
            </Link>
            <Link href='#experience'>
            <button className='herobtn'>Experience</button>
            </Link>
            <Link href='#skills'>
            <button className='herobtn'>Skills</button>
            </Link>
            <Link href='#projects'>
            <button className='herobtn'>Projects</button>
            </Link>
        </div>



        </div>
        




    )
}

