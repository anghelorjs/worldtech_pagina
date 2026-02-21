import { ThemeProvider } from './context/ThemeContext';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import CurveSeparator from './components/common/CurveSeparator';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-black text-white">
        <Header />
        <main>
          <Hero />
          <CurveSeparator />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;