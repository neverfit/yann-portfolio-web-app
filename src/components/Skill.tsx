/* eslint-disable react/jsx-no-undef */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { sanityClient, urlFor} from '@/sanity';
import { log } from 'console';
import { motion } from 'framer-motion'
import React from 'react'
import Image from 'next/image';


type Props = {
    directionLeft?: boolean;
    skill: any;
}

export default function Skill({ directionLeft, skill }: Props) {
    console.log(skill)
    

    return (
        <div className='relative grid grid-cols-3 gap-3'>
            {skill?.map((item: any) => (
                    <div key={item?._id}>
                

                <motion.img
                    
                    initial={{
                        x: directionLeft ? -200 : 200,
                        opacity: 0,
                    }}
                    transition={{ duration: 1 }}
                    whileInView={{ opacity: 1, x: 0 }}

                    
                    src={urlFor(item?.image).url()} alt={item?.title}
                    
                    className='cursor-pointer
                    rounded-full border border-gray-500 object-cover w-20 h-20 xl:w-24 xl:h-24 transition duration-300 ease-in-out md:h-20 md:w-20 ' >

                {/* {skill?.image &&
                    <img className="w-full" src={urlFor(item?.image).url()} alt={item?.title} />
                } */}

        </motion.img>

        </div>
        ))}


        </div>

    )
}


export const getServerSideProps = async () => {
    const skillQuery = `*[_type == "skill"] {
      _id,
      title,
      image,
      _createdAt
    }`;
  
    const skill = await sanityClient.fetch(skillQuery);
  
    if (!skill) {
      return {
        notFound: true
      };
    }
  
    return {
      props: {
        skill
      }
    };
  };