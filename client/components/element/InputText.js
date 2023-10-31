import React from 'react';

const InputText = ({ label, id, type, placeholder }) => {
  return (
    <div className="font-dm-sans">
      <label className="mt-3 text-left block text-black text-sm font-bold mb-1">
        {label}
      </label>
      <div className="mt-3">
        <input className="bg-palette1 w-full shadow rounded-xl py-2 px-3 text-slate-100 leading-tight" id={id} type={type} placeholder={placeholder} />
      </div>
    </div>
  );
};

export default InputText;