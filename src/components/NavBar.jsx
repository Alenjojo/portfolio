import React from 'react';
import { Link } from "react-router-dom";
import AnimatedText from './AnimatedText';

function NavBar() {
    return (  
        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 ">
  <div className="container flex flex-wrap justify-between items-center mx-auto">
    <a href="https://alenjojo.com" className="flex items-center">
    <span className="self-center ml-5 text-2xl font-semibold whitespace-nowrap dark:text-white">Alen Jojo</span>
    </a>
    <button data-collapse-toggle="mobile-menu" type="button" class="inline-flex justify-center items-center ml-3 text-gray-400 rounded-lg md:hidden hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-500" aria-controls="mobile-menu-2" aria-expanded="false">
      <span class="sr-only">Open main menu</span>
      <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
        <Link to="/">
        <div className="block py-2 pr-4 pl-3 text-fuchsia-700 font-semibold text-lg rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
        <AnimatedText text="Home" time={0}/></div>
        </Link>
        </li>    
        <li>
        <Link to="/a">
          <div className="block py-2 pr-4 pl-3 text-fuchsia-700 font-semibold text-lg rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
          <AnimatedText text="About" time={2}/></div>
          </Link>
          </li>
        <li>
          <Link to="/e">
            <div className="block py-2 pr-4 pl-3 text-fuchsia-700 font-semibold text-lg rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
            <AnimatedText text="Experience" time={4}/></div>
          </Link>
        </li>
        <li>
        <Link to="/p">
          <div className="block py-2 pr-4 pl-3 text-fuchsia-700 font-semibold text-lg rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">            
          <AnimatedText text="Projects" time={6}/></div>
          </Link>
          </li>
        <li>
        <Link to="/c">
          <div className="block py-2 pr-4 pl-3 text-fuchsia-700 font-semibold text-lg rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
          <AnimatedText text="Contact" time={8}/></div>
          </Link>
          </li>
      </ul>
    </div>
  </div>
</nav>
    );
}

export default NavBar;