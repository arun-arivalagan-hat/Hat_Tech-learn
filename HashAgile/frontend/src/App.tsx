import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustSection } from './components/TrustSection';
import { ServicesSection } from './components/ServicesSection';
import { ProductEngineeringSection } from './components/ProductEngineeringSection';
import './App.css';

function App() {
  return (
    <div className="relative min-h-screen bg-white text-[#13153F] selection:bg-[#635BFF] selection:text-white">
      <div className="fixed inset-0 pointer-events-none z-30 overflow-hidden hidden sm:block">
        <div className="max-w-[1640px] mx-auto px-4 sm:px-6 lg:px-6 h-full">
          <div className="grid grid-cols-6 lg:grid-cols-12 gap-3 sm:gap-4 lg:gap-4.5 h-full w-full">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className={`h-full bg-[#13153F]/[0.035] border-x border-[#13153F]/[0.02] ${i >= 6 ? 'hidden lg:block' : 'block'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />

          <TrustSection />
          <ServicesSection />
          <ProductEngineeringSection />
        </main>
      </div>
    </div>
  );
}

export default App;
