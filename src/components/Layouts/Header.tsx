import { motion } from 'framer-motion'
import React from 'react'
import { SocialIcon } from 'react-social-icons'


type Props = {}

export default function Header({ }: Props) {
    return (
        <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
            <motion.div 
            initial={{
                x:-200,
                opacity:0,
            }}
            transition={{
                 duration:1.2,
            }}
            whileInView={{
                opacity:1, 
                x:0}}
            viewport={{once:true}}

            className='flex'>
                {/*social icons*/}
                <SocialIcon url="https://github.com/neverfit"
                    fgColor='gray'
                    bgColor='transparent' />

                <SocialIcon url="https://gitlab.com/yannpezavant"
                    fgColor='gray'
                    bgColor='transparent' />
                <SocialIcon url="https://www.facebook.com/profile.php?id=100010770961895"
                    fgColor='gray'
                    bgColor='transparent' />
                <SocialIcon url="https://api.whatsapp.com/send?phone=33686337184"
                    fgColor='gray'
                    bgColor='transparent' />
                <SocialIcon url="https://www.linkedin.com/in/yannpezavant/"
                    fgColor='gray'
                    bgColor='transparent' />
            </motion.div>

            
            <div className='flex flex-row items-center text-gray-300 cursor-pointer'>
                <SocialIcon
                    className=' cursor-pointer'
                    network='email'
                    fgColor='gray'
                    bgColor='transparent' 
                    />
                <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get in touch</p>
            </div>
        </header>
    )
}
