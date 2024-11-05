"use client"

import { useTheme } from "next-themes"

export const ThemeBody = ({children}) => {
    const { theme } = useTheme()
  
    const bg = theme === "dark" 
    ? "bg-[#110e1b]"
    : "bg-white"
  
    return <div className={`${bg} min-h-screen`}>{children}</div>
}