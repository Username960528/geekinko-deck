import React from 'react';
import CyberPanel from '../components/ui/CyberPanel';

const Slide14 = () => (
     <div className="w-full h-full">
          <h2 className="text-4xl text-[#ffcc33] mb-8 border-l-4 border-[#ff007f] pl-4">ПОРТРЕТ КЛИЕНТА</h2>
          <div className="slide-content flex gap-8 items-center">
               <div className="w-1/3">
                    <div className="w-full aspect-square bg-[#1a1a1a] border border-[#ffcc33] relative flex items-center justify-center overflow-hidden">
                         <img src="https://images.unsplash.com/photo-1620641788421-7f1c91880a5e?q=80&w=2669&auto=format&fit=crop" className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition duration-500" alt="Target Customer" />
                         <div className="absolute bottom-4 left-4 bg-black text-[#ffcc33] px-2 text-xs font-bold font-[JetBrains Mono]">TARGET_ID: GEEK_01</div>
                    </div>
               </div>
               <CyberPanel className="w-2/3 p-8">
                    <div className="grid grid-cols-2 gap-8 mb-8">
                         <div>
                              <div className="text-xs text-gray-500 mb-1">ВОЗРАСТ / ПОЛ</div>
                              <div className="text-xl">22-45 ЛЕТ (Ядро 30-40)</div>
                              <div className="text-sm text-[#ff7700]">60% МУЖ / 40% ЖЕН</div>
                         </div>
                         <div>
                              <div className="text-xs text-gray-500 mb-1">ДОХОД / ГЕО</div>
                              <div className="text-xl">СРЕДНИЙ+</div>
                              <div className="text-sm text-[#ff7700]">ГОРОДА 300K+</div>
                         </div>
                    </div>

                    <div className="mb-6">
                         <div className="text-xs text-gray-500 mb-2">ПРОФЕССИИ & ИНТЕРЕСЫ</div>
                         <div className="flex flex-wrap gap-2">
                              {['IT', 'GAMEDEV', 'MARKETING', 'ANIME', 'REDDIT', 'VR'].map((tag, idx) => (
                                   <span key={idx} className="bg-gray-800 px-3 py-1 text-sm text-white border border-gray-600">{tag}</span>
                              ))}
                         </div>
                    </div>

                    <div className="border-t border-white/20 pt-6">
                         <p className="italic text-gray-300">"Ищет артефакты, которые позволят получить физическое наслаждение и войти в мир фантазии. Ценит эстетику, технологии и персонализацию."</p>
                    </div>
               </CyberPanel>
          </div>
     </div>
);

export default Slide14;
