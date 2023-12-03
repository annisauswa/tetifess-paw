import Sidebar from './Sidebar'
import Image from 'next/image'
import { useState } from 'react';
import { MenuIcon } from '@heroicons/react/outline';

export default function Layout({ title, children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <html lang="en">
      <head>
        <title>{title}</title>
      </head>
      <body className={`flex flex-col overflow-hidden`}>
        <section className='flex py-[12px] w-full text-[21px] font-semibold bg-secondary border-b-[2px] border-main text-black justify-center items-center gap-[10px]'>
          <div className='flex items-center gap-[10px]'>
            <div className='w-[56px] h-[56px] bg-secondary rounded-full flex items-center justify-center'>
              <Image
                alt="logo"
                src='/assets/tetifessIcon.png'
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
            tetifess
          </div>
        </section>
        <section className='grid grid-cols-4 bg-white'>
          <section className='max-w-[360px] '>
            <button type="button" className="md:hidden" onClick={() => setSidebarOpen(!sidebarOpen)}>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </button>
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          </section>
          <section className='col-span-2 bg-white overflow-auto w-full'>
            {children}
          </section>
          <section className='border-tertiery border-l-[1px] bg-white max-w-[360px] '>
          
          </section>
        </section>
      </body>
    </html>
  )
}