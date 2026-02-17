import React from 'react';

const CyberButton = ({ children, onClick, className = '' }) => (
     <button
          onClick={onClick}
          className={`cyber-btn ${className}`}
          style={{
               background: 'transparent',
               border: '1px solid #ff7700',
               color: '#ff7700',
               fontFamily: 'Orbitron, sans-serif',
               textTransform: 'uppercase',
               letterSpacing: '2px',
               transition: 'all 0.3s',
               clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)',
               cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
               e.target.style.background = '#ff7700';
               e.target.style.color = '#000';
               e.target.style.boxShadow = '0 0 15px #ff7700';
          }}
          onMouseLeave={(e) => {
               e.target.style.background = 'transparent';
               e.target.style.color = '#ff7700';
               e.target.style.boxShadow = 'none';
          }}
     >
          {children}
     </button>
);

export default CyberButton;
