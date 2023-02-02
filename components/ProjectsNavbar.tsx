import { Category } from "@/type"

export const NavItem: React.FC<{value: Category | 'all', filterActiveProjects: Function}> = ({value, filterActiveProjects}) => 
{
    return (
    <li className="capitalize cursor-pointer hover:text-green" onClick={() => filterActiveProjects(value)}>
        {value}
    </li>
)}

const ProjectsNavbar: React.FC<{filterActiveProjects: Function}> = (props) =>
{
    return(
    <div className="flex px-3 py-3 space-x-3 overflow-x-auto list-none">
        <NavItem value='all' {...props} />
        <NavItem value='react' {...props}/>
        <NavItem value='mongo' {...props}/>
        <NavItem value='node' {...props}/>
        <NavItem value='nextjs' {...props}/>
        <NavItem value='express' {...props}/>
    </div>
)}

export default ProjectsNavbar