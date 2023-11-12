'use client'
import React from 'react'
import { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'

const InputText = ({ label, id, type, placeholder, isRequired="False", setValue, value}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="font-dm-sans">
      <label className="text-left block text-black text-sm font-semibold font-roboto mb-1">
        {label}
      </label>
      <div className='relative'>
        <input 
          className="border-tertiery border-[1px] w-full shadow rounded-[8px] py-4 px-3 text-gray-800 leading-tight"
          id={id}
          value={value}
          type={showPassword ? 'text' : type}
          placeholder={placeholder}
          required={isRequired}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        {type === 'password' && (
          <div
            className="absolute top-0 right-0 py-4 px-3 cursor-pointer text-black"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <AiFillEye className='text-main' size={24}/> : <AiFillEyeInvisible className='text-main' size={24} />}
          </div>
        )}
      </div>
    </div>
  );
};

export default InputText;