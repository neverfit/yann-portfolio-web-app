import { MotionConfig, motion } from 'framer-motion'
import React from 'react'
import Skill from './Skill'
import { useRouter } from 'next/router';


type Props = {}

export default function Skills({}: Props) {
  const router = useRouter();
  const {locale}= router;
  
  return (
    <motion.div  
    initial={{ opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration: 1}}

    className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center '>

    <h3 className='absolute top-12 uppercase tracking-[20px] text-gray-500 '>{locale== 'fr'? 'Compétences' : 'Skills'}
        
    </h3>
    
    <div className='grid grid-cols-3 gap-3'>
    <Skill/>
    <Skill/>
    <Skill/>
    <Skill/>
    <Skill/>
    <Skill/>
    <Skill/>
    <Skill/>
    </div>

    </motion.div>
  )
}

