import React from 'react';
import CyberPanel from '../components/ui/CyberPanel';

const Slide15 = () => (
     <div className="slide">
          <h2 className="text-4xl text-[#ffcc33] mb-8 border-l-4 border-[#ff007f] pl-4">СИЛЬНЫЕ БОЛИ КЛИЕНТА</h2>
          <div className="slide-content grid grid-cols-2 gap-8">
               <div className="space-y-4">
                    {[
                         { title: 'СКУКА И ШАБЛОННОСТЬ', desc: 'Все одинаковое. Стандартные 10 режимов вибрации. Нет расслабления.' },
                         { title: 'НЕТ "ДУШИ"', desc: 'Товары без истории, переупакованный Китай, ложь в маркетинге.' }
                    ].map((item, idx) => (
                         <CyberPanel key={idx} className="p-6 border-l-2 border-red-500 hover:bg-red-900/10 transition">
                              <h3 className="text-red-400 mb-2">{item.title}</h3>
                              <p className="text-sm text-gray-400">{item.desc}</p>
                         </CyberPanel>
                    ))}
               </div>
               <div className="space-y-4">
                    {[
                         { title: 'ПЛОХОЙ СОФТ', desc: 'Кривые приложения, плохой перевод, разрывы Bluetooth.' },
                         { title: 'НЕТ ПЕРСОНАЛИЗАЦИИ', desc: 'Отсутствие контекста и чувства "для меня".' }
                    ].map((item, idx) => (
                         <CyberPanel key={idx} className="p-6 border-l-2 border-red-500 hover:bg-red-900/10 transition">
                              <h3 className="text-red-400 mb-2">{item.title}</h3>
                              <p className="text-sm text-gray-400">{item.desc}</p>
                         </CyberPanel>
                    ))}
               </div>
               <div className="col-span-2 text-center mt-4">
                    <p className="text-xl text-white">РЕШЕНИЕ: <span className="text-[#00f3ff]">GEEKINKO</span></p>
                    <p className="text-gray-500">Инвестиция в то, что отражает внутренний мир.</p>
               </div>
          </div>
     </div>
);

export default Slide15;
