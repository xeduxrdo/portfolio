import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Education from './components/sections/Education';
// import Contact from './components/sections/Contact';

function App() {
  return (
    <main className='min-h-screen text-neutral-800 dark:text-neutral-200'>
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Education />
    </main>
  );
}

export default App;
