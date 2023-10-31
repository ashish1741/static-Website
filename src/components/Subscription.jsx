import React from "react";
import { FreePlan ,PremiumPlan,StandardPlan} from "../constant";
import { Premium } from "../assets";
import Button from "./Button";
function Subscription() {
  return (
    <div className="conatiner m-2 flex p-3  justify-evenly md:flex-row-reverse ">
      <div className=" border hover:border-[#F53855] bg-[#F53855] border-slate-300 text-center  rounded w-[30%]">
        <div className="m-auto text-center">
          <img
            className="ml-[100px] m-2 p-2 w-[50%]"
            src={Premium}
            alt="premium"
          />
          <h3 className="font-bold text-center -ml-6 p-2 text-[30px]">
          Premium Plan
          </h3>
        </div>

        {PremiumPlan.map((ele) => {
          return (
            <>
              <div className="flex ml-20 text-center ">
                <img className="m-3 w-[10%] " src={ele.image} alt="tick-icon" />
                <p className="mt-4 font-normal ">{ele.title}</p>
              </div>
            </>
          );
        })}
        <h2 className="font-bold text-center  p-2 text-[30px]" >$12 <span className="font-light">/ mo</span> </h2>
        <div className="p-2">
        <Button
          title="Select &#x21fe;"
          radius="rounded-full"
          color="#F53855"
          background="#F53855"
        />
        </div>
        
      </div>
      {/* second */}
      <div className=" border hover:border-[#F53855] border-slate-300 text-center  rounded w-[30%]">
        <div className="m-auto text-center">
          <img
            className="ml-[100px] m-2 p-2 w-[50%]"
            src={Premium}
           
          />
          <h3 className="font-bold text-center -ml-6 p-2 text-[30px]">
          Standard Plan
          </h3>
        </div>

        {StandardPlan.map((ele) => {
          return (
            <>
              <div className="flex ml-20 text-center ">
                <img className="m-3 w-[10%] " src={ele.image} alt="tick-icon" />
                <p className="mt-4 font-normal ">{ele.title}</p>
              </div>
            </>
          );
        })}
         <h2 className="font-bold text-center  p-2 text-[30px]" >$9 <span className="font-light"> / mo</span> </h2>
        <div className="p-2">
        <Button
          title="Select &#x21fe;"
          radius="rounded-full"
          color="#F53855"
          background="#F53855"
        />
        </div>
        
      </div>

      {/* third  */}
      <div className=" border hover:border-[#F53855] border-slate-300 text-center  rounded w-[30%]">
        <div className="m-auto text-center">
          <img
            className="ml-[100px] m-2 p-2 w-[50%]"
            src={Premium}
            alt=""
            srcset=""
          />
          <h3 className="font-bold text-center -ml-6 p-2 text-[30px]">
            Free Plan
          </h3>
        </div>

        {FreePlan.map((ele) => {
          return (
            <>
              <div className="flex ml-20 text-center ">
                <img className="m-3 w-[10%] " src={ele.image} alt="tick-icon" />
                <p className="mt-4 font-normal ">{ele.title}</p>
              </div>
            </>
          );
        })}
        <h2 className="font-bold text-center  p-2 text-[30px]" >Free</h2>
        <div className="p-2">
        <Button
          title="Select &#x21fe;"
          radius="rounded-full"
          color="#F53855"
          background="#F53855"
        />
        </div>
        
      </div>

    </div>
  );
}

export default Subscription;
