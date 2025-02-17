import React, { createContext, useState } from 'react'
import Home from './components/home/Home'
export const ThemeContext = createContext()
export const EditContext = createContext()
function App() {
  const [theme,setTheme] = useState('light')
  const [edit,setEdit] = useState()
  return (
    <div>
      <ThemeContext.Provider value={{theme,setTheme}}>
        <EditContext.Provider value={{edit,setEdit}}>
          <Home></Home>
        </EditContext.Provider>
      </ThemeContext.Provider>
    </div>
  )
}

export default App