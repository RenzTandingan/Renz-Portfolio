import React from 'react'

import central from '../assets/talogtog.jpg'
import manghi from '../assets/manghi.jpg'
import phinma from '../assets/phinma.jpg'

const Education = () => {
  return (
    <div name='education' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        {/* container*/}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-yellow-600 '> Education</p>
                <p className='py-4'>This is the schools I went Through</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 '>
                <div className='py-6 px-4 justify-between shadow-md shadow-[#040C16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={central}alt="Central Logo" />
            <p className='my-4 text-2xl '>Talogtog Elementary School</p>
            <p> 2006-2014</p>
                </div>

                <div className='py-6 px-4 justify-between shadow-md shadow-[#040C16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={manghi}alt="Manghi Logo" />
            <p className='my-4 text-2xl '>Mangaldan National High School</p>
            <p> 2014-2020</p>
                </div>
                
                <div className='py-6 px-4 shadow-md shadow-[#040C16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={phinma}alt="Phinma Logo" />
            <p className='my-4 text-2xl '>Phinma University of Pangasinan</p>
            <p> 2020-2025</p>
                </div>
                
            </div>
        </div>
      
        </div>
        
  )
}

export default Education