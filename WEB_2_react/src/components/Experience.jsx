function Experience() {
    return (
        <section className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative bg-[#0F0A1F]/80 backdrop-blur-sm p-6 rounded-xl border border-blue-500/20 overflow-hidden">
                {/* Падаючі зірки */}
                <div className="absolute inset-0 overflow-hidden">
                    {[...Array(3)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-0.5 h-0.5 bg-blue-300 rounded-full animate-shooting-star-slow"
                            style={{
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                                animationDelay: `${i * 4}s`
                            }}
                        />
                    ))}
                </div>

                <div className="relative flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl flex items-center justify-center border border-blue-500/30">
                        <span className="text-2xl">💼</span>
                    </div>
                    <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-200">
                        Досвід роботи
                    </h2>
                </div>
                
                <div className="relative">
                    <h3 className="text-xl font-semibold text-blue-300 mb-4 flex items-center gap-2">
                        <span className="text-cyan-300">🚀</span>
                        Маю навички кур'єра
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div className="bg-[#1A1A3A]/50 p-3 rounded-lg border border-blue-500/20">
                            <p className="text-sm text-blue-300/70 mb-1">Заклад</p>
                            <p className="text-white flex items-center gap-2">
                                <span className="text-yellow-300">✦</span>
                                Katana
                            </p>
                        </div>
                        
                        <div className="bg-[#1A1A3A]/50 p-3 rounded-lg border border-cyan-500/20">
                            <p className="text-sm text-cyan-300/70 mb-1">Період</p>
                            <p className="text-white flex items-center gap-2">
                                <span className="text-purple-300">☾</span>
                                Лютий 2025 - Вересень 2025
                            </p>
                        </div>
                    </div>
                    
                    <div>
                        <h4 className="text-sm text-blue-300/70 mb-3 flex items-center gap-2">
                            <span className="w-1 h-4 bg-blue-400 rounded-full"></span>
                            Основні навички:
                        </h4>
                        <ul className="space-y-3">
                            {[
                                "Вміння спілкуватися з людьми",
                                "Бути організованим в своїх завданнях",
                                "Бути відповідальним в цій сфері"
                            ].map((skill, index) => (
                                <li key={index} className="flex items-center gap-3 text-gray-300 group/item">
                                    <span className="text-blue-400 text-lg transform group-hover/item:scale-110 transition-transform">
                                        ⭐
                                    </span>
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    {/* Орбітальний індикатор */}
                    <div className="mt-4 flex justify-center gap-1">
                        {[...Array(5)].map((_, i) => (
                            <div
                                key={i}
                                className="w-1 h-1 bg-blue-400 rounded-full animate-pulse"
                                style={{ animationDelay: `${i * 0.2}s` }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;