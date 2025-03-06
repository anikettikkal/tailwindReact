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

    {/* image section starts */}
    <header className="w-full h-auto">
      <img className='w-full hidden md:block' src="https://static.pw.live/5eb393ee95fab7468a79d189/GLOBAL_CMS/0c3b21ac-3c19-4fd0-b49b-dcdd0ce03e1c.webp" alt="" />
      <img className='w-full md:hidden' src="https://pwskills.com/images/pwskills_thumbnail.png" alt="" />

    </header>
    {/* image section over here */}
    </>
  )
}

export default App
