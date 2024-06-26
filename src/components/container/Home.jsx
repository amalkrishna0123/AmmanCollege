import React from 'react'
import hero from "../../images/bannerimg.png"
import {logos} from "../../Data"
import {motion} from "framer-motion"
import MissionVission from './MissionVission'

const Home = () => {
  return (
    <div className='section py-36' id='home'>
      <div className=' md:flex items-center justify-center'>
        <div>
          {/* <motion.div initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }} 
      animate={{ opacity: 1, clipPath: 'inset(0 0 0 0)' }} 
      transition={{ duration: 2, ease: "easeInOut" }}   className=' font-bold text-sm text-Teal mb-4'>SRI AMMAN COLLEGE OF NURSING</motion.div> */}
          <motion.div initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }} 
      animate={{ opacity: 1, clipPath: 'inset(0 0 0 0)' }} 
      transition={{ duration: 2, ease: "easeInOut" }}   className=' sm:text-[2.5rem] text-[1.825rem] font-bold'>
            Welcome To<br /> <span className=' text-Teal'>Sri Amman College of Nursing</span><br /> 
          </motion.div>
          <motion.p initial={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }} 
      animate={{ opacity: 1, clipPath: 'inset(0 0 0 0)' }} 
      transition={{ duration: 2, ease: "easeInOut" }}  className='text-sm leading-7 text-gray max-w-sm'>At Sri Amman College of Nursing, we provide quality nursing education so our graduates can offer compassionate and high-standard care in hospitals, communities, and beyond.</motion.p>
          <div className='mt-6'>
            <button className='px-6 py-3 font-bold text-white bg-Teal  rounded-lg mr-4 text-sm'>Get Started</button>
            <button className=' px-6 py-3 font-bold border border-solid border-gray rounded-lg text-sm'>Discover</button>
          </div>
        </div>
        <div className=' md:w-[60%]'>
          <img src={hero} alt="" />
        </div>
      </div>
      <div>
        <p className=' text-center text-xl'>Launch your nursing career<span className=' text-Teal'> with our comprehensive B.Sc. Nursing program.</span></p>
        
        {/* <div className=' flex items-center justify-center flex-wrap gap-8 p-2'>
          {logos.map((logo, index) => {
            return (
              <div className=" w-24" key={index}>
                <img src={logo} className="w-full object-cover" alt="" />
              </div>
            )
          })}
        </div> */}
      </div>

      {/* Mission & Vision */}
      <div className=' mt-12 max-w-[700px] mx-auto'>
        <MissionVission />
      </div>
    </div>
  )
}

export default Home
