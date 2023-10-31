import React from 'react'
import {GlobalMap,Sponsored} from "../assets"

function Global() {
  return (
    <div className="relative top-[150px] p-4 m-auto text-center">
      <div className="intro m-4 p-4">
        <h1 className='text-[#0B132A] font-[500] mt-7 text-[35px] '>Huge Global Network <br /> of Fast VPN</h1>
        <p className='text-[#4F5665] p-3'>See <span className='font-bold'>LaslesVPN</span> everywhere to make it easier for you when you move <br /> locations.</p>
      </div>
      <div className="relative ">
        <img className='w-[95%] p-10 m-4 ' src={GlobalMap} alt="map"  />
      </div>
      <div className="relative ">
        <img className='w-[95%] p-10 m-4 ' src={Sponsored} alt="map"  />
      </div>
    </div>
  )
}

export default Global