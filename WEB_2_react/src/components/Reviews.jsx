import React, { useState, useEffect } from 'react';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function getReviews() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/9/comments');
        const data = await response.json();
        setReviews(data); 
      } catch (error) {
        console.error('Помилка:', error);
      }
    }

    getReviews();
  }, []); 

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-6 border-b pb-2 border-current opacity-80">
        Відгуки роботодавців
      </h2>
      <div className="space-y-4">
        {/* Замість forEach і створення div у JS, ми використовуємо метод .map() у JSX */}
        {reviews.map(item => (
          <div 
            key={item.id} 
            className="p-4 rounded-xl backdrop-blur-md bg-white/10 border border-white/20 shadow-sm transition-transform hover:-translate-y-1"
          >
            {/* Виводимо email та body, як на скріншоті */}
            <strong className="text-lg block mb-1">{item.email}</strong>
            <p className="text-base opacity-90">{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}