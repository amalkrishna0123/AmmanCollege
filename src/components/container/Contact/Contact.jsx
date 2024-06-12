import React from 'react'
import { motion } from "framer-motion"

const Contact = () => {
  return (
    <div className='section' id='contact'>
      <div className=' text-center max-w-[600px] mx-auto'>
        <div className=' sm:text-3xl text-2xl font-bold mb-5'>Subscribe <span className=''>Newsletter</span></div>
        <p className=' text-sm leading-7 text-gray'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero fuga nihil dolorum doloremque modi iste nisi, natus doloribus voluptatibus nulla a reprehenderit, vitae consequatur! Error illo dicta explicabo quia repellendus! Lorem ipsum dolor sit amet.</p>
        <motion.form className=' mt-5'
          initial={{scale:0}}
          whileInView={{scale:1}}
          transition={{duration:0.4}}
        >
          <input type="text" placeholder='Enter your Email Address' className=' sm:p-3 text-sm p-2 outline-none shadow-md sm:w-72 w-60' />
          <button className=' text-sm text-white bg-Teal sm:p-3 p-2 shadow-md font-medium'>Subscribe</button>
        </motion.form>
      </div>
    </div>
  )
}

export default Contact
