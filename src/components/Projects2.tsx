/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { EffectCoverflow, Navigation, Pagination } from 'swiper';
import { SwiperSlide, Swiper } from 'swiper/react';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { sanityClient, urlFor } from '@/sanity';
import { GetStaticProps } from 'next';


interface Props {
    project: any;
}

export default function Projects2({ project}: Props) {
    const router = useRouter();
    const { locale } = router;
    

    return (
        <div className='container h-screen p-16 mx-auto '>
            <h1 className=' mb-10 top-12 uppercase tracking-[20px] text-gray-500 text-center '>
                {locale == 'fr' ? 'Projets' : 'Projects'}</h1>


            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={2}
                loop={true}
                coverflowEffect={
                    {
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2.5,
                    }
                }
                pagination={{ el: '.swiper-pagination', clickable: true }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                className="swiper_container ">

                {project?.map((item: any) => (
                    <div key={item?._id}>


                        <SwiperSlide >
                            <Link href={`/projects/${item?.slug?.current}`} target='_blank'>
                                <div className='swiper-fade '>
                                    <motion.img
                                        initial={{
                                            y: -300,
                                            opacity: 0
                                        }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 1.5 }}
                                        viewport={{ once: true }}
                                        src={urlFor(item?.image).url()} alt={item?.title}/>

                                    <h4 className='text-4-xl font-semibold text-center uppercase tracking-[5px] '>
                                        {locale == 'fr' ? item?.titre : item?.title}

                                    </h4>
                                </div>
                            </Link>
                        </SwiperSlide>
                    </div>
                    

                ))}
                        <div className="slider-controler">
                            <div className="swiper-button-prev slider-arrow">
                                {/* <IonIcon name="arrow-back-outline" /> */}
                            </div>
                            <div className="swiper-button-next slider-arrow ">
                                {/* <IonIcon name="arrow-forward-outline" /> */}
                            </div>

                            {/* <div className="swiper-pagination"></div> */}
                        </div>
            
                
               </Swiper> 
        </div>

        


            
    
    )
}



// export const getServerSideProps = async () => {
//     const projectQuery= `*[_type == "project"] {
//       _id,
//       title,
//       titre,
//       description,
//       contenu,
//       image,
//       link,
//       _createdAt,
//       slug {
//         current
//     }
//   }`
  
//   const project = await sanityClient.fetch(projectQuery)
  
//   if(!project){
//     return {
//         notFound: true
//     }
//   }
  
//   return {
//     props: {
//       project,
//     }
//   }
// }

export async function getStaticPaths({ locales }: any) {
    const query = `*[_type == "project"]{
              _id,
              slug {
                  current
              }
          }` ;
  
    const projects = await sanityClient.fetch(query);
  
    const paths = projects
      .map((project: any) =>
        locales.map((locale: any) => ({
          params: { slug: project.slug.current},
          locale, //locale should not be inside params
        }))
      )
      .flat();
  
    return {
      paths,
      fallback: true,
    };
  }


  
  export const getStaticProps: GetStaticProps = async ({ params }: any) => {
    const projectQuery = `*[_type == "project" &&  slug.current == $slug ][0]] {
        _id,
        title,
        titre,
        description,
        contenu,
        image,
        link,
        _createdAt,
        slug {
          current
        }
    }`;
  
    const project = await sanityClient.fetch(projectQuery, {
      slug: params?.slug,
    });
  
    if (!project) {
      return {
        notFound: true,
      };
    }
  
    return {
      props: {
        project,
      },
      revalidate: 10,
    };
  };








  
