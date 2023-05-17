/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-undef */
import IframeResizer from 'iframe-resizer-react'
import React from 'react'

type Props = {}

export default function portfolio({}: Props) {
  
  return(
    <div  className='bg-[rgb(36,36,36)] h-screen overflow-y-scroll overflow-x-hidden scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/50 '>
    {/* <div>

      <div
      className='flex flex-col md:flex-row items-stretch border border-indigo-700 px-10 py-2 mx-20 my-10'>

        <div></div>
        
        <div 
        className='border border-red-700 w-1/3 h-56 md:w-64 md:h-95'
        ></div>

        <div
        className='border border-green-700 w-2/3 h-56 space-y-10 px-0 md:px-10 '
        >
          <h1 className='border border-black mx-2'>
            Portfolio
          </h1>
          <p className='border border-yellow-400 mx-2 my-2'>Project developed with HTML, CSS and Typescript</p>
        </div>

      </div>

      </div> */}
      

        <div className="w-9/12 mx-auto mt-5 bg-white shadow-[#F7AB0A]/50 shadow-md rounded overflow-hidden sm:flex">
          {/* <img className="w-full sm:w-1/3" src="/image.jpg" alt="Card image" /> */}
          <div className="w-11/12  mx-auto my-2 rounded overflow-hidden sm:flex">

            <iframe
              src="/img/portfolio.png"
              scrolling="no"
              className="w-full h-full sm:w-1/3" />


            <div className="p-4 border">
              <h3 className="text-xs font-semibold uppercase text-gray-500">Portfolio</h3>
              <p className="text-xs text-black mt-2">This project was the first of my training at Simplon. It has been developed with HTML, CSS, and Typescript.</p>
            </div>
          </div>
        </div>


      


    </div>

  
  )
}

