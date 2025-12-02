export function Header() {
  return (
    <header className="border-b-2 border-gray-300 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="border-2 border-gray-400 px-6 py-3">
            <span className="text-gray-600">GAMEVERSE</span>
          </div>
          
          <nav className="flex gap-8">
            <a href="#" className="text-gray-600 hover:text-gray-900">Juegos</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Torneos</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Comunidad</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Tienda</a>
          </nav>
          
          <button className="border-2 border-gray-400 px-9 py-2 hover:bg-gray-100">
            Iniciar Sesión
          </button>
        </div>
      </div>
    </header>
  );
}