import React from 'react';

function Experience() {
  const experience = [
    {
      id: 1,
      puesto: 'Especialista Cloud',
      empresa: 'Honne Services',
      fecha: 'Sep/2022 - Mar/2023',
      descripcion:
        'Soporte y atención al cliente mediante la plataforma Azure.',
      actividades: [
        'Registrar, categorizar y priorizar incidentes y requisitos',
        'Mantener informado al cliente sobre el estado actual de las incidencias y los requisitos',
        'Realizar informes y reportes',
      ],
    },
    {
      id: 2,
      puesto: 'Estadías',
      empresa: 'Universidad Politécnica de Victoria',
      fecha: 'Sep/2020 - Dic/2020',
      descripcion:
        'Practicante de desarrollo web del programa operativo anual de la Universidad Politécnica de Victoria.',
      actividades: [
        'Modulos CRUD',
        'Implementación de roles de usuario y autenticación',
        'Generación de reportes en PDF',
      ],
    },
    {
      id: 3,
      puesto: 'Estancias II',
      empresa: 'Universidad Politécnica de Victoria',
      fecha: 'Mar/2020 - Abr/2020',
      descripcion: 'Practicante de desarrollo web del tribunal electrónico.',
      actividades: [
        'Diseño de bosquejos y pantallas',
        'Desarrollo de prototipo pagina web',
      ],
    },
    {
      id: 4,
      puesto: 'Estancias I',
      empresa: 'Universidad Politécnica de Victoria',
      fecha: 'Nov/2017 - Dic/2017',
      descripcion:
        'Practicante de desarrollo web en la presidencia área jurídica',
      actividades: [
        'Participación en el diseño y maquetado de interfaces responsivas',
        'Implementación de secciones estáticas y elementos visuales',
      ],
    },
  ];

  return (
    <section
      id='experiencia'
      className='scroll-mt-12 mt-8 flex items-start md:mt-0 md:min-h-[calc(100dvh-theme(space.12))] md:items-center justify-center px-2'>
      {/* Wrapper Container */}
      <div className='flex flex-col justify-center max-w-screen-lg gap-3'>
        {/* Text */}
        <div className='mb-2'>
          <h1 className='text-[clamp(1.5rem,3.32vw,2.125rem)] font-medium mb-0.5'>
            Experiencia
          </h1>
          <p className='text-[clamp(0.875rem,1.50vw,1rem)]'>
            Este apartado reúne mi experiencia académica y laboral.
          </p>
        </div>
        {/* Experience Container */}
        <div className='flex flex-wrap justify-center gap-[clamp(10px,2vw,20px)]'>
          {/* Company Container */}
          {experience.map((exp) => (
            <div
              key={exp.id}
              className='w-full pl-4 
              border-l-3 border-neutral-500'>
              <h3 className='text-[clamp(1rem,1.50vw,1.125rem)] font-medium'>
                {exp.puesto}
              </h3>
              <p className='text-[clamp(0.875rem,1.50vw,1rem)] text-neutral-500'>
                {exp.empresa} | {exp.fecha}
              </p>
              <p
                className='text-[clamp(0.875rem,1.50vw,1rem)]
              text-neutral-700 dark:text-neutral-300 '>
                {exp.descripcion}
              </p>
              {/* Company Activity Container */}
              <ul>
                {exp.actividades.map((actividad, index) => (
                  <li
                    key={index}
                    className='list-disc list-inside text-[clamp(0.875rem,1.50vw,1rem)]
                    text-neutral-700 dark:text-neutral-300'>
                    {actividad}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
