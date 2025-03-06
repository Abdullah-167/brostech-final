import Container from '@/Components/Container';
import React from 'react';
import { FaUsers, FaBullseye, FaCogs } from "react-icons/fa"; // New icons

export default function CardData() {
  return (
    <Container>
      <div>
        {/* Responsive Grid Layout */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-16 mb-10'>
          
          {/* Card 1 - Team */}
          <div className="p-6 bg-white rounded-lg text-center shadow-lg">
            <FaUsers color='green' size={44} className="mx-auto" />
            <h1 className='text-2xl font-bold py-3'>Team</h1>
            <h5 className='text-lg'>
              Our strength lies in our dedicated team. We cultivate an environment 
              of innovation, teamwork, and continuous growth to ensure we deliver 
              impactful solutions for our clients.
            </h5>
          </div>

          {/* Card 2 - Vision */}
          <div className="p-6 bg-white rounded-lg text-center shadow-lg">
            <FaBullseye color='green' size={44} className="mx-auto" />
            <h1 className='text-2xl font-bold py-3'>Vision</h1>
            <h5 className='text-lg'>
              We aim to lead the digital transformation by creating intuitive, 
              scalable, and secure technology solutions that empower businesses 
              to thrive in an evolving landscape.
            </h5>
          </div>

          {/* Card 3 - Workflow */}
          <div className="p-6 bg-white rounded-lg text-center shadow-lg">
            <FaCogs color='green' size={44} className="mx-auto" />
            <h1 className='text-2xl font-bold py-3'>Workflow</h1>
            <h5 className='text-lg'>
              With a structured approach and agile methodology, we optimize processes 
              for efficiency, ensuring timely and high-quality project execution 
              that meets business objectives.
            </h5>
          </div>

        </div>
      </div>
    </Container>
  );
}
