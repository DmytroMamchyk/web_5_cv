function About() {
    return (
        <section className="relative group">
            {/* Орбітальне коло */}
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative bg-[#0F0A1F]/80 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20 overflow-hidden">
                {/* Зірки в секції */}
                <div className="absolute inset-0">
                    {[...Array(10)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-0.5 h-0.5 bg-white rounded-full animate-pulse"
                            style={{
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 3}s`,
                                opacity: Math.random() * 0.5
                            }}
                        />
                    ))}
                </div>

                <div className="relative flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl flex items-center justify-center border border-purple-500/30">
                        <span className="text-2xl animate-pulse">👋</span>
                    </div>
                    <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-blue-200">
                        Про мене
                    </h2>
                </div>
                
                <div className="relative">
                    <p className="text-gray-300 leading-relaxed text-lg">
                        <span className="text-purple-300 font-semibold">Привіт!</span> Я студент Львівської політехніки. 
                        Маю пристрасть до <span className="text-blue-300 font-semibold">чистоти коду</span> та 
                        <span className="text-pink-300 font-semibold"> зручності користувацького інтерфейсу</span>. 
                        Постійно вивчаю нові технології та прагну до професійного зростання.
                    </p>
                    
                    {/* Декоративна орбіта */}
                    <div className="mt-4 flex items-center gap-2">
                        <div className="w-12 h-0.5 bg-gradient-to-r from-purple-500 to-transparent"></div>
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                        <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-100"></div>
                        <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse delay-200"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;