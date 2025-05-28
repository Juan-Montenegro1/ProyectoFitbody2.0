import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ComponentCard from "../../components/common/ComponentCard";
import PageMeta from "../../components/common/PageMeta";
import PerderPesoLu from "../../components/tables/PerderPeso/PerderPesoLu";
import PerderPesoMa from "../../components/tables/PerderPeso/PerderPesoMa";
import PerderPesoMi from "../../components/tables/PerderPeso/PerderPesoMi";
import PerderPesoJu from "../../components/tables/PerderPeso/PerderPesoJu";
import PerderPesoVi from "../../components/tables/PerderPeso/PerderPesoVi";
import PerderPesoSa from "../../components/tables/PerderPeso/PerderPesoSa";
import PerderPesoDo from "../../components/tables/PerderPeso/PerderPesoDo";
import AumenPesoLu from "../../components/tables/AumentarPeso/AumenPesoLu";
import AumenPesoMa from "../../components/tables/AumentarPeso/AumenPesoMa";
import AumenPesoMi from "../../components/tables/AumentarPeso/AumenPesoMi";
import AumenPesoJu from "../../components/tables/AumentarPeso/AumenPesoJu";
import AumenPesoVi from "../../components/tables/AumentarPeso/AumenPesoVi";
import AumenPesoSa from "../../components/tables/AumentarPeso/AumenPesoSa";
import AumenPesoDo from "../../components/tables/AumentarPeso/AumenPesoDo";
import GanMasaLu from "../../components/tables/GanarMasa/GanMasaLu";
import GanMasaMa from "../../components/tables/GanarMasa/GanMasaMa";
import GanMasaMi from "../../components/tables/GanarMasa/GanMasaMi";
import GanMasaJu from "../../components/tables/GanarMasa/GanMasaJu";
import GanMasaVi from "../../components/tables/GanarMasa/GanMasaVi";
import GanMasaSa from "../../components/tables/GanarMasa/GanMasaSa";
import GanMasaDo from "../../components/tables/GanarMasa/GanMasaDo";
import ManFormaLu from "../../components/tables/MantenerForma/ManFormaLu";
import ManFormaMa from "../../components/tables/MantenerForma/ManFormaMa";
import ManFormaMi from "../../components/tables/MantenerForma/ManFormaMi";
import ManFormaJu from "../../components/tables/MantenerForma/ManFormaJu";
import ManFormaVi from "../../components/tables/MantenerForma/ManFormaVi";
import ManFormaSa from "../../components/tables/MantenerForma/ManFormaSa";
import ManFormaDo from "../../components/tables/MantenerForma/ManFormaDo";


export default function BasicTables() {
  return (
    <>
      <PageMeta
        title="FitBody - Progreso Objetivo"
        description="Progreso Objetivo - FitBody"
      />
      <PageBreadcrumb pageTitle="Progreso Objetivo" />

      <div className="space-y-6">
        <ComponentCard title="Objetivo: Mantenerse en Forma ">
          <ManFormaLu/>
          <ManFormaMa/>
          <ManFormaMi/>
          <ManFormaJu/>
          <ManFormaVi/>
          <ManFormaSa/>
          <ManFormaDo/>
        </ComponentCard>
      </div>
      
      <div className="space-y-6">
        <ComponentCard title="Objetivo: Ganar Masa Muscular ">
          <GanMasaLu/>
          <GanMasaMa/>
          <GanMasaMi/>
          <GanMasaJu/>
          <GanMasaVi/>
          <GanMasaSa/>
          <GanMasaDo/>
        </ComponentCard>
      </div>
      
      <div className="space-y-6">
        <ComponentCard title="Objetivo: Aumentar Peso ">
          <AumenPesoLu/>
          <AumenPesoMa/>
          <AumenPesoMi/>
          <AumenPesoJu/>
          <AumenPesoVi/>
          <AumenPesoSa/>
          <AumenPesoDo/>
        </ComponentCard>
      </div>

      <div className="space-y-6">
        <ComponentCard title="Objetivo: Perder Peso ">
          <PerderPesoLu/>
          <PerderPesoMa/>
          <PerderPesoMi/>
          <PerderPesoJu/>
          <PerderPesoVi/>
          <PerderPesoSa/>
          <PerderPesoDo/>
        </ComponentCard>
      </div>
    </>
  );
}
