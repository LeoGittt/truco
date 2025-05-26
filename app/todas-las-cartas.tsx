import React from "react";

const cartas = Array.from({ length: 49 }, (_, i) => `/cards/${i}.webp`);

export default function TodasLasCartas() {
  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Todas las cartas del mazo
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-6">
        {cartas.map((src, idx) => (
          <div key={src} className="flex flex-col items-center">
            <img
              src={src}
              alt={`Carta ${idx}`}
              className="w-24 h-36 object-cover rounded-lg shadow-lg border"
              loading="lazy"
            />
            <span className="mt-2 text-sm text-gray-700 font-semibold">
              {idx}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
