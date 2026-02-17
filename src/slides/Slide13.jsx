import React from 'react';
import CyberPanel from '../components/ui/CyberPanel';

const Slide13 = () => (
     <div className="w-full h-full">
          <h2 className="text-4xl text-[#ffcc33] mb-8 border-l-4 border-[#ff007f] pl-4">АМБИЦИИ ПРОЕКТА</h2>
          <div className="slide-content flex flex-col justify-between h-full pb-10">
               <div className="flex gap-4 h-full">
                    {[
                         { year: '1 ГОД', color: '#ff7700', title: 'СИЛЬНЫЙ НИШЕВЫЙ БРЕНД РФ', items: ['Выпущены продукты 2-й волны', 'Сформировано комьюнити', '5-10 тысяч активных пользователей'] },
                         { year: '3 ГОДА', color: '#00f3ff', title: 'БЫСТРОРАСТУЩАЯ КОМПАНИЯ', items: ['Топ 3 sextech в СНГ', 'Экспорт (ЕС/США)', 'Подписка = 15% выручки', 'Платформенное ядро'] },
                         { year: '5 ЛЕТ', color: '#ff007f', title: 'ЭКОСИСТЕМА УДОВОЛЬСТВИЯ', items: ['Международная платформа', 'Бренд "GEEKINKO" - имя нарицательное', 'От ковриков для мыши до ухода за лицом'] }
                    ].map((item, idx) => (
                         <CyberPanel key={idx} className="flex-1 p-6 flex flex-col border-t-8" style={{ borderTopColor: item.color }}>
                              <div className="text-4xl font-bold mb-2">{item.year}</div>
                              <div className="text-sm mb-4" style={{ color: item.color }}>{item.title}</div>
                              <ul className="space-y-2 text-sm text-gray-300">
                                   {item.items.map((text, i) => (
                                        <li key={i}>&gt; {text}</li>
                                   ))}
                              </ul>
                         </CyberPanel>
                    ))}
               </div>
          </div>
     </div>
);

export default Slide13;
