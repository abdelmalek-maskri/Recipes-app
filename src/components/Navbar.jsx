import './Navbar.css'
import { NavLink, Outlet } from 'react-router-dom'
import SearchBar from './SearchBar'
import { useTheme } from '../hooks/useTheme'



function Navbar() {

    const { color, changeColor } = useTheme();

  return (
    <>
        <header style={{background: color}}>
            <nav onClick={() => changeColor('lightblue')}>
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
