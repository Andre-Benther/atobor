import React, { useState } from 'react';
import './index.css';
import Hero from './components/Hero';
import PitchDeck from './components/PitchDeck';
import InvestorArea from './components/InvestorArea';

function App() {
  const [isInvestorModalOpen, setIsInvestorModalOpen] = useState(false);

  return (
    <div className="app-container">
      <Hero openInvestorModal={() => setIsInvestorModalOpen(true)} />
      <PitchDeck openInvestorModal={() => setIsInvestorModalOpen(true)} />
      <InvestorArea isOpen={isInvestorModalOpen} onClose={() => setIsInvestorModalOpen(false)} />
    </div>
  );
}

export default App;
