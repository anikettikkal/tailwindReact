import React from 'react';

const Home = () => {
  return (
    <div className="bg-white">
      {/* Heading Section */}
      <div className="text-center py-10">
        <h1 className="text-5xl font-bold font-trebuchet text-gray-800">
          BCS NOTESWALA
        </h1>
        <p className="text-xl text-orange-500 font-georgia mt-2">
          Welcome To Our <button className="bg-yellow-400 text-black text-xl px-4 py-1 border border-black rounded-lg ml-2">World of Notes</button>
        </p>
      </div>

      {/* Landing Page Section */}
      <div className="max-w-6xl mx-auto p-6 shadow-2xl rounded-3xl my-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2">
            <img
              src="https://kit8.net/wp-content/uploads/2020/12/education@2x.png"
              alt="Landing Page"
              className="w-full h-auto"
            />
          </div>
          <div className="w-full md:w-1/2 mt-6 md:mt-0">
            <h3 className="text-3xl font-bold text-gray-800">Who Are We?</h3>
            <p className="text-lg text-gray-700 mt-4">
              We are here to provide you Quality of notes for Quality Future and also helps you for your Examinations and many competitive exams.
            </p>
            <div className="mt-8">
              <a href="#feature">
                <button className="bg-transparent border border-yellow-500 text-yellow-500 px-6 py-2 rounded-lg hover:bg-yellow-500 hover:text-white transition duration-200">
                  Collection ▶
                </button>
              </a>
              <a href="#about-us" className="ml-4">
                <button className="bg-transparent border border-yellow-500 text-yellow-500 px-6 py-2 rounded-lg hover:bg-yellow-500 hover:text-white transition duration-200">
                  About-Us ▶
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="bg-gray-100 py-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 p-4">
              <h2 className="text-3xl font-bold text-gray-800">Our Vision</h2>
              <p className="text-lg text-gray-700 mt-4">
                We provide previous question papers. You can practice MCQ questions as well as theory questions for your examinations. All previous past 10-year questions with their correct answers.
              </p>
              <div className="mt-6">
                <img
                  src="https://noteswala.online/wp-content/uploads/2022/06/kph-2.ico"
                  alt="Icon"
                  className="inline-block mr-4"
                />
                <img
                  src="https://noteswala.online/wp-content/uploads/2022/06/kph-1.ico"
                  alt="Icon"
                  className="inline-block"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 p-4">
              <h4 className="text-2xl font-bold text-gray-800">Notes For BCS</h4>
              <div className="mt-4">
                <h4 className="text-xl font-bold text-gray-800">
                  <span className="text-blue-500">100+</span> Questions For Operating System
                </h4>
                <p className="text-lg text-gray-700 mt-2">
                  You can get free previous year questions for practice for your university examinations.
                </p>
              </div>
              <div className="mt-4">
                <h4 className="text-xl font-bold text-gray-800">
                  <span className="text-blue-500">100+</span> Questions For Theoretical Computer Science
                </h4>
                <p className="text-lg text-gray-700 mt-2">
                  You can get free previous year questions for practice for your university examinations.
                </p>
              </div>
              <div className="mt-4">
                <h4 className="text-xl font-bold text-gray-800">
                  <span className="text-blue-500">100+</span> Questions For Software Testing
                </h4>
                <p className="text-lg text-gray-700 mt-2">
                  You can get free previous year questions for practice for your university examinations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Collections Section */}
      <div className="py-10" id="feature">
        <h1 className="text-4xl font-bold text-center text-gray-800">Featured Collections</h1>
        <div className="max-w-6xl mx-auto px-4 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* FYBSC Card */}
            <div className="bg-white shadow-2xl rounded-lg p-6">
              <div className="flex justify-between items-center">
                <i className="fas fa-chevron-left text-gray-700"></i>
                <a href="/FyPdfsList">
                  <button className="bg-pink-200 text-black px-4 py-2 rounded-lg border border-black">
                    VIEW ALL
                  </button>
                </a>
              </div>
              <div className="mt-6">
                <img
                  src="https://image.slidesharecdn.com/aslevel-1-150815105029-lva1-app6891/95/as-level-computer-science-book-1-1-638.jpg?cb=1439636192"
                  alt="Book Cover"
                  className="w-full h-auto"
                />
              </div>
              <div className="mt-6">
                <h2 className="text-2xl font-bold text-gray-800">FYBSC Computer Science</h2>
                <p className="text-lg text-gray-700 mt-2">
                  Here all FYBSC computer science subjects PDFs are available by their semester-wise.
                </p>
              </div>
            </div>

            {/* SYBSC Card */}
            <div className="bg-white shadow-2xl rounded-lg p-6">
              <div className="flex justify-between items-center">
                <i className="fas fa-chevron-left text-gray-700"></i>
                <a href="/SyPdfsList">
                  <button className="bg-pink-200 text-black px-4 py-2 rounded-lg border border-black">
                    VIEW ALL
                  </button>
                </a>
              </div>
              <div className="mt-6">
                <img
                  src="https://www.ibbookshop.co.uk/wp-content/uploads/2017/03/9781471542091.jpg"
                  alt="Book Cover"
                  className="w-full h-auto"
                />
              </div>
              <div className="mt-6">
                <h2 className="text-2xl font-bold text-gray-800">SYBSC Computer Science</h2>
                <p className="text-lg text-gray-700 mt-2">
                  Here all SYBSC computer science subjects PDFs are available by their semester-wise.
                </p>
              </div>
            </div>

            {/* TYBSC Card */}
            <div className="bg-white shadow-2xl rounded-lg p-6">
              <div className="flex justify-between items-center">
                <i className="fas fa-chevron-left text-gray-700"></i>
                <a href="/TyPdfsList">
                  <button className="bg-pink-200 text-black px-4 py-2 rounded-lg border border-black">
                    VIEW ALL
                  </button>
                </a>
              </div>
              <div className="mt-6">
                <img
                  src="https://www.ibbookshop.co.uk/wp-content/uploads/2017/09/9781471552335.jpg"
                  alt="Book Cover"
                  className="w-full h-auto"
                />
              </div>
              <div className="mt-6">
                <h2 className="text-2xl font-bold text-gray-800">TYBSC Computer Science</h2>
                <p className="text-lg text-gray-700 mt-2">
                  Here all TYBSC computer science subjects PDFs are available by their semester-wise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Study Material Section */}
      <div className="bg-gray-100 py-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 p-4">
              <h1 className="text-4xl font-bold text-gray-800 text-center md:text-left">
                Study Material For Your Examinations
              </h1>
              <p className="text-lg text-gray-700 mt-4 text-center md:text-left">
                Here you can get free notes of all courses and all subjects, i.e., notes for BSC Computer Science, BSC, BA, BCA. Just click once and get all subjects and chapters PDFs. You can do revision for your examinations a day before your exams.
              </p>
            </div>
            <div className="w-full md:w-1/2 p-4">
              <img
                src="https://img.freepik.com/free-vector/online-library-app-reading-banner_33099-1733.jpg"
                alt="Study Material"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="py-10" id="about-us">
        <h1 className="text-4xl font-bold text-center text-gray-800">About Us</h1>
        <div className="max-w-6xl mx-auto px-4 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Team Member 1 */}
            <div className="bg-white shadow-2xl rounded-lg p-6 text-center">
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden">
                <img
                  src="https://github.com/avishkarmandlik.png"
                  alt="Avishkar Mandlik"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mt-4">Avishkar Mandlik</h2>
              <p className="text-lg text-gray-700 mt-2">Designer & Developer</p>
              <div className="flex justify-center space-x-4 mt-4">
                <a href="https://www.facebook.com/avimandlikpatil" className="text-blue-600 hover:text-blue-800">
                  <i className="fab fa-facebook-f text-2xl"></i>
                </a>
                <a href="https://www.twitter.com/avishkarmandlik" className="text-blue-400 hover:text-blue-600">
                  <i className="fab fa-twitter text-2xl"></i>
                </a>
                <a href="https://www.instagram.com/avi_mandlik_patil" className="text-pink-500 hover:text-pink-700">
                  <i className="fab fa-instagram text-2xl"></i>
                </a>
                <a href="https://www.github.com/avishkarmandlik" className="text-gray-800 hover:text-black">
                  <i className="fab fa-github text-2xl"></i>
                </a>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white shadow-2xl rounded-lg p-6 text-center">
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden">
                <img
                  src="https://github.com/anikettikkal.png"
                  alt="Aniket Tikkal"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mt-4">Aniket Tikkal</h2>
              <p className="text-lg text-gray-700 mt-2">Designer & Developer</p>
              <div className="flex justify-center space-x-4 mt-4">
                <a href="https://www.facebook.com/anikettikkal" className="text-blue-600 hover:text-blue-800">
                  <i className="fab fa-facebook-f text-2xl"></i>
                </a>
                <a href="https://www.twitter.com/anikettikkal" className="text-blue-400 hover:text-blue-600">
                  <i className="fab fa-twitter text-2xl"></i>
                </a>
                <a href="https://www.instagram.com/aniket_tikkal" className="text-pink-500 hover:text-pink-700">
                  <i className="fab fa-instagram text-2xl"></i>
                </a>
                <a href="https://www.github.com/anikettikkal" className="text-gray-800 hover:text-black">
                  <i className="fab fa-github text-2xl"></i>
                </a>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white shadow-2xl rounded-lg p-6 text-center">
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden">
                <img
                  src="https://github.com/vishalgaikwad11.png"
                  alt="Vishal Gaikwad"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mt-4">Vishal Gaikwad</h2>
              <p className="text-lg text-gray-700 mt-2">Designer & Developer</p>
              <div className="flex justify-center space-x-4 mt-4">
                <a href="https://www.facebook.com/vishalgaikwad" className="text-blue-600 hover:text-blue-800">
                  <i className="fab fa-facebook-f text-2xl"></i>
                </a>
                <a href="https://www.twitter.com/vishalgaikwad" className="text-blue-400 hover:text-blue-600">
                  <i className="fab fa-twitter text-2xl"></i>
                </a>
                <a href="https://www.instagram.com/vishalgaikwad96k" className="text-pink-500 hover:text-pink-700">
                  <i className="fab fa-instagram text-2xl"></i>
                </a>
                <a href="https://www.github.com/VishalGaikwad11" className="text-gray-800 hover:text-black">
                  <i className="fab fa-github text-2xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;