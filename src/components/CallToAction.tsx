export function CallToAction() {
  return (
    <section className="border-b-2 border-gray-300 bg-white">
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <div className="border-2 border-dashed border-gray-400 px-8 py-6 mb-6 inline-block">
          <h2 className="text-gray-700">¿Listo Para La Acción?</h2>
        </div>
        
        <div className="border-2 border-dashed border-gray-300 px-6 py-4 mb-8">
          <p className="text-gray-600">
            Únete a más de 50 millones de jugadores activos. Primer mes gratis con acceso 
            completo a toda la biblioteca, torneos exclusivos y beneficios premium. 
            Sin compromisos, cancela cuando quieras.
          </p>
        </div>
        
        <button className="border-2 border-gray-800 bg-gray-800 text-white px-10 py-4 hover:bg-gray-700">
          Comenzar Gratis
        </button>
      </div>
    </section>
  );
}