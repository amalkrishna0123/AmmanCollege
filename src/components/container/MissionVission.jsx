import React from 'react'
import Chairman from "../../images/chairman.jpg"
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';


const MissionVission = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div className=' p-10 sm:flex sm:items-center justify-center gap-10'>
      <motion.div   ref={ref}
      initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }} 
      animate={inView ? { opacity: 1, clipPath: 'inset(0 0 0 0)' } : {}} 
      transition={{ duration: 2, ease: [0.42, 0, 0.58, 1] }}  className=' mb-8'>
        <div className='text-center font-bold text-[1.879rem] mb-10'>Mission & <span className=' text-Teal'>Vision</span></div>
        <div className=' '>
          <div className=' Misson-bg mb-10 shadow-md'>
              <div className=' text-[1.5rem] sm:text-[1.875rem] font-medium'>Our <span className=' text-Teal'>Mission</span></div>
              <div className=' text-sm text-gray'>To be the center of excellence Regionally in Nursing Education, Research and Community Services.</div>
          </div>
        </div>

        <div>
          <div className='Misson-bg shadow-md'>
              <div className=' text-[1.5rem] sm:text-[1.875rem] font-medium'>Our <span className=' text-Teal'>Vision</span></div>
              <div className=' text-sm flex flex-col gap-5 text-gray'>
                  <div>To prepare excellence nurses who will work in the hospital and community with dedication, devotion, compassion and kindness.</div>
                  <div>To provide accessible, affordable high-quality education to divorce students for the development of nurse practioners at all entries of practice.</div>
              </div>
          </div>
        </div>

      </motion.div  >
      <div className='  mx-auto text-center'>
        <div className='w-[200px] h-[200px] mx-auto rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] mb-5'>
          <img className='w-full h-full object-cover mb-2 rounded-lg' src={Chairman} alt="" />
        </div>
        <div className=' font-semibold'>Our Chairman</div>
        <div className=' font-bold text-Teal'>Mr.Pon Selvaraj</div>
        <div className='text-sm text-gray'>Sri Amman Group of Educational Institution</div>
      </div>
    </div>
  )
}

export default MissionVission
