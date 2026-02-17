import React from 'react';
import GlitchText from '../components/ui/GlitchText';

const Slide1 = () => (
     <div className="slide active flex items-center justify-center">
          <div className="text-center z-10">
               <div className="inline-block border border-[#ff7700] px-4 py-1 mb-8 text-[#ff7700] text-sm tracking-[0.3em]">
                    CONFIDENTIAL PROJECT
               </div>
               <h1 className="text-8xl font-black mb-4 leading-tight">
                    <GlitchText text="GEEKINKO" />
               </h1>
               <h2 className="text-3xl text-[#ffcc33] font-[Orbitron] mb-8">ПРЕЗЕНТАЦИЯ ДЛЯ ИНВЕСТОРА</h2>
               <div className="h-px bg-gradient-to-r from-transparent via-[#ff007f] to-transparent w-full my-8"></div>
               <p className="text-xl text-gray-300 max-w-2xl mx-auto font-[JetBrains Mono]">
                    Первая sextech-экосистема, объединяющая физическое удовольствие, ИИ и гик-культуру.
               </p>
               <div className="mt-12 animate-bounce text-[#ff7700]">
                    INITIALIZING SYSTEM...
               </div>
          </div>
          <div className="absolute top-1/4 left-10 w-20 h-20 border-l-2 border-t-2 border-[#ff007f] opacity-50"></div>
          <div className="absolute bottom-1/4 right-10 w-20 h-20 border-r-2 border-b-2 border-[#ffcc33] opacity-50"></div>
     </div>
);

export default Slide1;
