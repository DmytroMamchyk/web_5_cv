function Skills() {
    const skills = [
        { name: "HTML", icon: "🌟" },
        { name: "CSS", icon: "✨" },
        { name: "JavaScript", icon: "⚡" },
        { name: "React", icon: "⚛️" },
        { name: "Node.js", icon: "🚀" },
        { name: "Git", icon: "📡" },
        { name: "Python", icon: "🐍" },
        { name: "TypeScript", icon: "🔷" }
    ];

    return (
        <section className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative bg-[#0F0A1F]/80 backdrop-blur-sm p-6 rounded-xl border border-green-500/20 overflow-hidden">
                {/* Зоряний пил */}
                <div className="absolute inset-0">
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-px h-px bg-green-200/30 rounded-full"
                            style={{
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`
                            }}
                        />
                    ))}
                </div>

                <div className="relative flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl flex items-center justify-center border border-green-500/30">
                        <span className="text-2xl">⚡</span>
                    </div>
                    <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-200 to-emerald-200">
                        Навички
                    </h2>
                </div>
                
                <div className="relative">
                    <div className="flex flex-wrap gap-3 justify-center">
                        {skills.map((skill, index) => (
                            <div
                                key={index}
                                className="group/skill relative"
                            >
                                {/* Орбітальне кільце */}
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full blur opacity-0 group-hover/skill:opacity-30 transition-opacity"></div>
                                
                                <div className="relative bg-[#1A1A3A] px-4 py-2 rounded-full border border-green-500/30 flex items-center gap-2 hover:scale-110 transition-transform">
                                    <span className="text-lg">{skill.icon}</span>
                                    <span className="text-green-300 text-sm font-medium">{skill.name}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    {/* Сузір'я */}
                    <div className="mt-6 flex justify-center gap-4">
                        {[...Array(3)].map((_, i) => (
                            <div key={i} className="flex gap-1">
                                <div className="w-1 h-1 bg-green-400 rounded-full animate-pulse"></div>
                                <div className="w-1 h-1 bg-emerald-400 rounded-full animate-pulse delay-100"></div>
                                <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-200"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;