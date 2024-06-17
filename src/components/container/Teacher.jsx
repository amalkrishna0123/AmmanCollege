import React from 'react'
import teacher from "../../images/teacher.png"
import teacher2 from "../../images/teacher2.png"
import {accordions} from "../../Data"
import Accordion from './Accordion'
import MissionVission from './MissionVission'

const Teacher = () => {
  return (
    <div className='section' id='teacher'>
      <div className=' grid sm:grid-cols-2 place-items-center gap-8'>
        <div className=' pl-5'>
          <div className=' font-bold sm:text-[1.875rem]  text-[1.5rem] mb-5'>
            Lorem, ipsum<span className='text-Teal'> Lorem ipsum </span> <br /> Lorem, ipsum dolor.
          </div>
          <p className=' text-sm leading-7 text-gray mb-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui, ducimus quibusdam nulla, optio quam officiis dicta nemo obcaecati sed, dolorem hic blanditiis. Facere nostrum, neque eum saepe sint architecto cum.</p>
          <button className='py-3 px-6 bg-Teal text-sm rounded-lg text-white font-medium'>Lorem ipsum</button>
        </div>
        <div className=' p-4 md:w-3/4 sm:row-start-1'>
          <img src={teacher} alt="" />
        </div>
      </div>

      <div className=' grid sm:grid-cols-2 place-items-center gap-8'>
        <div className=' pl-5'>
          <div className=' font-bold sm:text-[1.875rem]  text-[1.5rem] mb-5'>
            Lorem <span className='text-Teal'>Lorem ipsum.</span> <br /> Lorem ipsum.
          </div>
          <p className=' text-sm leading-7 text-gray mb-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui, ducimus quibusdam nulla, optio quam officiis dicta nemo obcaecati sed, dolorem hic blanditiis. Facere nostrum, neque eum saepe sint architecto cum.</p>
          <button className='py-3 px-6 bg-Teal text-sm rounded-lg text-white font-medium'>Get Started</button>
        </div>
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
