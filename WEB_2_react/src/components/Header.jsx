function Header() {
    return (
        <header className="relative overflow-hidden bg-gradient-to-b from-[#0A0A1F]/90 via-[#1A1A3A]/90 to-[#0A0A1F]/90 p-10 text-center border-b border-purple-500/20">
            {/* Зірки в хедері */}
            <div className="absolute inset-0">
                {[...Array(20)].map((_, i) => (
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

            {/* Сяюче коло за заголовком */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-purple-600/20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
                <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 mb-2">
                    Дмитро Мамчик
                </h1>
                
                <p className="text-xl text-purple-300/90 mb-2 flex items-center justify-center gap-2">
                    <span className="text-blue-300">✦</span>
                    Full Stack Developer
                    <span className="text-pink-300">✦</span>
                </p>
                
                <p className="text-gray-400 flex items-center justify-center gap-2">
                    <span className="text-blue-300">🌙</span>
                    Львів, Україна
                    <span className="text-purple-300">☄️</span>
                </p>
            </div>
        </header>
    );
}

export default Header;