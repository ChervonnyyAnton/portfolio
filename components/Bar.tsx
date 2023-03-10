import { ISkill } from "@/type";
import { motion } from "framer-motion";

const Bar: React.FC<{ data: ISkill }> = ({ data: { Icon, name, level } }) => {
  const bar_width = `${level}%`;
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: bar_width,
      transition: {
        duration: 0.4,
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <div className="my-2 text-white bg-gray-300 rounded-full dark:bg-dark-300">
      <motion.div
        className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-green to-blue-600"
        style={{ width: bar_width }}
        variants={variants}
        initial={"initial"}
        animate={"animate"}
      >
        <Icon className="mr-3" />
        {name}
      </motion.div>
    </div>
  );
};

export default Bar;