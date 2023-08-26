// Importing some of the Dependencies for the the React-router-dom
import { Link } from 'react-router-dom';
import { Outlet } from "react-router-dom";
// Importing Style for the CSS purpose
import Style from './Navbar.module.css';

// Retruning the UI
function NavBar() {
    return (
        <>
            <nav >
            <h1 className= "center">Contact List App</h1>
            </nav>

            <Outlet />
        </>
    )
}

export default NavBar;