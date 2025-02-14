"use client"
import React, { useState } from 'react'

type inputProps = {
  type: string;
  label: string;
  placeholder: string;
  id: string;
  required?:boolean;
}

function Input({type, label, placeholder, id, required=false}:inputProps) {
  const [value, setValue] = useState('')
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value)
  }
  return (
    <div className='w-full flex flex-col gap-4'>
      <label htmlFor={`${id}`}>{label} {required && <span className='text-red-700'>*</span>}</label>
      <input className='border border-gray-300 px-4 py-2 rounded-md bg-gray-100' onChange={(e) => handleChange(e)} type={`${type}`} placeholder={`${placeholder}`} id={`${id}`} name={`${id}`} value={value} />
    </div>
  )
}

export default Input