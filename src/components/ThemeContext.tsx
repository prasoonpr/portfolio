import { createContext, ReactNode, useContext, useState } from "react";

interface ThemeContextType{
    isDarkMode:boolean;
    toggleTheme:()=>void
}

const ThemeContext=createContext<ThemeContextType|undefined>(undefined);
export const ThemeProvider = ({children}:{children:ReactNode}) => {
    const [isDarkMode,setIsDarkMode]=useState<boolean>(false);
    const toggleTheme=()=>{
        setIsDarkMode((prev)=>!prev)
    }
  return (
    <ThemeContext.Provider value={{isDarkMode,toggleTheme}}>
        {children}
    </ThemeContext.Provider>
    
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
      throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
  };

