import React, { createContext } from 'react'

export const DataContext = createContext()

const Usercontext = ({ children }) => {
  const username = "LAIBA"
  return (
      <div>
        <DataContext.Provider value={username}>
            {children}
        </DataContext.Provider>
        </div>
  )
}

export default Usercontext