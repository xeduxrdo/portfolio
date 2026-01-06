import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { X, Menu } from 'lucide-react';
// import eduardologo from '../assets/skills/eduardologo.svg';
// import { ReactComponent as EduLogo } from '../assets/skills/eduardologo.svg';
import ThemeToggle from './ThemeToggle';

function Navbar() {
  const [navIcon, setNavIcon] = useState(false);

  const links = [
    { id: 1, link: 'inicio' },
    { id: 2, link: 'habilidades' },
    { id: 3, link: 'experiencia' },
    { id: 4, link: 'proyectos' },
    { id: 5, link: 'educacion' },
  ];

  return (
    <header>
      <div className='relative'>
        <nav className='fixed top-0 left-0 w-full z-10 flex items-center justify-between px-4 md:justify-evenly backdrop-blur h-12'>
          <span className='absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neutral-500 to-transparent'></span>
          <a
            className='cursor-pointer text-xl font-medium h-full flex items-center
            text-neutral-700 hover:text-neutral-950 dark:text-neutral-300 dark:hover:text-neutral-50 
            transition-colors duration-300 ease-in-out'
            href='#inicio'>
            {'{E}'}
          </a>
          {/* navIcon=true: The menu activates, covers the entire screen, and displays the links in a column */}
          <ul
            className={`
          ${
            navIcon
              ? 'flex flex-col items-center justify-center text-4xl gap-3 absolute top-0 left-0 w-full h-screen bg-white/80 dark:bg-black/80 z-10'
              : 'hidden md:flex gap-3 text-base h-full'
          }`}>
            {links.map(({ id, link }) => (
              <li
                key={id}
                className='capitalize cursor-pointer md:h-full md:flex md:items-center
                text-neutral-700 hover:text-neutral-950 dark:text-neutral-300 dark:hover:text-neutral-50 
                transition-colors duration-300 ease-in-out'>
                <a
                  className='h-full flex items-center'
                  href={`#${link}`}
                  onClick={() => setNavIcon(false)}>
                  {link.replace('educacion', 'educación')}
                </a>
              </li>
            ))}
          </ul>
          <div className='flex items-center'>
            <ThemeToggle />
            {/* Button to open/close menu: only visible on mobile */}
            <a
              className='md:hidden z-10 cursor-pointer'
              onClick={() => setNavIcon(!navIcon)}>
              {navIcon ? <X /> : <Menu />}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
