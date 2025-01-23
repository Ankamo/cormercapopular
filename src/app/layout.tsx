'use client'
import { useEffect } from 'react';
import '../styles/globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

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

  return (
    <html lang="es">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/logo.ico" type="image/x-icon" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
