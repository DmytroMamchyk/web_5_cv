function Education() {
    return (
        <section className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative bg-[#0F0A1F]/80 backdrop-blur-sm p-6 rounded-xl border border-indigo-500/20 overflow-hidden">
                {/* Мерехтливі зірки */}
                <div className="absolute inset-0">
                    {[...Array(15)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-0.5 h-0.5 bg-indigo-200 rounded-full animate-pulse"
                            style={{
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 4}s`,
                                opacity: Math.random() * 0.6
                            }}
                        />
                    ))}
                </div>

                <div className="relative flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-xl flex items-center justify-center border border-indigo-500/30">
                        <span className="text-2xl">🎓</span>
                    </div>
                    <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 to-purple-200">
                        Освіта
                    </h2>
                </div>
                
                <div className="relative">
                    <h3 className="text-xl font-semibold text-indigo-300 mb-4 flex items-center gap-2">
                        <span className="text-purple-300">🌙</span>
                        Національний університет "Львівська політехніка"
                    </h3>
                    
                    <div className="space-y-4">
                        <div className="bg-[#1A1A3A]/50 p-4 rounded-lg border border-indigo-500/20">
                            <p className="text-sm text-indigo-300/70 mb-2">Факультет</p>
                            <p className="text-white flex items-center gap-2">
                                <span className="text-purple-300">✦</span>
                                Інститут комп'ютерних технологій, автоматики та метрології
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-[#1A1A3A]/50 p-3 rounded-lg border border-purple-500/20">
                                <p className="text-sm text-purple-300/70 mb-1">Ступінь</p>
                                <p className="text-white">Бакалавр</p>
                            </div>
                            
                            <div className="bg-[#1A1A3A]/50 p-3 rounded-lg border border-indigo-500/20">
                                <p className="text-sm text-indigo-300/70 mb-1">Період</p>
                                <p className="text-white">2023 - 2027</p>
                            </div>
                        </div>
                    </div>
                    
                    {/* Сяюча лінія */}
                    <div className="mt-4 h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
                </div>
            </div>
        </section>
    );
}

export default Education;