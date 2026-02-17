import React from 'react';
import GlitchText from '../components/ui/GlitchText';
import CyberPanel from '../components/ui/CyberPanel';

const Slide4 = () => (
     <div className="w-full h-full">
          <div className="absolute inset-0 z-0 opacity-20 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=2508&auto=format&fit=crop')" }}></div>
          <div className="relative z-10 h-full flex flex-col justify-center max-w-4xl mx-auto">
               <h2 className="text-6xl text-white mb-6">
                    <GlitchText text="ВИДЕНИЕ" />
               </h2>
               <CyberPanel className="p-10 bg-black/80 backdrop-blur-md border border-[#ff007f]">
                    <p className="text-2xl leading-relaxed font-light mb-8">
                         <span className="text-[#ffcc33] font-bold">GEEKINKO</span> — это первая sextech-экосистема, где физическое удовольствие, ИИ, персонажи и гик-культура объединены в персонализированный опыт.
                    </p>
                    <p className="text-lg text-gray-300 mb-6">
                         Бренд для зумеров и миллениалов, вдохновленный поп-культурой. Мы создаем товары с интерактивной вселенной ("ЛОР"), историями и цифровыми технологиями.
                    </p>
                    <div className="h-px bg-gray-700 w-full my-6"></div>
                    <div className="flex items-start gap-4">
                         <div className="text-[#ff007f] text-4xl">!</div>
                         <p className="text-sm text-gray-400">
                              В отличие от Lovense/Svakom, мы используем продвинутые технологии ("кибер-магию"), дающие большую вариативность. Наше приложение уже работает, товары имеют уникальный встроенный функционал.
                         </p>
                    </div>
               </CyberPanel>
          </div>
     </div>
);

export default Slide4;
