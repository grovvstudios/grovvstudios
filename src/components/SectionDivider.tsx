import React from 'react';

export default function SectionDivider() {
  return (
    <div className="w-full py-12 flex justify-center items-center">
      {/* We are using inline styles (style={{...}}) to FORCE the gradient.
         This bypasses Tailwind completely to ensure visibility.
      */}
      <div 
        style={{ 
          height: '2px', 
          width: '80%', 
          maxWidth: '800px',
          background: 'linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(139, 92, 246, 1) 50%, rgba(0,0,0,0) 100%)',
          opacity: 1
        }} 
      />
    </div>
  );
}
