import { useState } from "react";
import ComponentCard from "../../common/ComponentCard";
import Label from "../Label";
import Select from "../Select";

export default function SelectInputs() {
  const [objetivo, setObjetivo] = useState("");

  const objetivos = [
    { value: "ganar", label: "Ganar masa muscular" },
    { value: "perder", label: "Perder peso" },
    { value: "aumentar", label: "Aumentar peso" },
    { value: "mantener", label: "Mantenerse en forma" },
  ];

  const handleSelectChange = (value: string) => {
    setObjetivo(value);
    console.log("Objetivo seleccionado:", value);
  };

  return (
    <ComponentCard title="Seleccionar Objetivo de Entrenamiento">
      <div className="space-y-6">
        <div>
          <Label>Objetivo</Label>
          <Select
            options={objetivos}
            placeholder="Selecciona tu objetivo"
            onChange={handleSelectChange}
            className="dark:bg-dark-900"
          />
        </div>
      </div>
    </ComponentCard>
  );
}
