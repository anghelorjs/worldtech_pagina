import { ThemeProvider } from './context/ThemeContext';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import CurveSeparator from './components/common/CurveSeparator';
import Services from './components/sections/Services';
import Contact from './components/sections/Contact';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-black text-white">
        <Header />
        <main>
          <Hero />
          <CurveSeparator />
          <About />
          <Services />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;