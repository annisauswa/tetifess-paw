'use client'

import 'react-toastify/dist/ReactToastify.css'

import axios from 'axios'
import Cookies from 'js-cookie'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'

import InputText from '../../components/element/InputText'
import '../globals.css';

export default function Page() {
  const router = useRouter()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const handleLogin = async (e) => {
    e.preventDefault()
    if (!username || !password) {
      setIsLoading(false)
      alert('Username dan password harus diisi')
      return
    }
    axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/user/login`, {
        username,
        password,
      })
      .then((res) => {
        localStorage.setItem('user', JSON.stringify(res.data.user))
        localStorage.setItem('role', res.data.user.role)
        localStorage.setItem('token', res.data.token)
        Cookies.set('token', res.data.token, {
          expires: 7,
          path: '/',
          domain:
            process.env.NEXT_PUBLIC_API_URL === 'http://localhost:5001'
              ? 'localhost'
              : process.env.NEXT_PUBLIC_API_URL,
        })
        router.push('/home')
        toast.success('Login successful!', { autoClose: 3000 })
      })
      .catch((err) => {

        if (err.response && err.response.status === 404) {
          console.log('Handling 404 error')
          toast.error('User not found. Please check your credentials.')
        } else {
          console.error('Login error:', err)
          toast.error('An error occurred during login. Please try again later.')
        }
      })
  }

  return (
    <div>
      <ToastContainer />
      <main className="custom-background min-h-screen">
        <div className="gap grid h-screen md:grid-cols-2">
          <div className=" hidden flex-col items-end justify-center pr-[30px] md:flex">
            <div className="w-fit">
              <div className="font-leckerli-one content-center py-2 text-center text-xl font-bold text-black">
                <span className="text-tertiery">Teti</span>'s Safeplace to Con
                <span className="text-tertiery">fess</span>
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
          </div>
          <div className=" flex items-center justify-center ">
            <div className="flex w-full  flex-col p-8 ">
              <div className="font-leckerli-one content-center py-2 text-center text-xl font-bold text-black md:hidden">
                <span className="text-tertiery">Teti</span>'s Safeplace to Con
                <span className="text-tertiery">fess</span>
              </div>
              <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="items-center justify-center sm:mx-auto sm:w-full sm:max-w-sm">
                  <form
                    autoComplete="off"
                    className="flex flex-col gap-[32px]"
                    onSubmit={handleLogin}
                  >
                    <div className="flex flex-col gap-[16px]">
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
                      className={`w-full gap-3.5 rounded-[24px] bg-main px-[24px] py-[15px] text-[16px] font-bold text-white hover:bg-white hover:text-main hover:ring-[2px] hover:ring-main  `}
                      type="submit"
                    >
                      Log in
                    </button>
                  </form>
                  <p className="mt-7 text-center font-roboto text-sm text-emerald-800 ">
                    Don't have an account?{' '}
                    <a
                      href="/register"
                      className="font-semibold text-main hover:text-tertiery hover:underline"
                    >
                      Register Here!
                    </a>
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
