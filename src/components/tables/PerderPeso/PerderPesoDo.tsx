import React from "react";
import ComponentCard from "../../common/ComponentCard";
import { PlayIcon, DumbbellIcon, FlameIcon } from "lucide-react";

const ejerciciosPerderPesoDomingo = [
  {
    nombre: "Es Momento de Descansar",
    imagen: "/images/logo/fitbodyblack.png",
    Equipo: "Masajes / Estiramientos",
    Dificultad: "Novato",
  },
];

export default function RutinaPerderPesoDomingo() {
  return (
    <ComponentCard title="Domingo (Descanso activo)">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {ejerciciosPerderPesoDomingo.map((ejer, index) => (
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
