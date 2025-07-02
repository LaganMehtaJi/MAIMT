import React from 'react';

const index = (props) => {
  return (
    <div className="w-full flex justify-center py-8">
      <div className="relative w-48 h-64 sm:w-56 sm:h-72 md:w-64 md:h-80 rounded-lg md:rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
        {/* Text above image */}
        <div className=" absolute top-0 left-0 right-0 z-10 p-4 text-center bg-gradient-to-b from-black/70 to-transparent">
          <h1 className=" mt-60 text-white text-lg sm:text-xl md:text-2xl font-bold">{props.name}</h1>
          <h2 className="text-indigo-300 text-sm sm:text-base">{props.position}</h2>
        </div>
        
        {/* Full-size image */}
        <img 
          src={props.image} 
          alt="Profile" 
          className="w-full h-full object-cover"
        />
        
        {/* Border effect */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-indigo-600"></div>
      </div>
    </div>
  );
};

export default index;