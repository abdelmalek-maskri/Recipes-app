import './Navbar.css'
import { NavLink, Outlet } from 'react-router-dom'
import SearchBar from './SearchBar'
import { useTheme } from '../hooks/useTheme'
import ThemeSelector from './ThemeSelector';



function Navbar() {

    const { color, changeColor } = useTheme();
    const { mode } = useTheme()
  return (
    <div className={`App ${mode}`}>
        <header style={{background: color}}>
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
            <ThemeSelector/>
            <Outlet />
        </main>
    </div>
  )
}

export default Navbar
