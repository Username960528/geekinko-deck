import React from 'react';

const Slide12 = () => (
     <div className="slide">
          <h2 className="text-4xl text-[#ffcc33] mb-8 border-l-4 border-[#ff007f] pl-4">РИСКИ И ПРИЧИНЫ ДЛЯ ПОБЕДЫ</h2>
          <div className="slide-content grid grid-cols-2 gap-12">
               <div>
                    <h3 className="text-red-500 mb-6 text-2xl flex items-center gap-2">
                         <span className="text-3xl">⚠️</span> РИСКИ
                    </h3>
                    <ul className="space-y-4">
                         {[
                              { title: 'Регуляторика', desc: 'Диверсификация рынков' },
                              { title: 'Производство', desc: 'Зависимость (решение: 5+ проверенных фабрик)' },
                              { title: 'Конкуренты', desc: 'Давление рынка (решение: софт + лор)' },
                              { title: 'Контент', desc: 'NSFW риски (решение: безопасный слой)' }
                         ].map((item, idx) => (
                              <li key={idx} className="flex gap-2">
                                   <span className="text-[#ffcc33] font-bold">&gt;</span>
                                   <div>
                                        <span className="font-bold text-white">{item.title}</span>
                                        <div className="text-sm text-gray-400">{item.desc}</div>
                                   </div>
                              </li>
                         ))}
                    </ul>
               </div>

               <div>
                    <h3 className="text-green-400 mb-6 text-2xl flex items-center gap-2">
                         <span className="text-3xl">★</span> ПОБЕДА
                    </h3>
                    <ul className="space-y-4">
                         {[
                              { title: 'ИИ + Софт', desc: 'Базовые ценности продукта' },
                              { title: 'Лор и Персонажи', desc: 'Высокое удержание (retention)' },
                              { title: 'Высокая Маржинальность', desc: 'Unit-экономика сходится' },
                              { title: 'Подписка', desc: 'Рост LTV и стабильный поток' }
                         ].map((item, idx) => (
                              <li key={idx} className="flex gap-2">
                                   <span className="text-[#ffcc33] font-bold">&gt;</span>
                                   <div>
                                        <span className="font-bold text-white">{item.title}</span>
                                        <div className="text-sm text-gray-400">{item.desc}</div>
                                   </div>
                              </li>
                         ))}
                    </ul>
               </div>
          </div>
     </div>
);

export default Slide12;
