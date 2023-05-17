import React from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'


export default function About() {
  const router = useRouter();
  const {locale}= router;
  
  return (
    <motion.div 
    initial={{ opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration: 1.5}}

    className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center '>
        <h3 className='about-title absolute top-12 uppercase tracking-[20px] text-gray-500 text-2xl'>
        {locale== 'fr'? 'A propos' : 'About'}
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

        src="./img/fb-profile.jpg"
        className='about-picture -mb-20  md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:h-[600px] xl:w-[500px] '
        />

        <div className='about-text space-y-10 px-0 md:px-10 '>
            <h4 className='text-4xl font-semibold'>
              {locale== 'fr'? 'Voici un petit historique' : 'Here is a '}
              <span className='underline decoration-[#F7AB0A]/50'>{locale== 'fr'? '' : 'little'}</span>
              {locale== 'fr'? '' : ' background'}
              </h4>
              <p className='text-sm tracking-[2px]'> 
              {locale== "fr" ? "Etudier la civilisation et la littérature anglaise m'ont apporté l'opportunité de partager ma passion pour les langues étrangères à travers le monde. Après une expérience dans l'enseignement, je me suis découvert un intérêt prononcé pour la programmation informatique. C'est à lécole Simplon de Lyon que j'ai la chance d'apprendre le développement web depuis Novembre 2022. Dans l'optique de progresser et d'approfondir mes connaissances, je souhaite poursuivre mes études par une formation en Conception et Développement d'Applications. Je suis donc à la recherche d'une entreprise pour une aternance, du 18/09/23 au 21/03/25" : "Studies of English literature and civilization brought me to the point where I have had the opportunity to share my passion of foreign language with the world. Eventually, I have found in computer programming a great place to explore and an opportunity to share passion, love and excitement. Recently, the school of Simplon in Lyon, offered me the chance to learn web and mobile development. As I intend to keep learning and some day become an accomplished wizard of the web I am actively looking for a 12 months apprenticeship from 18/09/23 to 21/03/25 !"} 
              
              
                
                
              </p>
        </div>
    </motion.div>
  )
}

 