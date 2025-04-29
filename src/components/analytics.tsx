// src/components/Analytics.tsx
import { useEffect } from 'react';

const Analytics = () => {
  useEffect(() => {
    // Injecter le script
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-XSMCLSG80J'; // <-- Ton ID
    script.async = true;
    document.head.appendChild(script);

    // Initialiser GA
    const inlineScript = document.createElement('script');
    inlineScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-XSMCLSG80J', {
        'cookie_domain': 'auto', // Ceci permet de définir automatiquement le domaine des cookies
        'cookie_expires': 63072000  // Définir la durée de vie des cookies (exemple ici: 2 ans)
      });
    `;
    document.head.appendChild(inlineScript);
  }, []);

  return null; // Ce composant n'affiche rien
};

export default Analytics;
