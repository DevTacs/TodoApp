import React from 'react'

export default function Header({children}) {
    return (
        <header className="flex justify-around items-center p-4 bg-font-800 text-back-100">
            <h2>TODO APP</h2>
            <nav>{children}</nav>
        </header>
    )
}
