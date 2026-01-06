import React, { use } from 'react';
import { useState, useRef, useEffect } from 'react';
import { Palette, Sun, Moon, LaptopMinimal } from 'lucide-react';

function ThemeToggle() {
  const [openDropDown, setOpenDropDown] = useState(false);
  const dropdownRef = useRef(null);
  const [theme, setTheme] = useState('system');

  // Close dropdown by clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropDown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Function to apply the actual theme to the <html>
  const applyTheme = (mode) => {
    if (mode === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  // Apply theme according to state
  useEffect(() => {
    if (theme === 'system') {
      const prefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;
      applyTheme(prefersDark ? 'dark' : 'light');
    } else {
      applyTheme(theme);
    }
  }, [theme]);

  // Listen for system changes when the theme = "system"
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e) => {
      if (theme === 'system') {
        applyTheme(e.matches ? 'dark' : 'light');
      }
    };
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, [theme]);

  return (
    <div className='relative '>
      <div ref={dropdownRef}>
        {/* Button that opens the dropdown */}
        <button
          onClick={() => setOpenDropDown(!openDropDown)}
          className={`p-1 rounded-sm cursor-pointer flex items-center
        hover:text-neutral-950 hover:bg-neutral-200
        dark:hover:text-neutral-50 dark:hover:bg-neutral-800
        transition-colors duration-300 ease-in-out
        ${
          openDropDown ? 'bg-neutral-200 dark:bg-neutral-800' : 'bg-transparent'
        }`}>
          <Palette />
        </button>
        <div
          className={`absolute origin-top-right right-0 top-full flex mt-px flex-col rounded-sm transform transition-all duration-300 ease-in-out
        bg-neutral-200 dark:bg-neutral-800
        ${
          openDropDown
            ? 'opacity-100 scale-100'
            : 'opacity-0 scale-95 pointer-events-none'
        }`}>
          {/* Button Light */}
          <button
            onClick={() => setTheme('light')}
            className={`p-1 cursor-pointer rounded-sm transition-colors duration-300 ease-in-out 
              hover:bg-neutral-300 dark:hover:bg-neutral-700
              ${
                theme === 'light' ? 'bg-neutral-300 dark:bg-neutral-700' : ''
              }`}>
            <Sun />
          </button>
          {/* Button Dark */}
          <button
            onClick={() => setTheme('dark')}
            className={`p-1 cursor-pointer rounded-sm transition-colors duration-300 ease-in-out 
              hover:bg-neutral-300 dark:hover:bg-neutral-700
              ${theme === 'dark' ? 'bg-neutral-300 dark:bg-neutral-700' : ''}`}>
            <Moon />
          </button>
          {/* Button System */}
          <button
            onClick={() => setTheme('system')}
            className={`p-1 cursor-pointer rounded-sm transition-colors duration-300 ease-in-out 
              hover:bg-neutral-300 dark:hover:bg-neutral-700
              ${
                theme === 'system' ? 'bg-neutral-300 dark:bg-neutral-700' : ''
              }`}>
            <LaptopMinimal />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ThemeToggle;
