import React from "react";

function About() {
  return (
    <div className="h-screen flex-col relative">
      <div className="text-2xl text-orange-400 tracking-widest w-fit -z-1 mt-[-5%] absolute ml-[3%]">
        alen@alenjojo.com
        {/* Barcode */}
        <img
          src={require("../files/resources/about_barcode.png")}
          alt="barcode"
          className="h-[50%] w-[26%]"
        />
      </div>
    </div>
  );
}

export default About;
