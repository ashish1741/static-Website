import React from 'react'
import { middlePart } from '../constant'

function Features() {
  return (
    <div className="features relative bg-#FFFFFF  shadow-lg shadow-black-500/50 flex justify-evenly  text-black top-[134.55px] left-[0px] m-12 right-[0px]   rounded-md">
        {
          middlePart.map((ele,index)=>{
            return (
              <div key={index} className="child m-1 p-2 text-center  flex justify-evenly ">
              <img className='w-[30%]' src={ele.icon} alt="" />
              <div className="block m-10 p-2">
                <h1 className='font-bold text-[25px]'>{ele.number}</h1>
                <p className=' text-left text-[15px]'>{ele.title}</p>
              </div>
              <hr className='bg-[#c4c2c2] w-1 h-1/6 mt-14' />

  
             </div>
            )

          })

        }

      </div>

  )
}

export default Features