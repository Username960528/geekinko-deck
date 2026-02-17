import React from 'react';
import CyberPanel from '../components/ui/CyberPanel';

const Slide11 = () => (
     <div className="slide">
          <h2 className="text-4xl text-[#ffcc33] mb-8 border-l-4 border-[#ff007f] pl-4">UNIT ЭКОНОМИКА</h2>
          <div className="slide-content grid grid-cols-2 gap-8">
               <CyberPanel className="p-8 border-t-4 border-[#ff7700]">
                    <h3 className="text-2xl mb-4">ФИЗИЧЕСКИЕ ПРОДУКТЫ</h3>
                    <div className="text-sm text-gray-400 mb-4">ИИ-девайсы, игрушки, костюмы</div>

                    <div className="space-y-4 font-[JetBrains Mono]">
                         <div className="flex justify-between border-b border-white/10 pb-2">
                              <span>ЦЕНА (AI DEVICE)</span>
                              <span>~15,000 ₽</span>
                         </div>
                         <div className="flex justify-between border-b border-white/10 pb-2 text-gray-400">
                              <span>COGS (пр-во + дост.)</span>
                              <span>~2,600 ₽</span>
                         </div>
                         <div className="flex justify-between text-[#ff7700] font-bold text-lg">
                              <span>ВАЛОВАЯ ПРИБЫЛЬ</span>
                              <span>~83%</span>
                         </div>
                         <div className="text-xs text-center pt-2">Маржа после CAC и комиссий: ~55-60%</div>
                    </div>
               </CyberPanel>

               <CyberPanel className="p-8 border-t-4 border-[#00f3ff]">
                    <h3 className="text-2xl mb-4">ПОДПИСКА & SOFT</h3>
                    <div className="text-sm text-gray-400 mb-4">Контент, обновления, новые функции</div>

                    <div className="space-y-4 font-[JetBrains Mono]">
                         <div className="flex justify-between border-b border-white/10 pb-2">
                              <span>ЦЕНА / МЕСЯЦ</span>
                              <span>290 ₽</span>
                         </div>
                         <div className="flex justify-between border-b border-white/10 pb-2 text-gray-400">
                              <span>ВАЛОВАЯ ПРИБЫЛЬ</span>
                              <span>90-95%</span>
                         </div>
                         <div className="flex justify-between text-[#00f3ff] font-bold text-lg">
                              <span>НАЦЕНКА</span>
                              <span>x10</span>
                         </div>
                         <div className="text-center pt-4 border-t border-white/20 mt-4">
                              <div className="text-xs text-gray-400">LTV</div>
                              <div className="text-2xl">4000-6000 ₽</div>
                              <div className="text-xs text-gray-400">12-18 МЕСЯЦЕВ</div>
                         </div>
                    </div>
               </CyberPanel>
          </div>
     </div>
);

export default Slide11;
