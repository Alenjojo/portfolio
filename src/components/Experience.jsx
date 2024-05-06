import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./styles/Experience.css";
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useEffect } from "react";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = i * 0.8;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};

function Experience({ mobileView = false }) {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="flex-col">
      {/* Header */}
      <div className="flex justify-between">
        <div className="flex-col ml-5 w-52">
          {/* Barcode */}
          <img
            src={require("../files/resources/xp_barcode.png")}
            alt="barcode"
            className="h-8"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: "100%" }}
            exit={{ opacity: 0 }}
          >
            <div className="text-3xl text-pink-600 font-semibold tracking-widest">
              Experience
            </div>
          </motion.div>
        </div>
        {/* Back Button */}
        {mobileView ? null : (
          <Link to="/" className="p-0 mt-5">
            <div className="">
              <motion.svg
                width="100"
                height="100"
                viewBox="0 0 600 600"
                initial="hidden"
                animate="visible"
              >
                <motion.line
                  x1="220"
                  y1="30"
                  x2="360"
                  y2="170"
                  stroke="#FF5F7E"
                  variants={draw}
                  custom={0.5}
                />
                <motion.line
                  x1="220"
                  y1="170"
                  x2="360"
                  y2="30"
                  stroke="#FF5F7E"
                  variants={draw}
                  custom={1}
                />
              </motion.svg>
            </div>
          </Link>
        )}
      </div>

      <div className="text-pink-600 font-bold flex justify-center lg:text-5xl sm:text-4xl ssm:text-2xl ssm:hidden sm:hidden md:flex">
        Where i've worked
      </div>

      {/* Experiences list */}
      <div className="ssm:hidden sm:hidden md:block">
        {items.map((item) => (
          <Item key={item} idx={item} />
        ))}
      </div>
      {/* Experience mobile ver */}
      <div className="ssm:flex-col md:hidden">
        <AnimateSharedLayout>
          <motion.ull layout initial={{ borderRadius: 25 }}>
            {items.map((item) => (
              <ItemMobile key={item} idx={item} />
            ))}
          </motion.ull>
        </AnimateSharedLayout>
      </div>
    </div>
  );
}

export default Experience;

const styleObj = {
  display: "flex",
  fontSize: "medium",
};

function Item({ idx }) {
  return (
    <div className="flex justify-between mt-6 sm:m-5">
      {/* Left col */}
      <div className="flex justify-center mr-[10%] ml-[2%]">
        {/* Icon */}
        <motion.div
          className="box"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        ></motion.div>
        <div className="flex-col mx-5">
          {/* Title */}
          <div className="text-pink-600 font-semibold text-lg ">
            {title[idx]}
          </div>
          {/* Position */}
          <div>{position[idx]}</div>
        </div>
      </div>
      {/* Right Col */}
      <div className="card flex justify-end mr-[2%]">
        <div className="font-semibold text-pink-600">{date[idx]}</div>
        <p className="flex align-middle justify-start break-normal max-w-3xl">
          <div
            className="text-sm flex align-middle justify-start break-normal max-w-3xl"
            dangerouslySetInnerHTML={{ __html: desc[idx] }}
            style={styleObj}
          ></div>
        </p>
      </div>
    </div>
  );
}

function ItemMobile({ idx }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <motion.lii layout onClick={toggleOpen} initial={{ borderRadius: 10 }}>
      <motion.div className="title font-semibold text-pink-600 text-xl" layout>
        {title[idx]}
      </motion.div>
      <motion.div className="text-pink-600 text-sm ml-2" layout>
        {date[idx]}
      </motion.div>
      <AnimatePresence>{isOpen && <Content idx={idx} />}</AnimatePresence>
    </motion.lii>
  );
}

function Content({ idx }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div
        className="text-sm flex align-middle justify-start break-normal max-w-3xl"
        dangerouslySetInnerHTML={{ __html: desc[idx] }}
        style={styleObj}
      ></div>
    </motion.div>
  );
}

const items = [0, 1, 2];
const title = ["Deutsche Bank", "Webknot Technologies", "Foxmula"];
const position = [
  "Associate Software Engineer",
  "Backend Developer",
  "Java Backend Developer"
];
const date = [
  "Oct 2023 - Present",
  "Feb 2023 - Sept 2023",
  "July 2022 - Nov 2022",
];
const desc = [
  `<p>
  ...                                                                                                                   
  </p>`,
  `<p>
    👉 Designed and implemented Restful API's using Nest.js for multiple module <br></br> 
    👉 Assumed a leadership role within a cross-functional team, overseeing project execution, coordinating team members and ensuring project goals were met on time.
  </p>`,
  `<p>
              👉 Responsible for creating and maintaining chat functionality in the portal using RocketChat<br></br>  
👉 Designed and developed Restful API for different modules in the project as per the requirements using Spring-boot<br></br>
👉 Worked as a frontend web developer and React.js based application<br></br>
👉 Reported edge cases validation issues on the production environment.<br></br>
👉 Update the unit testing of the API using JUNIT Testing Framework<br></br>
            </p>`
];
