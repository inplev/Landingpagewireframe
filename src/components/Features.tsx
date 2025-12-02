export function Features() {
  const features = [
    { 
      id: 1, 
      title: "Biblioteca Infinita", 
      description: "Acceso ilimitado a más de 5,000 juegos AAA, indies y clásicos. Desde acción trepidante hasta aventuras épicas, RPGs inmersivos y shooters competitivos. Nuevos títulos agregados cada semana con descuentos exclusivos para miembros." 
    },
    { 
      id: 2, 
      title: "Modo Multijugador", 
      description: "Conecta instantáneamente con amigos y jugadores de todo el mundo. Crea equipos, participa en raids cooperativos, domina rankings competitivos y comunícate con chat de voz en tiempo real. Servidores de baja latencia en todas las regiones." 
    },
    { 
      id: 3, 
      title: "Streaming Integrado", 
      description: "Transmite tus partidas en vivo con un solo clic. Sin software adicional, sin complicaciones. Construye tu audiencia, interactúa con espectadores, monetiza tu contenido y guarda tus mejores momentos en clips compartibles." 
    },
  ];

  return (
    <section className="border-b-2 border-gray-300 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <div className="border-2 border-dashed border-gray-400 px-8 py-4 inline-block">
            <h2 className="text-gray-700">Características Épicas</h2>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="border-2 border-gray-400 bg-white p-8">
              <div className="w-16 h-16 border-2 border-gray-400 bg-gray-100 mb-6 flex items-center justify-center">
                <span className="text-gray-500">Ícono</span>
              </div>
              
              <div className="border-b-2 border-dashed border-gray-300 pb-4 mb-4">
                <h3 className="text-gray-700">{feature.title}</h3>
              </div>
              
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}