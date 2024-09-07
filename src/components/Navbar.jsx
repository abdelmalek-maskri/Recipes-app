import React from 'react'
import './Navbar.css'
import { NavLink, Outlet } from 'react-router-dom'
import SearchBar from './SearchBar'

function Navbar() {
  return (
    <>
        <header>
            <nav>
                <NavLink to="/" className="brand">
                    <h1>Recipe APP</h1>
                </NavLink>
                <SearchBar />
                <NavLink to="/create">
                    <p>Create Recipe</p>
                </NavLink>
            </nav>
        </header>
        <main>
            <Outlet />
        </main>
    </>
  )
}

export default Navbar
