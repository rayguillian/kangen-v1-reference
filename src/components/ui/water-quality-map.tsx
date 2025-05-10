export default function WaterQualityMap() {
  return (
    <div className="relative w-full h-full bg-gray-200 dark:bg-gray-800 overflow-hidden">
      <img 
        src="https://images.pexels.com/photos/592750/pexels-photo-592750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
        alt="Denmark Map" 
        className="w-full h-full object-cover opacity-30"
      />
      
      {/* Map overlay with Denmark shape */}
      <svg 
        className="absolute inset-0 w-full h-full" 
        viewBox="0 0 500 500" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Simplified Denmark shape */}
        <path 
          d="M150,100 L200,80 L300,120 L350,100 L380,150 L350,200 L380,250 L350,300 L300,320 L250,350 L200,320 L150,350 L120,300 L100,250 L120,200 L100,150 Z" 
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-blue-500 dark:text-blue-400"
        />
        
        {/* Hotspots - Critical areas */}
        <circle cx="180" cy="150" r="15" fill="#ef4444" className="animate-pulse" opacity="0.7" />
        <circle cx="260" cy="200" r="20" fill="#ef4444" className="animate-pulse" opacity="0.7" />
        <circle cx="320" cy="150" r="15" fill="#ef4444" className="animate-pulse" opacity="0.7" />
        
        {/* Hotspots - Elevated areas */}
        <circle cx="220" cy="280" r="15" fill="#f59e0b" opacity="0.7" />
        <circle cx="300" cy="250" r="12" fill="#f59e0b" opacity="0.7" />
        <circle cx="170" cy="230" r="10" fill="#f59e0b" opacity="0.7" />
        
        {/* Hotspots - Acceptable areas */}
        <circle cx="150" cy="300" r="10" fill="#22c55e" opacity="0.7" />
        <circle cx="350" cy="220" r="8" fill="#22c55e" opacity="0.7" />
      </svg>
      
      {/* Text labels for regions */}
      <div className="absolute top-[25%] left-[32%] transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <span className="text-xs font-bold bg-white/70 dark:bg-black/70 p-1 rounded">Nordjylland</span>
      </div>
      
      <div className="absolute top-[45%] left-[25%] transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <span className="text-xs font-bold bg-white/70 dark:bg-black/70 p-1 rounded">Midtjylland</span>
      </div>
      
      <div className="absolute top-[65%] left-[28%] transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <span className="text-xs font-bold bg-white/70 dark:bg-black/70 p-1 rounded">Syddanmark</span>
      </div>
      
      <div className="absolute top-[40%] left-[60%] transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <span className="text-xs font-bold bg-white/70 dark:bg-black/70 p-1 rounded">Sjælland</span>
      </div>
      
      <div className="absolute top-[28%] left-[70%] transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <span className="text-xs font-bold bg-white/70 dark:bg-black/70 p-1 rounded">Hovedstaden</span>
      </div>
    </div>
  );
}