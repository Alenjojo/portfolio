// Added the content for the landing page
import { motion } from "framer-motion";
import AnimatedText from "../utils/AnimatedText";
import Pdf from "../files/resume.pdf";

function Body() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: "100%" }}
      exit={{ opacity: 0 }}
    >
      <div className="top-[30%] left-[3%] absolute text-left items-stretch bg-grey-lighter min-h-screen">
        <div className="flex">
          <div className="text-7xl font-bold text-orange-400">
            <AnimatedText text="I build things for" time={12} />
          </div>
          <div className="text-7xl font-bold text-gray-600">
            <AnimatedText text="&nbsp;EVERYTHING." time={12} />
          </div>
        </div>
        <br></br>
        <div className="w-[55%] font-semibold text-lg text-gray-700">
          <AnimatedText
            text="Hands-on and comprehensive knowledge of platform development enterprise architecture
          ,Quick Learner agile methodologies and web-based applications. Innovative change with a
          unique mix of high-level of technology in every direction and deep technical expertise.I can 
          adapt to any field whichever possible."
            time={12.5}
          />
        </div>

        <button class="relative inline-flex items-center justify-center p-0.5 mt-5 mb-2 mr-2 overflow-hidden text-sm font-semibold text-pink-600 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
          <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            <a href={Pdf} target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </span>
        </button>
      </div>
    </motion.div>
  );
}

export default Body;
