import React, { useState, useEffect, createContext } from "react"

export const ThemeContext = createContext({
  theme: "",
  setTheme: () => { },
})

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => localStorage.theme)

  useEffect(() => {
    function loadTheme() {
      const theme = localStorage.theme
      return theme || "dark"
    }
    setTheme(loadTheme())
  }, [])

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.remove('dark')
    } else {
      document.documentElement.classList.add('dark')
    }
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider