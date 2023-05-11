import React from 'react'
import { EnvelopeIcon, MapIcon, PhoneIcon } from "@heroicons/react/24/solid"

type Props = {}

export default function Contact({ }: Props) {
    return (
        <div className='h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>

            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                Contact
            </h3>

            <div className='flex flex-col space-y-10'>
                <h4 className='text-4xl font-semibold text-center'>I have got just what you need.  
                    <span className='underline decoration-[#F7AB0A]/50'>Leave me a message</span>
                </h4>

                <div className='space-y-10'>
                    <div className='flex items-center space-x-5 justify-center'>
                        <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                        <p className='text-2xl'>+33686337184</p>
                    </div>
                    <div className='flex items-center space-x-5 justify-center'>
                        <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                        <p className='text-2xl'>pezavantyann@gmail.com</p>
                    </div>
                    <div className='flex items-center space-x-5 justify-center'>
                        <MapIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse' />
                        <p className='text-2xl'>Tassin la Demi-lune</p>
                    </div>
                </div>

                <form className='flex flex-col space-y-2  w-fit mx-auto'>
                    <div className='flex space-x-2'>
                        <input className='contactInput' type="text" placeholder='Name' />
                        <input className='contactInput' type="email" placeholder='Email'/>
                    </div>

                    <input className='contactInput ' type="text" placeholder='Subject'/>

                    <textarea className='contactInput' placeholder='Your message'/>

                    <button className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg' type='submit'>Submit</button>
                </form>
            </div>
        </div>
    )
}
