'use client'

import React, { useState } from 'react'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'

function InputText({ label, id, type, placeholder, isRequired = 'False', setValue, value }) {
  const [showPassword, setShowPassword] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }
  return (
    <div className="font-dm-sans">
      <label className="mb-1 block text-left font-roboto text-sm font-semibold text-black">
        {label}
      </label>
      <div className="relative">
        <input
          className="w-full rounded-[8px] border-[1px] border-tertiery px-3 py-4 leading-tight text-gray-800 shadow"
          id={id}
          value={value}
          type={showPassword ? 'text' : type}
          placeholder={placeholder}
          required={isRequired}
          onChange={(e) => {
            setValue(e.target.value)
          }}
        />
        {type === 'password' && (
          <div
            className="absolute right-0 top-0 cursor-pointer px-3 py-4 text-black"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? (
              <AiFillEye className="text-main" size={24} />
            ) : (
              <AiFillEyeInvisible className="text-main" size={24} />
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default InputText
