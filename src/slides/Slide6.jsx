import React from 'react';

const Slide6 = () => (
     <div className="slide">
          <h2 className="text-4xl text-[#ffcc33] mb-8 border-l-4 border-[#ff007f] pl-4">ФИНАНСОВЫЕ ЦЕЛИ</h2>
          <div className="slide-content">
               <p className="mb-8 text-gray-300 max-w-4xl">
                    Выручка формируется из 4 категорий: Умные устройства, Одежда/Lifestyle, Расходники, Цифровые сервисы.
                    Драйвер роста: <span className="text-[#00f3ff]">Hardware → Software/Subscription</span>.
               </p>

               <table className="w-full text-left border-collapse" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                    <thead>
                         <tr>
                              <th className="w-1/4" style={{ color: '#ffcc33', borderBottom: '1px solid #ff007f', padding: '1rem', textTransform: 'uppercase', fontSize: '0.8rem' }}>ПОКАЗАТЕЛЬ</th>
                              <th className="w-1/4 text-[#00f3ff]" style={{ borderBottom: '1px solid #ff007f', padding: '1rem', textTransform: 'uppercase', fontSize: '0.8rem' }}>ГОД 1</th>
                              <th className="w-1/4 text-[#ff7700]" style={{ borderBottom: '1px solid #ff007f', padding: '1rem', textTransform: 'uppercase', fontSize: '0.8rem' }}>ГОД 3</th>
                              <th className="w-1/4 text-[#ff007f]" style={{ borderBottom: '1px solid #ff007f', padding: '1rem', textTransform: 'uppercase', fontSize: '0.8rem' }}>ГОД 5</th>
                         </tr>
                    </thead>
                    <tbody>
                         <tr>
                              <td className="font-bold text-gray-400" style={{ padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>ВЫРУЧКА</td>
                              <td className="text-xl" style={{ padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>50-70 МЛН ₽</td>
                              <td className="text-xl" style={{ padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>250-300 МЛН ₽</td>
                              <td className="text-2xl font-bold text-[#ffcc33]" style={{ padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>600-900 МЛН ₽</td>
                         </tr>
                         <tr>
                              <td className="font-bold text-gray-400" style={{ padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>ВАЛОВАЯ МАРЖА</td>
                              <td style={{ padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>~55%</td>
                              <td style={{ padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>60-65%</td>
                              <td style={{ padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>65-70%</td>
                         </tr>
                         <tr>
                              <td className="font-bold text-gray-400" style={{ padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>EBITDA</td>
                              <td className="text-red-500" style={{ padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>ОТРИЦАТЕЛЬНАЯ</td>
                              <td className="text-green-400" style={{ padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>10-15%</td>
                              <td className="text-green-400" style={{ padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>20-25%</td>
                         </tr>
                         <tr>
                              <td className="font-bold text-gray-400" style={{ padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>ПОДПИСКА (В ВЫРУЧКЕ)</td>
                              <td style={{ padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>5-7%</td>
                              <td style={{ padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>10-15%</td>
                              <td style={{ padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>20%+</td>
                         </tr>
                         <tr>
                              <td className="font-bold text-gray-400" style={{ padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>CASH FLOW</td>
                              <td className="text-yellow-500" style={{ padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>НЕСТАБИЛЕН</td>
                              <td className="text-green-400" style={{ padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>ПОЛОЖИТЕЛЬНЫЙ</td>
                              <td className="text-green-400" style={{ padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>УСТОЙЧИВО (+)</td>
                         </tr>
                    </tbody>
               </table>
          </div>
     </div>
);

export default Slide6;
