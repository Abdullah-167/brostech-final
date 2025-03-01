import Container from '@/Components/Container';
import React from 'react'
import { LuRectangleVertical } from "react-icons/lu";

export default function CardData() {
  return (
    <Container>
    <div>
    {/* Responsive Grid Layout */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16'>
        
        {/* Card 1 */}
        <div className="p-6 bg-white  rounded-lg text-center">
            <LuRectangleVertical color='blue' size={44} className="mx-auto"/>
            <h1 className='text-2xl font-bold py-3'>People</h1>
            <h5 className='text-lg'>At Broshtech, our people are our greatest asset. We foster a culture of collaboration, continuous learning, and mutual respect, enabling every team member to unleash their full potential and deliver exceptional results for our clients.</h5>
        </div>

        {/* Card 2 */}
        <div className="p-6 bg-white  rounded-lg text-center">
            <LuRectangleVertical color='blue' size={44} className="mx-auto"/>
            <h1 className='text-2xl font-bold py-3'>Purpose</h1>
            <h5 className='text-lg'>We exist to revolutionize the digital realm, championing simplicity, security, and innovation. Our mission is to craft tailored solutions that empower businesses to thrive in the fast-paced world of technology.</h5>
        </div>

        {/* Card 3 */}
        <div className="p-6 bg-white  rounded-lg text-center">
            <LuRectangleVertical color='blue' size={44} className="mx-auto"/>
            <h1 className='text-2xl font-bold py-3'>Process</h1>
            <h5 className='text-lg'>Our streamlined processes drive efficiency and excellence. Through rigorous planning, agile methodologies, and continuous refinement, we ensure the seamless delivery of high-quality software solutions that exceed client expectations.</h5>
        </div>

      </div>
    </div>
    </Container>
  )
}
