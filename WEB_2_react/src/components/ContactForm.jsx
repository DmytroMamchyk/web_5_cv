import React, { useState, useEffect } from 'react';

export default function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);

    return () => clearTimeout(timer); 
  }, []);

  if (!isOpen) return null; 

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="relative w-full max-w-md p-8 bg-slate-900 text-white rounded-2xl shadow-2xl border border-white/20">
        
        <h2 className="text-2xl font-bold mb-6 text-center">Зворотній зв'язок</h2>
        
        {/* ВСТАВ СВІЙ ЕНДПОЙНТ З FORMSPREE В ACTION */}
        <form action="https://formspree.io/f/mreopobd" method="POST" className="space-y-4">
          <div>
            <input type="text" name="name" placeholder="Ім'я" required 
                   className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-blue-400 text-white placeholder-gray-400" />
          </div>
          <div>
            <input type="email" name="email" placeholder="Email" required 
                   className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-blue-400 text-white placeholder-gray-400" />
          </div>
          <div>
            <input type="tel" name="phone" placeholder="Номер телефону" 
                   className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-blue-400 text-white placeholder-gray-400" />
          </div>
          <div>
            <textarea name="message" placeholder="Ваше повідомлення" required rows="4"
                      className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-blue-400 text-white placeholder-gray-400 resize-none"></textarea>
          </div>
          
          <button type="submit" 
                  className="w-full py-3 mt-2 bg-blue-600 hover:bg-blue-500 rounded-lg font-bold transition-colors shadow-lg">
            Відправити
          </button>
        </form>

        <button 
          onClick={() => setIsOpen(false)} 
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          aria-label="Закрити"
        >
          ✕
        </button>
      </div>
    </div>
  );
}