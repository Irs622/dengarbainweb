interface CircularProgressProps {
  percent: number;  // 0-100
  size?: number;
  strokeWidth?: number;
  label?: string;
}

export default function CircularProgress({
  percent,
  size = 180,
  strokeWidth = 18,
  label = 'PROGRES',
}: CircularProgressProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <div style={{
      position: 'relative',
      width: size,
      height: size,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <svg width={size} height={size} style={{ transform: 'rotate(-90deg)', position: 'absolute' }}>
        {/* Track */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#E5E7EB"
          strokeWidth={strokeWidth}
        />
        {/* Progress */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#1A5C40"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{ transition: 'stroke-dashoffset 0.6s ease' }}
        />
      </svg>
      {/* Center text */}
      <div style={{ textAlign: 'center', zIndex: 1 }}>
        <div style={{ fontSize: '2.25rem', fontWeight: 800, color: '#1A5C40', lineHeight: 1 }}>
          {percent}%
        </div>
        <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#9CA3AF', letterSpacing: '0.1em', marginTop: '2px' }}>
          {label}
        </div>
      </div>
    </div>
  );
}
