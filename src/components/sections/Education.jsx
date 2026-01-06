import React from 'react';
import { ExternalLink } from 'lucide-react';

function Education() {
  const certifications = [
    {
      id: 1,
      institution: 'freeCodeCamp',
      curso: 'Responsive Web Design',
      certification:
        'https://www.freecodecamp.org/certification/edward97/responsive-web-design',
      year: '2022',
      details: 'HTML y CSS, Accesibilidad, Tamaños de pantalla',
    },
    {
      id: 2,
      institution: 'freeCodeCamp',
      curso: 'JavaScript Algorithms and Data Structures',
      certification:
        'https://www.freecodecamp.org/certification/edward97/javascript-algorithms-and-data-structures',
      year: '2023',
      details: 'Fundamentos de JavaScript, Sintaxis, DOM',
    },
  ];

  return (
    <section
      id='educacion'
      className='scroll-mt-12 mt-8 flex items-start md:mt-0 md:min-h-[calc(100dvh-theme(space.12))] md:items-center justify-center px-2'>
      {/* Wrapper Container */}
      <div className='flex flex-col justify-center max-w-screen-lg gap-3'>
        {/* Text */}
        <div className='mb-2'>
          <h1 className='text-[clamp(1.5rem,3.32vw,2.125rem)] font-medium mb-0.5'>
            Educación
          </h1>
          <p className='text-[clamp(0.875rem,1.50vw,1rem)]'>
            Aquí encontrarás mi formación académica y como autodidacta.
          </p>
        </div>
        {/* Education Container */}
        <div className='flex flex-wrap justify-center'>
          {/* University container */}
          <div
            className='flex flex-col w-full max-w-[450px] mb-[clamp(10px,2vw,20px)] p-2.5 border border-zinc-400 dark:border-zinc-700 rounded-lg
          bg-zinc-200 dark:bg-zinc-900'>
            <p className='text-[clamp(0.875rem,1.50vw,1rem)]'>
              <span className='font-medium'>Institución:</span> Universidad
              Politécnica de Victoria
            </p>
            <p className='text-[clamp(0.875rem,1.50vw,1rem)]'>
              <span className='font-medium'>Grado:</span> Ingeniería en
              Tecnologías de la Información
            </p>
            <p className='text-[clamp(0.875rem,1.50vw,1rem)]'>
              <span className='font-medium'>Año:</span> 2015 - 2020
            </p>
            {/* Check container */}
            <div className='flex flex-wrap justify-center gap-1 mt-2'>
              <div
                className='rounded-md px-1.5 py-0.5
                border border-gray-500/50 dark:border-gray-500/20
                bg-zinc-100 dark:bg-zinc-800'>
                <p className='text-[clamp(0.75rem,1.50vw,1rem)]'>
                  Carrera concluida
                </p>
              </div>
              <div
                className='rounded-md px-1.5 py-0.5
                border border-gray-500/50 dark:border-gray-500/20
                bg-zinc-100 dark:bg-zinc-800'>
                <p className='text-[clamp(0.75rem,1.50vw,1rem)]'>Titulado</p>
              </div>
              <div
                className='rounded-md px-1.5 py-0.5
                border border-gray-500/50 dark:border-gray-500/20
                bg-zinc-100 dark:bg-zinc-800'>
                <p className='text-[clamp(0.75rem,1.50vw,1rem)]'>
                  Cédula Profesional
                </p>
              </div>
            </div>
          </div>
          {/* Container Certifications */}
          <div className='flex flex-wrap w-full justify-center gap-[clamp(10px,2vw,20px)] '>
            {certifications.map(
              ({ id, institution, curso, certification, year, details }) => (
                <div
                  className='w-full md:flex-1 md:basis-[400px] max-w-[450px] p-2.5 rounded-lg cert-card
                  border border-zinc-400 dark:border-zinc-700
                  bg-zinc-200 dark:bg-zinc-900'
                  key={id}>
                  <p className='text-[clamp(0.875rem,1.50vw,1rem)]'>
                    <span className='font-medium'>Institución/Plataforma:</span>{' '}
                    {institution}
                  </p>
                  <p className='text-[clamp(0.875rem,1.50vw,1rem)]'>
                    <span className='font-medium'>Curso:</span> {curso}
                  </p>
                  <p className='flex items-center gap-1 text-[clamp(0.875rem,1.50vw,1rem)]'>
                    <span className='font-medium'>Certificación:</span>{' '}
                    <a
                      className='inline-flex gap-1 items-center rounded-md px-1 py-0
                       transition-colors duration-300 ease-in-out border cursor-pointer border-zinc-400 dark:border-zinc-700 bg-zinc-200 dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                      href={certification}
                      target='_blank'
                      rel='noopener noreferrer'>
                      <ExternalLink size={18} />
                      Ver certificación
                    </a>{' '}
                  </p>
                  <p>
                    <span className='font-medium text-[clamp(0.875rem,1.50vw,1rem)]'>
                      Año:
                    </span>{' '}
                    {year}
                  </p>

                  {/* Details container */}
                  <div className='flex flex-wrap justify-center gap-1 mt-2'>
                    {details.split(',').map((detail, index) => (
                      <div
                        className='rounded-md px-1.5 py-0.5
                        border border-gray-500/50 dark:border-gray-500/20
                        bg-zinc-100 dark:bg-zinc-800'
                        key={index}>
                        <p className='text-[clamp(0.75rem,1.50vw,1rem)]'>
                          {detail.trim()}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
