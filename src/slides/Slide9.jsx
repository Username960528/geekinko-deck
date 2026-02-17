import React from 'react';

const Slide9 = () => (
     <div className="slide">
          <h2 className="text-4xl text-[#ffcc33] mb-8 border-l-4 border-[#ff007f] pl-4">CASH FLOW</h2>
          <div className="slide-content">
               <div className="grid grid-cols-3 gap-6 mb-8">
                    {[
                         { title: 'ГОД 1', color: 'red', desc: 'Отрицательный CF осознанный. Инвестиции в производство, R&D, комьюнити.' },
                         { title: 'ГОД 2-3', color: 'yellow', desc: 'EBITDA (+). Оборотка стабилизируется. Break-even по CF: 18-24 месяц.' },
                         { title: 'ГОД 5', color: 'green', desc: 'Устойчивый свободный денежный поток. Агрессивный рост.' }
                    ].map((item, idx) => (
                         <div key={idx} className={`bg-${item.color}-900/20 border border-${item.color}-500/30 p-4`}>
                              <h4 className={`text-${item.color}-400 font-bold mb-2`}>{item.title}</h4>
                              <p className="text-sm">{item.desc}</p>
                         </div>
                    ))}
               </div>

               <table className="w-full text-right text-xs" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                    <thead>
                         <tr className="text-center">
                              <th className="text-left" style={{ color: '#ffcc33', borderBottom: '1px solid #ff007f', padding: '1rem', textTransform: 'uppercase' }}>ПОКАЗАТЕЛЬ</th>
                              <th style={{ color: '#ffcc33', borderBottom: '1px solid #ff007f', padding: '1rem' }}>ГОД 1</th>
                              <th style={{ color: '#ffcc33', borderBottom: '1px solid #ff007f', padding: '1rem' }}>ГОД 3</th>
                              <th className="text-[#ffcc33]" style={{ borderBottom: '1px solid #ff007f', padding: '1rem' }}>ГОД 5</th>
                         </tr>
                    </thead>
                    <tbody>
                         <tr><td className="text-left font-bold text-white" style={{ padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>ВЫРУЧКА</td><td style={{ padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>60 МЛН ₽</td><td style={{ padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>280 МЛН ₽</td><td style={{ padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>750 МЛН ₽</td></tr>
                         <tr><td className="text-left" style={{ padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>ВАЛОВАЯ ПРИБЫЛЬ</td><td style={{ padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>35 МЛН ₽</td><td style={{ padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>180 МЛН ₽</td><td style={{ padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>545 МЛН ₽</td></tr>
                         <tr><td className="text-left" style={{ padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>OPEX</td><td style={{ padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>-45 МЛН ₽</td><td style={{ padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>-140 МЛН ₽</td><td style={{ padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>-355 МЛН ₽</td></tr>
                         <tr><td className="text-left font-bold text-[#ffcc33]" style={{ padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>EBITDA</td><td className="text-red-400" style={{ padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>-10 МЛН ₽</td><td className="text-green-400" style={{ padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>+40 МЛН ₽</td><td className="text-green-400" style={{ padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>+190 МЛН ₽</td></tr>
                         <tr><td className="text-left" style={{ padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>OPERATIONAL CF</td><td className="text-red-400" style={{ padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>-25 МЛН ₽</td><td className="text-green-400" style={{ padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>+30 МЛН ₽</td><td className="text-green-400" style={{ padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>+170 МЛН ₽</td></tr>
                    </tbody>
               </table>
          </div>
     </div>
);

export default Slide9;
