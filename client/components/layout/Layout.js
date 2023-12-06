import { useEffect, useState } from 'react';
import Sidebar from './Sidebar'
import Image from 'next/image'
import { MenuIcon } from '@heroicons/react/outline';

export default function Layout({ title, children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (sidebarOpen) {
        setSidebarOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sidebarOpen]);

  return (
    <html lang="en">
      <head>
        <title>{title}</title>
      </head>
      <body className={`h-screen flex flex-col`}>
        <section className='flex py-[5px] md:py-[8px] xl:md-[12px] w-full text-[14px] sm:text-[16px] md:text-[20px] font-semibold bg-secondary border-b-[2px] border-main text-black justify-center items-center gap-[10px] drop-shadow-md fixed z-50'>
          <button type="button" className="text-main md:hidden absolute left-3 m-4" onClick={() => setSidebarOpen(!sidebarOpen)}>
            <MenuIcon className="h-6 w-6" aria-hidden="true" />
          </button>
          <div className='flex items-center gap-[10px]'>
            <div className='w-[28px] h-[28px] md:w-[44px] md:h-[44px]  bg-secondary rounded-full flex items-center justify-center'>
              <Image
                alt="logo"
                src='/assets/tetifessIcon.png'
                width={0}
                height={0}
                sizes="50vw"
                style={{ width: '100%', height: 'auto' }}
                loading="lazy"
              />
            </div>
            tetifess
          </div>
        </section>
        <section className='grid md:grid-cols-3 lg:grid-cols-4 bg-white'>
          <section className='w-full '>
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          </section>
          <section className=' md:col-span-2 bg-white overflow-auto w-full md:border-tertiery md:border-x-[1px] h-screen pt-[40px]  md:pt-[62px] lg:pt-[74px]'>
            {children}
          </section>
          <section className=' bg-white md:max-w-[360px] '>
          
          </section>
        </section>
      </body>
    </html>
  )
}