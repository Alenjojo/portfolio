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

      <div className="text-gray-600 font-bold text-5xl flex justify-center lg:text-5xl sm:text-4xl ssm:text-2xl">
        Somethings i've Build
      </div>

      {/* Project list */}
      {/* 1 */}
      <div className="flex justify-center align-middle mt-6">
        {/* Left col */}
        <div className="flex justify-center align-middle mr-[5%]">
          {/* Icon */}
          <div className="flex-col mx-5">
            {/* Title */}
            <div className="text-gray-600 font-bold text-2xl ">
              GitHub-Stats
            </div>
            {/* Description */}
            <div className="mt-3">
              It takes in users github username and returns the current stats
              like most <br></br> language used, projects popular with and most
              starred and forked projects <br></br> using GitHub API.
            </div>
            {/* Techs used */}
            <div className="mt-3 text-gray-600">VS Code • GitHub API</div>
            <a
              href="https://github.com/Alenjojo/github-stats"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={require("../files/resources/icon_github.png")}
                alt="barcode"
                className="h-7 mt-6"
              />
            </a>
          </div>
        </div>
        {/* Right Col */}
        <div className="proj-card mr-2">
          <a
            href="https://github-stats-d7d4b.web.app"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={require("../files/resources/img_proj2.png")}
              alt="barcode"
              className="h-[100%]"
            />
          </a>
        </div>
      </div>
      {/* 2 */}
      <div className="flex justify-center align-middle mt-6">
        {/* Left Col */}
        <div className="proj-card mr-2">
          <img
            src={require("../files/resources/img_proj4.png")}
            alt="barcode"
            className="h-[100%]"
          />
        </div>
        {/* Right col */}
        <div className="flex justify-center align-middle mr-[5%]">
          {/* Icon */}
          <div className="flex-col mx-5">
            {/* Title */}
            <div className="text-gray-600 font-bold text-2xl ">Team-Up</div>
            {/* Description */}
            <div className="mt-3">
              Purpose-If a team of people want to collaborate to work on a
              specific <br></br> project they can sign-up and plan it, real
              times updates depending on the <br></br>project GroupChat
              functionality
            </div>
            {/* Techs used */}
            <div className="mt-3 text-gray-600">JAVA • Firebase</div>
            <a
              href="https://github.com/Alenjojo/Team-Up-Archived"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={require("../files/resources/icon_github.png")}
                alt="barcode"
                className="h-7 mt-6"
              />
            </a>
          </div>
        </div>
      </div>
      {/* 3 */}
      <div className="flex justify-center align-middle mt-6">
        {/* Left col */}
        <div className="flex justify-center align-middle mr-[5%]">
          {/* Icon */}
          <div className="flex-col mx-5">
            {/* Title */}
            <div className="text-gray-600 font-bold text-2xl ">
              Covid-19 data tracker
            </div>
            {/* Description */}
            <div className="mt-3">
              It is used to check the current covid casese around the world and
              look up<br></br> curent and past recordings from a particular
              location
            </div>
            {/* Techs used */}
            <div className="mt-3 text-gray-600">React.js</div>
            <a
              href="https://github.com/Alenjojo/covid-19-data-tracker"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={require("../files/resources/icon_github.png")}
                alt="barcode"
                className="h-7 mt-6"
              />
            </a>
          </div>
        </div>
        {/* Right Col */}
        <div className="proj-card mr-2">
          <a
            href="https://coivid-19-data-tracker.web.app"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={require("../files/resources/img_proj1.png")}
              alt="barcode"
              className="h-[100%]"
            />
          </a>
        </div>
      </div>
      {/* 4 */}
      <div className="flex justify-center align-middle mt-6">
        {/* Left Col */}
        <div className="proj-card mr-2">
          <a
            href="https://clone-f15f1.web.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={require("../files/resources/img_proj3.png")}
              alt="barcode"
              className="h-[100%]"
            />
          </a>
        </div>
        {/* Right col */}
        <div className="flex justify-center align-middle mr-[5%]">
          {/* Icon */}
          <div className="flex-col mx-5">
            {/* Title */}
            <div className="text-gray-600 font-bold text-2xl ">
              Amazon-Clone
            </div>
            {/* Description */}
            <div className="mt-3">
              A cloned version of amazon.com application being able to add login{" "}
              <br></br> and add items to cart.
            </div>
            {/* Techs used */}
            <div className="mt-3 text-gray-600">
              React.js • Firebase • Stripe
            </div>
            <a
              href="https://github.com/Alenjojo/amazon-clone"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={require("../files/resources/icon_github.png")}
                alt="barcode"
                className="h-7 mt-6"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
