import React from 'react'
import Card from './Components/Card/Card'
import Button from './Components/Button/Button'
import ResponsiveCard from './Components/Responsive/ResponsiveCard'
import './App.css'

function App() {

  return (
    <>

      {/* center the element horizontally and vertically */}
      {/* <div className='grid place-content-center h-screen'>
        <h1 className='text-4xl text-red-600'>Aniket</h1>
      </div> */}

      <Card />
      <Button />
      <ResponsiveCard />
    </>
  )
}

export default App
