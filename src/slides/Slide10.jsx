import React from 'react';
import CyberPanel from '../components/ui/CyberPanel';

const Slide10 = () => (
     <div className="w-full h-full">
          <h2 className="text-4xl text-[#ffcc33] mb-8 border-l-4 border-[#ff007f] pl-4">РЫНОК</h2>
          <div className="slide-content grid grid-cols-2 gap-8 h-full">
               <div className="flex flex-col justify-center space-y-6">
                    <div className="relative w-64 h-64 mx-auto">
                         <div className="absolute inset-0 rounded-full border-2 border-gray-700"></div>
                         <div className="absolute rounded-full border-2 border-[#00f3ff] opacity-30" style={{ inset: '1rem' }}></div>
                         <div className="absolute rounded-full border-2 border-[#ff7700] opacity-60" style={{ inset: '3rem' }}></div>
                         <div className="absolute rounded-full bg-[#ff007f] opacity-80 flex items-center justify-center text-white font-bold" style={{ inset: '5rem' }}>SOM</div>

                         <div className="absolute top-0 right-0 text-[#00f3ff]" style={{ transform: 'translateX(3rem)' }}>TAM $50B</div>
                         <div className="absolute bottom-0 right-0 text-[#ff7700]" style={{ transform: 'translateX(3rem)' }}>SAM $4B</div>
                    </div>
               </div>
               <CyberPanel className="p-6 overflow-y-auto">
                    <h3 className="text-xl mb-4 text-[#00f3ff]">SEXUAL WELLNESS</h3>
                    <p className="mb-2 text-sm">Прогноз $52.7 млрд к 2026 (рост 10%/год)</p>
                    <div className="mb-6 h-px bg-white/20"></div>

                    <h3 className="text-xl mb-4 text-[#ffcc33]">СМЕЖНЫЕ РЫНКИ</h3>
                    <p className="mb-1 text-sm"><span className="text-[#ff7700]">АНИМЕ:</span> $43 млрд (рост 12%)</p>
                    <p className="mb-6 text-sm"><span className="text-[#ff7700]">ВИДЕОИГРЫ:</span> $320 млрд (рост 10%)</p>

                    <h3 className="text-xl mb-4 text-[#ff007f]">SOM (РЕАЛИСТИЧНО)</h3>
                    <ul className="text-sm space-y-2 font-[JetBrains Mono]">
                         <li>ГОД 1: 0.01% = $300-400k</li>
                         <li>ГОД 3: 0.05% = $1.5-2 млн</li>
                         <li>ГОД 5: 0.15% = $6-8 млн</li>
                    </ul>
               </CyberPanel>
          </div>
     </div>
);

export default Slide10;
