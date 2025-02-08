import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function AnimatedText({ children, className }) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 2 } },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={textVariants}
    >
      {children}
    </motion.div>
  );
}
