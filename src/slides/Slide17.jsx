import React from 'react';

const Slide17 = () => (
     <div className="slide">
          <h2 className="text-4xl text-[#ffcc33] mb-8 border-l-4 border-[#ff007f] pl-4">ПУТЬ КЛИЕНТА</h2>
          <div className="slide-content relative">
               <div className="absolute left-6 top-0 bottom-0 w-1 bg-gray-800"></div>

               <div className="space-y-6 ml-12">
                    {[
                         { text: '1. Узнает из Telegram/TikTok (гейминг, косплей).', color: 'gray-600' },
                         { text: '2. Переходит на сайт. Цепляет стиль, персонажи, общение с ботом.', color: 'gray-600' },
                         { text: '3. Изучает функционал и технологии.', color: 'gray-600' },
                         { text: '4. Скачивает приложение (MVP).', color: '#ff7700', highlight: true },
                         { text: '5. Выбирает игрушку (Артефакт).', color: '#ff7700' },
                         { text: '6. ПОКУПКА & ИСПОЛЬЗОВАНИЕ (Retention через ИИ).', color: '#ff007f', highlight: true, large: true },
                         { text: '7. Advocacy: Делится впечатлениями.', color: '#00f3ff' }
                    ].map((item, idx) => (
                         <div key={idx} className="relative">
                              <div
                                   className="absolute w-4 h-4 rounded-full border"
                                   style={{
                                        left: '-34px',
                                        top: '4px',
                                        backgroundColor: item.color.startsWith('#') ? item.color : undefined,
                                        borderColor: item.highlight ? '#ffcc33' : '#9ca3af',
                                        boxShadow: item.highlight ? `0 0 ${item.large ? '15px' : '10px'} ${item.color}` : 'none'
                                   }}
                              ></div>
                              <p
                                   className={`${item.large ? 'text-lg font-bold' : item.highlight ? 'text-base font-bold' : 'text-sm'} ${item.color.startsWith('#') ? '' : 'text-gray-400'}`}
                                   style={{ color: item.color.startsWith('#') ? item.color : undefined }}
                              >
                                   {item.text}
                              </p>
                         </div>
                    ))}
               </div>
          </div>
     </div>
);

export default Slide17;
