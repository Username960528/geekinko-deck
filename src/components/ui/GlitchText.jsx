import React from 'react';

const GlitchText = ({ text, className = '' }) => (
     <div
          className={`glitch-text ${className}`}
          data-text={text}
          style={{
               fontFamily: 'Orbitron, sans-serif',
               textTransform: 'uppercase',
               position: 'relative',
               animation: 'glitch-skew 3s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite'
          }}
     >
          {text}
     </div>
);

export default GlitchText;
