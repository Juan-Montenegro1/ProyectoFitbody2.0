export default function Desafio() {
  return (
    <div className="bg-orange-500 rounded-xl overflow-hidden flex flex-col sm:flex-row items-center justify-between p-4 shadow-md">
      <div className="text-center sm:text-left sm:pl-6 sm:pr-4">
        <h3 className="text-white text-2xl font-bold">Desafío Semanal</h3>
        <p className="text-white text-md mt-1">Plancha Con Torsión De Cadera</p>
      </div>
      <div className="w-full sm:w-1/2 mt-4 sm:mt-0">
        <img
          src="/images/dashboard/plancha.jpg"
          alt="Plancha con torsión de cadera"
          className="rounded-lg w-full max-h-48 object-cover"
        />
      </div>
    </div>
  );
}
