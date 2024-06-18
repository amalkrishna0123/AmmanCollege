import React from 'react'
import { categories } from "../../../Data"
import {courses} from "../../../Data"
import Category from './Category'
import Courses from './Courses'
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';


const Course = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div className='section' id='courses'>
      <motion.div ref={ref}
      initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }} 
      animate={inView ? { opacity: 1, clipPath: 'inset(0 0 0 0)' } : {}} 
      transition={{ duration: 2, ease: [0.42, 0, 0.58, 1] }}   className=' text-center'>
        <div className=' sm:text-3xl text-2xl font-bold mb-5'>Our Top <span className='text-Teal'>Courses</span></div>
        <p className=' text-sm text-gray leading-7 max-w-[700px] mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, illo consectetur error adipisci sint saepe laboriosam necessitatibus totam fugit libero officia tempore, quas, unde itaque animi omnis? Laborum, tenetur cumque! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, alias.</p>
      </motion.div>
      <div className=' grid md:grid-cols-4 sm:grid-cols-2 mt-12 gap-8'>
            {categories.map(category => (
                <Category key={category.id} icon={category.icon} category={category.category} />
            ))}
        </div>
        <div className='text-xl font-bold mt-32'>Our <span className=' text-Teal'>Gallery</span></div>
        <div className=' mt-12 overflow-x-hidden w-full relative overflow-y-hidden'>
            <div className=' flex gap-8 md:w-full sm:w-[170%] xs:w-[340%] w-[480%] animate-slide '>
              {courses.map(course =>{
                return <Courses key={course.id} {...course}/>
              } )}
            </div>
        </div>
    </div>
  )
}

export default Course
