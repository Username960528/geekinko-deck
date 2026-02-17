import React from 'react';
import CyberPanel from '../components/ui/CyberPanel';

const Slide2 = () => (
     <div className="w-full h-full">
          <h2 className="text-4xl text-[#ffcc33] mb-8 border-l-4 border-[#ff007f] pl-4">КОМАНДА ЕДИНОМЫШЛЕННИКОВ</h2>
          <div className="slide-content grid grid-cols-12 gap-6">
               <CyberPanel className="col-span-6 p-6">
                    <div className="flex items-start justify-between mb-4">
                         <h3 className="text-2xl text-white">МИХАИЛ ФАДЕЕВ</h3>
                         <span className="bg-[#ff007f] text-black px-2 py-1 text-xs font-bold">FOUNDER / CEO</span>
                    </div>
                    <div className="text-sm text-gray-400 mb-2 font-bold text-[#ff7700]">РОЛЬ:</div>
                    <p className="text-sm mb-4">Визионер, директор по дизайну, продажи, управление персоналом.</p>
                    <div className="text-sm text-gray-400 mb-2 font-bold text-[#ff7700]">ОПЫТ (7+ ЛЕТ):</div>
                    <p className="text-sm mb-4">Le Frivole, Розовый Кролик (Product/Dev), Zara, Adidas, Банки (Sales/HR).</p>
                    <div className="text-sm text-gray-400 mb-2 font-bold text-[#ff7700]">ОБРАЗОВАНИЕ:</div>
                    <p className="text-sm">Экономист, имиджмейкер, дизайнер.</p>
               </CyberPanel>

               <CyberPanel className="col-span-6 p-6">
                    <div className="flex items-start justify-between mb-4">
                         <h3 className="text-2xl text-white">ИВАН БОРИСОВ</h3>
                         <span className="bg-[#00f3ff] text-black px-2 py-1 text-xs font-bold">CTO</span>
                    </div>
                    <div className="text-sm text-gray-400 mb-2 font-bold text-[#00f3ff]">РОЛЬ:</div>
                    <p className="text-sm mb-4">Технологическая реализация, прототипирование, материалы, эргономика.</p>
                    <div className="text-sm text-gray-400 mb-2 font-bold text-[#00f3ff]">ОПЫТ (7+ ЛЕТ):</div>
                    <p className="text-sm mb-4">ЦНИИ Робототехники (экзоскелеты), Руководитель КБ «ТОПОЛОГИЯ», Консультант Минтранса.</p>
                    <div className="text-sm text-gray-400 mb-2 font-bold text-[#00f3ff]">ОБРАЗОВАНИЕ:</div>
                    <p className="text-sm">МГТУ им. Баумана (композиционные материалы).</p>
               </CyberPanel>

               <div className="col-span-12 grid grid-cols-3 gap-4 mt-4">
                    {[
                         { name: 'ЯРОСЛАВ ПЕРЛОВ', role: 'Руководитель отдела продаж, ВЭД' },
                         { name: 'ДАНИИЛ ПОТАШОВ', role: '3D моделирование, скульптинг' },
                         { name: 'ПЛАТФОРМА VIBEROS', role: 'IT, ИИ, ПО для игрушек (Евгений Пенцак)' },
                         { name: 'МИХАИЛ БОКАРЕВ', role: 'Руководитель отдела развития' },
                         { name: 'ЮРИЙ МИТЮКИН', role: 'IT, сайт, чат-боты, безопасность' },
                         { name: 'МАКСИМ БАГМА', role: 'Руководитель отдела медицины' }
                    ].map((member, idx) => (
                         <div key={idx} className="border border-white/10 p-4 bg-black/40">
                              <h4 className="text-[#ffcc33] font-bold">{member.name}</h4>
                              <p className="text-xs text-gray-400">{member.role}</p>
                         </div>
                    ))}
               </div>
          </div>
     </div>
);

export default Slide2;
