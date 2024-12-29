import { BarChart } from "@mui/x-charts";
import KPICard from "../components/KPICard";
import Example from "../components/Barchart";
import Salutation from "../components/Salutation";
import { colors } from "../style/colors";

export default function Dashboard() {

    return <div className={`bg-[${colors.background}] h-full`}>

        <Salutation title="Dashboard" />

        {/* KPI Container */}
        <div className="flex justify-between gap-5">
            <KPICard />
            <KPICard />
            <KPICard />
            <KPICard />
        </div>
        <div className="min-full">
            <Example />
        </div>

    </div>
}