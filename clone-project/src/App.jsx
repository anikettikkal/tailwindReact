import React from 'react'

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
        <div className='hidden md:block px-2 py-2 bg-indigo-700 text-white rounded
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

      {/* our students section starts here */}

      <div className='mt-6'>
        <div className='w-full h-auto  flex flex-wrap flex-col items-center'>
          <p className='text-indigo-800 font-bold text-3xl md:text-4xl text-center '>"Pure Hardwork, No Shortscuts!"</p>
          <div className='w-36 h-1 border-b-4 border-yellow-400 mt-2 rounded-2xl md:mt-4 mb-12'></div>
        </div>

        <div className='w-full mt-4 flex flex-wrap justify-evenly'>
          <div className='w-46 flex flex-col items-center mb-12'>
            <img className='' src="https://s3.ap-south-1.amazonaws.com/cdn.pwskills.com/assets/uploads/course-thumbnail/a53e2c67-35d4-46f8-8fc9-0d6327835a81.jpeg" alt="" />
            <p className='text-3xl text-center font-medium text-white'>600+ Enroll</p>
            <p className='text-3xl text-center text-gray-300 '>Full-Stack Devolopement Course</p>
          </div>
          <div className='w-46 flex flex-col items-center mb-12'>
            <img className='' src="https://s3.ap-south-1.amazonaws.com/cdn.pwskills.com/assets/uploads/course-thumbnail/7ee0dfac-0f69-4aa8-8e08-3f4883a14998.png" alt="" />
            <p className='text-3xl text-center font-medium text-white'>800+ Enroll</p>
            <p className='text-3xl text-center text-gray-300 '>DevOps Cloud Computing</p>
          </div>
          <div className='w-46 flex flex-col items-center mb-12'>
            <img className='' src="https://s3.ap-south-1.amazonaws.com/cdn.pwskills.com/assets/uploads/course-thumbnail/209ddaad-c486-4485-afb8-b46c04208122.jpeg" alt="" />
            <p className='text-3xl text-center font-medium text-white'>400+ Enroll</p>
            <p className='text-3xl text-center text-gray-300 '>UI/UX FrontEnd Design </p>
          </div>

        </div>
      </div>

      {/* our students section ends here */}

      {/* our product section */}

      <div className='mt-6'>
        <div className='w-full h-auto  flex flex-wrap flex-col items-center'>
          <p className='text-indigo-800 font-bold text-3xl md:text-4xl text-center '>"Our Product Section!"</p>
          <div className='w-36 h-1 border-b-4 border-yellow-400 mt-2 rounded-2xl md:mt-4 mb-12'></div>
        </div>

        <div className='w-full mt-4 flex flex-wrap justify-around'>
          <div className='w-64 flex flex-col text-center items-center mb-12 border-indigo-300 border-2 rounded-xl p-2'>
            <img src="https://s3.ap-south-1.amazonaws.com/cdn.pwskills.com/assets/uploads/course-thumbnail/124cf43f-2fc8-4097-855b-129d2f76ff9f.png" alt="" />
            <p className='text-white text-xl mt-2 font-bold '>PW Skills lab</p>
            <p className='text-xl font-bold text-gray-400'>Supercharge your project devolopement with our robust lab.</p>
          </div>
          <div className='w-64 flex flex-col text-center items-center mb-12 hover:border-white hover:border-2 hover:rounded-xl hover:cursor-pointer p-2'>
            <img src="https://s3.ap-south-1.amazonaws.com/cdn.pwskills.com/assets/uploads/course-thumbnail/49c1d4fb-61aa-4ed7-b754-1a0f10ad3e8e.jpeg" alt="" />
            <p className='text-white text-xl mt-2 font-bold '>PW Skills lab</p>
            <p className='text-xl font-bold text-gray-400'>Supercharge your project devolopement with our robust lab.</p>
          </div>
          <div className='w-64 flex flex-col text-center items-center mb-12 hover:border-white hover:border-2 hover:rounded-xl hover:cursor-pointer p-2'>
            <img src="https://s3.ap-south-1.amazonaws.com/cdn.pwskills.com/assets/uploads/course-thumbnail/4e980a83-4ac7-4759-bda0-9beb29a9a07b.png" alt="" />
            <p className='text-white text-xl mt-2 font-bold '>PW Skills lab</p>
            <p className='text-xl font-bold text-gray-400'>Supercharge your project devolopement with our robust lab.</p>
          </div>
          <div className='w-64 flex flex-col text-center items-center mb-12 hover:border-white hover:border-2 hover:rounded-xl hover:cursor-pointer p-2'>
            <img src="https://s3.ap-south-1.amazonaws.com/cdn.pwskills.com/assets/uploads/course-thumbnail/e1bf2645-d0b0-42e2-b715-85e8990d6bcd.png" alt="" />
            <p className='text-white text-xl mt-2 font-bold '>PW Skills lab</p>
            <p className='text-xl font-bold text-gray-400'>Supercharge your project devolopement with our robust lab.</p>
          </div>
          <div className='w-64 flex flex-col text-center items-center mb-12 hover:border-white hover:border-2 hover:rounded-xl hover:cursor-pointer p-2'>
            <img src="https://s3.ap-south-1.amazonaws.com/cdn.pwskills.com/assets/uploads/course-thumbnail/1ecbdc1d-5866-4044-b474-1d1a6231c324.jpeg" alt="" />
            <p className='text-white text-xl mt-2 font-bold '>PW Skills lab</p>
            <p className='text-xl font-bold text-gray-400'>Supercharge your project devolopement with our robust lab.</p>
          </div>
          
        </div>
      </div>

      {/* our product section ends here */}

      {/* footer starts here */}
      <footer className="w-full bg-gray-900 px-4 text-white pt-8 flex flex-col md:flex-row flex-wrap justify-between md:px-12">
          <div>
            <img className='w-25 h-20' src="https://yt3.googleusercontent.com/vPO-KrUjA2FAdHKrXaW-tz5RAzkMRg697pVh55j2oPjN2EEyvJkhrMUxNEKq_IAwgGJzX405=s900-c-k-c0x00ffffff-no-rj" alt="" />
            <p className='my-4'>Email us: support@pwskills.com</p>
            <img className='w-25 h-25' src="https://thumbs.dreamstime.com/b/iso-health-safety-certification-stamp-flat-style-iso-health-safety-certification-stamp-flat-style-simple-design-251469208.jpg" alt="" />
          </div>
          <div>
            <h2 className='font-bold text-xl mt-4'>PW Skills</h2>
            <div className='w-22 h-1 border-b-2 border-yellow-400 rounded-2xl'></div>
            <div>
              <p>About Us</p>
              <p>FAQs</p>
              <p>Privacy Policy</p>
            </div>
          </div>

          <div>
            <h2 className='font-bold text-xl mt-4'> Products</h2>
            <div className='w-22 h-1 border-b-2 border-yellow-400 rounded-2xl'></div>
            <div>
              <p>PW Skills Lab</p>
              <p>Job Portals</p>
              <p>Experience Portal</p>
              <p>Become an Affiliate</p>
              <p>Hall of Fame</p>
            </div>
          </div>

          <div>
            <h2 className='font-bold text-xl mt-4'>Links</h2>
            <div className='w-22 h-1 border-b-2 border-yellow-400 rounded-2xl'></div>
            <div>
              <p>Discord Channel</p>
              <p>PW Youtube</p>
              <p>Careers</p>
            </div>
          </div>
      </footer>
      {/* footer ends here */}

    </>
  )
}

export default App
