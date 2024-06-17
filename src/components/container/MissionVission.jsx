import React from 'react'


const MissionVission = () => {
  return (
    <div className=' p-10 pb-28'>
      <div className=' mb-8'>
        <div className='text-center font-bold text-[1.879rem] mb-10'>Mission & <span className=' text-Teal'>Vision</span></div>
        <div className=' '>
          <div className=' Misson-bg mb-10 shadow-md'>
              <div className=' text-[1.5rem] sm:text-[1.875rem] font-medium'>Our <span className=' text-Teal'>Mission</span></div>
              <div className=' text-sm text-gray'>To be the center of excellence Regionally in Nursing Education, Research and Community Services.</div>
          </div>
        </div>

        <div>
          <div className='Misson-bg shadow-md'>
              <div className=' text-[1.5rem] sm:text-[1.875rem] font-medium'>Our <span className=' text-Teal'>Vision</span></div>
              <div className=' text-sm flex flex-col gap-5 text-gray'>
                  <div>To prepare excellence nurses who will work in the hospital and community with dedication, devotion, compassion and kindness.</div>
                  <div>To provide accessible, affordable high-quality education to divorce students for the development of nurse practioners at all entries of practice.</div>
              </div>
          </div>
        </div>

      </div>
      <div className='  mx-auto text-center'>
        <div className='w-[200px] h-[200px] mx-auto rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)] mb-5'>
          <img className='w-full h-full object-cover bg-top mb-2 rounded-lg' src="https://res.cloudinary.com/dqydgc2ky/image/upload/v1718616701/ChairmanOrg_svw8um.jpg" alt="" />
        </div>
        <div className=' font-semibold'>Our Chairman</div>
        <div className=' font-bold text-Teal'>Mr.Pon Selvaraj</div>
        <div className='text-sm text-gray'>Sri Amman Group of Educational Institution</div>
      </div>
    </div>
  )
}

export default MissionVission
