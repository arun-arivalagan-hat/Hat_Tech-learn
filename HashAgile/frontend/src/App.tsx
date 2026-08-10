import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustSection } from './components/TrustSection';
import { ServicesSection } from './components/ServicesSection';
import { ProductEngineeringSection } from './components/ProductEngineeringSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { CtaFooterSection } from './components/CtaFooterSection';
import './App.css';

function App() {
  return (
    <div className="relative min-h-screen bg-white text-[#13153F] selection:bg-[#635BFF] selection:text-white flex flex-col justify-between">
      <div className="relative z-10 flex flex-col flex-1">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <TrustSection />
          <ServicesSection />
          <ProductEngineeringSection />
          <WhyChooseUsSection />
          <CtaFooterSection />
        </main>
      </div>
    </div>
  );
}

export default App;
