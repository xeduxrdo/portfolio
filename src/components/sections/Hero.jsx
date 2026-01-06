import React from 'react';
import { Clipboard, ClipboardCheck, FileText } from 'lucide-react';
import me from '../../assets/me.jpg';
import { useState } from 'react';

function Hero() {
  const [copyEmail, setCopyEmail] = useState(false);
  const textToCopy = 'jeduardogr.97@gmail.com';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(textToCopy);
    setCopyEmail(true);
    setTimeout(() => setCopyEmail(false), 2000);
  };

  return (
    <section
      id='inicio'
      className='mt-12 scroll-mt-12 flex items-start md:min-h-[calc(100dvh-theme(space.12))] md:items-center justify-center px-2'>
      <div className='flex flex-col items-center justify-center max-w-screen-lg gap-4 md:flex-row'>
        {/* Text */}
        <div className=''>
          <h1 className='text-[clamp(1.5rem,3.32vw,2.125rem)] text-center md:text-left md:text-4xl mb-2'>
            Hola👋, soy <span className='font-medium'>Eduardo</span>
          </h1>
          <h2 className='text-[clamp(1.125rem,2.92vw,1.875rem)] font-inconsolata italic text-center md:text-left md:text-3xl mb-2'>
            Desarrollador Frontend
          </h2>
          <p className='text-[clamp(0.875rem,1.50vw,1rem)] max-w-lg mb-2 text-justify md:text-justify'>
            Me fascina el diseño web y la creación de interfaces. Disfruto
            convertir conceptos en experiencias visuales que sean tanto
            atractivas como intuitivas.
          </p>

          {/* Button container */}
          <div className='flex flex-wrap justify-evenly md:justify-start md:gap-2'>
            <button
              onClick={copyToClipboard}
              className='flex items-center justify-between w-40 h-12 p-3 transition-colors 
              text-[clamp(0.875rem,1.50vw,1rem)]
              duration-300 ease-in-out border rounded-sm cursor-pointer border-zinc-400 dark:border-zinc-700 bg-zinc-200 dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800'>
              {copyEmail ? 'Copiado! 🎉' : 'Copiar Email'}
              {copyEmail ? <ClipboardCheck /> : <Clipboard />}
            </button>
            <a
              className='flex items-center justify-between h-12 p-3 transition-colors 
              text-[clamp(0.875rem,1.50vw,1rem)]
              duration-300 ease-in-out border rounded-sm cursor-pointer w-30 border-zinc-400 dark:border-zinc-700 bg-zinc-200 dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800'
              href={`${import.meta.env.BASE_URL}cv-eduardogarcia.pdf`}
              target='_blank'
              rel='noopener noreferrer'>
              Ver CV
              <FileText />
            </a>
          </div>
        </div>

        {/* Image */}
        <div className=''>
          <img
            src={me}
            alt='Me in anime version'
            className='object-cover h-auto rounded-lg w-55'
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
