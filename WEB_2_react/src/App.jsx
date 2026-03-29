import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';

// Імпортуємо нові компоненти з лабораторної роботи
import Reviews from './components/Reviews'; 
import SystemFooter from './components/SystemFooter'; // ОНОВЛЕНА НАЗВА!    
import ContactForm from './components/ContactForm'; 

function App() {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const currentHour = new Date().getHours();
        if (currentHour >= 7 && currentHour < 21) {
            setTheme('light');
        } else {
            setTheme('dark');
        }
    }, []);

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };


    const isDark = theme === 'dark';

    return (
        <div className={`relative min-h-screen flex flex-col items-center justify-center p-4 overflow-hidden transition-colors duration-500 ${isDark ? 'bg-[#030014] text-white' : 'bg-sky-50 text-slate-800'}`}>
            
            {/* Затемнений фон для темної теми */}
            {isDark && <div className="absolute inset-0 bg-[#030014]"></div>}
            
            {/* Космічні ефекти (рендеримо ТІЛЬКИ в темній темі) */}
            {isDark && (
                <>
                    <div className="absolute inset-0">
                        {[...Array(50)].map((_, i) => (
                            <div
                                key={`star1-${i}`}
                                className="absolute w-0.5 h-0.5 bg-white rounded-full animate-twinkle"
                                style={{
                                    top: `${Math.random() * 100}%`,
                                    left: `${Math.random() * 100}%`,
                                    animationDelay: `${Math.random() * 5}s`,
                                    opacity: Math.random() * 0.7 + 0.3
                                }}
                            />
                        ))}
                    </div>
                    
                    <div className="absolute inset-0">
                        {[...Array(20)].map((_, i) => (
                            <div
                                key={`star2-${i}`}
                                className="absolute w-1 h-1 bg-blue-200/50 rounded-full animate-pulse"
                                style={{
                                    top: `${Math.random() * 100}%`,
                                    left: `${Math.random() * 100}%`,
                                    animationDelay: `${Math.random() * 3}s`,
                                    animationDuration: `${Math.random() * 3 + 2}s`
                                }}
                            />
                        ))}
                    </div>
                    
                    <div className="absolute top-0 -left-20 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-float"></div>
                    <div className="absolute bottom-0 -right-20 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-float-delayed"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-3xl"></div>
                    
                    <div className="absolute inset-0 overflow-hidden">
                        {[...Array(5)].map((_, i) => (
                            <div
                                key={`shooting-${i}`}
                                className="absolute w-0.5 h-0.5 bg-white rounded-full animate-shooting-star"
                                style={{
                                    top: `${Math.random() * 50}%`,
                                    left: `${Math.random() * 100}%`,
                                    animationDelay: `${i * 3}s`,
                                    boxShadow: '0 0 10px 2px rgba(255,255,255,0.3)'
                                }}
                            >
                                <div className="w-10 h-0.5 bg-gradient-to-r from-white to-transparent -translate-y-1/2"></div>
                            </div>
                        ))}
                    </div>
                    
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
                        <div className="absolute top-2/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
                        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
                    </div>
                </>
            )}
            
            {/* Кнопка перемикання теми */}
            <div className="relative z-20 w-full max-w-4xl flex justify-end mb-4">
                <button 
                    onClick={toggleTheme}
                    className={`px-4 py-2 rounded-full font-semibold backdrop-blur-md transition-all ${isDark ? 'bg-white/10 hover:bg-white/20 text-white' : 'bg-blue-200 hover:bg-blue-300 text-slate-800 shadow-md'}`}
                >
                    {isDark ? '☀️ Світла тема' : '🌙 Темна тема'}
                </button>
            </div>

            {/* Головний контент */}
            <div className="relative z-10 w-full max-w-4xl">
                <div className={`backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden border transition-colors duration-500 ${isDark ? 'bg-[#0A0A1F]/40 border-white/10' : 'bg-white/70 border-white shadow-xl'}`}>
                    <Header />
                    
                    <div className="p-8 space-y-8">
                        <About />
                        <Experience />
                        <Education />
                        <Skills />
                        
                        {/* Компонент відгуків */}
                        <Reviews />
                    </div>
                </div>
                
                {/* Компонент Футера */}
                <div className="mt-4">
                    <SystemFooter />
                </div>
            </div>

            {/* Модальне вікно */}
            <ContactForm />
        </div>
    );
}

export default App;