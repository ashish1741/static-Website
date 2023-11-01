import React from 'react'

function Contact() {
  return (
    <div className="relative bg-#FFFFFF border border-slate-300 ml-14 mr-14  shadow-lg shadow-black-500/50 rounded top-[90px] p-4 flex justify-evenly m-3 ">
        <div className="mt-16">
            <h1 className='text-[#0B132A] font-[500] text-[30px]'>Subscribe Now for <br /> Get Special Features!</h1>
            <p className='text-[#4F5665] font-[400] text-[20px] p-3 text-left'>Let's subscribe with us and find the fun.</p>
        </div>
        <div className="m-3 mt-16 px-4">
            <button className='bg-[#F35855] hover:bg-rose-400 shadow-lg shadow-black-500/50 text-white font-[700] text-[20px]  rounded-lg py-5 px-11'>Subscribe Now</button>
        </div>



    </div>
  )
}

export default Contact