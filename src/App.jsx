import React, { useState, useEffect, useCallback, useMemo } from 'react';
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

  // Memoize slides to prevent unnecessary re-renders
  const slides = useMemo(() => [
    <Slide1 key="s1" />,
    <Slide2 key="s2" />,
    <Slide3 key="s3" />,
    <Slide4 key="s4" />,
    <Slide5 key="s5" />,
    <Slide6 key="s6" />,
    <Slide7 key="s7" />,
    <Slide8 key="s8" />,
    <Slide9 key="s9" />,
    <Slide10 key="s10" />,
    <Slide11 key="s11" />,
    <Slide12 key="s12" />,
    <Slide13 key="s13" />,
    <Slide14 key="s14" />,
    <Slide15 key="s15" />,
    <Slide16 key="s16" />,
    <Slide17 key="s17" />
  ], []);

  const totalSlides = slides.length;

  const handleNext = useCallback(() => {
    setCurrentSlide(prev => {
      if (prev < totalSlides - 1) return prev + 1;
      return prev;
    });
  }, [totalSlides]);

  const handlePrev = useCallback(() => {
    setCurrentSlide(prev => {
      if (prev > 0) return prev - 1;
      return prev;
    });
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
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
  }, [handleNext, handlePrev]);

  return (
    <div className="relative w-full h-screen bg-[#050505] text-white overflow-hidden" id="app-root">
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
          <div
            key={idx}
            className={`slide ${idx === currentSlide ? 'active' : ''}`}
            data-index={idx}
          >
            {slide}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
