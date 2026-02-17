import React, { useState, useEffect } from 'react';

const Header = () => {
     const [time, setTime] = useState('00:00:00');

     useEffect(() => {
          const updateTime = () => {
               const now = new Date();
               setTime(now.toLocaleTimeString('ru-RU', { hour12: false }));
          };
          updateTime();
          const interval = setInterval(updateTime, 1000);
          return () => clearInterval(interval);
     }, []);

     return (
          <div className="fixed top-0 left-0 w-full p-6 z-50 flex justify-between items-center pointer-events-none select-none">
               <div className="flex items-center gap-4">
                    <div className="text-2xl font-bold font-[Orbitron] text-white tracking-widest" style={{ textShadow: '0 0 5px rgba(255,0,127,0.8)' }}>
                         GEEKINKO<span className="text-[#ff007f]">//</span>DECK
                    </div>
                    <div className="h-6 w-[2px] bg-[#ff7700]"></div>
                    <div className="text-xs text-[#ff7700] font-[JetBrains Mono]">
                         SECURE CONNECTION<br />ENCRYPTED: AES-256
                    </div>
               </div>
               <div className="flex gap-2">
                    <div className="text-xs text-[#ffcc33] animate-pulse">REC ●</div>
                    <div className="text-xs text-gray-400">{time}</div>
               </div>
          </div>
     );
};

export default Header;
