'use client'
import React, { createContext, useState } from 'react'

const AppContext = createContext()

const AppProvider = ({children}) => {

    const [theme , setTheme] = useState('light');
    const value = {
        theme,
        setTheme
    }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export {AppContext, AppProvider}
