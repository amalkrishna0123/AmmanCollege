import React from 'react'
import { motion } from "framer-motion"
import { FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className='section' id='contact'>
      <div className=' text-center max-w-[600px] mx-auto mb-10'>
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

      <div>
      <div className='font-bold text-[1.5rem] text-center mb-5'>Contact for more details</div>
      <div>
        <div className='flex items-center gap-4 justify-center'>
          <div className='text-green-600'><FaPhoneAlt /></div>
          <div className='text-center font-semibold text-teal-600'>+91 9746897234</div>
        </div>
        <div className='flex justify-center mt-4'>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7288.014707386012!2d78.57339483124352!3d10.780929929706463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa5f78b1d1f2b1%3A0xf6a5b64b9c29e8a!2sSri%20Amman%20College%20of%20Nursing!5e0!3m2!1sen!2sin!4v1718619505899!5m2!1sen!2sin" 
            width="600" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Contact
