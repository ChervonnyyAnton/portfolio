import ProjectCard from "@/components/ProjectCard";
import ProjectsNavbar from "@/components/ProjectsNavbar";
import { projects } from "@/data";
import { Category } from "@/type";
import { useState } from "react";

const Projects = () => {
    const [activeProjects, setActiveProjects] = useState(projects);
    const [active, setActive] = useState('all');
    const filterActiveProjects = (category: Category | 'all') => 
    {
        if(category === 'all')
        {
            setActiveProjects(projects);
            setActive(category);
            return;
        }
        
        const newArray = projects.filter(project => project.category.includes(category));
        setActiveProjects(newArray);
        setActive(category);
    }
  return (
    <div className="px-5 py-2 overflow-y-scroll" style={{height: '65vh'}}>
      <ProjectsNavbar filterActiveProjects={filterActiveProjects}/>
      <div className="relative grid grid-cols-12 gap-4 my-3">
        {
            projects.map((project) => (
                <div className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200">
                    <ProjectCard project={project} key={project.name} />
                </div>
            ))
        }
      </div>
    </div>
  );
};

export default Projects;
