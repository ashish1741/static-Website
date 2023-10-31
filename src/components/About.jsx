import React from 'react'
import { feature } from '../assets'
import { features } from '../constant'

function About() {
  return (
    <div className="relative top-[120px] ease-linear flex justify-evenly p-2">
        <div className="leftbar p-3">
            <img src={feature} alt="" />
        </div>
        <div className="right">
            <div className=" p-3 m-2">
                <h2 className='font-bold text-[50px] text-[#0B132A]'>We Provide Many <br /> Features You Can Use</h2>
                <p className='p-2 text-[20px] text-[#4F5665]'>You can explore the features that we provide with fun and <br /> have their own functions each feature.</p>
                {
                    features.map((ele,index)=>{
                        return (
                            <div className="p-1 m-2 flex gap-1">
                                <img src={ele.icon} alt="features" />
                                <p className='ml-2 p-2 text-[#4F5665]'>{ele.title}</p>


                            </div>
                        )

                    })
                }

            </div>

        </div>


    </div>
  )
}

export default About