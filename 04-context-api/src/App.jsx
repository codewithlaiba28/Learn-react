import React, { useContext } from 'react'
import Usercontext, { DataContext } from './context/Usercontext'

const App = () => {
  const data = useContext(DataContext)
  console.log(data) // ---> "LAIBA"
  
  return (
    <div>App – {data}</div>
  )
}

export default App
