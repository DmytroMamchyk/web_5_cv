import React, { useState, useEffect } from 'react';

export default function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState(''); // Для відображення результату відправки

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3000);

    return () => clearTimeout(timer); 
  }, []);

  // Функція для обробки відправки форми на твій Node.js сервер
  const handleSubmit = async (e) => {
    e.preventDefault(); // Зупиняємо стандартне перезавантаження сторінки
    setStatus('Відправка...');

    // Збираємо дані безпосередньо з елементів форми
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      subject: e.target.phone.value, // Можна використати поле телефону як тему
      message: e.target.message.value
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Обов'язково для Koa-bodyparser [cite: 321]
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus('✅ ' + (result.success || 'Успішно надіслано!'));
        setTimeout(() => setIsOpen(false), 2000); // Закриваємо вікно через 2 сек
      } else {
        setStatus('❌ Помилка: ' + (result.error || 'Щось пішло не так'));
      }
    } catch (error) {
      setStatus('❌ Не вдалося з’єднатися з сервером');
    }
  };

  if (!isOpen) return null; 

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="relative w-full max-w-md p-8 bg-slate-900 text-white rounded-2xl shadow-2xl border border-white/20">
        
        <h2 className="text-2xl font-bold mb-6 text-center">Зворотній зв'язок</h2>
        
        {/* Використовуємо onSubmit замість action */}
        <form onSubmit={handleSubmit} className="space-y-4">
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

          {status && <p className="text-center mt-4 text-sm font-medium">{status}</p>}
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