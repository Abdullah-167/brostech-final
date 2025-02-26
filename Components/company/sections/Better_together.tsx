import React from 'react'
import Image from 'next/image'

export default function Better_together() {
  return (
    <>
    <div className='main-div mt-24'>
      <div className='lg:flex md:flex  px-4 gap-20 m-14'>
        <div>
            <h1 className='lg:text-5xl md:text-3xl sm:text-xl font-bold lg:py-5 md:py-3 sm:py-1'>Better together</h1>
            <h1 className='lg:text-lg md:text-sm  lg:py-7 md:py-3 sm:py-1'>We know that work is important, but so is play! We respect all of our partnerships, and we make every effort to engage in fun ways that solve critical problems and leave a smile on your face at the same time.</h1>
            <h1 className='lg:text-lg md:text-sm '>We love our job and love helping our clients. Life is just too short to not enjoy every minute!</h1>
            <div className="flex justify-center lg:mt-5 sm:pt-1">
            <button className='bg-blue-700 text-white px-6 py-3 rounded-md font-semibold'>
              Get in touch
            </button>
          </div>
        </div>
        {/* image section */}
         <div className="lg:w-[200vw] md:w-[200vw] h-[60vh] flex justify-center">
                  <Image 
                    src="/company_together.jpg" // Replace with your actual image path
                    alt="Description of image"
                    layout="intrinsic" // Ensures responsiveness
                    width={1400} // Adjusted for better scaling
                    height={400} // Adjusted for 40% height equivalent
                    className="rounded-lg shadow-lg w-full h-full object-cover"
                    priority // Optimizes loading
                  />
                </div>

      </div>
      </div>
    </>
  )
}
