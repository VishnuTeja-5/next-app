"use client"
import React, { useState } from 'react';

type SelectProps = {
  label: string;
  id: string;
  options: { value: string; label: string }[];
  placeholder: string;
  required?: boolean;
};

function Select({ label, id, options, placeholder, required = false }: SelectProps) {
  const [value, setValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className='w-full flex flex-col gap-4'>
      <label htmlFor={id}>{label} {required && <span className='text-red-700'>*</span>}</label>
      <select
        className='border border-gray-300 px-4 py-2 rounded-md bg-gray-100'
        id={id}
        name={id}
        value={value}
        onChange={handleChange}
      >
        <option value="" disabled >{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
