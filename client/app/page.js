'use client'
import React from 'react'
import Link from "next/link";

export default function Page() {
    return (
        <div>
            <main className="custom-background min-h-screen flex flex-col justify-center items-center">
                {/* First Row with height 96px */}
                <div className="flex justify-between items-center h-[96px] bg-secondary border-b-main">
                    <div className='absolute top-0 right-0 mr-16 mt-5'>
                        <Link href={'/register'}>
                            <button style={{ width: '100px', height: '56px' }} className="bg-main hover:ring-[2px] hover:ring-main hover:bg-white text-white hover:text-main font-semibold rounded-[24px] text-xl">Sign In</button>
                        </Link>
                        <Link href={'/login'}>
                            <button style={{ width: '100px', height: '56px' }} className="hover:bg-black hover:bg-opacity-10 text-main hover:text-main font-semibold rounded-[24px] text-xl ml-4">Log In</button>   
                        </Link>
                    </div>
                    {/* Content for the first row */}
                </div>
                
                {/* Second Row taking remaining height, divided into two columns */}
                <div className="flex flex-grow">
                    {/* First Column */}
                    <div className="flex flex-col justify-center flex-1 bg-secondary border-b-main">
                    <p className="text-xl font-semibold text-black ml-[60px] mr-[60px]" style={{ fontSize: '24pt' }}>Where every TETI voice matters</p>
                    <p className="text-xl font-semibold text-main ml-[60px] mr-[60px] mt-2" style={{ fontSize: '16pt' }}>Tetifess is a safe place for the DTETI community, a place where you can express your thoughts, share your concerns, and confess your feelings without judgment. </p>
                        {/* Content for the first column */}
                    </div>

                    {/* Second Column */}
                    <div className="flex justify-center items-center flex-1">
                        {/* Content for the second column */}
                    </div>
                </div>
            </main>
        </div>
    )
}
