/* eslint-disable @next/next/no-img-element */
import { sanityClient, urlFor } from '@/sanity';
import { motion } from 'framer-motion'
import React from 'react'

type Props = {
    directionLeft?: boolean;
    skill: any;
}

export default function Skill({ directionLeft, skill }: Props) {
    

    return (
        <div className='group relative flex cursor-pointer'>


                <motion.img
                    

                    initial={{
                        x: directionLeft ? -200 : 200,
                        opacity: 0,
                    }}
                    transition={{ duration: 1 }}
                    whileInView={{ opacity: 1, x: 0 }}

                    
                    
                    className='rounded-full border border-gray-500 object-cover w-20 h-20 xl:w-24 xl:h-24 filter group-hover:grayscale transition duration-300 ease-in-out md:h-20 md:w-20 ' >

                    {skill?.image && 
                        <img className="w-full" src={urlFor(skill?.image).url()} alt={skill?.title}/>
                    }

                </motion.img>
                    
                    
                

          

        </div>

    )
}


export const getServerSideProps = async () => {
    const projectQuery = `*[_type == "skill"] {
      _id,
      name,
      image,
      _createdAt,
  }`

    const skill = await sanityClient.fetch(projectQuery)

    if (!skill) {
        return {
            notFound: true
        }
    }

    return {
        props: {
            skill,
        },
    }
}