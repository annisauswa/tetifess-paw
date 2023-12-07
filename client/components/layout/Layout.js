import { MenuIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import Sidebar from './Sidebar'

export default function Layout({ title, children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (sidebarOpen) {
        setSidebarOpen(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [sidebarOpen])

  return (
    <html lang="en">
      <head>
        <title>{title}</title>
      </head>
      <body className="flex h-screen flex-col">
        <section className="xl:md-[12px] fixed z-50 flex w-full items-center justify-center gap-[10px] border-b-[2px] border-main bg-secondary py-[5px] text-[14px] font-semibold text-black drop-shadow-md sm:text-[16px] md:py-[8px] md:text-[20px]">
          <button
            type="button"
            className="absolute left-3 m-4 text-main md:hidden"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <MenuIcon className="h-6 w-6" aria-hidden="true" />
          </button>
          <div className="flex items-center gap-[10px]">
            <div className="flex h-[28px] w-[28px] items-center  justify-center rounded-full bg-secondary md:h-[44px] md:w-[44px]">
              <Image
                alt="logo"
                src="https://i.ibb.co/NxxsYNn/tetifess-Icon.png"
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
        <section className="grid bg-white md:grid-cols-3 lg:grid-cols-4">
          <section className="w-full z-30">
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          </section>
          <section className=" h-screen w-full overflow-auto bg-white pt-[40px] md:col-span-2 md:border-x-[1px] md:border-tertiery  md:pt-[62px] lg:pt-[74px] z-10">
            {children}
          </section>
          <section className=" bg-white md:max-w-[360px] " />
        </section>
      </body>
    </html>
  )
}
