
import React from 'react';

interface ActionPanelProps {
  isReady: boolean;
}

const ActionPanel: React.FC<ActionPanelProps> = ({ isReady }) => {
  return (
    <div className={`
      relative p-12 md:p-16 rounded-[2rem] border-2 transition-all duration-700 flex flex-col items-center justify-center gap-6
      ${isReady 
        ? 'border-red-600 bg-red-950/20 shadow-[0_0_80px_rgba(239,68,68,0.2)]' 
        : 'border-neutral-900 bg-black/60'
      }
    `}>
      {/* Corner Brackets */}
      <div className={`absolute top-6 left-6 w-8 h-8 border-l-4 border-t-4 transition-colors duration-500 ${isReady ? 'border-red-500' : 'border-neutral-800'}`}></div>
      <div className={`absolute top-6 right-6 w-8 h-8 border-r-4 border-t-4 transition-colors duration-500 ${isReady ? 'border-red-500' : 'border-neutral-800'}`}></div>
      <div className={`absolute bottom-6 left-6 w-8 h-8 border-l-4 border-b-4 transition-colors duration-500 ${isReady ? 'border-red-500' : 'border-neutral-800'}`}></div>
      <div className={`absolute bottom-6 right-6 w-8 h-8 border-r-4 border-b-4 transition-colors duration-500 ${isReady ? 'border-red-500' : 'border-neutral-800'}`}></div>

      <div className={`
        text-7xl md:text-9xl font-black tracking-tighter uppercase transition-all duration-500 italic select-none
        ${isReady 
          ? 'text-red-500 drop-shadow-[0_0_30px_rgba(239,68,68,0.9)] opacity-100 scale-110' 
          : 'text-neutral-800 opacity-40 scale-100'
        }
      `}>
        Action
      </div>

      <div className="flex gap-3">
         {Array.from({length: 5}).map((_, i) => (
           <div 
             key={i}
             className={`w-3 h-3 rounded-full transition-all duration-300 ${
               isReady 
                ? 'bg-red-500 shadow-[0_0_12px_rgba(239,68,68,0.8)] animate-pulse' 
                : 'bg-neutral-900'
             }`}
             style={{ animationDelay: `${i * 150}ms` }}
           ></div>
         ))}
      </div>
      
      <p className={`mono text-xs uppercase tracking-[0.5em] font-black mt-4 transition-all duration-500
        ${isReady ? 'text-red-400 opacity-100' : 'text-neutral-700 opacity-60'}`}>
        {isReady ? 'SEQUENCE AUTHORIZED' : 'SYSTEM STANDBY'}
      </p>
    </div>
  );
};

export default ActionPanel;
