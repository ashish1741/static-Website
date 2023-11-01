import React, { useState } from 'react';
import { review } from '../constant';

const Testimonial = () => {
  const [activeCardIndex, setActiveCardIndex] = useState(review.length - 1);

  const moveLeft = () => {
    setActiveCardIndex((prevIndex) => (prevIndex === 0 ? review.length - 1 : prevIndex - 1));
  };

  const moveRight = () => {
    setActiveCardIndex((prevIndex) => (prevIndex === review.length - 1 ? 0 : prevIndex + 1));
  };
  return (
    <div className="relative top-[30px] m-2 p-2">
      <div className="mt-3 mb-4 p-3 text-center">
        <h1 className='text-[#0B132A] p-4 font-[500] text-[35px]'>Trusted by Thousands of <br /> Happy Customer</h1>
        <p className='text-[#4F5665] font-normal text-[16px] leading-2'>These are the stories of our customers who have joined us with great <br /> pleasure when using this crazy feature.</p>
      </div>

      <div className="flex justify-center gap-8 overflow-hidden">
        {review.map((item, index) => (
            <div key={index} className={`max-w-md bg-white rounded-xl shadow-md overflow-hidden my-4 flex ${index === activeCardIndex  ?  'border border-[#F35855]' : ''}`}>
            <div className="md:flex-shrink-0">
              <img className="mt-4 p-2" src={item.image} alt={`Reviewer ${index} Image`} />
            </div>
            <div className="p-4 md:p-6 flex-1">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h2 className="text-lg md:text-xl font-bold">{item.name}</h2>
                  <p className="text-gray-500">{item.address}</p>
                </div>
                <div className="flex items-center">
                  <span className="text-black-500">{item.rating}</span>
                  <img src={item.icon} className='p-2' />
                </div>
              </div>
              <p className="text-sm md:text-base text-gray-700">{item.message}</p>
            </div>
          </div>
        ))}
      </div>
      {/* ---------------- slider */}
      <div className="flex ml-10 mt-2 gap-0">
        {review.map((ele,index)=>{
          return <span key={index} className={`w-2 m-2 h-2 rounded  ${index === activeCardIndex  ?  ' bg-[#F35855] w-4' : 'bg-slate-600'} `}></span>
        })}

      </div>
      <div className="flex justify-end mr-10 ">
  <button className=" border border-[#F53855] rounded-full p-2 focus:outline-none transition-colors duration-300 ease-in-out text-[#F53855] hover:bg-[#F53855] hover:text-white active:bg-[#F53855]" onClick={moveLeft}  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 19l-7-7 7-7"
      />
    </svg>
  </button>

  <button className=" border border-[#F53855] rounded-full p-2 ml-4 focus:outline-none transition-colors duration-300 ease-in-out text-[#F53855] hover:bg-[#F53855] hover:text-white active:bg-[#F53855]" onClick={moveRight}  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5l7 7-7 7"
      />
    </svg>
  </button>
</div>


    </div>
  );
}

export default Testimonial;
