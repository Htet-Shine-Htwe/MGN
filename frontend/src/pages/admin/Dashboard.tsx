import DashboardStat from "@/components/charts/DashboardStat";
import OverViewChart from "@/components/charts/OverViewChart"
import AdminUserDropDown from "@/components/ui/AdminUserDropDown"
import { FaUsers,FaEye,FaUpload,FaChartArea } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-8 w-full pt-2 text-white">

      {/* main nav bar */}
      <div className="flex min-w-full justify-between">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <div className="flex gap-4">

          <AdminUserDropDown />
        </div>
      </div>

      {/* section-one chart */}

      <div className="flex flex-col lg:flex-row gap-5">
        <div className="w-full">
          <div className="bg-white w-full min-h-[500px] rounded-3xl">
            <div className="bg-primary w-full h-[500px] rounded-2xl flex flex-col gap-4 px-4 py-4 text-primary-foreground font-bold">
              <div className="flex w-full justify-between">
                <h4>Overview</h4>
              </div>

              <div className="w-full h-[450px] overview-chart lg:min-w-[50vw]" >
                <OverViewChart />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full min-h-[50vh] flex flex-wrap gap-6">
          <div className="w-full flex gap-5">
            <div className="bg-primary w-1/2   rounded-2xl">
                <DashboardStat Icon={FaUsers} stat="100" label="Total Users"/>
            </div>
            <div className="bg-primary w-1/2  rounded-2xl">
              <DashboardStat Icon={FaEye} stat="304.k" label="Total Views"/>

            </div>
          </div>
          <div className="w-full flex gap-5">
            <div className="bg-primary w-1/2   rounded-2xl">
            <DashboardStat Icon={FaUpload} stat="93" label="Uploaded"/>

            </div>
            <div className="bg-primary w-1/2  rounded-2xl">
             <DashboardStat Icon={FaChartArea} stat="1.1K" label="Today Views"/>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Dashboard