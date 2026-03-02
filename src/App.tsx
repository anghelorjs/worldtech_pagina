import { ThemeProvider } from './context/ThemeContext';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import SeparadorWaveAzul from './components/common/SeparadorWaveAzul';
import SeparadorWaveNegro from './components/common/SeparadorWaveNegro';
import SeparadorWaveInvertido from './components/common/SeparadorWaveInvertido';
import SEO from './components/common/SEO';

function App() {
  return (
    <ThemeProvider>
      <SEO />
      <div className="relative min-h-screen bg-black text-white">
        <Header />
        <main>
          <Hero />
          <div className="relative">
            <SeparadorWaveInvertido/>
          </div>
          <About />
          <div className="relative">
            <SeparadorWaveAzul />
          </div>
          <Services />
          <div className="relative">
            <SeparadorWaveNegro />
          </div>
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;