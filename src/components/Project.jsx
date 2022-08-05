import { motion } from "framer-motion";

function Project() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      Project
    </motion.div>
  );
}

export default Project;
