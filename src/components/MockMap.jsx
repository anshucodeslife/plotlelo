import React from 'react';
import { MapPin } from 'lucide-react';

const MockMap = ({ properties, onMarkerClick }) => {
  return (
    <div className="w-full h-full bg-slate-200 relative overflow-hidden group">
      {/* Background Pattern to look like a map */}
      <div className="absolute inset-0 opacity-40 bg-[url('https://i.imgur.com/Kd3X3Kj.png')] bg-cover grayscale" />
      
      {/* Overlay Text */}
      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded text-xs font-mono text-slate-500 z-10">
        Lat: 17.3850 | Lng: 78.4867 (Interactive Demo)
      </div>

      {/* Rendering Static Markers based on random positions for demo */}
      {properties.map((prop, index) => {
        // Generating fake random positions for visual demo
        const topPos = 20 + (index * 15) + '%'; 
        const leftPos = 30 + (index * 10) + '%';

        return (
          <div 
            key={prop.id}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:z-50 transition-all duration-200 hover:scale-110"
            style={{ top: topPos, left: leftPos }}
            onClick={() => onMarkerClick(prop.id)}
          >
            <div className={`
              relative flex items-center justify-center
              ${prop.premium ? 'bg-slate-900' : 'bg-emerald-600'} 
              text-white text-[10px] font-bold px-2 py-1 rounded-md shadow-xl border border-white/50
            `}>
              {prop.price.displayTotal}
              <div className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 rotate-45 ${prop.premium ? 'bg-slate-900' : 'bg-emerald-600'}`}></div>
            </div>
          </div>
        )
      })}
    </div>
  );
};

export default MockMap;