import React from 'react';
import CyberButton from '../ui/CyberButton';

const Footer = ({ currentSlide, totalSlides, onPrev, onNext }) => {
     const progress = ((currentSlide + 1) / totalSlides) * 100;

     return (
          <div className="fixed bottom-0 left-0 w-full p-6 z-50 flex justify-between items-center bg-gradient-to-t from-black/80 to-transparent">
               <div className="flex gap-4 items-center">
                    <div className="text-xs text-gray-500 font-[JetBrains Mono]">
                         SLIDE <span className="text-[#ffcc33]">{(currentSlide + 1).toString().padStart(2, '0')}</span> / {totalSlides}
                    </div>
                    <div className="w-32 h-1 bg-gray-800 rounded overflow-hidden">
                         <div
                              className="h-full bg-[#ff007f] transition-all duration-300"
                              style={{ width: `${progress}%` }}
                         ></div>
                    </div>
               </div>
               <div className="flex gap-4 pointer-events-auto">
                    <CyberButton onClick={onPrev} className="px-6 py-2 text-sm">PREV</CyberButton>
                    <CyberButton onClick={onNext} className="px-6 py-2 text-sm">NEXT</CyberButton>
               </div>
          </div>
     );
};

export default Footer;
