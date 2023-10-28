import React from "react";
import Navabr from "./Navabr";
import { home } from "../assets";
import Button from "./Button";

function Home() {
  return (
    <section className="bg-white w-full h-full">
      <div className="h-10 m-2 p-3">
        <Navabr />
      </div>
      <div className="mt-10 relative top-20 p-2 w-full h-full flex justify-evenly">
        <div className="left-bar mt-11 p-3 m-3">
          <h1 className="text-[50px]">
            Want anything to be <br /> easy with{" "}
            <span className="font-bold">LaslesVPN.</span>.
          </h1>
          <p className=" mt-3 pb-3 font-[Rubik] text-[20px] font-[400]">
            Provide a network for all your needs with ease and fun using{" "}
            <span>LaslesVPN</span> <br /> discover interesting features from us.
          </p>
          <a
            href="#_"
            class="inline-block py-2 text-[20px] text-white bg-[#F53855] px-5 hover:bg-[#c97481] rounded-md"
          >
            Get Start &#x2192;
          </a>
        </div>
        <div className="right-bar ">
          <img src={home} alt="hero-image" />
        </div>
      </div>
    </section>
  );
}

export default Home;
