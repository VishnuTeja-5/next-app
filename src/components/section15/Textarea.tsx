"use client"
import React, { useState } from 'react';

type TextareaProps = {
  label: string;
  placeholder: string;
  id: string;
  required?: boolean;
};

function Textarea({ label, placeholder, id, required = false }: TextareaProps) {
  const [value, setValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className='w-full flex flex-col gap-4'>
      <label htmlFor={id}>{label} {required && <span className='text-red-700'>*</span>}</label>
      <textarea
        className='border border-gray-300 px-4 py-2 rounded-md bg-gray-100 resize-none'
        id={id}
        name={id}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        rows={6}
      />
    </div>
  );
}

export default Textarea;
