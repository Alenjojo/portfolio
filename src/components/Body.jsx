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
      <div className="left-[3%] -z-10 absolute text-left items-stretch bg-grey-lighter h-fit ssm:top-[15%] sm:top-[30%]">
        <div className="sssm:flex-col md:flex">
          <div className="font-bold text-orange-400 lg:text-7xl md:text-6xl sm:text-6xl ssm:text-6xl sssm:text-5xl">
            <AnimatedText data="I build things for" time={11} />
          </div>
          <div className="font-bold text-transparent bg-gradient-to-r bg-clip-text from-green-400 to-blue-700 lg:text-7xl md:text-6xl sm:text-6xl ssm:text-6xl sssm:text-5xl ssm:break-normal">
            <AnimatedText data="&nbsp;EVERY THING." time={11} />
          </div>
        </div>
        <br></br>
        <div className="text-lg text-gray-700 lg:w-[55%] md:w-[70%] ssm:mt-[5%] ssm:mx-[10%] ssm:break-words">
          <AnimatedText
            data="Hands-on and comprehensive knowledge of platform development enterprise architecture
          ,Quick Learner agile methodologies and web-based applications. Innovative change with a
          unique mix of high-level of technology in every direction and deep technical expertise.I can 
          adapt to any field whichever possible."
            time={11.5}
          />
        </div>
        {/* Resume Button */}
        <AnimatedText
          data={
            <button class="relative ssm:m-5 inline-flex items-center justify-center p-0.5 mt-5 mb-2 mr-2 overflow-hidden text-sm font-semibold text-pink-600 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                <a href={Pdf} target="_blank" rel="noopener noreferrer">
                  Resume
                </a>
              </span>
            </button>
          }
          time={12}
        />
      </div>
    </motion.div>
  );
}

export default Body;
