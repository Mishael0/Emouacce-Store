

function Logo({ className = "w-24 h-24", primaryColor = "text-black" }) {
  return (
   <div className={`relative inline-block ${className} ${primaryColor}`}>
      <svg
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* 1. Subtle Radial Gradient for Depth */}
        <defs>
          <radialGradient id="glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.15" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </radialGradient>
        </defs>
        
        <circle cx="50" cy="50" r="45" fill="url(#glow)" />
        {/* 2. Lazy Rotating Spiral */}
        <g className="animate-spin origin-center" style={{ animationDuration: '8s' }}>
          {[...Array(12)].map((_, i) => (
            <path
              key={i}
              d="M50 8C56 8 64 14 68 22C60 18 54 16 50 16Z"
              fill="currentColor"
              transform={`rotate(${i * 30} 50 50)`}
              className="opacity-80"
            />
          ))}
        </g>
        {/* 3. Static Center Shopping Bag */}
        <g>
          {/* Bag Handle */}
          <path
            d="M 44,44 V 40 C 44,36.6 46.7,34 50,34 C 53.3,34 56,36.6 56,40 V44"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
          {/* Bag Body */}
          <rect 
            x="38" y="44" width="24" height="18" rx="1.5" 
            fill="currentColor" 
          />
          
          {/* 4. Pulsing 'E' with Glow */}
          <text
            x="50"
            y="57"
            textAnchor="middle"
            fill="white"
            className="animate-pulse"
            style={{
              fontFamily: 'Georgia, serif',
              fontStyle: 'italic',
              fontWeight: '900',
              fontSize: '13px',
              userSelect: 'none',
            }}
          >
            E
          </text>
        </g>
      </svg>
    </div>
  )
}

export default Logo
