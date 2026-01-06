import React from 'react';
import rndquotesgenerator from '../../assets/projects/rndquotesgenerator.png';
import todolist from '../../assets/projects/todolist.png';
import calculator from '../../assets/projects/calculator.png';
import pokedex from '../../assets/projects/pokedex.png';
import html from '../../assets/skills/html.png';
import css from '../../assets/skills/css.png';
import javascript from '../../assets/skills/javascript.png';
import react from '../../assets/skills/react.png';
import { Code, Computer } from 'lucide-react';

function Projects() {
  const projects = [
    {
      id: 1,
      src: rndquotesgenerator,
      title: 'Quotes Generator',
      github: 'https://github.com/xeduxrdo/rnd-quotes-generator',
      live: 'https://xeduxrdo.github.io/rnd-quotes-generator/',
      techs: [html, css, javascript],
    },
    {
      id: 2,
      src: todolist,
      title: 'TodoList',
      github: 'https://github.com/xeduxrdo/react-todo-list',
      live: 'https://xeduxrdo.github.io/react-todo-list/',
      techs: [html, css, react],
    },
    {
      id: 3,
      src: calculator,
      title: 'Calculator',
      github: 'https://github.com/xeduxrdo/react-calculator',
      live: 'https://xeduxrdo.github.io/react-calculator/',
      techs: [html, css, react],
    },
    {
      id: 4,
      src: pokedex,
      title: 'PokeDex',
      github: 'https://github.com/xeduxrdo/react-pokedex',
      live: 'https://xeduxrdo.github.io/react-pokedex/',
      techs: [html, css, react],
    },
  ];

  return (
    <section
      id='proyectos'
      className='scroll-mt-12 mt-8 flex items-start md:mt-0 md:min-h-[calc(100dvh-theme(space.12))] md:items-center justify-center px-2'>
      {/* Wrapper Container */}
      <div className='flex flex-col justify-center max-w-screen-lg gap-3'>
        {/* Text */}
        <div className='mb-2'>
          <h1 className='text-[clamp(1.5rem,3.32vw,2.125rem)] font-medium mb-0.5'>
            Proyectos
          </h1>
          <p className='text-[clamp(0.875rem,1.50vw,1rem)]'>
            Explora algunos de mis trabajos personales realizados como práctica.
          </p>
        </div>
        {/* Project container */}
        <div className='flex flex-col sm:flex-row sm:flex-wrap justify-center items-center text-center gap-[clamp(10px,2vw,20px)]'>
          {projects.map((project) => (
            <div
              key={project.id}
              className='relative w-full max-w-[400px] sm:w-[clamp(200px,39vw,400px)] rounded-lg overflow-hidden pb-1
              border border-zinc-400 dark:border-zinc-700
              bg-zinc-300 dark:bg-zinc-800'>
              <div className='relative overflow-hidden'>
                <a
                  href={project.live}
                  target='_blank'
                  rel='noopener noreferrer'
                  title={`Ver el proyecto en vivo`}>
                  <img
                    src={project.src}
                    alt={`Logo de ${project.title}`}
                    className='w-full transition-transform transform-gpu will-change-transform duration-500 ease-in-out hover:scale-110'
                  />
                </a>
              </div>

              <p className='text-[clamp(1rem,1.50vw,1.125rem)] mt-1 mb-0.5'>
                {project.title}
              </p>
              <div className='flex items-center justify-around mb-1'>
                <a
                  href={project.github}
                  target='_blank'
                  rel='noopener noreferrer'
                  title='Código fuente en GitHub'
                  className='transition-colors duration-300 ease-in-out text-neutral-700 hover:text-neutral-950 dark:text-neutral-300 dark:hover:text-neutral-50'>
                  <Code />
                </a>
                {/* Technology Container */}
                <div className='flex gap-0.5'>
                  {project.techs.map((tech, index) => (
                    <img
                      key={index}
                      src={tech}
                      alt='Tech logo'
                      className='w-5'
                    />
                  ))}
                </div>
                <a
                  href={project.live}
                  target='_blank'
                  rel='noopener noreferrer'
                  title='Ver el proyecto en vivo'
                  className='transition-colors duration-300 ease-in-out text-neutral-700 hover:text-neutral-950 dark:text-neutral-300 dark:hover:text-neutral-50'>
                  <Computer />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
