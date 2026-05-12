import React, { useState, useRef } from 'react';
import Home from './components/Home';
import ZhiZhuBoYi from './components/ZhiZhuBoYi';
import PrdModal from './components/PrdModal';

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [prdModalOpen, setPrdModalOpen] = useState(false);
  const [prdModalExiting, setPrdModalExiting] = useState(false);
  const [zhizhuExiting, setZhizhuExiting] = useState(false);
  const prdTimerRef = useRef(null);
  const zhizhuTimerRef = useRef(null);

  const handleOpenPrd = () => {
    setPrdModalExiting(false);
    setPrdModalOpen(true);
  };

  const handleClosePrd = () => {
    setPrdModalExiting(true);
    clearTimeout(prdTimerRef.current);
    prdTimerRef.current = setTimeout(() => {
      setPrdModalOpen(false);
      setPrdModalExiting(false);
    }, 200);
  };

  const handleOpenZhiZhu = () => {
    setZhizhuExiting(false);
    setCurrentView('zhizhu');
  };

  const handleBackFromZhiZhu = () => {
    setZhizhuExiting(true);
    clearTimeout(zhizhuTimerRef.current);
    zhizhuTimerRef.current = setTimeout(() => {
      setCurrentView('home');
      setZhizhuExiting(false);
    }, 250);
  };

  return (
    <div>
      {currentView === 'home' && (
        <Home 
          onOpenZhiZhu={handleOpenZhiZhu}
          onOpenPrd={handleOpenPrd}
        />
      )}

      {currentView === 'zhizhu' && (
        <ZhiZhuBoYi onBack={handleBackFromZhiZhu} exiting={zhizhuExiting} />
      )}

      {prdModalOpen && (
        <PrdModal onClose={handleClosePrd} exiting={prdModalExiting} />
      )}
    </div>
  );
}

export default App;
