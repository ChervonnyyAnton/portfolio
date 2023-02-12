import { IProject } from "@/type";
import { AiFillGithub, AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadingUp, stagger } from "@/animations";

const ProjectCard: React.FC<{
  project: IProject;
  showDetail: number | null;
  setShowDetail: (id: number | null) => void;
}> = ({
  project: {
    name,
    description,
    image_path,
    deployed_url,
    github_url,
    key_techs,
    id,
  },
  showDetail,
  setShowDetail,
}) => {
  return (
    <div>
      <Image
        src={image_path}
        alt={name}
        onClick={() => setShowDetail(id)}
        width={300}
        height={150}
        quality={100}
      />
      <p className="my-2 text-center">{name}</p>
      {showDetail === id && (
        <div className="absolute top-0 left-0 z-10 grid w-full h-auto p-2 text-black bg-gray-100 rounded-lg md:p-10 md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100">
          <motion.div variants={stagger} initial="initial" animate="animate">
            <motion.div
              variants={fadingUp}
              className="border-4 border-gray-100"
            >
              <Image
                src={image_path}
                alt={name}
                width={300}
                height={150}
                quality={100}
              />
            </motion.div>
            <motion.div
              variants={fadingUp}
              className="flex justify-center my-4 space-x-3"
            >
              <a
                href={github_url}
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
              >
                <AiFillGithub />
                <span>GitHub</span>
              </a>
              <a
                href={deployed_url}
                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
              >
                <AiFillProject />
                <span>Demo</span>
              </a>
            </motion.div>
          </motion.div>

          <motion.div variants={stagger} initial="initial" animate="animate">
            <motion.h2
              variants={fadingUp}
              className="mb-3 text-xl font-medium md:text-2xl "
            >
              {name}
            </motion.h2>
            <motion.h3 variants={fadingUp} className="mb-3 font-medium">
              {description}
            </motion.h3>
            <motion.div
              variants={fadingUp}
              className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider"
            >
              {key_techs.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 my-1 bg-gray-200 rounded-sm dark:bg-dark-200"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>

          <button>
            <MdClose
              size={30}
              onClick={() => setShowDetail(null)}
              className="absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200"
            />
          </button>
        </div>
      )}
    </div>
  );
};
export default ProjectCard;
