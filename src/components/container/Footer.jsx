import React from 'react'
import { BsFacebook, BsInstagram, BsWhatsapp, BsTwitterX} from "react-icons/bs"
import { motion } from "framer-motion"

const Footer = () => {
  return (
    <motion.div initial={{height:0}}
      whileInView={{ height:"auto"}}
      transition={{ duration : 1}}
      className=' bg-Teal p-10'
    >
      <div className=' grid md:grid-cols-3 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 place-items-start place-content-center gap-8 text-white'>
        <div>
          <div className=' font-semibold mb-6'>Get Started</div>
          <p className=' text-sm leading-7'>Pursuing a B.Sc. in Nursing at Sri Amman College provides top-notch education and practical training, preparing you for a rewarding career in healthcare.</p>
        </div>
        <div>
          <div className=' font-semibold mb-6'>Services</div>
            <div className=' flex flex-col gap-4'>
              <a href="" className=' text-sm hover:underline'>Academic Excellence</a>
              <a href="" className=' text-sm hover:underline'>Clinical Training</a>
              <a href="" className=' text-sm hover:underline'>Professional Development</a>
              {/* <a href="" className=' text-sm hover:underline'>lorem</a> */}
            </div>
        </div>
        <div>
          <div className=' font-semibold mb-6'>Useful Links</div>
          <div className=' flex flex-col gap-4'>
            <a href="" className='text-sm hover:underline'>Home</a>
            <a href="" className='text-sm hover:underline'>About Us</a>
            <a href="" className='text-sm hover:underline'>Course</a>
            <a href="" className='text-sm hover:underline'>Teachers</a>
          </div>
        </div>
        {/* <div>
        <div className=' font-semibold mb-6'>lorem</div>
          <div className=' flex flex-col gap-4'>
            <a href="" className='text-sm hover:underline'>Privacy Policy</a>
            <a href="" className='text-sm hover:underline'>Sitemap</a>
            <a href="" className='text-sm hover:underline'>Careers</a>
            <a href="" className='text-sm hover:underline'>Terms & Conditions</a>
          </div>
        </div> */}
      </div>
    </motion.div>
  )
}

export default Footer
