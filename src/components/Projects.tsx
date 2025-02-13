import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { useTheme } from "./ThemeContext";
import {assets} from '../assets/assets'
const projects = [
    {
        title: "To-Do App",
        description: "A task management app with local storage and React state management.",
        image: assets.todo,
        liveDemo: "https://todo-app-prasoonprs-projects.vercel.app/",
        github: "https://github.com/prasoonpr/todo-react"
      },
    {
      title: "E-Commerce Website",
      description: "A full-stack MERN e-commerce platform with authentication, payments, and admin panel.",
      image: assets.e_com,
      liveDemo: "https://gemasdelujo.prasoonpr.tech/",
      github: "https://github.com/prasoonpr/Ecom_front_end"
    },
    {
        title: "E-Commerce Website",
        description: "A full-stack MERN e-commerce platform with authentication, payments, and admin panel.",
        image: assets.e_com,
        liveDemo: "https://gemasdelujo.prasoonpr.tech/",
        github: "https://github.com/prasoonpr/Ecom_front_end"
      },
  ];
const Projects = () => {
    const {isDarkMode}=useTheme()
  return (
    <div className={`${isDarkMode ? "bg-gray-800 text-white" : "bg-amber-50 text-black"} pt-16 pb-32 px-16`}>
    <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
      {projects.map((project, index) => (
        <div key={index} className="bg-white dark:bg-gray-700 shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
          <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
          <div className={`p-4 ${isDarkMode?"bg-gray-900 ":"bg-white"}`} >
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className=" text-sm mt-2">{project.description}</p>
            <div className="flex justify-between items-center mt-4">
              <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="text-blue-500 flex items-center gap-2 hover:underline">
                Live Demo <FaExternalLinkAlt />
              </a>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className=" flex items-center gap-2 hover:underline">
                GitHub <FaGithub />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Projects
