export default function KPICard({icon, value, label}){
    return <div className="flex-1 rounded-md min-w-52 min-h-10 border-white border-2 p-4 flex gap-4 justify-center">
        {icon}
        <div>
            <h1 className="text-2xl font-bold">{value}</h1>
            <p className="font-semibold">{label}</p>
        </div>
    </div>
}