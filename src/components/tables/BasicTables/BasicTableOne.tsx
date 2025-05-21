import React, { useState } from "react";
import ComponentCard from "../../common/ComponentCard";
import Select from "../../form/Select";
import { PlayIcon, ClockIcon, FlameIcon } from "lucide-react";

const objetivos = [
  { value: "ganar", label: "Ganar masa muscular" },
  { value: "perder", label: "Perder peso" },
  { value: "aumentar", label: "Aumentar peso" },
  { value: "mantener", label: "Mantenerse en forma" },
];

const ejercicios = [
  {
    grupo: "Bíceps",
    nombre: "Curl con barra",
    duracion: "10 Min",
    repeticiones: "3 Rep",
    imagen: "/images/logo/fitbodyblack.png", /*/images/ejercicios/curl-barra.jpg*/
    objetivos: ["ganar", "aumentar"],
  },
  {
    grupo: "Cardio",
    nombre: "Caminata rápida",
    duracion: "20 Min",
    repeticiones: "1 Sesión",
    imagen: "/images/logo/fitbodyblack.png",
    objetivos: ["perder", "mantener"],
  },
  {
    grupo: "Piernas",
    nombre: "Sentadillas",
    duracion: "15 Min",
    repeticiones: "4 Rep",
    imagen: "/images/ejercicios/sentadillas.jpg",
    objetivos: ["ganar", "aumentar", "mantener"],
  },
  {
    grupo: "Abdomen",
    nombre: "Crunch abdominal",
    duracion: "10 Min",
    repeticiones: "3 Rep",
    imagen: "/images/logo/fitbodyblack.png",
    objetivos: ["perder", "mantener"],
  },
  {
    grupo: "Espalda",
    nombre: "Remo con barra",
    duracion: "15 Min",
    repeticiones: "4 Rep",
    imagen: "/images/logo/fitbodyblack.png",
    objetivos: ["ganar", "aumentar"],
  },
];

export default function BasicTableOne() {
  const [objetivo, setObjetivo] = useState("ganar");

  const ejerciciosFiltrados = ejercicios.filter((ej) =>
    ej.objetivos.includes(objetivo)
  );

  return (
    <ComponentCard title="Rutinas por Objetivo">
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-gray-700 dark:text-white mb-2">Selecciona tu objetivo</h2>
        <Select
          options={objetivos}
          onChange={(value) => setObjetivo(value)}
          placeholder="Selecciona un objetivo"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {ejerciciosFiltrados.map((ej, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden border border-gray-700 bg-[#1e1e2f] text-white shadow-md hover:scale-[1.01] transition"
          >
            <img
              src={ej.imagen}
              alt={ej.nombre}
              className="w-full h-40 object-cover"
            />
            <div className="p-4 space-y-1">
              <h4 className="text-base font-semibold">{ej.nombre}</h4>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <ClockIcon className="w-4 h-4 text-orange-400" />
                {ej.duracion}
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <FlameIcon className="w-4 h-4 text-orange-400" />
                {ej.repeticiones}
              </div>
            </div>
            <div className="p-2 pr-3 flex justify-end">
              <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center">
                <PlayIcon className="text-white w-4 h-4" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </ComponentCard>
  );
}
