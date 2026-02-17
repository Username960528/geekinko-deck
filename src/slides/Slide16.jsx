import React from 'react';
import CyberPanel from '../components/ui/CyberPanel';

const Slide16 = () => (
     <div className="slide">
          <h2 className="text-4xl text-[#ffcc33] mb-8 border-l-4 border-[#ff007f] pl-4">РЕШЕНИЕ И ПРОДУКТ</h2>
          <div className="slide-content">
               <div className="grid grid-cols-2 gap-8 h-full">
                    <div className="flex flex-col gap-6">
                         <CyberPanel className="p-6 border border-[#ffcc33]">
                              <h3 className="text-[#ffcc33] text-xl mb-2">АРТЕФАКТЫ УДОВОЛЬСТВИЯ</h3>
                              <p className="text-sm text-gray-300">
                                   Высокотехнологичные девайсы с "внутренним миром". Красивый дизайн для интерьера. Постоянные обновления лора (комиксы, новеллы).
                              </p>
                         </CyberPanel>
                         <CyberPanel className="p-6 border border-[#00f3ff]">
                              <h3 className="text-[#00f3ff] text-xl mb-2">ИИ-АВТОПИЛОТ</h3>
                              <p className="text-sm text-gray-300">
                                   Сопряжение устройств, резонанс в такт движениям и желаниям. Обучается и становится лучше с каждым разом.
                              </p>
                         </CyberPanel>
                    </div>
                    <div className="flex flex-col gap-6">
                         <CyberPanel className="p-6 border border-[#ff7700]">
                              <h3 className="text-[#ff7700] text-xl mb-2">ЭКОСИСТЕМА</h3>
                              <p className="text-sm text-gray-300">
                                   Приложение с сексологом, иммерсивные чат-боты персонажей, статистика, тренировки.
                              </p>
                         </CyberPanel>
                         <CyberPanel className="p-6 border border-[#ff007f]">
                              <h3 className="text-[#ff007f] text-xl mb-2">ОТКРЫТАЯ ПЛАТФОРМА</h3>
                              <p className="text-sm text-gray-300">
                                   Подключение к VR и видеоиграм. SDK для создания микро-приложений.
                              </p>
                         </CyberPanel>
                    </div>
               </div>
          </div>
     </div>
);

export default Slide16;
