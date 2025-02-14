// "use client"

import type React from "react";
import { useState } from "react";
import { Moon, Sun, Menu } from "lucide-react";
import { useTheme } from "./ThemeContext";

const Navbar: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { name: "About", href: "about" },
    { name: "Skills", href: "skills" },
    { name: "Projects", href: "projects" },
  ];
  const handleSrcoll = (id: string): void => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 70,
        behavior: "smooth",
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav
      className={`${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      } top-0 left-0 z-50 fixed w-full shadow-2xl`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-2xl sm:text-3xl font-bold">Autodidact Coder</h1>
          </div>
          <div className="hidden md:block">
            <div className="ml-96 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <a
                  onClick={(e) => {
                    e.preventDefault();
                    handleSrcoll(item.href);
                  }}
                  key={item.name}
                  href={item.href}
                  className="hover:underline cursor-pointer px-3 py-2 rounded-md text-md "
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          <div className="flex items-center">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md cursor-pointer "
            >
              {isDarkMode ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button
              onClick={toggleMenu}
              className="ml-4 md:hidden p-2 rounded-md cursor-pointer"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </div>

      <aside
        className={`fixed right-0 top-[64px] z-20 h-[calc(100vh-64px)] w-64 transform overflow-y-auto shadow-lg transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}
      >
        <div className="px-4 pt-4 pb-6 space-y-2">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block px-4 py-2 rounded-md text-base font-medium hover:underline"
              onClick={(e) => {
                e.preventDefault();
                handleSrcoll(item.href);
              }}
            >
              {item.name}
            </a>
          ))}
        </div>
      </aside>
    </nav>
  );
};

export default Navbar;
