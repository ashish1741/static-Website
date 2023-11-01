import React from 'react'
import { Facebook, Instagram, Logo, Twitter } from '../assets'
import { FooterProductLink,FooterEngagetLink,FooterEarnMoneyLink } from '../constant'




function Footer() {
  return (
    <div className="relative top-[150px] flex justify-around  mt-8">
      <div className="left p-2 m-2  ">
        <img src={Logo} className='mb-3 p-2' alt="logo" />
        <p className='text-[#4F5665] font-[400] mb-3'> <span className='font-bold'>LaslesVPN </span>is a private virtual network that <br /> has unique features and has high security.</p>
        <div className="flex">
          <img src={Facebook}  alt="facebook" />
          <img src={Twitter} alt="Twitter" />
          <img src={Instagram} alt="Instagram" />
        </div>


 
      </div>
      <div className="m-2 p-2 text-center">
        <h2 className='text-[#0B132A] font-[500] mb-2 text-[20px]'>Product</h2>
        {
          FooterProductLink.map((ele,index)=>{
            return <p key={index} className='p-2  text-left text-[#4F5665]   text-[16px]'>{ele.title}</p>
          })
        }
      </div>
      <div className="m-2 p-2 ">
      <h2 className='text-[#0B132A] font-[500] text-[20px] relative left-[-100px] mb-2 text-right'>Engage</h2>
      {
        FooterEngagetLink.map((ele,index) =>{
          return  <p key={index} className='p-2 text-left text-[#4F5665] text-[16px]'>{ele.title}</p>

        })
      }
      </div>
      <div className="m-2 p-2 ">
      <h2 className='text-[#0B132A] font-[500] text-[20px] relative left-[-15px] mb-2 text-right'>Earn Money</h2>
      {
        FooterEarnMoneyLink.map((ele,index) =>{
          return  <p key={index} className='p-2 text-left text-[#4F5665] text-[16px]'>{ele.title}</p>

        })
      }
      </div>
      


    </div>
  )
}

export default Footer