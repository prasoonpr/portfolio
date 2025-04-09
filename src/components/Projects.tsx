import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { useTheme } from "./ThemeContext";
import { assets } from "../assets/assets";
import { SessionProps } from "../types";

const projects = [
  {
    title: "To-Do App",
    description: "A simple and efficient task management app built with React. It allows users to add, edit, and delete tasks while persisting data using local storage. The app provides a seamless experience with a modern UI and smooth state management.",
    image: assets.todo,
    liveDemo: "https://todo-app-prasoonprs-projects.vercel.app/",
    github: "https://github.com/prasoonpr/todo-react"
  },
  {
    title: "E-Commerce Website",
    description: "A full-stack MERN e-commerce platform featuring user authentication, secure payment integration, and an interactive admin panel for order management. Users can browse products, and complete purchases with payment options.",
    image: assets.e_com,
    liveDemo: "https://gemasdelujo.prasoonpr.tech/",
    github: "https://github.com/prasoonpr/Ecom_front_end"
  },
  {
    title: "Mini Job Portal",
    description: "A full-stack job portal application built with Next.js, NestJS, and Mantine UI. It features job posting and listing functionalities for admins, and job filtering for users. Designed with a clean UI and efficient architecture, this project demonstrates solid integration between frontend and backend with real-time updates and optimized data handling.",
    image: assets.jobportal,
    liveDemo: "https://jobportal.prasoonpr.tech/",
    github: "https://github.com/prasoonpr/job_portal_front_end"
  }
];


const Projects: React.FC<SessionProps> = ({ id }) => {
  const { isDarkMode } = useTheme();

  return (
    <section id={id} className={`${isDarkMode ? "bg-gray-800 text-white" : "bg-amber-50 text-black"} pt-16 pb-32 px-16`}>
      <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} 
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2, duration: 0.6 } }
        }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-700 shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className={`p-4 ${isDarkMode ? "bg-gray-900" : "bg-white"}`}>
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-sm mt-2">{project.description}</p>
              <div className="flex justify-between items-center mt-4">
                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="text-blue-500 flex items-center gap-2 hover:underline">
                  Live Demo <FaExternalLinkAlt />
                </a>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:underline">
                  GitHub <FaGithub />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
