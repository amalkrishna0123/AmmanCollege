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
      <div className=' grid md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 place-items-center gap-8 text-white'>
        <div>
          <div className=' font-semibold mb-6'>Get Started</div>
          <p className=' text-sm leading-7'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque corrupti aliquam eos repellat eius tempore.</p>
        </div>
        <div>
          <div className=' font-semibold mb-6'>Services</div>
            <div className=' flex flex-col gap-4'>
              <a href="" className=' text-sm hover:underline'>B.Sc Nursing</a>
              <a href="" className=' text-sm hover:underline'>G.N.M</a>
              <a href="" className=' text-sm hover:underline'>Paramedical</a>
              <a href="" className=' text-sm hover:underline'>lorem</a>
            </div>
        </div>
        <div>
          <div className=' font-semibold mb-6'>lorem</div>
          <div className=' flex flex-col gap-4'>
            <a href="" className='text-sm hover:underline'>Privacy Policy</a>
            <a href="" className='text-sm hover:underline'>Sitemap</a>
            <a href="" className='text-sm hover:underline'>Careers</a>
            <a href="" className='text-sm hover:underline'>Terms & Conditions</a>
          </div>
        </div>
        <div>
        <div className=' font-semibold mb-6'>lorem</div>
          <div className=' flex flex-col gap-4'>
            <a href="" className='text-sm hover:underline'>Privacy Policy</a>
            <a href="" className='text-sm hover:underline'>Sitemap</a>
            <a href="" className='text-sm hover:underline'>Careers</a>
            <a href="" className='text-sm hover:underline'>Terms & Conditions</a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Footer
