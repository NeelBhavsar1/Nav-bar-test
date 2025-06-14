import React from 'react'
import "./NavBar.css"

const NavBar = () => {
  return (
    <div>
        <header className="header">
            <a href="/" className="logo">Neel Bhavsar</a>

            <nav className="navbar">
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Projects</a>
                <a href="/">Contact</a>
            </nav>
        </header>
    </div>
  )
}

export default NavBar