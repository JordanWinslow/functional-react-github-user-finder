import React, { createContext } from "react"
const ThemeContext = createContext()

const setTheme = (themeObject) => {
    
  }
const theme = {
  background: "#10BD84",
  darkBackground: "#00291C",
  foreground: "#FF6415",
  lightText: "#FFF1E9",
  darkText: "#1C1C1C"
}
const ThemeProvider = props => {
  return (
    <ThemeContext.Provider value={{theme}}>
      {props.children}
    </ThemeContext.Provider>
  )
}
export default ThemeProvider
