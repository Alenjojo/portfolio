import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./styles/Experience.css";

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

function Experience() {
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
      </div>

      <div className="text-pink-600 font-bold text-5xl flex justify-center">
        Where i've worked
      </div>

      {/* Item */}
      <div className="flex justify-center mt-6">
        {/* Left col */}
        <div className="flex justify-center mr-[10%]">
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
            <div className="text-pink-600 font-semibold text-xl ">
              Simba Developers
            </div>
            {/* Position */}
            <div>Developer Intern and Cloud Engineer</div>
          </div>
        </div>
        {/* Right Col */}
        <div className="card">
          <div className="font-semibold text-pink-600">
            July 2020 - July 2021
          </div>
          <p className="flex align-middle justify-start">
            👉Developed a social media app using Flutter and GCP <br></br>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Experience;
