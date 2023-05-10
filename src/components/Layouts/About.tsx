import React from 'react'
import { motion } from 'framer-motion'


export default function About() {
  return (
    <motion.div 
    initial={{ opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration: 1.5}}

    className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
          About
          </h3>

        <motion.img 
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
        src="https://images.pexels.com/photos/821748/pexels-photo-821748.jpeg?auto=compress&cs=tinysrgb&w=600"
        className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:h-[600px] xl:w-[500px]'
        />

        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-4xl font-semibold'>
              Here's a {" "}
              <span className='underline decoration-[#F7AB0A]/50'>little</span>{" "} 
              background
              </h4>
              <p className='text-base'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quis excepturi quod, assumenda tempora reiciendis necessitatibus, vel mollitia officia qui ullam accusamus dolore dignissimos dicta autem odit cumque voluptate possimus.
                Molestias illum quasi ipsa accusamus voluptate at. Aperiam, dolores inventore placeat voluptates quidem amet facilis. Eos dolor minima corrupti voluptates quasi excepturi culpa beatae exercitationem, cumque hic sunt nesciunt qui.
                Voluptate odit, quis, eligendi rerum corporis hic animi dolorum dignissimos nemo nisi nostrum quaerat. Architecto odit vel, et ea veniam maiores dignissimos ad libero corporis unde ipsa! Non, cupiditate sed.
              </p>
        </div>
    </motion.div>
  )
}

 