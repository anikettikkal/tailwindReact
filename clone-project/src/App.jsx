import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
    {/* navbar starts here*/}
    <nav className='w-full h-14 bg-indigo-200 flex
    px-4 md:px-4 items-center justify-between'>
      <div className='text-2xl text-indigo-700
      font-bold'>PW skills</div>
      <ul className='md:flex hidden font-semibold'>
        <li className='mx-[10px] cursor-pointer'>Home</li>
        <li className='mx-[10px] cursor-pointer'>About-Us</li>
        <li className='mx-[10px] cursor-pointer'>Contact-Us</li>
      </ul>
      <div className='hidden md:block px-2 py2 bg-indigo-700 text-white rounded
      font-bold cursor-pointer'>Login/Signup</div>
      <div className='md:hidden'>
        <a className='text-4xl' href="#">&#8801;</a>
      </div>
    </nav>
    {/* navbar ends here */}
    </>
  )
}

export default App
