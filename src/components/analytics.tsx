// src/components/Analytics.tsx
import { useEffect } from 'react';

// Déclaration globale de gtag
declare global {
  interface Window {
    gtag: (command: string, eventName?: string, params?: object) => void;
    dataLayer: Array<any>;
  }
}

const Analytics = () => {
  useEffect(() => {
    // Injecter le script de Google Analytics
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-XSMCLSG80J'; // <-- Ton ID
    script.async = true;
    document.head.appendChild(script);

    // Initialiser Google Analytics une fois le script chargé
    script.onload = () => {
      // Initialiser dataLayer si ce n'est pas déjà fait
      window.dataLayer = window.dataLayer || [];

      // Définir la fonction gtag
      window.gtag = function (...args: any[]) {
        window.dataLayer.push(args);
      };

      // Configuration de Google Analytics
      window.gtag('js', new Date().toISOString()); // Convertir Date en string ISO
      window.gtag('config', 'G-XSMCLSG80J', {
        cookie_domain: 'auto',  // Définit automatiquement le domaine des cookies
        cookie_expires: 63072000,  // Durée de vie des cookies (2 ans ici)
      });
      console.log("Google Analytics configuré");
    };
  }, []);

  return null; // Ce composant ne rend rien, il sert uniquement à injecter le script
};

export default Analytics;
