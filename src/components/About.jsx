import React, { useRef, useImperativeHandle, forwardRef } from "react";
import { Link } from "react-router-dom";

// function About({ ref }) {
const About = forwardRef((props, ref) => {
  const compRef = useRef();
  useImperativeHandle(ref, () => ({
    scrollIntoView: () => {
      compRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    },
  }));
  return (
    <div className="flex-col h-screen relative" ref={compRef}>
      <div className="ssm:flex-col sm:flex top-0">
        {/* Left Col */}
        <div className="w-min ml-[10%] ssm:ml-[25%]">
          {/* Barcode */}
          <div className="text-orange-400 tracking-widest flex-col w-fit -z-1  sm:mt-[-30%] lg:text-2xl">
            <a href="mailto:alen@alenjojo.com">alen@alenjojo.com</a>
            <div className="relative sssm:hidden">
              <img
                src={require("../files/resources/about_barcode.png")}
                alt="barcode"
                className="h-[50%] w-fit"
              />
              <img
                src={require("../files/resources/myphoto.png")}
                alt="barcode"
                className="w-fit absolute bottom-0"
              />
            </div>
          </div>
        </div>
        {/* Right Col */}
        <div className="flex-col mt-[5%] mx-[10%]">
          <div className="font-bold text-orange-400 sm:text-4xl ssm:text-3xl sssm:2xl">
            About Me
          </div>
          <div className="mt-5 sm:text-lg ssm:text-base  lg:w-[80%] ssm:w-[90] break-words">
            I am so passionate about the tech world. It seems I'm capable of
            inventing new innovation which will be useful for the future. I want
            to expose my skills to the world and make a creative network and an
            awesome team with the students with specific skills from all
            backgrounds.
            <br></br>
            <br></br>Hands-on and comprehensive knowledge of platform
            development enterprise architecture,Quick Learner agile
            methodologies and web-based applications.Innovative change with a
            unique mix of high-level of technology in every direction and deep
            technical expertise.I can adapt to any field whichever possible.As
            from my past experience I have hurdled a lot of tasks as a team lead
            where I had to take up a lot of responsibilities.<br></br>
            <br></br>
            {/* These are the technologies i’ve worked with */}
          </div>
        </div>
      </div>
      {/* Bottom Barcode */}
      <div className="flex justify-around absolute items-end bottom-0 w-[100%] align-bottom sm:hidden ssm:hidden md:flex">
        {/* Barcode */}
        <Link to="/experience">
          <div className="text-3xl text-pink-600 font-semibold tracking-widest w-fit ">
            <div className="flex justify-between items-center">
              Experience
              <div class="h-0 w-0 border-x-8 border-x-transparent border-b-[10px] border-b-pink-600 rotate-180 rounded-md" />
            </div>
            <img
              src={require("../files/resources/xp_barcode.png")}
              alt="barcode"
              className="h-8"
            />
          </div>
        </Link>
        <Link to="project">
          <div className="text-3xl text-gray-600 font-semibold tracking-widest w-fit">
            <div className="flex justify-between items-center">
              Projects
              <div class="h-0 w-0 border-x-8 border-x-transparent border-b-[10px] border-b-gray-600 rotate-180 rounded-md" />
            </div>
            <img
              src={require("../files/resources/proj_barcode.png")}
              alt="barcode"
              className="h-8 ssm:w-24"
            />
          </div>
        </Link>
        <div className="text-3xl text-black-600 font-semibold tracking-widest w-fit">
          <div className="flex justify-between items-center">
            Contact
            <div class="h-0 w-0 border-x-8 border-x-transparent border-b-[10px] border-b-gray-800 rotate-180 rounded-md" />
          </div>
          <img
            src={require("../files/resources/cont_barcode.png")}
            alt="barcode"
            className="h-8 ssm:w-24"
          />
        </div>
      </div>
    </div>
  );
});

export default About;
