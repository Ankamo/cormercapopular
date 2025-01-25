'use client';
import { useEffect } from 'react';
import '../styles/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { usePathname } from 'next/navigation'; // Importa el hook para obtener la ruta actual

export default function Layout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').then(registration => {
        console.log('Service Worker registered with scope:', registration.scope);
      }).catch(error => {
        console.error('Service Worker registration failed:', error);
      });
    }
  }, []);

  const pathname = usePathname(); // Obtiene la ruta actual

  return (
    <html lang="es">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/logo.ico" type="image/x-icon" />
      </head>
      <body>
        {/* Renderiza el Header y pasa la prop showNav */}
        <Header showNav={pathname !== '/'} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}