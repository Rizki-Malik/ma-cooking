import AdminNav from "../components/AdminNav"
import AreaChart from "../components/AdminAreaChart"
import Donut from "../components/Donut"
import Kpi from "../components/Kpi"
import TableAdmin from "../components/TableAdmin"
import ChartComposition from "../components/ChartComposition"
import SparkChart from "../components/SparkChart"

import { Card } from '@tremor/react';

export default function Admin(){
    return(
        <>
            <AdminNav />
            <div className="mx-20 mt-10">
                <Kpi />
            </div>
            
            <div className="mx-20 flex flex-row space-x-20">
                <Card className="sm:mx-auto sm:max-w-7xl m-10">
                    <ChartComposition />
                </Card>
                <div className="mx-20 flex flex-col space-y-10 mt-10">
                    <SparkChart />
                    <Card className="sm:mx-auto sm:max-w-lg mb-auto ">
                        <Donut />
                    </Card>
                </div>
            </div>
            <Card className="sm:mx-auto sm:max-w-7xl m-10">
                <TableAdmin />
            </Card>
        </>
    )
}