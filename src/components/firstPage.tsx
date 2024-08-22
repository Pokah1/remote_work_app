import { useState } from 'react';
import logoIcon from "../assets/logo.svg";
import imageHero from '../assets/image-hero-desktop.png';
import databizIcon from '../assets/client-databiz.svg';
import audiophileIcon from '../assets/client-audiophile.svg';
import meetIcon from '../assets/client-meet.svg';
import makerIcon from '../assets/client-maker.svg';

const HeaderPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <main style={{ backgroundColor: '#FAF9F6' }} className="min-h-screen">
      <header className="flex items-center justify-between px-8 py-4 relative z-50">
        <img src={logoIcon} alt="logo" className="h-5 w-max md:h-6" />

        {/* Hamburger Menu for Small Screens */}
        <div className="md:hidden z-50 relative">
          <button
            onClick={toggleMenu}
            className="text-gray-700 hover:text-black focus:outline-none text-2xl sm:text-3xl"
          >
            {isMenuOpen ? '✖' : '☰'}
          </button>
        </div>

        {/* Main Navigation */}
        <nav
          style={{ backgroundColor: '#FAF9F6' }} 
          className={`${
            isMenuOpen ? 'flex' : 'hidden'
          } flex-col md:flex-row md:flex items-center md:space-x-6 text-lg md:ml-8 absolute md:relative top-[80px] md:top-0 right-0 md:w-auto w-[40%] h-auto  z-20 md:z-auto transition-all duration-300 md:space-y-0 space-y-4 p-4 md:p-0 rounded-md`}
        >
          {/* Features Dropdown */}
          <div className="relative group">
            <button className="text-gray-700 hover:text-black">
              Features ↓
            </button>
            <div className="absolute left-0 top-full hidden group-hover:flex flex-col focus-within:flex w-48 bg-white border border-gray-200 rounded-lg shadow-lg p-2 z-30">
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                📜 Todo List
              </a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                📆 Calendar
              </a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                🔔 Reminders
              </a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                🎯 Planning
              </a>
            </div>
          </div>

          {/* Company Dropdown */}
          <div className="relative group">
            <button className="text-gray-700 hover:text-black">
              Company ↓
            </button>
            <div className="absolute left-0 top-full hidden group-hover:flex flex-col focus-within:flex w-48 bg-white border border-gray-200 rounded-lg shadow-lg p-2 z-30">
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                History
              </a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Our Team
              </a>
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                Blog
              </a>
            </div>
          </div>

          {/* Other Nav Items */}
          <a href="#" className="text-gray-700 hover:font-medium hover:text-black">
            Careers
          </a>
          <a href="#" className="text-gray-700 hover:font-medium hover:text-black">
            About
          </a>

          {/* Login and Register Buttons - Only in Hamburger Menu on Small Screens */}
          {isMenuOpen && (
            <div className="flex flex-col space-y-2 md:hidden mt-4">
              <button className="text-gray-700 hover:font-medium hover:text-black active:font-bold active:bg-black active:text-black px-4 py-2 rounded-xl transition duration-300">
                Login
              </button>
              <button className="border border-gray-700 text-gray-700 hover:font-medium hover:text-black active:text-base active:bg-black active:text-black px-4 py-2 rounded-xl transition duration-300">
                Register
              </button>
            </div>
          )}
        </nav>

        {/* Login and Register Buttons - Right Aligned on Large Screens */}
        <div className="hidden md:flex space-x-4 text-lg ml-auto">
          <button className="text-gray-700 hover:font-medium hover:text-black active:font-bold active:bg-black active:text-black px-4 py-2 rounded-xl transition duration-300">
            Login
          </button>
          <button className="border border-gray-700 text-gray-700 hover:font-medium hover:text-black active:text-base active:bg-black active:text-black px-4 py-2 rounded-xl transition duration-300">
            Register
          </button>
        </div>
      </header>

      <section className="flex flex-col md:flex-row px-8 py-16 md:px-12">
        <figure className="flex-1 order-1 md:order-2">
          <img
            src={imageHero}
            alt="Imagehero"
            className="w-full md:w-[70%] h-auto rounded-lg object-cover -mt-11 ml-0 md:ml-20"
          />
        </figure>

        <article className="max-w-md flex-1 order-2 md:order-1 mt-8 md:mt-14">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 md:mb-16 text-black text-left">Make remote work</h1>
          <p className="text-gray-600 mb-8 md:mb-11 text-2xl">
            Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.
          </p>
          <button className="bg-black text-white border border-black px-6 py-3 rounded-xl mb-8 md:mb-12 hover:bg-white hover:text-black active:bg-white active:text-black active:border-black font-bold mx-auto md:mx-0 block">
            Learn more
          </button>

          <footer className="flex flex-wrap items-center justify-around space-x-4 mt-8 md:mt-12 w-full">
            <img src={databizIcon} alt="databiz" />
            <img src={audiophileIcon} alt="audiophile" />
            <img src={meetIcon} alt="meet" />
            <img src={makerIcon} alt="maker" />
          </footer>
        </article>
      </section>
    </main>
  );
}

export default HeaderPage;
