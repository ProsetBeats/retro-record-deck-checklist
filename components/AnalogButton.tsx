
import React from 'react';

interface AnalogButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
  color: 'red' | 'green' | 'amber' | 'blue';
}

const AnalogButton: React.FC<AnalogButtonProps> = ({ label, isActive, onClick, color }) => {
  const glowColors = {
    red: isActive ? 'bg-red-600 shadow-[0_0_40px_rgba(239,68,68,0.9),inset_0_0_20px_rgba(255,255,255,0.4)]' : 'bg-red-900/10',
    green: isActive ? 'bg-emerald-500 shadow-[0_0_40px_rgba(52,211,153,0.9),inset_0_0_20px_rgba(255,255,255,0.4)]' : 'bg-emerald-900/10',
    amber: isActive ? 'bg-amber-500 shadow-[0_0_40px_rgba(251,191,36,0.9),inset_0_0_20px_rgba(255,255,255,0.4)]' : 'bg-amber-900/10',
    blue: isActive ? 'bg-sky-500 shadow-[0_0_40px_rgba(56,189,248,0.9),inset_0_0_20px_rgba(255,255,255,0.4)]' : 'bg-sky-900/10',
  };

  const borderColors = {
    red: isActive ? 'border-red-400' : 'border-red-900/30',
    green: isActive ? 'border-emerald-400' : 'border-emerald-900/30',
    amber: isActive ? 'border-amber-400' : 'border-amber-900/30',
    blue: isActive ? 'border-sky-400' : 'border-sky-900/30',
  };

  return (
    <button
      onClick={onClick}
      className="relative flex flex-col items-center gap-4 outline-none select-none w-full active:scale-95 transition-all"
    >
      <div className={`
        w-28 h-28 md:w-32 md:h-32 rounded-2xl border-2 flex items-center justify-center
        bg-[#0c0c0c] transition-all duration-300 shadow-inner
        ${isActive ? 'border-neutral-500' : 'border-neutral-900'}
      `}>
        {/* The Lamp Lens */}
        <div className={`
          w-24 h-24 md:w-28 md:h-28 rounded-xl border-2 transition-all duration-300 flex items-center justify-center relative overflow-hidden
          ${glowColors[color]} ${borderColors[color]}
        `}>
          {/* Surface reflection */}
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/20 to-transparent pointer-events-none"></div>
          
          {/* Core Bulb */}
          <div className={`
            w-10 h-10 rounded-full blur-xl transition-all duration-300
            ${isActive ? 'bg-white opacity-90 scale-125' : 'bg-transparent opacity-0 scale-50'}
          `}></div>
        </div>
      </div>
      
      <span className={`
        mono text-xs md:text-sm font-black tracking-[0.4em] uppercase transition-all duration-300
        ${isActive ? 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]' : 'text-neutral-500'}
      `}>
        {label}
      </span>
    </button>
  );
};

export default AnalogButton;
