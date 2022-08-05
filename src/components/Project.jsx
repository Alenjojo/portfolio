import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./styles/Project.css";

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
function Project() {
  return (
    <div className="flex-col">
      {/* Header */}
      <div className="flex justify-between">
        <div className="flex-col ml-5 w-52">
          {/* Barcode */}
          <img
            src={require("../files/resources/proj_barcode.png")}
            alt="barcode"
            className="h-8"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: "100%" }}
            exit={{ opacity: 0 }}
          >
            <div className="text-3xl text-gray-600 font-semibold tracking-widest">
              Projects
            </div>
          </motion.div>
        </div>
        {/* Back Button */}
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
                stroke="#5B6871"
                variants={draw}
                custom={0.5}
              />
              <motion.line
                x1="220"
                y1="170"
                x2="360"
                y2="30"
                stroke="#5B6871"
                variants={draw}
                custom={1}
              />
            </motion.svg>
          </div>
        </Link>
      </div>

      <div className="text-gray-600 font-bold text-5xl flex justify-center">
        Somethings i've Build
      </div>

      {/* Item */}
      <div className="flex justify-center align-middle mt-6">
        {/* Left col */}
        <div className="flex justify-center align-middle mr-[10%]">
          {/* Icon */}
          <div className="flex-col mx-5">
            {/* Title */}
            <div className="text-gray-600 font-bold text-3xl ">
              Covid-19 data tracker
            </div>
            {/* Description */}
            <div className="mt-3">
              It is used to check the current covid casese around the world and
              look up<br></br> curent and past recordings from a particular
              location
            </div>
            {/* Techs used */}
            <div className="mt-3 text-gray-600">Open Weather API • VS Code</div>
            <img
              src={require("../files/resources/icon_github.png")}
              alt="barcode"
              className="h-7 mt-6"
            />
          </div>
        </div>
        {/* Right Col */}
        <div className="proj-card">
          <img
            src={require("../files/resources/img_proj_covid.png")}
            alt="barcode"
            className="h-[100%]"
          />
        </div>
      </div>
    </div>
  );
}

export default Project;
