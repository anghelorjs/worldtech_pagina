import React, { lazy, Suspense } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import SeparadorWaveInvertido from './components/common/SeparadorWaveInvertido';
import SeparadorWaveAzul from './components/common/SeparadorWaveAzul';
import SeparadorWaveNegro from './components/common/SeparadorWaveNegro';
import SEO from './components/common/SEO';

const LoadingSpinner = () => (
  <div className="flex justify-center items-center py-20">
    <div className="w-12 h-12 border-4 border-t-blue-500 border-b-purple-500 border-l-transparent border-r-transparent rounded-full animate-spin"></div>
  </div>
);

const About = lazy(() => import('./components/sections/About'));
const Services = lazy(() => import('./components/sections/Services'));
const Contact = lazy(() => import('./components/sections/Contact'));
const Footer = lazy(() => import('./components/layout/Footer'));

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