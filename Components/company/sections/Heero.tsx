import React from 'react'
import Image from 'next/image'

export default function Heero() {
  return (
    <>
      <div className='heero flex flex-col items-center text-center px-4 '>
        
        {/* Text Section */}
        <div className='mb-6'>
          <button className='bg-slate-400 px-6 py-3 text-2xl font-bold rounded-lg'>
            About
          </button>
          <h1 className='text-7xl font-bold py-5'>
            Where Code Meets Creativity
          </h1>
          <h1 className='text-2xl'>
            Everyone has a story. Here is ours becoming a leading Software Development Agency
          </h1>
        </div>

        {/* Image Section */}
        <div className="w-[90vw] h-[40vh] flex justify-center">
          <Image 
            src="/abc_company.avif" // Replace with your actual image path
            alt="Description of image"
            layout="intrinsic" // Ensures responsiveness
            width={900} // Adjusted for better scaling
            height={400} // Adjusted for 40% height equivalent
            className="rounded-lg shadow-lg w-full h-full object-cover"
            priority // Optimizes loading
          />
        </div>

      </div>
    </>
  )
}
