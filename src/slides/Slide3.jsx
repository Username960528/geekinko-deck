import React from 'react';
import CyberPanel from '../components/ui/CyberPanel';

const Slide3 = () => (
     <div className="w-full h-full">
          <h2 className="text-4xl text-[#ffcc33] mb-8 border-l-4 border-[#ff007f] pl-4">КРАТКАЯ ИНФОРМАЦИЯ</h2>
          <div className="slide-content grid grid-cols-2 gap-12">
               <CyberPanel className="p-8 flex flex-col justify-center">
                    <ul className="space-y-6">
                         <li className="flex flex-col">
                              <span className="text-[#ff7700] text-xs tracking-widest mb-1">КАТЕГОРИЯ</span>
                              <span className="text-xl">Сексуальное здоровье + Tech (ИИ, VR) + Мерч</span>
                         </li>
                         <li className="flex flex-col">
                              <span className="text-[#ff7700] text-xs tracking-widest mb-1">МОДЕЛЬ МОНЕТИЗАЦИИ</span>
                              <span className="text-xl">B2C/B2B: Продукт + Подписка + Игры</span>
                         </li>
                         <li className="flex flex-col">
                              <span className="text-[#ff7700] text-xs tracking-widest mb-1">ЦЕНООБРАЗОВАНИЕ</span>
                              <div className="grid grid-cols-2 gap-2 text-sm text-gray-300">
                                   <div>Smart Toys: 8-25к ₽</div>
                                   <div>Subscription: &gt;290 ₽/мес</div>
                                   <div>Merch: 1-3к ₽</div>
                                   <div>Costumes: 5-7к ₽</div>
                              </div>
                         </li>
                    </ul>
               </CyberPanel>

               <div className="space-y-6">
                    <CyberPanel className="p-6 border-l-4 border-[#00f3ff]">
                         <h3 className="text-[#00f3ff] mb-2">ГЕОГРАФИЯ ЭКСПАНСИИ</h3>
                         <div className="flex items-center gap-4 text-lg">
                              <span>РОССИЯ</span>
                              <span className="text-[#ff7700]">→</span>
                              <span>ИЗРАИЛЬ (6 МЕС)</span>
                              <span className="text-[#ff7700]">→</span>
                              <span>EU/USA (2-3 ГОДА)</span>
                         </div>
                    </CyberPanel>

                    <CyberPanel className="p-6 border-l-4" style={{ borderLeftColor: '#ffcc33' }}>
                         <h3 className="text-[#ffcc33] mb-2">ТРЕБУЕМЫЕ ИНВЕСТИЦИИ</h3>
                         <div className="text-5xl font-bold text-white mb-2">50 МЛН ₽</div>
                         <p className="text-xs text-gray-400">На R&D, производство, закупку, игры и маркетинг.</p>
                         <div className="mt-4 text-xs text-gray-500">ВЛОЖЕНИЯ ОСНОВАТЕЛЕЙ: 8 МЛН ₽</div>
                    </CyberPanel>

                    <CyberPanel className="p-6">
                         <div className="grid grid-cols-3 gap-4 text-center">
                              <div>
                                   <div className="text-2xl font-bold">FEB 2025</div>
                                   <div className="text-[10px] text-gray-400">ДАТА ОСНОВАНИЯ</div>
                              </div>
                              <div>
                                   <div className="text-2xl font-bold">1+11</div>
                                   <div className="text-[10px] text-gray-400">КОМАНДА</div>
                              </div>
                              <div>
                                   <div className="text-2xl font-bold">START</div>
                                   <div className="text-[10px] text-gray-400">СТАДИЯ ПРОДАЖ</div>
                              </div>
                         </div>
                    </CyberPanel>
               </div>
          </div>
     </div>
);

export default Slide3;
