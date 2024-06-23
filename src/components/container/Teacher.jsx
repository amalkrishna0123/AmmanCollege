import React from 'react'
import teacher from "../../images/teacher.png"
import teacher2 from "../../images/teacher2.png"
import {accordions} from "../../Data"
import Accordion from './Accordion'
import MissionVission from './MissionVission'
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Teacher = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div className='section' id='teacher'>
      <div className=' grid sm:grid-cols-2 place-items-center gap-8'>
        <motion.div  ref={ref}
      initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }} 
      animate={inView ? { opacity: 1, clipPath: 'inset(0 0 0 0)' } : {}} 
      transition={{ duration: 2, ease: [0.42, 0, 0.58, 1] }}  className=' pl-5'>
          <div className=' font-bold sm:text-[1.875rem]  text-[1.5rem] mb-5'>
          Excellence in <span className='text-Teal'>Nursing Education </span> <br />and Community Services
          </div>
          <p className=' text-sm leading-7 text-gray mb-5'>Our mission is to be a regional center of excellence in nursing education, research, and community services. We aim to provide top-notch educational programs, lead cutting-edge research, and offer vital community services. Our dedicated teachers and staff foster an environment of academic rigor and compassionate care, ensuring our graduates excel in their professional roles.</p>
          <button className='py-3 px-6 bg-Teal text-sm rounded-lg text-white font-medium'>Lorem ipsum</button>
        </motion.div>
        <div className=' p-4 md:w-3/4 sm:row-start-1'>
          <img src={teacher} alt="" />
        </div>
      </div>

      <div className=' grid sm:grid-cols-2 place-items-center gap-8'>
        <motion.div  ref={ref}
      initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }} 
      animate={inView ? { opacity: 1, clipPath: 'inset(0 0 0 0)' } : {}} 
      transition={{ duration: 2, ease: [0.42, 0, 0.58, 1] }}  className=' pl-5'>
          <div className=' font-bold sm:text-[1.875rem]  text-[1.5rem] mb-5'>
          Preparing<span className='text-Teal'>Compassionate</span> <br /> and Skilled Nurses
          </div>
          <p className=' text-sm leading-7 text-gray mb-5'>Our vision is to prepare nurses who exemplify excellence in both hospital and community settings, showing dedication, devotion, compassion, and kindness. We offer accessible and affordable high-quality education to students from diverse backgrounds, ensuring all levels of nursing practice are developed. Our teachers and staff support students in becoming skilled nurse practitioners, ready to meet community healthcare needs.






</p>
          <button className='py-3 px-6 bg-Teal text-sm rounded-lg text-white font-medium'>Get Started</button>
        </motion.div>
        <div className=' p-4 md:w-3/4 sm:row-start-1'>
          <img src={teacher2} alt="" />
        </div>
      </div>

      <div className=' mt-12 max-w-[700px] mx-auto'>
        <MissionVission />
      </div>
      
      <div className=' text-center my-8 font-bold sm:text-[1.875rem] text-[1.5rem]'>
        Frequently <span className=' text-Teal'>Asked Questions</span>
      </div>
      <div className='mt-12 max-w-[700px] mx-auto'>
        {accordions.map(accordion => {
          return <Accordion key={accordion.id} {...accordion}/>
        })}
      </div>
    </div>
  )
}

export default Teacher
