'use client';

import React from 'react';
import Image from 'next/image';

const Ingresar: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className='flex justify-center'>
        <Image
          src="/logos.png"
          alt="Logo"
          width={200}
          height={200}
          className="object-cover mx-auto rounded-full mb-4"
        />
      </div>
      <h1 className="text-4xl font-bold text-center">Página de Ingreso</h1>
      <p className="mt-4 text-lg text-center">Por favor, ingresa tus credenciales para continuar.</p>
      {/* Aquí puedes agregar un formulario de ingreso */}
    </div>
  );
};

export default Ingresar;
