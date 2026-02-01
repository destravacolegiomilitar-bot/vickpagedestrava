import React from 'react';
import Header from './components/Header.tsx';
import SocialProof from './components/SocialProof.tsx';
import PriceComparison from './components/PriceComparison.tsx';
import Features from './components/Features.tsx';
import CurriculumModules from './components/CurriculumModules.tsx';
import BonusSection from './components/BonusSection.tsx';
import Pricing from './components/Pricing.tsx';
import Guarantee from './components/Guarantee.tsx';
import Footer from './components/Footer.tsx';
import WhatsAppButton from './components/WhatsAppButton.tsx';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      {/* A sessão de Prova Social adicionada logo após a primeira sessão (Header) */}
      <SocialProof />
      
      <PriceComparison />
      <Features />
      
      {/* Sessão de Módulos Curriculares */}
      <CurriculumModules />

      {/* Nova sessão de Bônus Exclusivos */}
      <BonusSection />
      
      <Pricing />
      <Guarantee />
      <Footer />

      {/* Botão flutuante de WhatsApp */}
      <WhatsAppButton />
    </div>
  );
};

export default App;