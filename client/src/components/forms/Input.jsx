import React from 'react'

export default function Input({register, name, type = 'text'}) {
    return (
        <input
            {...register(`${name}`)}
            className="py-1.5 px-4 my-2 rounded-md text-sm outline-0 border-1 placeholder-font-800 border-font-800"
            type={`${type}`}
            placeholder={`Enter your ${name}`}
        />
    )
}
