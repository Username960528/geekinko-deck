import React from 'react';

const CyberPanel = ({ children, className = '', borderColor = 'rgba(255, 119, 0, 0.3)', style = {} }) => (
     <div
          className={`cyber-panel ${className}`}
          style={{
               background: 'rgba(15, 10, 10, 0.6)',
               border: `1px solid ${borderColor}`,
               position: 'relative',
               backdropFilter: 'blur(5px)',
               ...style
          }}
     >
          <div style={{
               content: '',
               position: 'absolute',
               top: '-1px',
               left: '-1px',
               width: '10px',
               height: '10px',
               borderTop: '2px solid #ffcc33',
               borderLeft: '2px solid #ffcc33'
          }} />
          <div style={{
               content: '',
               position: 'absolute',
               bottom: '-1px',
               right: '-1px',
               width: '10px',
               height: '10px',
               borderBottom: '2px solid #ffcc33',
               borderRight: '2px solid #ffcc33'
          }} />
          {children}
     </div>
);

export default CyberPanel;
