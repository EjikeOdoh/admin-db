import { BarChart } from "@mui/x-charts";
import KPICard from "../components/KPICard";
import Example from "../components/Barchart";
import Salutation from "../components/Salutation";
import { colors } from "../style/colors";
import { FaArrowsDownToPeople, FaPeopleGroup } from "react-icons/fa6";
import { MdNaturePeople } from "react-icons/md";
import { SiUnitednations } from "react-icons/si";

export default function Dashboard() {

    return <div className={`bg-[${colors.background}] h-full`}>

        <Salutation title="Overview" />

        {/* KPI Container */}
        <div className="flex justify-between gap-5">
        <KPICard value={1000} label="Total Users" icon={<FaPeopleGroup size={70} color="gold" />} />
        <KPICard value={1000} label="Active Subscribers" icon={<FaArrowsDownToPeople size={70} color="gold" />} />
        <KPICard value={1000} label="Total Observers" icon={<MdNaturePeople size={70} color="gold" />} />
        <KPICard value={23} label="Countries" icon={<SiUnitednations size={70} color="gold" />} />
           
        </div>
        <div className="min-full">
            <Example />
        </div>

    </div>
}