import Recomendaciones from "../../components/Dashboard/recomendaciones";
import Desafio from "../../components/Dashboard/Desafio";
import StatisticsChart from "../../components/Dashboard/StatisticsChart";
import MonthlyTarget from "../../components/Dashboard/MonthlyTarget";
import RecentOrders from "../../components/Dashboard/RecentOrders";
import DemographicCard from "../../components/Dashboard/DemographicCard";
import PageMeta from "../../components/common/PageMeta";

export default function Home() {
  return (
    <>
      <PageMeta
        title="React.js Ecommerce Dashboard | TailAdmin - React.js Admin Dashboard Template"
        description="This is React.js Ecommerce Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12 space-y-6 xl:col-span-7">
          <Recomendaciones />

          <Desafio />
        </div>

        <div className="col-span-12 xl:col-span-5">
          <DemographicCard />
        </div>
      </div>
    </>
  );
}
