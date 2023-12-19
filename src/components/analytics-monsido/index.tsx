import { FC, useEffect } from 'react';

const AnalyticsMonsido: FC = () => {
  const { hostname } = location;
  const isDatafabrikken = ['datafabrikken.norge.no'].includes(hostname);

  useEffect(() => {
    const scriptInline = document.createElement('script');
    const script = document.createElement('script');

    scriptInline.type = 'text/javascript';
    scriptInline.innerHTML = `
            window._monsido = window._monsido || {
              token: '2lrkUeAAHPLoQul74vboSQ',
              heatmap: { enabled: true }
            };
          `;

    script.src = 'https://app-script.monsido.com/v2/monsido-script.js';
    script.async = true;

    if (isDatafabrikken) {
      document.body.appendChild(scriptInline);
      document.body.appendChild(script);
    }

    return () => {
      if (isDatafabrikken) {
        document.body.removeChild(scriptInline);
        document.body.removeChild(script);
      }
    };
  }, []);

  return null;
};

export default AnalyticsMonsido;
