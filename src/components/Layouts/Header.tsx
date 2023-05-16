import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import { Envelope, Facebook, Github, Gitlab, Linkedin, Whatsapp } from '../Svg'
import { Bars2Icon, Bars3Icon } from '@heroicons/react/24/solid'




type Props = {}

export default function Header({ }: Props) {
    const [openDrawer, setOpenDrawer] = React.useState(false)


    return (
        <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center cursor-pointer'>
            <nav className='hidden lg:flex lg:flex-col justify-center space-y-4 '>

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
            </nav>

            <>
                <Bars3Icon
                    onClick={() => setOpenDrawer(true)}
                    className='w-7 mx-1 hover:text-[#F7AB0A] cursor-pointer lg:hidden pt-1'
                />
                {openDrawer &&
                    <div
                        onClick={() => setOpenDrawer(false)}
                        className='fixed top-0 w-screen h-screen left-0 bg-black/20'>

                    </div>
                }

                <div
                    className={`fixed z-50 w-[75px] h-screen left-0 top-0 bg-gray-800 dark:bg-black ease-in-out duration-500
                ${openDrawer ? 'translate-x-0' : '-translate-x-full'}`}>

                    <nav className='flex lg:flex-col justify-center space-y-4 py-6'>

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

                            className='flex flex-col space-y-3'>
                            {/*social icons*/}
                            <a 
                            href="https://github.com/neverfit?tab=repositories" 
                            target="_blank" 
                            >
                                <Github
                                    onClick={() => setOpenDrawer(false)}
                                    className="fill-[#F7AB0A] hover:fill-[#F7AB0A] w-5 h-5"
                                />
                            </a>

                            <a href="https://gitlab.com/yannpezavant" target="_blank">
                                <Gitlab
                                    onClick={() => setOpenDrawer(false)}
                                    className="fill-[#F7AB0A]/50 hover:fill-[#F7AB0A] w-5 h-5"
                                />
                            </a>

                            <a href="https://www.facebook.com/profile.php?id=100010770961895" target="_blank">
                                <Facebook
                                    onClick={() => setOpenDrawer(false)}
                                    className="fill-[#F7AB0A]/50 hover:fill-[#F7AB0A] w-5 h-5"
                                />
                            </a>

                            <a href="https://api.whatsapp.com/send?phone=33686337184" target="_blank">
                                <Whatsapp
                                    onClick={() => setOpenDrawer(false)}
                                    className="fill-[#F7AB0A]/50 hover:fill-[#F7AB0A] w-5 h-5"
                                />
                            </a>

                            <a href="https://www.linkedin.com/in/yannpezavant/" target="_blank">
                                <Linkedin
                                    onClick={() => setOpenDrawer(false)}
                                    className="fill-[#F7AB0A]/50 hover:fill-[#F7AB0A] w-5 h-5"
                                />
                            </a>
                        </motion.div>
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

                <Link href='#contact'>
                    <div className='flex flex-row items-center text-gray-300 cursor-pointer hover:text-[#F7AB0A] space-x-2'>

                        <Envelope className="fill-gray-300 hover:fill-[#F7AB0A]" />

                        <p className='uppercase hidden md:inline-flex text-sm'>Get in touch</p>
                    </div>
                </Link>
            </motion.div>
        </header>
    )
}
