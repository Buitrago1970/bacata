'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import productImage from '../../assets/producto1.png';

export default function Products() {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
  };


  const sizes = [
    { name: 'S', available: true },
    { name: 'M', available: true },
    { name: 'L', available: true },
    { name: 'XL', available: false }
  ];

  return (
    <main className="flex justify-center items-center mx-auto max-w-6xl">
      <section className="w-full flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">

        <figure className="w-full md:w-4/6 relative aspect-square">
          <Image 
            src={productImage} 
            alt="Descripción del producto" 
            fill
            className="object-cover object-center"  
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </figure>

        <aside className="w-full md:w-2/6 flex flex-col justify-start space-y-4">

          <div>
            <h2 className="text-2xl font-bold text-gray-800">Nombre del Producto</h2>
            <p className="text-lg font-semibold text-gray-600">Precio: $XX.XX</p>
          </div>

          <hr className="border-t-2 border-gray-300" />

          <div className="flex flex-col space-y-4">

            <div className="flex space-x-2">
              {sizes.map((size) => (
                <button
                  key={size.name}
                  className={`
                    w-12 h-12 border-2 
                    ${selectedSize === size.name ? 'bg-[#76726C] text-white' : 'bg-[#C4BCB1] text-gray-800'}
                    ${!size.available ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-100 hover:text-gray-800'}
                    border-black
                  `}
                  onClick={() => size.available && handleSizeSelect(size.name)}
                  disabled={!size.available}
                >
                  {size.name}
                </button>
              ))}
            </div>

            <div>
              <a href="#" className="text-blue-600 underline">Guía de tallas</a>
            </div>
          </div>

          <button 
            className={`
              mt-2 py-3  w-full 
              ${selectedSize ? 'bg-[#C4BCB1] text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}
            `}
            disabled={!selectedSize}
          >
            Agregar
          </button>
        </aside>
      </section>
    </main>
  );
}