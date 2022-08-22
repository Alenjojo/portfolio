import { motion } from "framer-motion";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles/Project.css";
import img1 from "../files/resources/img_proj1.png";
import img2 from "../files/resources/img_proj2.png";
import img3 from "../files/resources/img_proj3.png";
import img4 from "../files/resources/img_proj4.png";

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
      <div className="ssm:hidden sm:hidden md:block">
        <div className="text-gray-600 font-bold text-5xl flex justify-center lg:text-5xl sm:text-4xl ssm:text-2xl">
          Somethings i've Build
        </div>
        {/* Project list */}
        <div className="ssm:hidden sm:hidden md:block">
          {items.map((item) => (
            <Item key={item} idx={item} />
          ))}
        </div>
      </div>
      {/* Mobile View */}
      <div className="ssm:flex-col md:hidden">
        {items.map((item) => (
          <ItemMobile key={item} idx={item} />
        ))}
      </div>
    </div>
  );
}

export default Project;
const styleObj = {
  display: "flex",
  fontSize: "medium",
};
function Item({ idx }) {
  return (
    <div>
      {idx % 2 === 0 ? (
        <div className="flex justify-center align-middle mt-6">
          {/* Left col */}
          <div className="flex justify-center align-middle mr-[5%]">
            {/* Icon */}
            <div className="flex-col mx-5">
              {/* Title */}
              <div className="text-gray-600 font-bold text-2xl ">
                {title[idx]}
              </div>
              {/* Description */}
              <div className="mt-3">
                <div
                  className="text-sm flex align-middle justify-start break-normal max-w-3xl"
                  dangerouslySetInnerHTML={{ __html: desc[idx] }}
                  style={styleObj}
                ></div>
              </div>
              {/* Techs used */}
              <div className="mt-3 text-gray-600">{tools[idx]}</div>
              <a href={github_link[idx]} target="_blank" rel="noreferrer">
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
            <a href={app_link[idx]} target="_blank" rel="noreferrer">
              <img src={img_path[idx]} alt="Loading" className="h-[100%]" />
            </a>
          </div>
        </div>
      ) : (
        <div className="flex justify-center align-middle mt-6">
          {/* Left Col */}
          <div className="proj-card mr-2">
            <a href={app_link[idx]} target="_blank" rel="noreferrer">
              <img src={img_path[idx]} alt="barcode" className="h-[100%]" />
            </a>
          </div>
          {/* Right col */}
          <div className="flex justify-center align-middle mr-[5%]">
            {/* Icon */}
            <div className="flex-col mx-5">
              {/* Title */}
              <div className="text-gray-600 font-bold text-2xl ">
                {title[idx]}
              </div>
              {/* Description */}
              <div className="mt-3">
                <div
                  className="text-sm flex align-middle justify-start break-normal max-w-3xl"
                  dangerouslySetInnerHTML={{ __html: desc[idx] }}
                  style={styleObj}
                ></div>
              </div>
              {/* Techs used */}
              <div className="mt-3 text-gray-600">{tools[idx]}</div>
              <a href={github_link[idx]} target="_blank" rel="noreferrer">
                <img
                  src={require("../files/resources/icon_github.png")}
                  alt="barcode"
                  className="h-7 mt-6"
                />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function ItemMobile({ idx }) {
  return (
    <div>
      <div className="proj-card m-5 relative">
        <a href={app_link[idx]} target="_blank" rel="noreferrer">
          <img src={img_path[idx]} alt="Loading" className="h-[100%]" />
        </a>
        <div className="absolute bottom-0 left-0 h-14 bg-gray-300 opacity-40 w-fill flex justify-between right-0">
          {" "}
        </div>

        <div className="absolute bottom-2 left-2 flex justify-between right-0">
          <div>
            <div className=" font-semibold text-lg text-gray-600">
              {title[idx]}
            </div>
            <div className="text-xs">{tools[idx]}</div>
          </div>
          <a
            href={github_link[idx]}
            target="_blank"
            rel="noreferrer"
            className="justify-end"
          >
            <img
              src={require("../files/resources/icon_github.png")}
              alt="barcode"
              className="h-6 mr-1"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

const items = [0, 1, 2, 3];
const title = [
  "GitHub Stats",
  "Team-Up",
  "Covid-19 data tracker",
  "Amazon-Clone",
];
const tools = [
  "VS Code • GitHub API",
  "JAVA • Firebase",
  "React.js",
  "React.js • Firebase • Stripe",
];
const github_link = [
  "https://github.com/Alenjojo/github-stats",
  "https://github.com/Alenjojo/Team-Up-Archived",
  "https://github.com/Alenjojo/covid-19-data-tracker",
  "https://github.com/Alenjojo/amazon-clone",
];

const app_link = [
  "https://github-stats-d7d4b.web.app",
  null,
  "https://coivid-19-data-tracker.web.app/",
  "https://clone-f15f1.web.app/",
];

const img_path = [img2, img4, img1, img3];

const desc = [
  `It takes in users github username and returns the current stats
                like most <br></br> language used, projects popular with and
                most starred and forked projects <br></br> using GitHub API.`,
  `Purpose-If a team of people want to collaborate to work on a
                specific <br></br> project they can sign-up and plan it, real
                times updates depending on the <br></br>project GroupChat
                functionality`,
  `It is used to check the current covid casese around the world and look up<br></br>
curent and past recordings from a particular location`,
  `A cloned version of amazon.com application being able to add login<br></br>
and add items to cart.`,
];

// TODO <br> has to be changed to text break
