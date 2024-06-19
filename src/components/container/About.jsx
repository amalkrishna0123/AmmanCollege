import React from 'react'
import about from "../../images/About.jpg"
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  return (
    <div className='section' id='about'>
      <div className=' grid md:grid-cols-2 gap-8 place-items-center'>
        <div className=' border-[3px] border-solid border-Teal rounded-lg'>
          <img src={about} className=' p-4' alt="" />
        </div>
        <motion.div ref={ref}
      initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }} 
      animate={inView ? { opacity: 1, clipPath: 'inset(0 0 0 0)' } : {}} 
      transition={{ duration: 2, ease: [0.42, 0, 0.58, 1] }}   className=' font-bold sm:text-[1.875rem] text-[1.5rem] mb-5'>
         Why Choose.<br /> <span className=' text-Teal'>Sri Amman College of Nursing</span>
          <p className=' text-sm text-gray leading-7 font-medium mb-4'>Our aim is to impart nursing education of high standard so that the student passing out from this institute will be able to render quality nursing care to all the clients in the hospital, community and the various settings with compassion and care.</p>
          <button className='py-3 px-6 text-sm border border-solid border-gray rounded-lg font-bold'>Know More</button>
        </motion.div>
      </div>
    </div>
  )
}

export default About
