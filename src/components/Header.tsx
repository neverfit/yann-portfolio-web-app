import { motion } from 'framer-motion'
import Link from 'next/link'
import React, { useState } from 'react'
import { Envelope, Facebook, Github, Gitlab, Linkedin, Whatsapp, File } from '../Svg'
import { Bars3Icon } from '@heroicons/react/24/solid'
import LanguageSelectDropDown from './LanguageSelectDropDown'
import { useRouter } from 'next/router'




type Props = {}

export default function Header({ }: Props) {
    const [openDrawer, setOpenDrawer] = React.useState(false)

    const router = useRouter();
    const { locale } = router;
    const currentLocale = locale === 'en' ? 'en' : 'fr';
    const otherLocale = locale === 'en' ? 'fr' : 'en';
    const [open, setOpen] = useState(false);


    return (
        <header
            className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center cursor-pointer '>
            <nav className='hidden lg:flex lg:flex-col justify-center space-y-4'>


                <motion.div
                    initial={{
                        x: -200,
                        opacity: 0,
                    }}
                    transition={{
                        duration: 1.2,
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0
                    }}
                    viewport={{ once: true }}

                    className='flex space-x-3 border'>
                    {/*social icons*/}
                    <a href="https://github.com/neverfit?tab=repositories" target="_blank">
                        <Github
                            className="fill-gray-300 hover:fill-[#F7AB0A] "
                        />
                    </a>

                    <a href="https://gitlab.com/yannpezavant" target="_blank">
                        <Gitlab
                            className="fill-gray-300 hover:fill-[#F7AB0A]"
                        />
                    </a>

                    <a href="https://www.facebook.com/profile.php?id=100010770961895" target="_blank">
                        <Facebook
                            className="fill-gray-300 hover:fill-[#F7AB0A]"
                        />
                    </a>

                    <a href="https://api.whatsapp.com/send?phone=33686337184" target="_blank">
                        <Whatsapp
                            className="fill-gray-300 hover:fill-[#F7AB0A]"
                        />
                    </a>

                    <a href="https://www.linkedin.com/in/yannpezavant/" target="_blank">
                        <Linkedin
                            className="fill-gray-300 hover:fill-[#F7AB0A] "
                        />
                    </a>

                    <LanguageSelectDropDown />



                </motion.div>
            </nav>

            <>
                <Bars3Icon
                    onClick={() => setOpenDrawer(true)}
                    className='w-7 mx-1 hover:text-[#F7AB0A] text-gray-300 cursor-pointer lg:hidden pt-1'
                />

                {openDrawer &&
                    <div
                        onClick={() => setOpenDrawer(false)}
                        className='fixed top-0 w-screen h-screen left-0 bg-black/20'>

                    </div>
                }

                <div
                    className={`fixed z-50 w-[50px] h-screen left-0 top-0 bg-[#D5940A] dark:bg-black ease-in-out duration-500
                ${openDrawer ? 'translate-x-0' : '-translate-x-full'}`}>

                    <nav className='flex lg:flex-col justify-center space-y-4 py-6 '>

                        <div

                            className='flex flex-col space-y-3'>
                            {/*social icons*/}
                            <a
                                href="https://github.com/neverfit?tab=repositories"
                                target="_blank"
                            >
                                <Github
                                    onClick={() => setOpenDrawer(false)}
                                    className="fill-gray-300 hover:fill-gray-500 w-5 h-5 "
                                />
                            </a>

                            <a href="https://gitlab.com/yannpezavant" target="_blank">
                                <Gitlab
                                    onClick={() => setOpenDrawer(false)}
                                    className="fill-gray-300 hover:fill-gray-500  w-5 h-5"
                                />
                            </a>

                            <a href="https://www.facebook.com/profile.php?id=100010770961895" target="_blank">
                                <Facebook
                                    onClick={() => setOpenDrawer(false)}
                                    className="fill-gray-300 hover:fill-gray-500  w-5 h-5"
                                />
                            </a>

                            <a href="https://api.whatsapp.com/send?phone=33686337184" target="_blank">
                                <Whatsapp
                                    onClick={() => setOpenDrawer(false)}
                                    className="fill-gray-300 hover:fill-gray-500  w-5 h-5"
                                />
                            </a>

                            <a href="https://www.linkedin.com/in/yannpezavant/" target="_blank">
                                <Linkedin
                                    onClick={() => setOpenDrawer(false)}
                                    className="fill-gray-300 hover:fill-gray-500  w-5 h-5"
                                />
                            </a>

                            <div className='fill-gray-300 hover:fill-gray-500 w-5 h-5  px-0'>
                                <LanguageSelectDropDown />

                            </div>

                        </div>
                    </nav>
                </div>

            </>

            <motion.div
                initial={{
                    x: 200,
                    opacity: 0,
                }}
                transition={{
                    duration: 1.2,
                }}
                whileInView={{
                    opacity: 1,
                    x: 0
                }}
                viewport={{ once: true }}>

                <Link href='https://portfolio-yannpezavant.netlify.app/img/YannPezavantCV.pdf' target="_blank">
                    <div className='flex flex-row items-center text-gray-300 cursor-pointer hover:text-[#F7AB0A] space-x-2 uppercase md:inline-flex text-sm'>

                        <File className="fill-gray-300 hover:fill-[#F7AB0A] mr-1" />
                        {locale== 'fr'? ' Mon CV' : ' My CV'}
                    
                        
                    </div>
                </Link>


                
            
            
            </motion.div>
        </header>
    )
}
