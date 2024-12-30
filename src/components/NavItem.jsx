import { NavLink } from "react-router";

export default function NavItem ({label,to,icon }) {
    return <NavLink className="flex items-center gap-2 font-semibold text-nowrap hover:bg-[#FFD700] text-[#FFFFFF] hover:text-[#1B1B2F] p-4 rounded-md" to={to} end>
        {icon}
        <span className="">{label}</span></NavLink>
}