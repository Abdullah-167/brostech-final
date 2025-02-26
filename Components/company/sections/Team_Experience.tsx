import React from 'react'

export default function Team_Experience() {
  return (
    <>
      <div className='team-experience bg-gradient-to-r from-yellow-100 to-blue-100'>
        <div className='lg:p-32 md:p-16 sm:p-5 lg:mx-48 md:mx-32 sm:mx-14 text-center'>
          <h1 className='text-4xl font-bold py-5'>A Team built on Experience</h1>
          <h3 className='text-lg'>
            Since 2016, our dedication has been assisting customers, ensuring they receive top-notch custom services tailored to empower them in advancing, expanding, and innovating within their industry.
          </h3>
          {/* Centering the button */}
          <div className="flex justify-center mt-5">
            <button className='bg-blue-700 text-white px-6 py-3 rounded-md font-semibold'>
              Meet the Team
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
