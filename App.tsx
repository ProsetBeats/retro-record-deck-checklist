
import React, { useState, useMemo } from 'react';
import { ChecklistState, ChecklistKey } from './types';
import AnalogButton from './components/AnalogButton';
import ActionPanel from './components/ActionPanel';

const App: React.FC = () => {
  const [checklist, setChecklist] = useState<ChecklistState>({
    camera: false,
    screen: false,
    sound: false,
    rec: false,
  });
  const [showManual, setShowManual] = useState(false);

  const toggleItem = (key: ChecklistKey) => {
    setChecklist(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const isAllChecked = useMemo(() => {
    return Object.values(checklist).every(val => val === true);
  }, [checklist]);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 md:p-8 select-none">
      {/* Refined Heavy Duty Analog Deck */}
      <div className="w-full max-w-3xl bg-[#0a0a0a] rounded-[3rem] border-2 border-neutral-900 p-10 md:p-16 shadow-[0_0_60px_rgba(0,0,0,1)] relative overflow-hidden">
        
        {/* Subtle Panel Texture */}
        <div className="absolute inset-0 bg-[radial-gradient(#141414_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none"></div>
        
        <div className="text-center mb-16 relative z-10">
          <h1 className="text-neutral-500 mono text-xs font-black uppercase tracking-[0.8em] mb-4">
            Command Center // V-01-PRO
          </h1>
          <div className="h-[3px] w-32 bg-neutral-900 mx-auto rounded-full flex justify-between px-2 items-center">
             <div className="w-1.5 h-1.5 rounded-full bg-neutral-800"></div>
             <div className="w-1.5 h-1.5 rounded-full bg-neutral-800"></div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 mb-20 relative z-10">
          <AnalogButton 
            label="Camera" 
            isActive={checklist.camera} 
            onClick={() => toggleItem('camera')} 
            color="blue"
          />
          <AnalogButton 
            label="Screen" 
            isActive={checklist.screen} 
            onClick={() => toggleItem('screen')} 
            color="green"
          />
          <AnalogButton 
            label="Sound" 
            isActive={checklist.sound} 
            onClick={() => toggleItem('sound')} 
            color="amber"
          />
          <AnalogButton 
            label="Rec" 
            isActive={checklist.rec} 
            onClick={() => toggleItem('rec')} 
            color="red"
          />
        </div>

        <div className="relative z-10">
          <ActionPanel isReady={isAllChecked} />
        </div>

        {/* Technical Footer */}
        <div className="mt-16 flex justify-between items-center relative z-10 border-t border-neutral-900 pt-8">
          <div className="flex flex-col gap-1">
             <div className="mono text-[10px] text-neutral-600 font-black uppercase tracking-[0.3em]">
               Serial_No: 88-ALPHA-09
             </div>
             <button 
               onClick={() => setShowManual(true)}
               className="mono text-[9px] text-sky-800 hover:text-sky-600 transition-colors uppercase font-bold text-left"
             >
               View App Installation Manual
             </button>
          </div>
          <div className="flex gap-3">
             <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${isAllChecked ? 'bg-red-500 shadow-[0_0_8px_red]' : 'bg-neutral-800'}`}></div>
             <div className="w-2 h-2 rounded-full bg-neutral-800"></div>
          </div>
        </div>
      </div>

      {/* Manual Overlay (PWA Instructions) */}
      {showManual && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/90 backdrop-blur-sm">
          <div className="bg-[#111] border-2 border-neutral-800 rounded-3xl p-8 max-w-md w-full shadow-2xl animate-in fade-in zoom-in duration-300">
            <h2 className="mono text-white text-lg font-black uppercase tracking-widest mb-6 border-b border-neutral-800 pb-4">
              System Manual: Home Screen Installation
            </h2>
            
            <div className="space-y-6 text-neutral-400 text-sm mono leading-relaxed">
              <section>
                <h3 className="text-sky-500 font-bold mb-2">FOR iOS (iPhone/iPad):</h3>
                <p>1. Tap the <span className="text-white">Share icon</span> (square with arrow up) at the bottom.</p>
                <p>2. Scroll down and select <span className="text-white">"Add to Home Screen"</span>.</p>
                <p>3. Tap <span className="text-white">Add</span> to complete setup.</p>
              </section>

              <section>
                <h3 className="text-emerald-500 font-bold mb-2">FOR ANDROID:</h3>
                <p>1. Tap the <span className="text-white">Menu icon</span> (three dots) in your browser.</p>
                <p>2. Select <span className="text-white">"Install App"</span> or <span className="text-white">"Add to Home Screen"</span>.</p>
              </section>
            </div>

            <button 
              onClick={() => setShowManual(false)}
              className="mt-10 w-full py-4 bg-neutral-900 border border-neutral-700 rounded-xl mono text-white font-black uppercase tracking-widest hover:bg-neutral-800 transition-all active:scale-95"
            >
              Close Manual
            </button>
          </div>
        </div>
      )}
      
      {/* Global Vignette for Atmosphere */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.8)_100%)]"></div>
    </div>
  );
};

export default App;
