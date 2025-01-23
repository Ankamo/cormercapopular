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
    <div className="flex flex-col items-center justify-center h-screen">
      <div className='flex justify-center'>
      <Image src={InfoData.header.logoLeft} alt="Logo Izquierdo" width={150} height={150} className="object-cover mx-auto rounded-full mb-4" />
      </div>
      <h1 className="text-4xl font-bold text-center">Bienvenido a la Corporación Mercado Popular Rosa Blanca, tu aliado para el desarrollo empresarial y comunitario</h1>
      <p className="mt-4 text-lg text-center">Nuestra misión es fomentar el crecimiento económico y social de la región, ofreciendo soluciones innovadoras y servicios de calidad para nuestros socios y la comunidad.</p>
      <button
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        onClick={() => router.push('/ingresar')}
      >
        Ingresar a la WebApp
      </button>

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