'use client'

import 'react-toastify/dist/ReactToastify.css';

import axios from 'axios'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useState } from 'react'
import { toast,ToastContainer } from 'react-toastify';

import InputText from '../../components/element/InputText'

export default function Page() {
  const router = useRouter()
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const handleRegister = async (e) => {
    e.preventDefault()
    if (!username || !password || !name) {
      alert('Display name, username, and password must be filled')
      return
    }
    axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/user`, {
        name,
        username,
        password,
        role: 'user',
      })
      .then((res) => {
        toast.success('Account succesfully registered!', { autoClose: 3000 })
        setTimeout(() => {
          router.push('/login')
        }, 3000)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <div>
      <ToastContainer />
      <main className="custom-background min-h-screen">
              <div className="md:grid-cols-5 grid gap h-screen">
                  <div className="col-span-3 md:flex flex-col mx-auto justify-center items-center hidden">
                      <div className="content-center font-bold text-xl py-2">
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
                          <div className="md:hidden font-leckerli-one content-center font-bold text-xl py-2 text-black text-center">
                              <span className='text-tertiery'>Teti</span>'s Safeplace to Con<span className='text-tertiery'>fess</span>
              </div>
              <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                              <div className="sm:mx-auto sm:w-full sm:max-w-sm items-center justify-center">
                                  <form autoComplete="off" className="flex flex-col gap-[32px]" onSubmit={handleRegister}>
                                  <div className="flex flex-col gap-[16px]">
                      <InputText
                        isRequired="True"
                        label="Display Name"
                        id="name"
                        type="text"
                                          placeholder="Display Name" 
                        setValue={(data) => {
                          setName(data)
                        }}
                        value={name}
                      />
                      <InputText
                        isRequired="True"
                        label="Username"
                        id="username"
                        type="text"
                                          placeholder="Username" 
                        setValue={(data) => {
                          setUsername(data)
                        }}
                        value={username}
                      />
                      <InputText
                        isRequired="True"
                        label="Password"
                        id="password"
                        type="password"
                                          placeholder="Password" 
                        setValue={(data) => {
                          setPassword(data)
                        }}
                        value={password}
                      />
                    </div>
                                  <button 
                                      className="w-full bg-main hover:ring-[2px] hover:ring-main hover:bg-white text-white hover:text-main font-bold rounded-[24px] text-[16px] px-[24px] py-[15px] gap-3.5"
                                      type="submit">
                                      Create Account
                                    </button>
                  </form>
                  <p className="mt-7 text-center text-sm text-emerald-700">
                                      Already have an account?{' '}
                                      <a href="/login" className="text-tertiery hover:underline hover:text-main">Login Here!</a>
                      Login Here!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
