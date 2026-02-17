import React from 'react';
import GlitchText from '../components/ui/GlitchText';

const Slide7 = () => (
     <div className="slide">
          <h2 className="text-4xl text-[#ffcc33] mb-8 border-l-4 border-[#ff007f] pl-4">ИСПОЛЬЗОВАНИЕ СРЕДСТВ</h2>
          <div className="slide-content flex gap-12 items-center h-full">
               <div className="w-1/2">
                    <div className="text-6xl font-black mb-4">
                         <GlitchText text="50 МЛН ₽" />
                    </div>
                    <p className="text-xl text-gray-300 mb-8">
                         Цель: Ускорение внедрения и масштабирования бренда.
                    </p>
                    <div className="text-sm text-gray-500">
                         * Детальная фин. модель доступна в Excel файле.
                    </div>
               </div>
               <div className="w-1/2 space-y-6">
                    {[
                         { label: 'ЗАКУПКА ТОВАРОВ', value: '28.2 МЛН ₽', color: '#ffcc33', width: 56 },
                         { label: 'ЛОГИСТИКА', value: '8.5 МЛН ₽', color: '#ff7700', width: 17 },
                         { label: 'ФОТ / СКЛАД / РЕКЛАМА', value: '7.9 МЛН ₽', color: '#ff007f', width: 16 },
                         { label: 'R&D', value: '5.4 МЛН ₽', color: '#00f3ff', width: 11 }
                    ].map((item, idx) => (
                         <div key={idx}>
                              <div className="flex justify-between mb-1">
                                   <span>{item.label}</span>
                                   <span style={{ color: item.color }}>{item.value}</span>
                              </div>
                              <div className="w-full bg-gray-800 h-2">
                                   <div className="h-full" style={{ background: item.color, width: `${item.width}%` }}></div>
                              </div>
                         </div>
                    ))}
               </div>
          </div>
     </div>
);

export default Slide7;
