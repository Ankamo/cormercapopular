'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import InfoData from '../utils/databse/InfoData.json';

type BeforeInstallPromptEvent = Event & {
  prompt: () => void;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
};

const Page: React.FC = () => {
  const router = useRouter();
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);
  const deferredPrompt = useRef<BeforeInstallPromptEvent | null>(null); // Persistente entre renders

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      const beforeInstallPromptEvent = e as BeforeInstallPromptEvent; // Type assertion
      beforeInstallPromptEvent.preventDefault();
      deferredPrompt.current = beforeInstallPromptEvent;
      setShowInstallPrompt(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = () => {
    setShowInstallPrompt(false);
    if (deferredPrompt.current) {
      deferredPrompt.current.prompt();
      deferredPrompt.current.userChoice
        .then((choiceResult) => {
          console.log(`User choice: ${choiceResult.outcome}`);
        })
        .finally(() => {
          deferredPrompt.current = null; // Limpieza segura
        });
    }
  };

  return (
    <div className="flex flex-col items-center justify-start m-0 p-0 bg-[#121212]">
      <nav className="bg-[#121212] text-white p-4">
        <ul className="flex space-x-4">
          <li><a href="#identidad" className="hover:underline">Identidad Corporativa</a></li>
          <li className="relative group">
            <a href="#" className="hover:underline">Normatividad</a>
            <ul className="absolute left-0 hidden mt-2 bg-[#121212] text-white group-hover:block">
              <li><a href="#actasAsamblea" className="block px-4 py-2 hover:bg-gray-600">Actas de Asamblea</a></li>
              <li><a href="#actasDirectiva" className="block px-4 py-2 hover:bg-gray-600">Actas de Directiva</a></li>
              <li><a href="#resoluciones" className="block px-4 py-2 hover:bg-gray-600">Resoluciones</a></li>
              <li><a href="#politicas" className="block px-4 py-2 hover:bg-gray-600">Políticas Corporativas</a></li>
              <li><a href="#reglamento" className="block px-4 py-2 hover:bg-gray-600">Reglamento Interno de Trabajo</a></li>
              <li><a href="#manual" className="block px-4 py-2 hover:bg-gray-600">Manual de Funciones</a></li>
            </ul>
          </li>
          <li><a href="#contactos" className="hover:underline">Contactos</a></li>
          <li className="relative group">
            <a href="#" className="hover:underline">Corporados</a>
            <ul className="absolute left-0 hidden mt-2 bg-[#121212] text-white group-hover:block">
              <li><a href="#asambleaGeneral" className="block px-4 py-2 hover:bg-gray-600">Asamblea General de Corporados</a></li>
              <li><a href="#juntaDirectiva" className="block px-4 py-2 hover:bg-gray-600">Junta Directiva</a></li>
              <li><a href="#organigrama" className="block px-4 py-2 hover:bg-gray-600">Organigrama</a></li>
            </ul>
          </li>
        </ul>
      </nav>
      <Image src={InfoData.header.logoLeft} alt="Logo Izquierdo" width={200} height={200} className="object-cover mx-auto rounded-full mb-4" />
      <h1 className="text-4xl font-bold text-center">Bienvenido a la Corporación Mercado Popular Rosa Blanca, tu aliado para el desarrollo empresarial y comunitario</h1>
      <p className="mt-4 text-lg text-center">Nuestra misión es fomentar el crecimiento económico y social de la región, ofreciendo soluciones innovadoras y servicios de calidad para nuestros socios y la comunidad.</p>
      <button
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        onClick={() => router.push('/')}
      >
        Ingresar a la WebApp
      </button>
      <div className="border-t border-gray-300 mt-0 mb-0" />
      {showInstallPrompt && (
        <div className="install-prompt">
          <p>¿Deseas instalar la WebApp en tu dispositivo?</p>
          <button onClick={handleInstallClick}>Instalar</button>
        </div>
      )}
    </div>
  );
};

export default Page;