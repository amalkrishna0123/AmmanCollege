import React from 'react'
import {AiOutlineUser, AiOutlineStar} from "react-icons/ai"

const Courses = ({image,category,title,participants,rating,price}) => {
  return (
    <div>
      <div className=' p-2 shadow-lg min-w-[15rem] h-[300px] bg-white rounded-md'>
        <img className=' h-[60%]' src={image} alt="" />
        <div className='mt-2 text-xs text-Teal'>{category}</div>
        <div className=' text-sm mt-2 font-bold'>{title}</div>
        <div className=' flex items-center justify-between'>
            <div className=' flex items-center gap-2'>
                <div className=' bg-Solitude p-1 rounded-full'>
                    <AiOutlineUser className='text-Teal'/>
                </div>
                <div className=' text-sm font-bold'>
                    {participants}
                </div>
            </div>
        
        <div className=' flex items-center gap-2'>
            <div className=' bg-Solitude p-1 rounded-full'>
                <AiOutlineStar className=' text-[#ecff19]' />
            </div>
            <div className=' font-bold text-sm'>{rating}</div>
        </div>
        {/* <div className=' text-sm font-bold'>
            
        </div> */}
        </div>
      </div>
    </div>
  )
}

export default Courses
