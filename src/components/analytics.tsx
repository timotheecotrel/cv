import { useEffect } from 'react';

const Analytics = () => {
  useEffect(() => {
    // Script Google Analytics
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-XSMCLSG80J';
    script.async = true;
    document.head.appendChild(script);

    // Script d'initialisation inline
    const inlineScript = document.createElement('script');
    inlineScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-XSMCLSG80J'); // <-- PAS de config avec cookie_domain ici
    `;
    document.head.appendChild(inlineScript);
  }, []);

  return null;
};

export default Analytics;
