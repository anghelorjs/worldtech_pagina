import { ThemeProvider } from './context/ThemeContext';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import CurveSeparator from './components/common/CurveSeparator';
import Services from './components/sections/Services';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import SeparadorWaveAzul from './components/common/SeparadorWaveAzul';
import SeparadorWaveNegro from './components/common/SeparadorWaveNegro';
import SeparadorWaveInvertido from './components/common/SeparadorWaveInvertido';

function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-black text-white">
        <Header />
        <main>
          <Hero />
          {/* Contenedor relativo para el separador */}
          <div className="relative">
            <SeparadorWaveInvertido fillColor="#000000" />
          </div>
          <About />
          {/* Contenedor relativo para el separador */}
          <div className="relative">
            <SeparadorWaveAzul />
          </div>
          <Services />
          {/* Contenedor relativo para el separador */}
          <div className="relative">
            <SeparadorWaveNegro />
          </div>
          <Contact />
          <Footer />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;