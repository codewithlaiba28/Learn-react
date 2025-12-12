import React from 'react'

const Header = () => {
  return (
    <nav className='flex items-center px-10 py-5 justify-between bg-cyan-950 text-cyan-400'>
      <h2 className="text-2xl">Laiba</h2>
      <div className='flex gap-10 items-center'>
        <h4 className="text-xl">About</h4>
        <h4 className="text-xl">Contac</h4>
        <h4 className="text-xl">Services</h4>
        <h4 className="text-xl">Your Account</h4>
      </div>
    </nav>
  )
}

export default Header