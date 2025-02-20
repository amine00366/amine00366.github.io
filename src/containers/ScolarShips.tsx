'use client';
import { scholarshipsection } from '@/lib/utils/portfolio'; // Ensure this file contains your scholarship data
import { getId } from '@/lib/utils/helper';
import { ListItem, Wrapper } from '@/components';
import { getSectionAnimation } from '@/styles/animations';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const Scholarships = () => {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return domLoaded ? (
    <Wrapper id="scholarships" {...getSectionAnimation}>
      <h2 className="heading-secondary text-center text-gray-800">🎓 Scholarships</h2>
      
      <main className="flex flex-col items-center gap-16 lg:items-start">
        <div className="w-full">
          {/* Increased space below the text */}
          <p className="text-center text-gray-500 text-xl mb-20 leading-relaxed">
  Throughout my academic journey, I have been fortunate to pursue my studies at esteemed institutions across different countries.  
  These opportunities have allowed me to deepen my expertise in software engineering, cloud computing, and IoT,  
  while expanding my global perspective and technical skill set.
</p>



          {/* Grid layout for scholarship cards */}
          {scholarshipsection && scholarshipsection.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full justify-center items-center">
              {scholarshipsection.map((scholarship, index) => (
                <div
                  key={index}
                  className="relative flex flex-col items-center bg-gradient-to-br from-blue-500 to-purple-600 text-white 
                             p-6 rounded-2xl shadow-lg w-80 h-80 transition-transform transform hover:scale-105"
                >
                  {/* Logo at the top */}
                  <div className="absolute -top-10 flex justify-center items-center w-20 h-20 bg-white rounded-full shadow-md">
                    <Image
                      src={scholarship.image} // Path to the image
                      alt={scholarship.Title}
                      width={60}
                      height={60}
                      className="rounded-full object-cover"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-semibold text-center mt-10">{scholarship.Title}</h3>

                  {/* Duration */}
                  <p className="text-center text-gray-200">
                    <strong>From:</strong> {scholarship.from} <br />
                    <strong>To:</strong> {scholarship.to}
                  </p>

                  

                  {/* List of scholarships */}
                  <ul className="list-disc list-inside overflow-y-auto max-h-32 w-full text-center text-gray-100">
                    {scholarship.scolarShip.map((item) => (
                      <ListItem key={getId()}>{item}</ListItem>
                    ))}
                    {scholarship.field && (
                      <ListItem key={getId()}>{scholarship.field.join(', ')}</ListItem>
                      
                    
                  )}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </Wrapper>
  ) : (
    <></>
  );
};

export default Scholarships;
