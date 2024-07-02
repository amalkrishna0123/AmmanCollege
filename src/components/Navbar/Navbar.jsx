import React, { useEffect, useState } from 'react'
import {navLinks} from "../../Data"
import {HiMenuAlt1, HiX} from "react-icons/hi"
import NavLink from './NavLink'
import MobileNavLink from './MobileNavLink'
import {Link} from "react-scroll"

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
        <div className={`${active? " py-2 transition-all duration-500" : "py-4"} container  mx-auto flex items-center justify-between `}>
          <div className=' flex items-center xs:gap-4 gap-2'>
            <HiMenuAlt1 onClick={showMenuList} className=' text-3xl sm:hidden cursor-pointer'/>
            <div className=' text-xl text-Teal uppercase tracking-wide font-bold'>
              <img className=' w-auto h-[80px]' src="https://res.cloudinary.com/dqydgc2ky/image/upload/v1718206470/Main_Logo_fgtobj.png" alt="" />
            </div>
            <div>
              <div className=' text-Teal font-bold text-[15px] sm:text-base md:text-lg leading-[17px] mb-2'>SRI AMMAN COLLEGE OF NURSING</div>
              <div className=' text-[10px] sm:pr-5 pr-2 font-semibold sm:text-sm leading-[11px]'>Affiliated to Dr.M.G.R. Medical University, TNMC & INC</div>
            </div>
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
          <div className=' flex justify-center items-center sm:hidden mb-3'>
            <ul className=' flex text-[12px]'>
              <li id='1' className=' border px-2 xs:px-5 xs:text-sm border-Teal cursor-pointer'>
              <Link to='home' duration={500} smooth={true} spy={true} offset={-150}>Home</Link></li>
              <li id='2' className=' border px-2 xs:px-5 xs:text-sm border-Teal cursor-pointer'><Link to='about' duration={500} smooth={true} spy={true} offset={-150}>About</Link></li>
              <li id='3' className=' border px-2 xs:px-5 xs:text-sm border-Teal cursor-pointer'><Link to='courses' duration={500} smooth={true} spy={true} offset={-150}>Course</Link></li>
              <li id='4' className=' border px-2 xs:px-5 xs:text-sm border-Teal cursor-pointer'><Link to='teacher' duration={500} smooth={true} spy={true} offset={-150}>Gallery</Link></li>
              <li id='5' className=' border px-2 xs:px-5 xs:text-sm border-Teal cursor-pointer'><Link to='contact' duration={500} smooth={true} spy={true} offset={-150}>Contact</Link></li>
            </ul>
          </div>
    </div>
  )
}

export default Navbar
