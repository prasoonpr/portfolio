import { useEffect, useRef, useState } from "react";
import { assets } from "../assets/assets";
import { SessionProps } from "../types";
import { useTheme } from "./ThemeContext";
import { FaWhatsapp, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Profile: React.FC<SessionProps> = ({ id }) => {
  const { isDarkMode } = useTheme();
  const [showPopup, setShowPopup] = useState(false);

  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        setShowPopup(false);
      }
    };

    if (showPopup) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showPopup]);

  const handleDownloadCV = () => {
    const cvUrl = "/Prasoon_Resume.pdf";
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "Prasoon_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.section
      id={id}
      className={`${
        isDarkMode ? "bg-gray-800 text-white" : "bg-amber-50 text-black"
      } min-h-screen overflow-y-hidden flex justify-center items-center`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0 }}
    >
      <div className="flex flex-col items-center text-center">
        <motion.div
          className="h-40 w-40 sm:h-48 sm:w-48 md:h-56 md:w-56 lg:h-60 lg:w-60 overflow-hidden rounded-full shadow-lg"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            className="h-full w-full object-cover"
            src={assets.profile}
            alt="Profile"
          />
        </motion.div>

        <motion.h1
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold pt-6 animate-fade-in"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          Hi, I'm Prasoon PR
        </motion.h1>
        <motion.h1
          className="text-md sm:text-lg md:text-xl font-normal pt-2 animate-slide-up"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          A MERN Stack Developer
        </motion.h1>

        <div className="relative flex flex-wrap gap-6 pt-8">
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="py-2 px-6 sm:px-10 cursor-pointer bg-black hover:bg-gray-600 text-white font-semibold rounded-md shadow-lg transition-all transform hover:scale-105 relative"
            onClick={() => setShowPopup(!showPopup)}
          >
            Connect Me
          </motion.button>

          <div
            ref={popupRef}
            className={`absolute bottom-14 left-1/4 transform -translate-x-1/2 bg-white shadow-lg rounded-lg p-4 flex gap-4 transition-all duration-300 ${
              showPopup ? "opacity-100 scale-100" : "opacity-0 scale-0"
            }`}
          >
            <a
              href="https://wa.me/9778582849"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-700 text-2xl"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.linkedin.com/in/prasoon-pr-099157295/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 text-2xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:prasoonpr2003@gmail.com"
              className="text-red-500 hover:text-red-700 text-2xl"
            >
              <FaEnvelope />
            </a>
          </div>

          <motion.button
            className="py-2 px-6 sm:px-10 cursor-pointer bg-black hover:bg-gray-600 text-white font-semibold rounded-md shadow-lg transition-all transform hover:scale-105"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onClick={handleDownloadCV}
          >
            Download CV
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
};

export default Profile;
