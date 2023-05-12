import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { Envelope, Facebook, Github, Gitlab, Linkedin, Whatsapp } from '../Svg'




type Props = {}

export default function Header({ }: Props) {
    return (
        <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center cursor-pointer'>
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

            className='flex space-x-3'>
                {/*social icons*/}
                <a href="https://github.com/neverfit?tab=repositories" target="_blank">
                <Github 
                className="fill-gray-300 hover:fill-[#F7AB0A] w-5 h-5"
                />
                </a>

                <a href="https://gitlab.com/yannpezavant" target="_blank">
                <Gitlab 
                className="fill-gray-300 hover:fill-[#F7AB0A] w-5 h-5"
                />
                </a>

                <a href="https://www.facebook.com/profile.php?id=100010770961895" target="_blank">
                <Facebook 
                className="fill-gray-300 hover:fill-[#F7AB0A] w-5 h-5"
                />
                </a>

                <a href="https://api.whatsapp.com/send?phone=33686337184" target="_blank">
                <Whatsapp 
                className="fill-gray-300 hover:fill-[#F7AB0A] w-5 h-5"
                />
                </a>

                <a href="https://www.linkedin.com/in/yannpezavant/" target="_blank">
                <Linkedin 
                className="fill-gray-300 hover:fill-[#F7AB0A] w-5 h-5"
                />
                </a>

                
            </motion.div>

            <motion.div
            initial={{
                x:200,
                opacity:0,
            }}
            transition={{
                 duration:1.2,
            }}
            whileInView={{
                opacity:1, 
                x:0}}
            viewport={{once:true}}>

            <Link href='#contact'>
            <div className='flex flex-row items-center text-gray-300 cursor-pointer hover:text-[#F7AB0A]/40 space-x-2'>
                
                <Envelope className="fill-gray-300 hover:fill-[#F7AB0A]/40"/>

                <p className='uppercase hidden md:inline-flex text-sm'>Get in touch</p>
            </div>
            </Link>
            </motion.div>
        </header>
    )
}
