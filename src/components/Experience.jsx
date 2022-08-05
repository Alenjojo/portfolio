import { motion } from "framer-motion";

function Experience() {
    return ( 
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: "100%" }}
        exit={{ opacity: 0}}> 
            <div className="text-9xl">
            Experience
            </div>
        </motion.div>
     );
}

export default Experience;