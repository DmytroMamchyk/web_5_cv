import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';

function App() {
    return (
        // Космічний градієнтний фон
        <div className="relative min-h-screen flex items-center justify-center p-4 overflow-hidden">
            {/* Затемнений фон */}
            <div className="absolute inset-0 bg-[#030014]"></div>
            
            {/* Зірки (перший шар) */}
            <div className="absolute inset-0">
                {[...Array(50)].map((_, i) => (
                    <div
                        key={i}
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
            
            {/* Великі зірки (другий шар) */}
            <div className="absolute inset-0">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
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
            
            {/* Галактичні туманності */}
            <div className="absolute top-0 -left-20 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-float"></div>
            <div className="absolute bottom-0 -right-20 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-float-delayed"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-3xl"></div>
            
            {/* Падаючі зірки */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(5)].map((_, i) => (
                    <div
                        key={i}
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
            
            {/* Сяючі лінії */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
                <div className="absolute top-2/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
                <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
            </div>
            
            {/* Головний контент */}
            <div className="relative z-10 w-full max-w-4xl">
                {/* Картка зі скляним ефектом */}
                <div className="backdrop-blur-xl bg-[#0A0A1F]/40 rounded-2xl shadow-2xl overflow-hidden border border-white/10">
                    <Header />
                    
                    <div className="p-8 space-y-8">
                        <About />
                        <Experience />
                        <Education />
                        <Skills />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;