import React, { useState, useEffect } from 'react';

export default function SystemFooter() {
  const [sysInfo, setSysInfo] = useState('');

  useEffect(() => {
    const sysData = {
      platform: navigator.platform,
      agent: navigator.userAgent
    };
    
    localStorage.setItem('systemInfo', JSON.stringify(sysData));
    
    const savedDataString = localStorage.getItem('systemInfo');
    
    if (savedDataString) {
      const parsedData = JSON.parse(savedDataString);
      setSysInfo(`ОС: ${parsedData.platform}, Браузер: ${parsedData.agent}`);
    }
  }, []);

  return (
    <footer className="mt-8 p-6 border-t border-white/10 text-center text-sm opacity-80 transition-colors duration-300">
      <p className="font-semibold mb-2">Системна інформація (з LocalStorage):</p>
      <p className="break-words max-w-2xl mx-auto">{sysInfo}</p>
    </footer>
  );
}