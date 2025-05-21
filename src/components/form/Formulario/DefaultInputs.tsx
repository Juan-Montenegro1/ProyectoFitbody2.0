import { useState } from "react";
import ComponentCard from "../../common/ComponentCard";
import Label from "../Label";
import Input from "../input/InputField";
import Select from "../Select";
import DatePicker from "../date-picker";
import { EyeCloseIcon, EyeIcon } from "../../../icons";
import DropZone from "./DropZone"; 

export default function DefaultInputs() {
  const [showPassword, setShowPassword] = useState(false);

  const generoOptions = [
    { value: "masculino", label: "Masculino" },
    { value: "femenino", label: "Femenino" },
    { value: "otro", label: "Otro" },
  ];

  const actividadOptions = [
    { value: "sedentario", label: "Sedentario" },
    { value: "ligera", label: "Ligera actividad" },
    { value: "moderada", label: "Actividad moderada" },
    { value: "intensa", label: "Muy activa" },
  ];

  const objetivoOptions = [
    { value: "perder", label: "Perder peso" },
    { value: "aumentar", label: "Aumentar peso" },
    { value: "masa", label: "Ganar masa muscular" },
  ];

  return (
    <ComponentCard title="Formulario de Datos Personales y Ficha Técnica">
      <div className="space-y-6">
        {/* FOTO DE PERFIL */}
        <div>
          <h2 className="text-xl font-semibold">Foto de perfil</h2>
          <DropZone />
        </div>

        {/* DATOS PERSONALES */}
        <h2 className="text-xl font-semibold pt-6">Datos Personales</h2>

        <div>
          <Label htmlFor="nombre">Nombre</Label>
          <Input type="text" id="nombre" placeholder="Ej. Juan" />
        </div>

        <div>
          <Label htmlFor="apellido">Apellido</Label>
          <Input type="text" id="apellido" placeholder="Ej. Rodríguez" />
        </div>

        <div>
          <Label htmlFor="correo">Correo Electrónico</Label>
          <Input type="email" id="correo" placeholder="ejemplo@email.com" />
        </div>

        <div>
          <Label htmlFor="telefono">Teléfono</Label>
          <Input type="tel" id="telefono" placeholder="3001234567" />
        </div>

        <div>
          <Label>Fecha de nacimiento</Label>
          <DatePicker
            id="fechaNacimiento"
            placeholder="Selecciona tu fecha de nacimiento"
            onChange={(dates, currentDateString) => {
              console.log({ dates, currentDateString });
            }}
          />
        </div>

        <div>
          <Label>Género</Label>
          <Select
            options={generoOptions}
            placeholder="Selecciona tu género"
            onChange={(value) => console.log("Género:", value)}
          />
        </div>

        {/* FICHA TÉCNICA */}
        <h2 className="text-xl font-semibold pt-6">Ficha Técnica</h2>

        <div>
          <Label htmlFor="edad">Edad</Label>
          <Input type="number" id="edad" placeholder="Ej. 25" />
        </div>

        <div>
          <Label htmlFor="peso">Peso (kg)</Label>
          <Input type="number" id="peso" placeholder="Ej. 70" />
        </div>

        <div>
          <Label htmlFor="altura">Altura (cm)</Label>
          <Input type="number" id="altura" placeholder="Ej. 175" />
        </div>

        <div>
          <Label>Nivel de actividad física</Label>
          <Select
            options={actividadOptions}
            placeholder="Selecciona tu nivel"
            onChange={(value) => console.log("Actividad:", value)}
          />
        </div>
      </div>
    </ComponentCard>
  );
}
