import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section className="border-b-2 border-gray-300 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center max-w-3xl mx-auto">
          <div className="border-2 border-dashed border-gray-400 px-12 py-8 mb-8 inline-block">
            <h1 className="text-gray-700">Tu Portal Definitivo al Mundo del Gaming</h1>
          </div>
          
          <div className="border-2 border-dashed border-gray-300 px-8 py-6 mb-8">
            <p className="text-gray-600">
              Descubre miles de juegos increíbles, conecta con millones de jugadores alrededor 
              del mundo, participa en torneos épicos y transmite tus mejores momentos. 
              GameVerse es más que una plataforma, es tu comunidad gaming donde la diversión 
              nunca termina. Juega en PC, consola o móvil desde una sola cuenta.
            </p>
          </div>
          
          <div className="flex gap-4 justify-center">
            <button className="border-2 border-gray-800 bg-gray-800 text-white px-8 py-3 hover:bg-gray-700">
              Jugar Ahora
            </button>
            <button className="border-2 border-gray-400 px-8 py-3 hover:bg-gray-100">
              Explorar Juegos
            </button>
          </div>
        </div>
        
        <div className="mt-16 rounded-lg overflow-hidden shadow-lg">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1614179524047-e1ab49a0a0cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBzZXR1cHxlbnwxfHx8fDE3NjQ1NTQwOTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Gaming Setup"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}