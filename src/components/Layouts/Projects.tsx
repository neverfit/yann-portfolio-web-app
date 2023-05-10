import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

export default function Projects({}: Props) {
    const projects=[1,2,3,4,]
  return (
    <div className='h-screen relative flex overflow-hidden flex-col text-left  md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>
        
    <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
        {projects.map((project, i) =>(
            <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44'>
                <motion.img 
                initial={{ y:-300,
                    opacity:0
                }}
                whileInView={{opacity:1, y:0}}
                transition={{duration: 1.5}}
                viewport={{once:true}}
            
                src="https://portfolio-yannpezavant.netlify.app/img/brickbreaker.png" alt="" />

                <div className='space-y-10 px-10 md:px-10 max-w-6xl'>
                    <h4 className='text-4-xl font-semi-bold text-center'><span className='underline decoration-[#F7AB0A]/50'>Project {i+1} of {projects.length}: </span>Game
                    </h4>

                    <p className='text-lg text-center md:text-left'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio reiciendis, id cupiditate eveniet voluptates pariatur ipsa ipsam. Esse, provident? Vitae eos optio qui quaerat nihil rem eum dolorem dicta labore.
                        Quia nemo consequatur sapiente optio fugit quasi obcaecati incidunt, nulla ab saepe quod corporis distinctio in! Doloremque expedita quae vitae accusamus sint quasi labore corrupti, exercitationem, delectus dignissimos ratione quidem.
                    </p>
                </div>
            </div>
            
        ))}

    </div>

    <div className='w-full absolute  top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12'/>

    
    </div>
  )
}

 