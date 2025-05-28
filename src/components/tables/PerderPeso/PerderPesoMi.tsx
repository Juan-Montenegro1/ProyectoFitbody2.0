import React from "react";
import ComponentCard from "../../common/ComponentCard";
import { PlayIcon, DumbbellIcon, FlameIcon } from "lucide-react";

const ejerciciosPerderPesoMiercoles = [
  {
    nombre: "Sentadillas",
    imagen: "/images/logo/fitbodyblack.png",
    Equipo: "Peso corporal",
    Dificultad: "Novato",
  },
  {
    nombre: "Flexiones de Brazo",
    imagen: "/images/logo/fitbodyblack.png",
    Equipo: "Peso corporal",
    Dificultad: "Novato",
  },
  {
    nombre: "Zancadas",
    imagen: "/images/logo/fitbodyblack.png",
    Equipo: "Peso corporal",
    Dificultad: "Novato",
  },
  {
    nombre: "Remo en máquina",
    imagen: "/images/logo/fitbodyblack.png",
    Equipo: "Máquina",
    Dificultad: "Principiante",
  },
];

export default function RutinaPerderPesoMiercoles() {
  return (
    <ComponentCard title="Miercoles (Circuito Full Body)">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {ejerciciosPerderPesoMiercoles.map((ejer, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden border border-gray-700 bg-[#1e1e2f] text-white shadow-md hover:scale-[1.01] transition"
          >
            <img
              src={ejer.imagen}
              alt={ejer.nombre}
              className="w-full h-40 object-cover"
            />
            <div className="p-4 space-y-1">
              <h4 className="text-base font-semibold">{ejer.nombre}</h4>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <DumbbellIcon className="w-4 h-4 text-orange-400" />
                {ejer.Equipo}
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <FlameIcon className="w-4 h-4 text-orange-400" />
                {ejer.Dificultad}
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
