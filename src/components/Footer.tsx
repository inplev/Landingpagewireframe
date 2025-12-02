export function Footer() {
  return (
    <footer className="bg-gray-100 border-t-2 border-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="border-2 border-gray-400 p-4">
            <div className="border-b-2 border-dashed border-gray-300 pb-2 mb-4">
              <h4 className="text-gray-700">Plataforma</h4>
            </div>
            <ul className="space-y-2 text-gray-600">
              <li>Explorar Juegos</li>
              <li>Descargar App</li>
              <li>Requisitos del Sistema</li>
            </ul>
          </div>
          
          <div className="border-2 border-gray-400 p-4">
            <div className="border-b-2 border-dashed border-gray-300 pb-2 mb-4">
              <h4 className="text-gray-700">Comunidad</h4>
            </div>
            <ul className="space-y-2 text-gray-600">
              <li>Foros</li>
              <li>Torneos</li>
              <li>Creadores</li>
            </ul>
          </div>
          
          <div className="border-2 border-gray-400 p-4">
            <div className="border-b-2 border-dashed border-gray-300 pb-2 mb-4">
              <h4 className="text-gray-700">Soporte</h4>
            </div>
            <ul className="space-y-2 text-gray-600">
              <li>Centro de Ayuda</li>
              <li>Contacto</li>
              <li>Estado del Servidor</li>
            </ul>
          </div>
          
          <div className="border-2 border-gray-400 p-4">
            <div className="border-b-2 border-dashed border-gray-300 pb-2 mb-4">
              <h4 className="text-gray-700">Legal</h4>
            </div>
            <ul className="space-y-2 text-gray-600">
              <li>Política de Privacidad</li>
              <li>Términos de Servicio</li>
              <li>Código de Conducta</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t-2 border-gray-300 pt-8 text-center text-gray-600">
          <p>© 2025 GameVerse. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}