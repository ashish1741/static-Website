import React from 'react'
import Subscription from './Subscription'

function Price() {
  return (
    <div className="m-auto text-center relative top-[150px]">
      <div className="text-center">
        <h1 className='text-[#0B132A] font-bold  text-[30px] p-2 m-2'>Choose Your Plan</h1>
        <p className='text-[#4F5665] font-[400] leading-4'>Let's choose the package that is best for you and explore it happily and <br /> cheerfully.</p>
      </div>
      <div className="m-2 p-2">
        <Subscription />
      </div>
    </div>
  )
}

export default Price