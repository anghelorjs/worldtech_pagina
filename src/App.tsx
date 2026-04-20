import { lazy, Suspense } from 'react';
import { ThemeProvider } from './frontend/context/ThemeContext';
import Header from './frontend/components/layout/Header';
import Hero from './frontend/components/sections/Hero';
import SeparadorWaveInvertido from './frontend/components/common/SeparadorWaveInvertido';
import SeparadorWaveAzul from './frontend/components/common/SeparadorWaveAzul';
import SeparadorWaveNegro from './frontend/components/common/SeparadorWaveNegro';
import SEO from './frontend/components/common/SEO';

const LoadingSpinner = () => (
  <div className="flex justify-center items-center py-20">
    <div className="w-12 h-12 border-4 border-t-blue-500 border-b-purple-500 border-l-transparent border-r-transparent rounded-full animate-spin"></div>
  </div>
);

const About = lazy(() => import('./frontend/components/sections/About'));
const Services = lazy(() => import('./frontend/components/sections/Services'));
const Contact = lazy(() => import('./frontend/components/sections/Contact'));
const Footer = lazy(() => import('./frontend/components/layout/Footer'));

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
          
          <Suspense fallback={<LoadingSpinner />}>
            <About />
          </Suspense>
          
          <div className="relative">
            <SeparadorWaveAzul />
          </div>
          
          <Suspense fallback={<LoadingSpinner />}>
            <Services />
          </Suspense>
          
          <div className="relative">
            <SeparadorWaveNegro />
          </div>
          
          <Suspense fallback={<LoadingSpinner />}>
            <Contact />
          </Suspense>
        </main>
        
        <Suspense fallback={<LoadingSpinner />}>
          <Footer />
        </Suspense>
      </div>
    </ThemeProvider>
  );
}

export default App;