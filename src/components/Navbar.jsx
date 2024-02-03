import React, { useState } from 'react'
import { FaBars, FaFacebook, FaInstagram, FaLinkedin, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll'
import Logo from '../assets/G.png'

const Navbar = () => {
    const [nav, setNav] =useState(false)
    const handleClick = () => setNav (!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
        <img src={Logo} alt="Logo" style={{width: '100px'}} />
        </div>

        {/* Menu*/}

        <div className='hidden md:flex'>
         <ul className='hidden md:flex'>
           <li>
           <Link to="home" smooth={true} duration={500} >
          Home
        </Link>
           </li>
           <li>
           <Link to="education" smooth={true} duration={500} >
          Education
        </Link>
           </li>
           <li>
           <Link to="work" smooth={true} duration={500} >
          About
        </Link>
           </li>
           </ul>
        </div>

           {/* end of menu*/}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>


          {/* mobile menu*/}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
         <li className='py-6 text-4xl'>
         <Link onClick={handleClick} to="home" smooth={true} duration={500} >
          Home
        </Link></li>
         <li className='py-6 text-4xl'><Link onClick={handleClick} to="education" smooth={true} duration={500} >
          Education
        </Link></li>
         <li className='py-6 text-4xl'><Link onClick={handleClick} to="Work" smooth={true} duration={500} >
          Work
        </Link></li>
        </ul>




          {/* social icons*/}
          <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
              <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
              <a className='flex justify-between items-center w-full text-gray-300'
               href="https://www.linkedin.com/in/renztandingan/" target="_blank" rel="noopener noreferrer">
               LinkedIn <FaLinkedin size={30}/>
              </a>

              </li>

              <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-800'>
                <a className='flex justify-between items-center w-full text-gray-300'
                 href="https://www.facebook.com/profile.php?id=100085103470238"  target="_blank" rel="noopener noreferrer">
                  Facebook <FaFacebook size={30}/>

                </a>
              </li>

              <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-600'>
                <a className='flex justify-between items-center w-full text-gray-300'
                 href="https://www.instagram.com/renz_abrigo/"  target="_blank" rel="noopener noreferrer">
                  Instagram <FaInstagram size={30}/>

                </a>
              </li>
            </ul>

          </div>
    </div>
  )
}

export default Navbar