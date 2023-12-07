'use client'

import Link from "next/link";
import React from 'react'

export default function Page() {
  return (
    <div>
          <main className="custom-background min-h-screen flex justify-center items-center">
              <div className='absolute top-0 right-0 mr-16 mt-5'>
          <Link href="/register">
                      <button style={{ width: '100px', height: '56px' }} className="bg-main hover:ring-[2px] hover:ring-main hover:bg-white text-white hover:text-main font-semibold rounded-[24px] text-xl">Sign In</button>
              Sign In
            </button>
                  <Link href="/login">
                      <button style={{ width: '100px', height: '56px' }} className="hover:bg-black hover:bg-opacity-10 text-main hover:text-main font-semibold rounded-[24px] text-xl ml-4">Log In</button>   
              Log In
            </button>
          </Link>
        </div>
              <div style={{ display: 'flex',  justifyContent:'center', alignItems:'center', minHeight: '100vh'}} className='flex flex-col md:flex-row justify-center items-center mt-24'>
                  <img src="/assets/decoratedLogo.png" alt="Image 1" className='mr-8'/>
                  <img src="/assets/tetifess.png" alt="Image 2" className='ml-8'/>
        </div>
              <div />
      </main>
    </div>
  )
}
