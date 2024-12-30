import { NavLink, Outlet } from "react-router";
import './layout.css'
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/slices/tokenSlice";
import NavItem from "../components/NavItem";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { TbBrandGoogleAnalytics, TbLogout2 } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { GrUserManager } from "react-icons/gr";
import { CiSettings } from "react-icons/ci";
import { selectUser } from "../store/slices/userSlice";
import { RxAvatar } from "react-icons/rx";



export default function Layout() {
    const dispatch = useDispatch()
    const user = useSelector(selectUser)
    const { name, email, avatar } = user

    function logOut() {
        dispatch(logout())
    }

    return <div className="main">
        <nav className="py-8 px-4">

            <div className="flex flex-col gap-4">
                            
        <h1 className="text-4xl font-bold text-[#FFD700]  mb-6">Logo</h1>
                <NavItem label="Dashboard" to="/" icon={<MdOutlineDashboardCustomize />} />
                <NavItem label="Analytics" to="/analytics" icon={<TbBrandGoogleAnalytics />} />
                <NavItem label="Profile Management" to="/profile-management" icon={<CgProfile />} />
                <NavItem label="User Management" to="/user-management" icon={<GrUserManager />} />
            </div>

            <div className="flex flex-col gap-4">
                <NavItem label="Settings" to="/settings" icon={<CiSettings />} />
                <button onClick={logOut} className="flex items-center gap-2 w-full font-semibold hover:text-[#1B1B2F]  text-left text-white hover:bg-[#FFD700] p-4 rounded-md">
                    <TbLogout2 />
                    Log out</button>
            </div>
            {/* Mobile Menu */}
        </nav>
        <main className="py-8 px-4">
            <div className="flex justify-end items-center mb-8 gap-2">
                <div>
                    <h1 className="font-bold text-xl">{name}</h1>
                    <p className="italic">{email}</p>
                </div>
                <div>
                    {
                        avatar ?  <img src={avatar} /> : <RxAvatar size={40} className="h-full" />
                    }
                   
                </div> 

            </div>
            <Outlet />
        </main>
    </div>
}