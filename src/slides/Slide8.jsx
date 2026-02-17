import React from 'react';
import GlitchText from '../components/ui/GlitchText';
import CyberPanel from '../components/ui/CyberPanel';

const Slide8 = () => (
     <div className="slide">
          <h2 className="text-4xl text-[#ffcc33] mb-8 border-l-4 border-[#ff007f] pl-4">ЛОГИКА РОСТА & ROI</h2>
          <div className="slide-content grid grid-cols-2 gap-12">
               <div className="space-y-8">
                    {[
                         { year: 'ГОД 1', desc: 'Продукт + Бренд + Обкатка каналов' },
                         { year: 'ГОД 2-3', desc: 'Масштабирование + Рост подписок + Экспорт' },
                         { year: 'ГОД 4-5', desc: 'Платформа + Контент Экосистема' }
                    ].map((item, idx) => (
                         <div key={idx} className="border-l-2 border-[#ff7700] pl-6 relative">
                              <div className="absolute w-4 h-4 rounded-full bg-[#ff7700]" style={{ left: '-9px', top: 0 }}></div>
                              <h3 className="text-2xl mb-2">{item.year}</h3>
                              <p className="text-gray-400">{item.desc}</p>
                         </div>
                    ))}
               </div>

               <CyberPanel className="p-8 flex flex-col justify-center items-center text-center">
                    <div className="mb-8 w-full">
                         <div className="text-gray-400 text-sm mb-2">ROI ИНВЕСТОРА (5 ЛЕТ)</div>
                         <div className="text-6xl font-bold text-[#00f3ff]">
                              <GlitchText text="x3-6" />
                         </div>
                    </div>
                    <div className="mb-8 w-full">
                         <div className="text-gray-400 text-sm mb-2">IRR</div>
                         <div className="text-6xl font-bold text-[#ffcc33]">30-45%</div>
                    </div>
                    <p className="text-xs text-gray-500 mt-4 max-w-xs">
                         ROA растет за счет софта и подписки (маржинальность ~90%)
                    </p>
               </CyberPanel>
          </div>
     </div>
);

export default Slide8;
