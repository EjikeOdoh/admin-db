import { NavLink, Outlet } from "react-router";
import './layout.css'
import { useDispatch } from "react-redux";
import { logout } from "../store/slices/tokenSlice";
import NavItem from "../components/NavItem";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { TbBrandGoogleAnalytics, TbLogout2 } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { GrUserManager } from "react-icons/gr";
import { CiSettings } from "react-icons/ci";



export default function Layout() {
    const dispatch = useDispatch()

    function logOut() {
        dispatch(logout())
    }

    return <div className="main">
        <nav className="py-8 px-4">
            <div className="flex flex-col gap-4">
                <NavItem label="Dashboard" to="/" icon={<MdOutlineDashboardCustomize />} />
                <NavItem label="Analytics" to="/analytics" icon={<TbBrandGoogleAnalytics />} />
                <NavItem label="Profile Management" to="/profile-management" icon={<CgProfile />} />
                <NavItem label="User Management" to="/user-management" icon={<GrUserManager />} />
            </div>

            <div className="flex flex-col gap-4">
                <NavItem label="Settings" to="/settings" icon={<CiSettings />} />
                <button onClick={logOut} className="flex items-center gap-2 w-full text-left text-white hover:bg-[#FFD700] p-4 rounded-md">
                    <TbLogout2 />
                    Log out</button>
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