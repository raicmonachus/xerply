import { Button } from './ui';

export default function StyleTest() {
  return (
    <div className="min-h-screen bg-neutral-50 p-8">
      {/* Header */}
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-neutral-900 mb-8 font-inter">
          Prueba del Sistema de Diseño Xerply
        </h1>
        
        {/* Color Palette Test */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-neutral-800 mb-6 font-inter">
            Paleta de Colores
          </h2>
          
          {/* Primary Colors */}
          <div className="mb-8">
            <h3 className="text-lg font-medium text-neutral-700 mb-4 font-source-sans">
              Colores Primarios
            </h3>
            <div className="grid grid-cols-10 gap-2">
              <div className="bg-primary-50 h-16 rounded-lg border border-neutral-200 flex items-end p-2">
                <span className="text-xs text-neutral-600">50</span>
              </div>
              <div className="bg-primary-100 h-16 rounded-lg border border-neutral-200 flex items-end p-2">
                <span className="text-xs text-neutral-600">100</span>
              </div>
              <div className="bg-primary-200 h-16 rounded-lg border border-neutral-200 flex items-end p-2">
                <span className="text-xs text-neutral-600">200</span>
              </div>
              <div className="bg-primary-300 h-16 rounded-lg border border-neutral-200 flex items-end p-2">
                <span className="text-xs text-neutral-600">300</span>
              </div>
              <div className="bg-primary-400 h-16 rounded-lg border border-neutral-200 flex items-end p-2">
                <span className="text-xs text-white">400</span>
              </div>
              <div className="bg-primary-500 h-16 rounded-lg border border-neutral-200 flex items-end p-2">
                <span className="text-xs text-white">500</span>
              </div>
              <div className="bg-primary-600 h-16 rounded-lg border border-neutral-200 flex items-end p-2">
                <span className="text-xs text-white">600</span>
              </div>
              <div className="bg-primary-700 h-16 rounded-lg border border-neutral-200 flex items-end p-2">
                <span className="text-xs text-white">700</span>
              </div>
              <div className="bg-primary-800 h-16 rounded-lg border border-neutral-200 flex items-end p-2">
                <span className="text-xs text-white">800</span>
              </div>
              <div className="bg-primary-900 h-16 rounded-lg border border-neutral-200 flex items-end p-2">
                <span className="text-xs text-white">900</span>
              </div>
            </div>
          </div>

          {/* Neutral Colors */}
          <div className="mb-8">
            <h3 className="text-lg font-medium text-neutral-700 mb-4 font-source-sans">
              Colores Neutrales
            </h3>
            <div className="grid grid-cols-10 gap-2">
              <div className="bg-neutral-50 h-16 rounded-lg border border-neutral-200 flex items-end p-2">
                <span className="text-xs text-neutral-600">50</span>
              </div>
              <div className="bg-neutral-100 h-16 rounded-lg border border-neutral-200 flex items-end p-2">
                <span className="text-xs text-neutral-600">100</span>
              </div>
              <div className="bg-neutral-200 h-16 rounded-lg border border-neutral-200 flex items-end p-2">
                <span className="text-xs text-neutral-600">200</span>
              </div>
              <div className="bg-neutral-300 h-16 rounded-lg border border-neutral-200 flex items-end p-2">
                <span className="text-xs text-neutral-600">300</span>
              </div>
              <div className="bg-neutral-400 h-16 rounded-lg border border-neutral-200 flex items-end p-2">
                <span className="text-xs text-white">400</span>
              </div>
              <div className="bg-neutral-500 h-16 rounded-lg border border-neutral-200 flex items-end p-2">
                <span className="text-xs text-white">500</span>
              </div>
              <div className="bg-neutral-600 h-16 rounded-lg border border-neutral-200 flex items-end p-2">
                <span className="text-xs text-white">600</span>
              </div>
              <div className="bg-neutral-700 h-16 rounded-lg border border-neutral-200 flex items-end p-2">
                <span className="text-xs text-white">700</span>
              </div>
              <div className="bg-neutral-800 h-16 rounded-lg border border-neutral-200 flex items-end p-2">
                <span className="text-xs text-white">800</span>
              </div>
              <div className="bg-neutral-900 h-16 rounded-lg border border-neutral-200 flex items-end p-2">
                <span className="text-xs text-white">900</span>
              </div>
            </div>
          </div>

          {/* Cyan Colors */}
          <div className="mb-8">
            <h3 className="text-lg font-medium text-neutral-700 mb-4 font-source-sans">
              Colores Cyan
            </h3>
            <div className="grid grid-cols-10 gap-2">
              <div className="bg-cyan-50 h-16 rounded-lg border border-neutral-200 flex items-end p-2">
                <span className="text-xs text-neutral-600">50</span>
              </div>
              <div className="bg-cyan-100 h-16 rounded-lg border border-neutral-200 flex items-end p-2">
                <span className="text-xs text-neutral-600">100</span>
              </div>
              <div className="bg-cyan-200 h-16 rounded-lg border border-neutral-200 flex items-end p-2">
                <span className="text-xs text-neutral-600">200</span>
              </div>
              <div className="bg-cyan-300 h-16 rounded-lg border border-neutral-200 flex items-end p-2">
                <span className="text-xs text-neutral-600">300</span>
              </div>
              <div className="bg-cyan-400 h-16 rounded-lg border border-neutral-200 flex items-end p-2">
                <span className="text-xs text-white">400</span>
              </div>
              <div className="bg-cyan-500 h-16 rounded-lg border border-neutral-200 flex items-end p-2">
                <span className="text-xs text-white">500</span>
              </div>
              <div className="bg-cyan-600 h-16 rounded-lg border border-neutral-200 flex items-end p-2">
                <span className="text-xs text-white">600</span>
              </div>
              <div className="bg-cyan-700 h-16 rounded-lg border border-neutral-200 flex items-end p-2">
                <span className="text-xs text-white">700</span>
              </div>
              <div className="bg-cyan-800 h-16 rounded-lg border border-neutral-200 flex items-end p-2">
                <span className="text-xs text-white">800</span>
              </div>
              <div className="bg-cyan-900 h-16 rounded-lg border border-neutral-200 flex items-end p-2">
                <span className="text-xs text-white">900</span>
              </div>
            </div>
          </div>
        </div>

        {/* Typography Test */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-neutral-800 mb-6 font-inter">
            Tipografía
          </h2>
          
          <div className="space-y-4">
            <div className="p-4 bg-white rounded-lg border border-neutral-200">
              <h4 className="text-sm font-medium text-neutral-600 mb-2">Inter Font Family</h4>
              <p className="text-lg font-inter">Esta es una muestra del texto usando la fuente Inter.</p>
            </div>
            
            <div className="p-4 bg-white rounded-lg border border-neutral-200">
              <h4 className="text-sm font-medium text-neutral-600 mb-2">Source Sans Pro Font Family</h4>
              <p className="text-lg font-source-sans">Esta es una muestra del texto usando la fuente Source Sans Pro.</p>
            </div>
          </div>
        </div>

        {/* Component Examples */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-neutral-800 mb-6 font-inter">
            Ejemplos de Componentes
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Button Examples */}
            <div className="p-6 bg-white rounded-lg border border-neutral-200">
              <h3 className="text-lg font-medium text-neutral-700 mb-4 font-source-sans">Botones</h3>
              <div className="space-y-3 flex flex-col items-start">
                <Button variant="filled" size="sm">
                  Botón Primario
                </Button>
                <Button variant="outline" size="md">
                  Botón Secundario
                </Button>
                <Button variant="ghost" size="lg">
                  Botón Terciario
                </Button>
              </div>
            </div>

            {/* Card Example */}
            <div className="p-6 bg-white rounded-lg border border-neutral-200 shadow-sm">
              <h3 className="text-lg font-medium text-neutral-700 mb-4 font-source-sans">Tarjeta de Ejemplo</h3>
              <p className="text-neutral-600 mb-4 font-inter">
                Esta es una tarjeta de ejemplo que usa los colores del sistema de diseño de Xerply.
              </p>
              <div className="flex items-center justify-between">
                <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded text-sm font-inter">
                  Etiqueta
                </span>
                <button className="text-primary-600 hover:text-primary-700 font-medium text-sm font-inter">
                  Ver más
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}