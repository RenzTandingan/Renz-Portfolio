import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'


const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>

         {/* Container*/}
         <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-yellow-500'>Hi, My Name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#FFFF]'>Renz Tandingan</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Second Year IT Student.</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px] '>"Aspiring IT professional seeking opportunities to gain hands-on experience, eager to contribute and learn in a dynamic environment that fosters growth and innovation.".</p>
            <div>
            <a href="https://github.com/RenzTandingan" target="_blank" rel="noopener noreferrer">
           <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-yellow-600 hover:border-yellow-600'>Github Account 
                <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3' />
                </span>
                </button>
           </a>
            </div>

          
         </div>

    </div>
  )
}

export default Home