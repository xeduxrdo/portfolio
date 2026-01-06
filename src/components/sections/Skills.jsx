import React from 'react';
import html from '../../assets/skills/html.svg';
import css from '../../assets/skills/css.svg';
import javascript from '../../assets/skills/javascript.svg';
import react from '../../assets/skills/react.svg';
import tailwindcss from '../../assets/skills/tailwindcss.svg';
import github from '../../assets/skills/github.svg';
import vscode from '../../assets/skills/vscode.svg';
import affinitydesigner from '../../assets/skills/affinitydesigner.svg';
import affinityphoto from '../../assets/skills/affinityphoto.svg';

function Skills() {
  const categories = [
    {
      title: 'Lenguajes',
      techs: [
        { id: 1, src: html, name: 'HTML' },
        { id: 2, src: css, name: 'CSS' },
        { id: 3, src: javascript, name: 'JavaScript' },
      ],
    },
    {
      title: 'Librerías y Frameworks',
      techs: [
        { id: 4, src: react, name: 'React' },
        { id: 5, src: tailwindcss, name: 'TailwindCSS' },
      ],
    },
    {
      title: 'Herramientas',
      techs: [
        { id: 6, src: github, name: 'GitHub' },
        { id: 7, src: vscode, name: 'VSCode' },
        { id: 8, src: affinitydesigner, name: 'AfDesigner' },
        { id: 9, src: affinityphoto, name: 'AfPhoto' },
      ],
    },
    {
      title: 'Idiomas',
      techs: [
        { id: 10, name: 'Español • Nativo' },
        { id: 11, name: 'Inglés • B2' },
      ],
    },
  ];

  return (
    <section
      id='habilidades'
      className='scroll-mt-12 mt-8 flex items-start md:mt-0 md:min-h-[calc(100dvh-theme(space.12))] md:items-center justify-center px-2'>
      {/* Wrapper Container */}
      <div className='flex flex-col justify-center max-w-screen-lg gap-3'>
        {/* Text */}
        <div className='mb-2'>
          <h1 className='text-[clamp(1.5rem,3.32vw,2.125rem)] font-medium mb-0.5'>
            Habilidades
          </h1>
          <p className='text-[clamp(0.875rem,1.50vw,1rem)]'>
            Estas son las tecnologías con las que he trabajado.
          </p>
        </div>
        {/* Skills Container */}
        <div className='flex flex-wrap w-full justify-center gap-[clamp(10px,2vw,20px)]'>
          {/* Render categories */}
          {categories.map(({ title, techs }) => (
            <div
              key={title}
              className='w-full md:flex-1 md:basis-[400px] max-w-[450px]
                border border-zinc-400 dark:border-zinc-700 rounded-lg p-3
                bg-zinc-200 dark:bg-zinc-900'>
              <h2 className='mb-3 text-[clamp(1rem,1.50vw,1.125rem)] font-medium'>
                {title}
              </h2>
              {/* Techs container */}
              <div className='flex flex-wrap justify-center gap-2'>
                {/* Render Techs */}
                {techs.map(({ id, src, name }) => (
                  <div
                    key={id}
                    className='flex items-center justify-center gap-2 px-2 py-1 border rounded-md border-gray-500/50 dark:border-gray-500/20 bg-zinc-100 dark:bg-zinc-800'>
                    {src && (
                      <img
                        src={src}
                        alt={name}
                        className='w-5'
                      />
                    )}
                    <p className='text-[clamp(0.75rem,1.50vw,1rem)]'>{name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
