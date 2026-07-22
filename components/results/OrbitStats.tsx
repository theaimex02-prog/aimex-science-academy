"use client";

export default function OrbitStats() {
    function StatBubble({
  number,
  label,
}: {
  number: string;
  label: string;
}) {
  return (
  
<div className="flex h-20 w-20 flex-col items-center justify-center rounded-full border border-cyan-400/30 bg-slate-900/80 backdrop-blur-md shadow-[0_0_30px_rgba(34,211,238,.35)] lg:h-28 lg:w-28">
<span className="text-lg font-bold text-cyan-300 lg:text-2xl">
          {number}
      </span>

      <span className="text-[10px] text-slate-300 lg:text-xs">
        {label}
      </span>
    </div>
  );
}
  return (
<div className="relative mx-auto h-[360px] w-[360px] lg:h-[580px] lg:w-[580px]"> 
   {/* Orbit */}
  <div className="absolute inset-0 rounded-full border border-cyan-500/20" />

  {/* Center */}
<div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-700 shadow-[0_0_80px_rgba(34,211,238,.55)] lg:h-44 lg:w-44"> 
   <div className="text-center">
      <h3 className="text-2xl font-black text-white">AimEx</h3>
<p className="text-xs text-cyan-100 lg:text-sm">
          Our Impact
        
      </p>
    </div>
  </div>

  {/* Top */}
  <div
  className="absolute inset-0"
  style={{
    animation: "orbit 30s linear infinite",
  }}
>
  <div className="absolute left-1/2 top-0 -translate-x-1/2">
    <div
      style={{
        animation: "orbitReverse 30s linear infinite",
      }}
    >
      <StatBubble number="500+" label="Students" />
    </div>
  </div>
</div>

  {/* Right */}
  <div
  className="absolute inset-0"
  style={{
    animation: "orbit 30s linear infinite",
  }}
>
  <div className="absolute right-0 top-1/2 -translate-y-1/2">
    <div
      style={{
        animation: "orbitReverse 30s linear infinite",
      }}
    >
      <StatBubble number="98%" label="Success" />
    </div>
  </div>
</div>

  {/* Bottom */}
  <div
  className="absolute inset-0"
  style={{
    animation: "orbit 30s linear infinite",
  }}
>
  <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
    <div
      style={{
        animation: "orbitReverse 30s linear infinite",
      }}
    >
      <StatBubble number="15+" label="Faculty" />
    </div>
  </div>
</div>

  {/* Left */}
  <div
  className="absolute inset-0"
  style={{
    animation: "orbit 30s linear infinite",
  }}
>
  <div className="absolute left-0 top-1/2 -translate-y-1/2">
    <div
      style={{
        animation: "orbitReverse 30s linear infinite",
      }}
    >
      <StatBubble number="20+" label="Years" />
    </div>
  </div>
</div>

</div>

    
  );
}