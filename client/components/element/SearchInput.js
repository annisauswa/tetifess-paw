import React, { useState } from 'react';
import { MdSearch } from 'react-icons/md';

const SearchInput = ({ label, id, placeholder, setValue, value }) => {
  return (
    <div className="font-dm-sans mb-4 mr-4 ml-4 relative">
      <label className="block text-black text-sm font-regular font-roboto mb-0.5 ml-2">
        {label}
      </label>
      <div className='relative'>
        <div className="absolute left-0 top-0 py-2 px-3 cursor-pointer text-black">
          <MdSearch className='text-main' size={36} />
        </div>
        <input 
          className="border-tertiery border-[1px] w-full md:w-80 shadow rounded-[8px] py-4 px-3 text-black leading-tight pl-[60px]"
          id={id}
          value={value}
          type="text"
          placeholder={placeholder}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default SearchInput;
