import { log } from 'console'
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react'

type Props = {
}

export default function Circles({}: Props) {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const circles= document.querySelectorAll('.circle');
    let x = mousePosition.x;
    let y = mousePosition.y;

    console.log(mousePosition);

    useEffect(() => {
        const mouseMove = (e: any) => {
            setMousePosition({ 
                x: e.clientX, 
                y: e.clientY 
            })
        }

        window.addEventListener('mousemove',mouseMove)


        return () => {
            window.removeEventListener('mousemove',mouseMove)

        }

    }, []);

    const variants = {
        default: {
            x: mousePosition.x,
            y: mousePosition.y
        }
    }

    // circles.forEach(function(circle, index) {
    //     circle.style.left=`${mousePosition.x - 12}px`;
    //     circle.style.top=`${mousePosition.y - 12}px`;

    //     const nextCircle = circles[index + 1] || circles[0];
    //         x += (nextCircle.x- x) *0.5;
    //         y += (nextCircle.y- y) *0.5;
    //     });




  return (
    <>
    <motion.div
    className='cursor'
    variants={variants}
    animate="default"
    ></motion.div>
    
    {/* <div className='circle'></div>
    <div className='circle'></div>
    <div className='circle'></div>
    <div className='circle'></div>
    <div className='circle'></div>
    <div className='circle'></div>
    <div className='circle'></div>
    <div className='circle'></div>
    <div className='circle'></div>
    <div className='circle'></div> */}
    

    
    </>
  )
}



