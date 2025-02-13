import { useTheme } from "./ThemeContext"

const Footer = () => {
    const {isDarkMode}=useTheme()
  return (
    <div className={`w-full h-auto pt-6 ${isDarkMode?"bg-gray-900 text-white":"bg-white text-black"} pb-2 text-center`}>
        <p>© 2025 Prasoon PR. All rights reserved.</p>
      
    </div>
  )
}

export default Footer
