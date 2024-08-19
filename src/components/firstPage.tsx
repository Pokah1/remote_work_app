

// import { useState } from 'react';
 import logoIcon from "../assets/logo.svg";
import imageHero from '../assets/image-hero-desktop.png';
import databizIcon from '../assets/client-databiz.svg';
import audiophileIcon from '../assets/client-audiophile.svg';
import meetIcon from '../assets/client-meet.svg';
import makerIcon from '../assets/client-maker.svg';



const HeaderPage = () =>{
    
    return(
        <main className="bg-white min-h-screen">
      <header className="flex items-center justify-between px-8 py-4">
        <img src={logoIcon} alt="logo" className="h-5 w-max" />
        <nav className="flex items-center space-x-6 text-lg -ml-[40%]">
          {/* Features Dropdown */}
          <div className="relative group">
            <a href="#" className="text-gray-700 hover:text-black">Features ↓</a>
            <div className="absolute left-0 top-full mt-0 hidden group-hover:block focus-within:block">
              <div className="flex flex-col w-48 space-y-2 bg-white border border-gray-200 rounded-lg shadow-lg p-2">
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">📜 Todo List</a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100"> 📆 Calendar</a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">🔔 Reminders</a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">🎯 Planning</a>
              </div>
            </div>
          </div>

          {/* Company Dropdown */}
          <div className="relative group">
            <a href="#" className="text-gray-700 hover:text-black">Company ↓</a>
            <div className="absolute left-0 top-full mt-0 hidden group-hover:block focus-within:block">
              <div className="flex flex-col w-48 space-y-2 bg-white border border-gray-200 rounded-lg shadow-lg p-2">
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">History</a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Our Team</a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Blog</a>
              </div>
            </div>
          </div>

          {/* Other Nav Items */}
          <a href="#" className="t text-gray-700 hover:font-medium  hover:text-black active:text-base active:bg-black active:text-black  =rounded-xl transition duration-300">Careers</a>
          <a href="#" className=" text-gray-700 hover:font-medium  hover:text-black active:text-base active:bg-black active:text-black rounded-xl transition duration-300">About</a>
        </nav>
        <div className="space-x-4 text-lg">
  <button className="text-gray-700 hover:font-medium hover:text-black active:font-bold active:bg-black active:text-black px-4 py-2 rounded-xl transition duration-300">
    Login
  </button>
  <button className="border border-gray-700 text-gray-700 hover:font-medium  hover:text-black active:text-base active:bg-black active:text-black px-4 py-2 rounded-xl transition duration-300">
    Register
  </button>
</div>

      </header>

      <section className="px-8 py-16 flex">
        <article className="max-w-md flex-1 ml-[10%]">
          <h2 className="text-6xl font-bold mb-16 text-black text-left mt-8">Make <br /> remote work</h2>
          <p className="text-gray-600 mb-11 text-lg">
            Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.
          </p>
          <button className="bg-black text-white border border-black px-6 py-3 rounded-xl mb-12 hover:bg-white hover:text-black active:bg-white active:text-black active:border-black font-bold">
  Learn more
</button>


          <div className="flex items-center space-x-6 mt-[22%]">
            <img src={databizIcon} alt="databiz" />
            <img src={audiophileIcon} alt="audiophile" />
            <img src={meetIcon} alt="meet" />
            <img src={makerIcon} alt="maker" />
          </div>
        </article>

        <figure className="flex-1 relative  ml-[10%]">
          <img 
            src={imageHero} 
            alt="hero" 
            className="w-[85%] h-[100%] rounded-lg object-cover" 
          />
        </figure>
      </section>
    </main>
    )
}

export default HeaderPage