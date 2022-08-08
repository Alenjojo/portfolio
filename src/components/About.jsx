import React, { useRef, useImperativeHandle, forwardRef } from "react";

// function About({ ref }) {
const About = forwardRef((props, ref) => {
  const compRef = useRef();
  useImperativeHandle(ref, () => ({
    scrollIntoView: () => {
      compRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    },
  }));
  return (
    <div className="h-screen flex-col relative" ref={compRef}>
      <div className="ssm:flex-col sm:flex">
        {/* Left Col */}
        <div className="w-min ml-[10%] ssm:ml-[25%]">
          <div className="text-orange-400 tracking-widest flex-col w-fit -z-1 sm:mt-[-30%] ssm:mt-[80%] lg:text-2xl">
            <a href="mailto:alen@alenjojo.com">alen@alenjojo.com</a>
            {/* Barcode */}
            <img
              src={require("../files/resources/about_barcode.png")}
              alt="barcode"
              className="h-[50%] w-fit"
            />
          </div>
        </div>
        {/* Right Col */}
        <div className="flex-col mt-[5%] mx-[10%]">
          <div className="font-bold text-orange-400 sm:text-4xl ssm:text-3xl sssm:2xl">
            About Me
          </div>
          <div className="mt-5 sm:text-lg ssm:text-base  lg:w-[80%] ssm:w-[90] break-words">
            My interest in web development started back in 2012 when I decided
            to try editing custom Tumblr themes — turns out hacking together a
            custom reblog button taught me a lot about HTML and CSS!I wish to
            pursue this to evaluate my inherent abilities and potential.
            <br></br>
            <br></br>
            Although I have accumulated a strong foundational knowledge in this
            domain, I think the best way to move forward would be to get
            practical working experience in an established platform. I wish to
            learn, up-skill, and acquire skills that can shape me as a valued
            professional in this field.<br></br>
            <br></br>
            These are the technologies i’ve worked with
          </div>
        </div>
      </div>
      {/* Bottom Barcode */}
      <div className="flex justify-around absolute bottom-0 w-[100%] align-bottom sm:hidden ssm:hidden md:flex">
        {/* Barcode */}
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
