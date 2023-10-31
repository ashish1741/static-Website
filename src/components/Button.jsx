import React from "react";

function Button({ title, background, radius, color }) {
  console.log(background);
  return (
    <button
      className={` hover:bg-[#F53855] 
       hover:text-white font-bold ml-3 mr-3 py-2 px-4 border
        border-[#F53855] ${radius}`}
      >
      {title}
    </button>
  );
}

export default Button;
