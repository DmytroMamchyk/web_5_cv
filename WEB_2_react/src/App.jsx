import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import './App.css';

function App() {
    return (
        <div className="resume-card">
            <Header />
            <main>
                <section className="section">
                    <About />
                </section>
                <section className="section">
                    <Experience />
                </section>
                <section className="section">
                    <Education />
                </section>
                <section className="section">
                    <Skills />
                </section>
            </main>
        </div>
    );
}

export default App;