import React from 'react';

const Slide5 = () => (
     <div className="slide">
          <h2 className="text-4xl text-[#ffcc33] mb-8 border-l-4 border-[#ff007f] pl-4">ДИНАМИКА КОМПАНИИ</h2>
          <div className="grid grid-cols-2 gap-8 slide-content">
               <div className="space-y-4">
                    {[
                         'Готов MVP приложения с ИИ и контролем',
                         'В процессе регистрация товарного знака',
                         'Подключены фабрики и логистика',
                         'Создана и привезена первая партия товаров'
                    ].map((text, idx) => (
                         <div key={idx} className="flex items-center gap-4 p-4 border border-green-500/30 bg-green-900/10">
                              <div className="text-green-400 text-xl">✓</div>
                              <div>{text}</div>
                         </div>
                    ))}
               </div>
               <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 border border-green-500/30 bg-green-900/10">
                         <div className="text-green-400 text-xl">✓</div>
                         <div>Проведены фотосессии товаров</div>
                    </div>
                    <div className="flex items-center gap-4 p-4 border border-[#ffcc33]/50 bg-[#ffcc33]/10">
                         <div className="text-[#ffcc33] text-xl">↻</div>
                         <div>Готовы чат-бот маскоты</div>
                    </div>
                    <div className="flex items-center gap-4 p-4 border border-[#ffcc33]/50 bg-[#ffcc33]/10">
                         <div className="text-[#ffcc33] text-xl">↻</div>
                         <div>Готовы дизайны 10 продуктов второй волны</div>
                    </div>
                    <div className="flex items-center gap-4 p-4 border border-[#ff7700]/50 bg-[#ff7700]/10">
                         <div className="text-[#ff7700] text-xl">»</div>
                         <div>Оформляется закупка партии в Израиль</div>
                    </div>
               </div>
          </div>
          <div className="mt-8 text-center text-gray-500 text-sm font-[JetBrains Mono]">
               NEXT TARGET: FEBRUARY RETAIL LAUNCH (MOSCOW/SPB/CLUBS)
          </div>
     </div>
);

export default Slide5;
