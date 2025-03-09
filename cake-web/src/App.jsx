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

      {/* landingpage starts here */}

      <div className='w-full h-auto flex justify-between mt-6 text-center items-center'>
        <div>
          <img className='w-[130px]' src="https://www.fnp.com/assets/images/custom/cakes_23/1_Topicon_AllCakes_.jpg" alt="" />
          <p className='mt-3 font-medium'>All Cakes</p>
        </div>
        <div>
          <img className='w-[130px]' src="https://www.fnp.com/assets/images/custom/cakes_23/2_Topicon_BirthdayCakes_.jpg" alt="" />
          <p className='mt-3 font-medium'>Birthday Cakes</p>
        </div>
        <div>
          <img className='w-[130px]' src="https://www.fnp.com/assets/images/custom/cakes_23/3_Topicon_Eggless_.jpg" alt="" />
          <p className='mt-3 font-medium'>Eggless Cakes</p>
        </div>
        <div>
          <img className='w-[130px]' src="https://www.fnp.com/assets/images/custom/cakes_23/4_Topicon_ChocolateCake_.jpg" alt="" />
          <p className='mt-3 font-medium'>Chocolate Cakes</p>
        </div>
        <div>
          <img className='w-[130px]' src="https://www.fnp.com/assets/images/custom/cakes_23/5_Topicon_Truffle_.jpg" alt="" />
          <p className='mt-3 font-medium'>Truffle Cakes</p>
        </div>
        <div>
          <img className='w-[130px]' src="https://www.fnp.com/assets/images/custom/cakes_23/6_Topicon_FreshFruits_.jpg" alt="" />
          <p className='mt-3 font-medium'>MixFruit Cakes</p>
        </div>
        <div>
          <img className='w-[130px]' src="https://www.fnp.com/assets/images/custom/cakes_23/7_Topicon_Blackforest_.jpg" alt="" />
          <p className='mt-3 font-medium'>Black Forest Cakes</p>
        </div>
        <div>
          <img className='w-[130px]' src="https://www.fnp.com/assets/images/custom/cakes_23/8_Topicon_CakeWithFlowers_.jpg" alt="" />
          <p className='mt-3 font-medium'> Cakes with Flower</p>
        </div>
        <div>
          <img className='w-[130px]' src="https://www.fnp.com/assets/images/custom/cakes_23/9_Topicon_Bestsellers_.jpg" alt="" />
          <p className='mt-3 font-medium'>Best Sellers</p>
        </div>
        

      </div>

      {/* landingpage ends here */}

      {/* main image in landingpage */}
      <div>
        <img className='w-full mt-12' src="https://www.fnp.com/assets/images/custom/cakes_23/Cakes-Microsite-Banner_Web2-28-11-24.jpg" alt="" />
      </div>
      <div className='text-center items-center pb-7'>
        <h1 className='text-3xl mt-10 font-bold'>Cakes: Fresh & Flavourful</h1>
        <button className='bg-green-700 mt-2 rounded h-[30px] text-white font-bold w-[80px]'>4.8 ⭐</button>
      </div>
      {/* main image in landingpage ends here*/}

      {/* cards in landing page starts */}

      <div className='w-[95%] rounded-2xl  flex mr-auto ml-auto pb-15 bg-white'>
        <div className='flex w-[90%] bg-white h-auto pt-12 ml-auto mr-auto items-center justify-between'>
          <div>
            <img className='rounded-2xl' src="https://www.fnp.com/assets/images/custom/cakes_23/cakes_delivery/Same-Day_Web.jpg" alt="" />
          </div> &nbsp; &nbsp;&nbsp;&nbsp;
          <div>
            <img className='rounded-2xl' src="https://www.fnp.com/assets/images/custom/cakes_23/cakes_delivery/Bestseller_Web.jpg" alt="" />
          </div>
        </div>
      </div>

      {/* cards in landing page ends here */}

      {/* cake selling  cards starts here */}
      <div className='w-[95%] rounded-2xl mt-12 pb-10 shadow-2xl flex justify-between mr-auto ml-auto text-center items-center bg-white'>
        <div className='mt-12 mr-auto ml-auto'>
          <img className='rounded overflow-hidden w-[300px]' src="https://www.fnp.com/assets/images/custom/cakes_23/flavour/Chocolate-Cakes-web_2.jpg" alt="" />
          <p className='font-bold text-xl mt-3'>Chocolate Cakes</p>
        </div>
        <div className='mt-12 mr-auto ml-auto'>
          <img className='rounded overflow-hidden w-[300px]' src="https://www.fnp.com/assets/images/custom/cakes_23/flavour/Truffle-Cakes_web.jpg" alt="" />
          <p className='font-bold text-xl mt-3'>Truffle Cakes</p>
        </div>
        <div className='mt-12 mr-auto ml-auto'>
          <img className='rounded overflow-hidden w-[300px]' src="https://www.fnp.com/assets/images/custom/cakes_23/flavour/Fresh-Fruit-Cakes_web.jpg" alt="" />
          <p className='font-bold text-xl mt-3'>Fresh Fruit Cakes</p>
        </div>
        <div className='mt-12 mr-auto ml-auto'>
          <img className='rounded overflow-hidden w-[300px]' src="https://www.fnp.com/assets/images/custom/cakes_23/flavour/Butterscotch-Cakes_web.jpg" alt="" />
          <p className='font-bold text-xl mt-3'>ButterScotch Cakes</p>
        </div>
        
      </div>
      {/* cake selling  cards ends here */}



    </>
  )
}

export default App
