import React from 'react';
import Image from 'next/image';
import InputText from '../../components/element/InputText'; 

export default function Page() {
    return (
        <main className="bg-gradient-to-r from-palette2 to-palette3 min-h-screen">
            <div className="text-2xl min-w-screen hover:shadow-xl h-10 flex items-center justify-center shadow-2xl">
                Tetifess
            </div>
            <div className="grid-cols-5 grid gap h-screen">
                <div className="col-span-3 flex flex-col mx-auto justify-center items-center">
                    <div className="font-leckerli-one content-center font-bold text-xl py-2">
                        Teti's Safeplace to Confess
                    </div>
                    <div>
                        <Image
                            src="/assets/tetifessLogo.png"
                            layout="responsive"
                            width={4.5}
                            height={1.5}
                            objectFit="contain"
                            alt="Tetifess Logo"
                        />
                    </div>
                </div>
                <div className="col-span-2 inset-0 flex items-center justify-center">
                    <div className="flex flex-col max-w-[45rem] w-full p-8 rounded-xl shadow-2xl">
                        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                            <div className="sm:mx-auto sm:w-full sm:max-w-sm items-center justify-center">
                                <form autoComplete="off" className="space-y-6">
                                    <div>
                                        <InputText label="Username" id="username" type="text" placeholder="Username" />
                                        <InputText label="Password" id="password" type="password" placeholder="Password" />
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <button type="submit" className="w-40 justify-center rounded-full bg-gray-400 py-1.5 text-sm font-semibold text-black shadow-lg hover:shadow-xl hover:bg-gray-500">
                                            Sign in
                                        </button>
                                    </div>
                                </form>
                                <p className="mt-7 text-center text-sm text-emerald-700">
                                    Don't have an account? 
                                    <a href="/register" className="text-cyan-800 hover:underline hover:text-cyan-500">Register Here!</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}