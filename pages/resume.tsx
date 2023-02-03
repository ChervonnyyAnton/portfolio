import Bar from "@/components/Bar";
import { languages, tools } from "@/data";
import { motion } from "framer-motion";
import { fadingUp, routing } from "@/animations";
import { NextPage } from "next";

const resume: NextPage = () => {

  
  return (
    <motion.div
    variants={routing} 
    initial="initial"
    animate="animate"
    exit="exit"
    className="p-6 py-2">
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div variants={fadingUp} initial="initial" animate="animate">
          <h1 className="my-3 text-3xl font-bold">Education</h1>
          <div>
          <h5 className="my-2 text-xl font-bold">First Education</h5>
          <p className="font-semibold">Name of University (years)</p>
          <p className="my-3">Short syllabus insights</p>
        </div>
        <div>
          <h5 className="my-2 text-xl font-bold">Second Education</h5>
          <p className="font-semibold">Name of Course (years)</p>
          <p className="my-3">Short syllabus insights</p>
        </div>
        </motion.div>
        <motion.div variants={fadingUp} initial="initial" animate="animate">
          <h1 className="my-3 text-3xl font-bold">Experience</h1>
          <div>
          <h5 className="my-2 text-xl font-bold">First Experience</h5>
          <p className="font-semibold">Name of Certification (years)</p>
          <p className="my-3">Short syllabus insights</p>
        </div>
        <div>
          <h5 className="my-2 text-xl font-bold">Second Experience</h5>
          <p className="font-semibold">Name of Bootcamp Program (years)</p>
          <p className="my-3">Short syllabus insights</p>
        </div>
        </motion.div>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div>
            <h5 className="my-3 text-2xl font-bold">
                languages & Frameworks
            </h5>
            <div className="my-5">
                {
                    languages.map(Language => <Bar data={Language} key={Language.name}/>)
                }
            </div>
        </div>
        <div>
            <h5 className="my-3 text-2xl font-bold">
                tools & Softwares
            </h5>
            <div className="my-5">
                {
                    tools.map(Tool => <Bar data={Tool} key={Tool.name}/>)
                }
            </div>
        </div>
      </div>
    </motion.div>
  );
};

export default resume;
