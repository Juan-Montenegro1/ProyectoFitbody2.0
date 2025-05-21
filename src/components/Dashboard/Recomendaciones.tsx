export default function EcommerceMetrics() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
      {/* <!-- Metric Item Start --> */}
      <a href="https://www.poderfit.net/blog/2308987_guia-completa-de-suplementos-para-el-gym-cuales-tomar-y-como-usarlos" target="_blank" rel="noopener noreferrer">
        <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6 cursor-pointer hover:shadow-lg transition">
          {/* Encabezado naranja con ícono y texto */}
          <div className="flex items-center gap-2 bg-orange-500 rounded-xl px-4 py-2 dark:bg-orange-600">
            <img
              src="/images/dashboard/tips.png"
              alt="Tips"
              className="w-6 h-6 object-contain"
            />
            <span className="text-sm font-medium text-white">
              RECOMENDACIONES
            </span>
          </div>

          {/* Contenido de la tarjeta */}
          <div className="flex items-center mt-5 p-4 bg-white rounded-lg shadow dark:bg-gray-800">
            <img
              src="/images/dashboard/suplementos-de-proteinas-para-crossfit.webp"
              alt="Suplemento"
              className="w-32 h-32 rounded-xl object-cover"
            />
            <div className="ml-4">
              <h4 className="font-bold text-gray-800 dark:text-white/90 text-base leading-snug break-words">
                Guía de proteínas y suplementos
              </h4>
            </div>
          </div>
        </div>
      </a>

      {/* Segunda tarjeta */}
      <a href="https://degimnasio.net/rutinas-tablas-ejercicios/#google_vignette" target="_blank" rel="noopener noreferrer">
        <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
          {/* Encabezado naranja */}
          <div className="flex items-center gap-2 bg-orange-500 rounded-xl px-4 py-2 dark:bg-orange-600">
            <img
              src="/images/dashboard/tips.png"
              alt="Tips"
              className="w-6 h-6 object-contain"
            />
            <span className="text-sm font-medium text-white">
              RECOMENDACIONES
            </span>
          </div>

          {/* Contenido de la tarjeta */}
          <div className="flex items-center mt-5 p-4 bg-white rounded-lg shadow dark:bg-gray-800">
            <img
              src="/images/dashboard/Rutina.jpeg"
              alt="Suplemento"
              className="w-32 h-32 rounded-xl object-cover"
            />
            <div className="ml-4">
              <h4 className="font-bold text-gray-800 text-title-sm dark:text-white/90">
                Rutinas diarias rápidas y efectivas
              </h4>
            </div>
          </div>
        </div>
      </a>

      {/* <!-- Metric Item End --> */}
    </div>
  );
}
