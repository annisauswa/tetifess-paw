'use client'

import 'react-toastify/dist/ReactToastify.css'

import Link from "next/link"
import React from 'react'

export default function Page() {
  return (
    <div>
          <main className="custom-background min-h-screen flex flex-col justify-center items-center">
        {/* First Row with height 96px */}
              <div className="flex justify-end items-center h-[96px] bg-secondary border-b-2 border-b-main p-4 w-full">
          <div className="flex space-x-4">
            <Link href="/register">
                        <button className="bg-main hover:ring-2 hover:ring-main hover:bg-white text-white hover:text-main font-semibold rounded-full px-4 py-2">
                            Sign Up
                          </button>
            </Link>
            <Link href="/login">
                        <button className="hover:bg-black hover:bg-opacity-10 text-main hover:text-main font-semibold rounded-full px-4 py-2">
                            Log In
                          </button>
            </Link>
          </div>
        </div>

        {/* Second Row taking remaining height, divided into two columns */}
              <div className="flex flex-col-reverse sm:flex-row flex-grow">
          {/* First Column */}
        <div className="flex flex-col justify-center flex-1 bg-secondary border-b-main">
            <p
              className="ml-[60px] mr-[60px] text-xl font-semibold text-black"
              style={{ fontSize: '24pt' }}
            >
              Where every TETI voice matters
            </p>
            <p
              className="ml-[60px] mr-[60px] mt-2 text-xl font-semibold text-main"
              style={{ fontSize: '16pt' }}
            >
              Tetifess is a safe place for the DTETI community, a place where you can express your
              thoughts, share your concerns, and confess your feelings without judgment.{' '}
                      {/* Content for the first column */}
            </p>
          </div>

          {/* Second Column */}
                  <div className="flex justify-center items-center flex-1">
                      <img className="w-1/2 sm:w-3/4" src="/assets/combinedLogo.png" alt="Logo"/>
          </div>
        </div>
      </main>
    </div>
  )
}
