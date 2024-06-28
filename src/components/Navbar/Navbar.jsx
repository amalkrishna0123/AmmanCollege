import React, { useEffect, useState } from 'react'
import {navLinks} from "../../Data"
import {HiMenuAlt1, HiX} from "react-icons/hi"
import NavLink from './NavLink'
import MobileNavLink from './MobileNavLink'

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const [active,setActive] = useState(null)

  useEffect(() => {
    const scrollActive = () => {
      setActive(window.scrollY > 20)
    }
    window.addEventListener("scroll",scrollActive)
    return () => window.removeEventListener('scroll',scrollActive)
  },[active])

  const showMenuList = () => {
    setToggle(!toggle)
  }
  return (
    <div className={`${active? " shadow-lg bg-Solitude" : ""} fixed top-0 w-full left-0 z-20 `}>
      <div>
        <div className={`${active? " py-2 transition-all duration-500" : "py-4"} container  mx-auto flex items-center justify-between px-2 `}>
          <div className=' flex items-center gap-4'>
            <HiMenuAlt1 onClick={showMenuList} className=' text-3xl sm:hidden cursor-pointer'/>
            <div className=' text-xl text-Teal uppercase tracking-wide font-bold'>
              <img className=' w-auto h-[80px]' src="https://res.cloudinary.com/dqydgc2ky/image/upload/v1718206470/Main_Logo_fgtobj.png" alt="" />
            </div>
            <div className=' text-Teal font-bold text-[10px] sm:text-base md:text-lg'>SRI AMMAN COLLEGE OF NURSING</div>
          </div>
          <div className=' sm:flex items-center hidden'>
            {navLinks.map(navlink => {
              return <NavLink key={navlink.id} {...navlink}/>
            })}
          </div>
          {/* <button className=' py-3 px-6 font-bold text-sm border border-solid rounded-lg border-gray'>Sign Up</button> */}
          {toggle && (
            <div className=' fixed w-96 top-0 h-full left-0 z-[100] bg-Teal text-white flex flex-col justify-center items-center shadow-lg gap-8 py-8'>
            {navLinks.map(navlink => {
              return ( 
                <MobileNavLink key={navlink.id} {...navlink} setToggle = {setToggle} />
              )
            })}
            <HiX className=' absolute right-12 top-12 text-3xl cursor-pointer' onClick={showMenuList}/>
          </div>
          )
          
          }
        </div>
      </div>
    </div>
  )
}

export default Navbar
