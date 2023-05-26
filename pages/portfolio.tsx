/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { sanityClient, urlFor } from '../sanity'
import { motion } from 'framer-motion';

interface Props {
  project: any;
}

function portfolio({ project }: Props) {
  console.log(project)

  return (
    // <div>{project.map((item: any) => (
    //       <div key={item._id}>
    //         {item.title}
    //       </div>
    //     ))}
    //   </div> 
    // <div

    <motion.div
      initial={{
        opacity: 0
      }}
      animate={{ height: [50, 400], width: [50, 340] }}
      transition={{ ease: "easeOut", duration: 2 }}
      whileInView={{ opacity: 1, y: 0 }}

      viewport={{ once: true }}
      className="max-w-sm rounded overflow-hidden shadow-md shadow-[#F7AB0A] ">

      <div>{project.map((item: any) => (
        <div key={item._id}>


          <img className="w-full" src={urlFor(item.image).url()} alt="img" />

          <div className="px-6 py-4">
            <div className="text-sm tracking-[3px] mb-2 uppercase text-[#F7AB0A]/40">{item.title}</div>
            <p className=" text-sm text-gray-500">

              {item.description}

            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-[#F7AB0A] rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 
            mb-2">#HTML</span>
            <span className="inline-block bg-[#F7AB0A] rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 
            mb-2">#CSS</span>
            <span className="inline-block bg-[#F7AB0A] rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">#Typescript</span>
          </div>

        </div>
      ))}
      </div>
    </motion.div>









    // className='grid place-content-center
    // bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/50'>

    //   {project.map((item: any) => ( 
    //     <div key={item._id}>

    //   <motion.div
    //   initial={{
    //       opacity: 0
    //   }}
    //   animate={{ height: [50,400], width: [50, 340] }}
    //   transition={{ ease: "easeOut", duration: 2 }}
    //   whileInView={{ opacity: 1, y: 0 }}

    //   viewport={{ once: true }}
    //   className="max-w-sm rounded overflow-hidden shadow-md shadow-[#F7AB0A] ">


    //         <iframe 
    //         className="w-full" 
    //         src={urlFor(item.image).url()}
    //         width="100%"
    //         height="100%"
    //         />

    //         <div className="px-6 py-4">
    //           <div className="text-sm tracking-[3px] mb-2 uppercase text-[#F7AB0A]/40">{item.title}</div>
    //           <p className=" text-sm text-gray-500">

    //             {item.description}

    //           </p>
    //         </div>
    //         <div className="px-6 pt-4 pb-2">
    //           <span className="inline-block bg-[#F7AB0A] rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 
    //         mb-2">#HTML</span>
    //           <span className="inline-block bg-[#F7AB0A] rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 
    //         mb-2">#CSS</span>
    //           <span className="inline-block bg-[#F7AB0A] rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">#Typescript</span>
    //         </div>
    //   </motion.div>

    //     </div>


    //     ))}

    // </div>


    // <>
    // <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-md">
    //   <div className="iframe-container">
    //     <iframe src="/img/portfolio.png" className="iframe-content" width="640" height="360" title="Image" allowFullScreen ></iframe>
    //   </div>
    // </div>
    // </>




  )
}

export default portfolio


export const getServerSideProps = async () => {
  const projectQuery = `*[_type == "project"] {
    _id,
    title,
    description,
    image,
    link,
    _createdAt,
    slug {
      current
  }
}`

  const project = await sanityClient.fetch(projectQuery)

  if (!project) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      project,
    },
  }
}





{/* <motion.div
      initial={{
          opacity: 0
      }}
      animate={{ height: [50,400], width: [50 , 340] }}
      transition={{ ease: "easeOut", duration: 2 }}
      whileInView={{ opacity: 1, y: 0 }}

      viewport={{ once: true }}
      className="max-w-sm rounded overflow-hidden shadow-md shadow-[#F7AB0A] ">


            <img className="w-full" src={urlFor(item.image).url()} alt="img" />

            <div className="px-6 py-4">
              <div className="text-sm tracking-[3px] mb-2 uppercase text-[#F7AB0A]/40">{item.title}</div>
              <p className=" text-sm text-gray-500">

                {item.description}

              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-[#F7AB0A] rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 
            mb-2">#HTML</span>
              <span className="inline-block bg-[#F7AB0A] rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 
            mb-2">#CSS</span>
              <span className="inline-block bg-[#F7AB0A] rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">#Typescript</span>
            </div>
      </motion.div> */}