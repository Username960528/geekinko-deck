import React, { useState, useEffect, useCallback } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Slide1 from './slides/Slide1';
import Slide2 from './slides/Slide2';
import Slide3 from './slides/Slide3';
import Slide4 from './slides/Slide4';
import Slide5 from './slides/Slide5';
import Slide6 from './slides/Slide6';
import Slide7 from './slides/Slide7';
import Slide8 from './slides/Slide8';
import Slide9 from './slides/Slide9';
import Slide10 from './slides/Slide10';
import Slide11 from './slides/Slide11';
import Slide12 from './slides/Slide12';
import Slide13 from './slides/Slide13';
import Slide14 from './slides/Slide14';
import Slide15 from './slides/Slide15';
import Slide16 from './slides/Slide16';
import Slide17 from './slides/Slide17';

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    <Slide1 key={0} />,
    <Slide2 key={1} />,
    <Slide3 key={2} />,
    <Slide4 key={3} />,
    <Slide5 key={4} />,
    <Slide6 key={5} />,
    <Slide7 key={6} />,
    <Slide8 key={7} />,
    <Slide9 key={8} />,
    <Slide10 key={9} />,
    <Slide11 key={10} />,
    <Slide12 key={11} />,
    <Slide13 key={12} />,
    <Slide14 key={13} />,
    <Slide15 key={14} />,
    <Slide16 key={15} />,
    <Slide17 key={16} />
  ];

  const totalSlides = slides.length;

  const handleNext = useCallback(() => {
    setCurrentSlide(prev => (prev < totalSlides - 1 ? prev + 1 : prev));
  }, [totalSlides]);

  const handlePrev = useCallback(() => {
    setCurrentSlide(prev => (prev > 0 ? prev - 1 : prev));
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Ignore key events if modifier keys are pressed (e.g. Cmd+R)
      if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;

      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        handleNext();
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, handleNext, handlePrev]);

  return (
    <div className="relative w-full h-screen bg-[#050505] text-white overflow-hidden">
      {/* Background effects */}
      <div className="scanlines"></div>
      <div className="noise"></div>
      <div className="ambient-glow"></div>

      <Header currentSlide={currentSlide} totalSlides={totalSlides} />
      <Footer
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        onPrev={handlePrev}
        onNext={handleNext}
      />

      <div id="deck-container" className="relative w-full h-full">
        {slides.map((slide, idx) => (
          <div key={idx} className={`slide ${idx === currentSlide ? 'active' : ''}`}>
            {slide}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
