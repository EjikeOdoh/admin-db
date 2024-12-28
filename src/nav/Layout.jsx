import { NavLink, Outlet } from "react-router";
import './layout.css'
import { useDispatch } from "react-redux";

export default function Layout() {
    const dispatch = useDispatch()

    function logOut() {
        
    }

    return <div className="main">
            <nav className="py-8 px-4">
                <div className="flex flex-col gap-4">
                    
                        <NavLink className="block" to="/" end>
                            Dashboard
                        </NavLink>
                    
                    
                        <NavLink className="block" to="/analytics">Analytics</NavLink>
                    
                    
                        <NavLink className="block" to="/profile-management">Profile Management</NavLink>
                    
                    
                        <NavLink className="block" to="/user-management">User Management</NavLink>
                    
                </div>

                <div>
                    <NavLink className="block mb-4" to="/settings">Settings</NavLink>

                    <button className="block w-full text-left">Log out</button>
                </div>
             
                    
                       
                    
                



                {/* Mobile Menu */}
            </nav>
            <main className="py-8 px-4">
                <div className="flex justify-between items-center mb-8">
                    <h1>Overview</h1>
                    <p>Interest</p>
                </div>
                <Outlet />
            </main>
        </div>
}