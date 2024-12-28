import { NavLink, Outlet } from "react-router";
import './layout.css'

export default function Layout() {
    return <div>
        <nav>
            <ul>
                <li>
                    <NavLink to="/" end>
                        Dashboard
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/analytics">Analytics</NavLink>
                </li>
                <li>
                    <NavLink to="/profile-management">Profile Management</NavLink>
                </li>
                <li>
                    <NavLink to="/user-management">User Management</NavLink>
                </li>
                <li>
                    <NavLink to="/settings">Settings</NavLink>
                </li>
            </ul>



            {/* Mobile Menu */}
        </nav>
        <main>
            <Outlet />
        </main>
    </div>
}