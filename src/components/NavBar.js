import React from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

export default function NavBar() {
  return (
    <header className="bg-gray-700">
      <div className="container flex justify-between">
        <nav className="flex items-center">
          <NavLink 
            to='/' 
            exact
            activeClassName="text-white"
            className="inflex-flex items-center py-8 pl-2 sm:px-5 mr-2 sm:mr-4 text-blue-300 hover:text-blue-500 text-xl sm:text-4xl titillium font-bold "
          >
            Zach Johnson
          </NavLink>
          <NavLink 
            to='/post'
            className="inflex-flex items-center py-4 px-2 sm:px-5 my-6 rounded text-blue-300 hover:text-blue-500 text-sm sm:text-base"
            activeClassName="text-blue-100 bg-indigo-600"
          >
            Blog
          </NavLink>
          <NavLink 
            to='/project'
            className="inflex-flex items-center py-4 px-2 sm:px-5 my-6 rounded text-blue-300 hover:text-blue-500 text-sm sm:text-base"
            activeClassName="text-blue-100 bg-indigo-600"
          >
            Projects
          </NavLink>
          <NavLink 
            to='/about'
            className="inflex-flex items-center py-4 px-2 sm:px-5 my-6 rounded text-blue-300 hover:text-blue-500 text-sm sm:text-base"
            activeClassName="text-blue-100 bg-indigo-600"
          >
            About
          </NavLink>
        </nav>
        <div className="flex flex-col justify-evenly sm:flex-row sm:py-3 px-0 sm:my-6">
          <SocialIcon url="https://www.linkedin.com/in/zachjjohns/" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35}}/>
          <SocialIcon url="https://github.com/zachjjohns" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35}}/>
        </div>
      </div>
    </header>
  )
}