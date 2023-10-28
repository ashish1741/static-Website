import React from "react";
import { navLinks } from "../constant";
import { Logo } from "../assets";
import Button from "./Button";

function Navabr() {
  return (
    <div className=" text-center flex  justify-between items-center m-5" >
        <img src={Logo} alt="Logo"  />
      <nav className="p-2 ml-3 mr-3">
        <ul className=" flex justify-evenly">
          {navLinks.map((ele, index) => {
            return (
              <>
                <li key= {index}  >
                  <a className="p-3 leading-[18.96px] font-normal text-[20px] font-[Rubik]    m-3 mt-10 text-right hover:text-[#F53838]" href={`#${ele.id}`}>
                    {ele.title}
                  </a>
                </li>
              </>
            );
          })}
        </ul>
      </nav>
      <div className="ml-2 mr-4 p-2">
        <button>Sig in</button>
        <Button 
        title="Sign up"
        radius ="rounded-full"
        color="#F53855"
        background="#F53855"
        />
      </div>
    </div>
  );
}

export default Navabr;
