import AdminNav from "../components/AdminNav"
import AreaChart from "../components/AdminAreaChart"
import Donut from "../components/Donut"
import Kpi from "../components/Kpi"

export default function Admin(){
    return(
        <>
            <AdminNav />
            <div className="mx-20 my-10">
                <Kpi />
            </div>
            
            <div className="mx-20 flex flex-row space-x-20">
                <AreaChart />
                <Donut />
            </div>
        </>
    )
}