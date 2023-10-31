import React from "react";
import Navabr from "./Navabr";
import { home } from "../assets";
import Button from "./Button";

function Home() {
  return (
    <section className=" relative top-0 w-full h-full">
      <div className="h-10  p-3">
        <Navabr />
      </div>
      <div className=" relative top-[100px] p-2 w-full h-[50vh] flex justify-evenly">
        <div className="left-bar mt-11 p-3 m-3">
          <h1 className="text-[50px] text-[#0B132A]">
            Want anything to be <br /> easy with{" "}
            <span className="font-bold">LaslesVPN.</span>.
          </h1>
          <p className=" mt-3  text-[#4F5665] font-[400] pb-3 leading-[30px] text-[20px] ">
            Provide a network for all your needs with ease and fun using{" "}
            <span className="font-bold">LaslesVPN</span> <br /> discover interesting features from us.
          </p>
          <a
            href="#_"
            class="inline-block py-2 mt-5 text-[20px] text-white bg-[#F53855] px-5 hover:bg-[#c97481] rounded-md"
          >
            Get Start &#x2192;
          </a>
        </div>
        <div className="right-bar p-2 ">
          <img src={home} alt="hero-image" />
        </div>
      </div>
    </section>
  );
}

export default Home;
