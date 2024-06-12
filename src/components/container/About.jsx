import React from 'react'
import about from "../../images/About.jpg"

const About = () => {
  return (
    <div className='section' id='about'>
      <div className=' grid md:grid-cols-2 gap-8 place-items-center'>
        <div className=' border-[3px] border-solid border-Teal rounded-lg'>
          <img src={about} className=' p-4' alt="" />
        </div>
        <div className=' font-bold sm:text-[1.875rem] text-[1.5rem] mb-5'>
         Lorem, ipsum dolor.<br /> best <span className=' text-Teal'>Lorem ipsum dolor sit amet.</span>
          <p className=' text-sm text-gray leading-7 font-medium mb-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum cupiditate consectetur, sint asperiores quam aut molestias optio soluta. Distinctio perspiciatis ipsa magnam enim cupiditate! Tenetur necessitatibus saepe distinctio laborum ipsam.</p>
          <button className='py-3 px-6 text-sm border border-solid border-gray rounded-lg font-bold'>Know More</button>
        </div>
      </div>
    </div>
  )
}

export default About
