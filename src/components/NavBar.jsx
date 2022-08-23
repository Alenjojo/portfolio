import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import AnimatedText from "../utils/AnimatedText";
import { motion } from "framer-motion";

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

function NavBar({ refToLastComp }) {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  const scrolltoLast = () => {
    if (refToLastComp.current) {
      showSidebar();
      refToLastComp.current.scrollIntoView();
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: "100%" }}
      exit={{ opacity: 0 }}
      className="flex-col relative"
    >
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <a href="/" className="flex items-center">
            <span className="self-center ml-5 text-2xl font-semibold whitespace-nowrap dark:text-white">
              <AnimatedText data="Alen Jojo" time={0} />
            </span>
          </a>
          <button
            onClick={showSidebar}
            data-collapse-toggle="mobile-menu"
            type="button"
            class={
              sidebar
                ? "hidden"
                : "inline-flex justify-center items-center mr-8 text-gray-400 rounded-lg md:hidden hover:text-cyan-900 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-500"
            }
            aria-controls="mobile-menu-2"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-9 h-9"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <button onClick={scrolltoLast}>
                  <div className="block py-2 pr-4 pl-3 text-fuchsia-700 font-semibold text-lg rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                    <AnimatedText data="About" time={3} />
                  </div>
                </button>
              </li>
              <li>
                <NavLink to="/e">
                  <div className="block py-2 pr-4 pl-3 text-fuchsia-700 font-semibold text-lg rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                    <AnimatedText data="Experience" time={7} />
                  </div>
                </NavLink>
              </li>
              <li>
                <Link to="/p">
                  <div className="block py-2 pr-4 pl-3 text-fuchsia-700 font-semibold text-lg rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                    <AnimatedText data="Projects" time={11} />
                  </div>
                </Link>
              </li>
              <li>
                <a
                  href="mailto:alen@alenjojo.com"
                  className="block py-2 pr-4 pl-3 text-fuchsia-700 font-semibold text-lg rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  <AnimatedText
                    data={
                      <img
                        src={require("../files/resources/icon_contact.png")}
                        alt="contact"
                        className="w-8 h-8 bg-transparent"
                      />
                    }
                    time={15}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Mobile NavBar */}
      <aside
        class={
          sidebar
            ? "sm:w-[35%] ssm:w-[50%] sssm:w-[65%] h-screen top-0 absolute right-0 md:hidden transition duration-100 opacity-90"
            : "sm:w-[35%] ssm:w-[50%] sssm:w-[65%] h-screen top-0 absolute right-0 md:hidden transition-all duration-700 left-[100%]"
        }
        aria-label="Sidebar"
      >
        <div class="flex sticky top-0 z-50 overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800 h-screen w-full">
          <ul class="space-y-2 w-full">
            {/* Back Button */}
            <div className="flex justify-end" onClick={showSidebar}>
              <motion.svg
                width="90"
                height="90"
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
            <li className="flex justify-start align-middle h-20 w-fill">
              <button
                onClick={scrolltoLast}
                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-cyan-200 dark:hover:bg-gray-700"
              >
                <span class="ml-3 text-lg">About</span>
              </button>
            </li>

            <li className="flex justify-start align-middle h-20">
              <a
                href="/e"
                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <span class="flex-1 ml-3 text-lg whitespace-nowrap">
                  Experience
                </span>
              </a>
            </li>
            <li className="flex justify-start align-middle h-20">
              <a
                href="/p"
                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <span class="flex-1 ml-3 text-lg whitespace-nowrap">
                  Projects
                </span>
              </a>
            </li>
            <li className="flex justify-start align-middle h-20">
              <a
                href="mailto:alen@alenjojo.com"
                class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <span class="flex-1 ml-3 text-lg whitespace-nowrap">
                  Contact
                </span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </motion.div>
  );
}

export default NavBar;
