import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import {useState} from 'react'
import 'flowbite';

function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <div>
      <>
        <nav className="relative flex flex-wrap items-center justify-between w-screen  py-8 home">
          <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
              <Link
                to="/comingsoon"
                className="text-xl font-semibold  text-white uppercase"
              >
                Metricks
              </Link>






        

                


    
              <button
                button
                data-collapse-toggle="mobile-menu"
                type="button"
                className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <svg
                  className="hidden w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div
              className={
                'lg:flex flex-grow items-center' +
                (navbarOpen ? ' flex' : ' hidden')
              }
              id="example-navbar-danger"
            >
              <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                <li className="my-3 px-4">
                  <NavLink
                    to="/about"
                    className="text-white   rounded-full hover:cursor-pointer hover:text-pink-500 uppercase"
                  >
                    About
                  </NavLink>
                </li>

<li className="my-3 px-4">

                  <NavLink

                    to="/github"

                    className="text-white   rounded-full hover:cursor-pointer hover:text-pink-500 uppercase"

                  >

                   Github Users

                  </NavLink>

                </li>



                <li className="my-3 px-4">
                  <NavLink
                    to="/blog"
                    className="text-white  rounded-full hover:cursor-pointer hover:text-pink-500 uppercase"
                  >
                    Blog
                  </NavLink>
                </li>
                <li className="my-3 px-4">
                  <NavLink
                    to="/contact"
                    className="text-white bg-blue-700 px-6 py-3 rounded-full hover:cursor-pointer uppercase"
                  >
                    Contact Us
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    </div>
  );
}

export default Navbar;
