import { 
    FaReact, FaNodeJs, FaGitAlt, FaDocker, FaAws ,FaLock
  } from "react-icons/fa";
  import { 
    SiMongodb, SiPostgresql, SiExpress, SiRedux, SiPostman, SiVite, SiTailwindcss, 
    SiMui, SiCloudinary,
  } from "react-icons/si";
import { useTheme } from "./ThemeContext";

const skills = [
    { name: "ReactJS", icon: <FaReact className="text-blue-500" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-500" /> },
    { name: "Express.js", icon: <SiExpress className="text-gray-500" /> },
    { name: "Redux Toolkit", icon: <SiRedux className="text-purple-500" /> },
    { name: "RTK Query", icon: <SiRedux className="text-purple-500" /> },
    { name: "AWS", icon: <FaAws className="text-yellow-500" /> },
    { name: "Cloudinary", icon: <SiCloudinary className="text-blue-700" /> },
    { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
    { name: "OAuth", icon: <FaLock className="text-gray-700" /> },
    { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
    { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-400" /> },
    { name: "Material-UI", icon: <SiMui className="text-blue-500" /> },
    { name: "Vite", icon: <SiVite className="text-yellow-500" /> }
  ];
const Skills = () => {
    const {isDarkMode}=useTheme()
  return (
    <div>
       <div className={`${isDarkMode ? "bg-gray-800 text-white" : "bg-amber-50 text-black"} py-10 px-6`}>
      <h2 className="text-3xl font-bold text-center mb-6">My Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 place-items-center">
        {skills.map((skill, index) => (
          <div key={index} className={`flex h-28 w-24 flex-col items-center p-4 rounded-lg shadow-md  ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"} transition-transform transform hover:scale-105`}>
            <div className="text-4xl">{skill.icon}</div>
            <p className="mt-2 font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Skills
