import React from 'react'
import './App.css'

function App() {

  return (
    <>
      {/* navbar starts here */}
      <nav style={{ backgroundColor: "olive" }} className='w-full h-25 flex justify-between  text-center'>
        <div className='flex'>
          <img className='p-4 w-[100px] h-[100px]' src="https://img.freepik.com/free-vector/bakery-cake-with-whipped-cream-background_1416-549.jpg?t=st=1741373163~exp=1741376763~hmac=6cfb0fce3f155ccbf0c444f4526233ae774d4c4f5ec0681b96b16e5e9a887c89&w=900" alt="" />
          <h2 className='mt-auto mb-auto text-2xl font-bold text-gray-700 font-serif'>Cake Studio</h2>
        </div>
        <div class="flex items-center border bg-white border-gray-300 rounded-lg mt-auto mb-auto p-2 h-10 w-84">
          <input type="text" placeholder="Search Cakes ..." class="w-full outline-none px-2" />
          <button class="text-gray-500 hover:text-gray-700">
            🔍
          </button>
        </div>
        <div className='flex mr-3'>
          <img className='h-[80px] w-[80px] mt-auto mb-auto ' src="https://media.istockphoto.com/id/1088964670/vector/shopping-cart-rounded-line-icon.jpg?s=2048x2048&w=is&k=20&c=h9IwQTatLxNs1FpIjZTI8FXesbOS51wtA-ak_LC8NEE=" alt="" />
        </div>
      </nav>
      {/* navbar ends here */}
    </>
  )
}

export default App
