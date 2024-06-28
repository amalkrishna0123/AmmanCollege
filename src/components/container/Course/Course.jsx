import React from 'react'
import { categories } from "../../../Data"
import {courses} from "../../../Data"
import Category from './Category'
import Courses from './Courses'
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Facilities from '../Facilities'


const Course = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div className='section' id='courses'>
      <motion.div ref={ref}
      initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }} 
      animate={inView ? { opacity: 1, clipPath: 'inset(0 0 0 0)' } : {}} 
      transition={{ duration: 2, ease: [0.42, 0, 0.58, 1] }}   className=' text-center'>
        <div className=' sm:text-3xl text-2xl font-bold mb-5'>B.Sc Nursing at <span className='text-Teal'>Sri Amman College of Nursing</span></div>
        <p className=' text-sm text-gray leading-7 max-w-[700px] mx-auto'>At Sri Amman College of Nursing, our B.Sc Nursing program ensures academic excellence with a comprehensive curriculum, hands-on clinical training in hospitals and communities, and professional growth through leadership opportunities and career support.</p>
      </motion.div>
      <div className='flex justify-center items-center'>
        <div className='Card grid md:grid-cols-3 sm:grid-cols-2 mt-12 gap-8'>
          {categories.map(category => (
            <Category key={category.id} img={category.img} category={category.category} />
          ))}
        </div>
      </div>
      <div>
        <div className='text-xl font-bold mt-32 text-center'>Our <span className=' text-Teal'>Facilities</span></div>
        <div className=' mt-12'>
          <Facilities />
        </div>
      </div>
        {/* <div className='text-xl font-bold mt-32'>Our <span className=' text-Teal'>Gallery</span></div>
        <div className=' mt-12 overflow-x-hidden w-full relative overflow-y-hidden'>
            <div className=' flex gap-8 md:w-full sm:w-[170%] xs:w-[340%] w-[480%] animate-slide '>
              {courses.map(course =>{
                return <Courses key={course.id} {...course}/>
              } )}
            </div>
        </div> */}
    </div>
  )
}

export default Course
