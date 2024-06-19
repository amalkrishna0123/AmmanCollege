import React from 'react';
import { motion } from "framer-motion"
import { InView } from 'react-intersection-observer';

const Category = ({ img, category }) => {
    return (
        <InView triggerOnce>
          {({ inView, ref }) => (
            <motion.div
              ref={ref}
              initial={{ y: -50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 2, ease: "easeOut" }}
              className='flex items-center flex-col bg-white gap-4 p-8 rounded-md w-[250px] h-[300px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'
            >
              <div className='w-full h-[70%] flex justify-center items-center'>
                <img src={img} alt={category} className='object-cover w-full h-full rounded-md' />
              </div>
              <div className='text-xl text-Teal text-center font-medium'>{category}</div>
              <a href="" className='text-sm text-gray'>View More</a>
            </motion.div>
          )}
        </InView>
      );
};

export default Category;
