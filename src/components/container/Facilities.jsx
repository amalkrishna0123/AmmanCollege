import React from 'react'
import Trichy from "../../images/Trichy.jpg"
import Labs from "../../images/Labs.jpg"
import Hostel from "../../images/Hostel.jpg"
import Hospital from "../../images/Hospital.png"
import Sundaram from "../../images/Sundaram.jpg"

const Facilities = () => {
  return (
    <div className=' grid place-items-center gap-10 md:grid-cols-3 sm:grid-cols-2'>
      <div className=' w-[250px] h-[300px] bg-Teal rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
        <div className=' w-full h-[70%] bg-red-700 rounded-lg'>
            <img className=' w-full h-full object-cover rounded-lg' src={Trichy} alt="" />
        </div>
        <div>
            <div className='text-sm font-medium text-center mt-10 text-white'>Located within Trichy city</div>
        </div>
      </div>

      <div className=' w-[250px] h-[300px] bg-Teal rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
        <div className=' w-full h-[70%] bg-red-700 rounded-lg'>
            <img className=' w-full h-full object-cover rounded-lg' src={Labs} alt="" />
        </div>
        <div>
            <div className='text-sm font-medium text-center mt-10 text-white'>Well Equipped Labs & Libraries</div>
        </div>
      </div>

      <div className=' w-[250px] h-[300px] bg-Teal rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
        <div className=' w-full h-[70%] bg-red-700 rounded-lg'>
            <img className=' w-full h-full object-cover rounded-lg' src={Hostel} alt="" />
        </div>
        <div>
            <div className='text-sm font-medium text-center mt-10 text-white'>Premium Hostels</div>
        </div>
      </div>
      <div className=' w-[250px] h-[300px] bg-Teal rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
        <div className=' w-full h-[70%] bg-red-700 rounded-lg'>
            <img className=' w-full h-full object-cover rounded-lg' src={Hospital} alt="" />
        </div>
        <div>
            <div className='text-sm font-medium text-center mt-10 text-white'>Internship at Multispeciality Hospitals</div>
        </div>
      </div>

      <div className=' w-[250px] h-[300px] bg-Teal rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
        <div className=' w-full h-[70%] bg-red-700 rounded-lg'>
            <img className=' w-full h-full object-cover rounded-lg' src={Sundaram} alt="" />
        </div>
        <div>
            <div className='text-sm font-medium text-center mt-10 text-white'>Sundaram Multispeciality Hospital Trichy (Parent)</div>
        </div>
      </div>
    </div>
  )
}

export default Facilities
