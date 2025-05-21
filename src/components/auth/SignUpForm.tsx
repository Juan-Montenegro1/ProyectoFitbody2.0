import { useState } from "react";
import { EyeCloseIcon, EyeIcon } from "../../icons";
import Label from "../form/Label";
import Input from "../form/input/InputField";
import Checkbox from "../form/input/Checkbox";
import React from "react";
import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


export default function SignUpForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isChecked) {
      setErrorMessage("Debes aceptar los Términos y Condiciones.");
      return;
    }

    try {
      await axios.post("http://localhost:8080/api/auth/register", {
        ...formData,
      });

      navigate("/SignIn");
    }catch (error: unknown) {
      const axiosError = error as AxiosError<{ message: string }>;
      const errorMsg =
      axiosError.response?.data?.message || "Error al registrar el usuario.";
      setErrorMessage(errorMsg);
      console.error("Registro fallido:", axiosError);
    }


  };

  return (
    <div className="flex flex-col flex-1 w-full overflow-y-auto lg:w-1/2 no-scrollbar">
      <div className="w-full max-w-md mx-auto mb-5 sm:pt-10"></div>
      <div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
        <div className="mb-5 sm:mb-8">
          <h1 className="mb-2 font-semibold text-gray-800 text-title-sm dark:text-white/90 sm:text-title-md">
            Inscribirse
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            ¡Introduce tu email y contraseña para registrarte!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <Label>Nombre completo<span className="text-error-500">*</span></Label>
              <Input
                type="text"
                name="firstName"
                placeholder="Ingrese su nombre"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div>
              <Label>Apellido<span className="text-error-500">*</span></Label>
              <Input
                type="text"
                name="lastName"
                placeholder="Ingrese su apellido"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <Label>Correo electrónico<span className="text-error-500">*</span></Label>
            <Input
              type="email"
              name="email"
              placeholder="Ingrese su correo electrónico"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <Label>Contraseña<span className="text-error-500">*</span></Label>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Ingrese su contraseña"
                value={formData.password}
                onChange={handleChange}
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute z-30 -translate-y-1/2 cursor-pointer right-4 top-1/2"
              >
                {showPassword ? (
                  <EyeIcon className="fill-gray-500 dark:fill-gray-400 size-5" />
                ) : (
                  <EyeCloseIcon className="fill-gray-500 dark:fill-gray-400 size-5" />
                )}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Checkbox
              className="w-5 h-5"
              checked={isChecked}
              onChange={(checked: boolean) => setIsChecked(checked)}
            />
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Acepto los{" "}
              <span className="text-gray-800 dark:text-white/90">
                Términos y Condiciones
              </span>{" "}
              y la{" "}
              <span className="text-gray-800 dark:text-white">
                Política de Privacidad
              </span>
              .
            </p>
          </div>

          {errorMessage && (
            <p className="text-sm text-error-500">{errorMessage}</p>
          )}

          <button
            type="submit"
            className="w-full px-4 py-3 text-sm font-medium text-white transition rounded-lg bg-brand-500 shadow-theme-xs hover:bg-brand-600"
            disabled={!isChecked}
          >
            Inscribirse
          </button>
        </form>

        <div className="mt-5">
          <p className="text-sm font-normal text-center text-gray-700 dark:text-gray-400 sm:text-start">
            ¿Ya tienes una cuenta?{" "}
            <Link
              to="/SignIn"
              className="text-brand-500 hover:text-brand-600 dark:text-brand-400"
            >
              Iniciar sesión
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
