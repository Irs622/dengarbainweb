'use client';

import { useState, useRef } from 'react';

interface AudioPlayerProps {
  duration: string;
}

export default function AudioPlayer({ duration }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(31); // ~0:42 / 2:15
  const barRef = useRef<HTMLDivElement>(null);

  // Convert progress% to time string
  const toTime = (pct: number) => {
    const [m, s] = duration.split(':').map(Number);
    const total = m * 60 + s;
    const cur = Math.round((pct / 100) * total);
    return `${Math.floor(cur / 60)}:${String(cur % 60).padStart(2, '0')}`;
  };

  const handleBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!barRef.current) return;
    const rect = barRef.current.getBoundingClientRect();
    const pct = ((e.clientX - rect.left) / rect.width) * 100;
    setProgress(Math.min(100, Math.max(0, pct)));
  };

  return (
    <div style={{
      backgroundColor: '#1A5C40',
      borderRadius: '20px',
      padding: '18px 20px 20px',
      color: '#FFFFFF',
    }}>
      {/* Time row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
        <span style={{ fontSize: '0.75rem', opacity: 0.75 }}>{toTime(progress)}</span>
        <span style={{ fontSize: '0.75rem', opacity: 0.75 }}>{duration}</span>
      </div>

      {/* Progress bar */}
      <div
        ref={barRef}
        onClick={handleBarClick}
        style={{
          height: '4px',
          backgroundColor: 'rgba(255,255,255,0.25)',
          borderRadius: '9999px',
          marginBottom: '18px',
          cursor: 'pointer',
          position: 'relative',
        }}
      >
        <div style={{
          height: '100%',
          width: `${progress}%`,
          backgroundColor: '#FFFFFF',
          borderRadius: '9999px',
          position: 'relative',
          transition: 'width 0.1s',
        }}>
          <div style={{
            position: 'absolute',
            right: '-6px',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '12px',
            height: '12px',
            backgroundColor: '#FFFFFF',
            borderRadius: '50%',
            boxShadow: '0 0 0 3px rgba(255,255,255,0.25)',
          }} />
        </div>
      </div>

      {/* Controls */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Repeat */}
        <button style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '6px', opacity: 0.8 }} aria-label="Ulangi">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M17 1l4 4-4 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 11V9a4 4 0 0 1 4-4h14" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            <path d="M7 23l-4-4 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M21 13v2a4 4 0 0 1-4 4H3" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>

        {/* Skip back */}
        <button style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '6px', position: 'relative' }} aria-label="Kembali 10 detik">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path d="M2.01 21C2.01 21 2 14 9 14s7 7 7 7" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" opacity="0"/>
            <polyline points="1 4 1 10 7 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3.51 15a9 9 0 1 0 .49-4" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <span style={{ position: 'absolute', bottom: '2px', right: '1px', fontSize: '0.5rem', color: 'white', fontWeight: 800 }}>10</span>
        </button>

        {/* Play/Pause main button */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          aria-label={isPlaying ? 'Pause' : 'Putar'}
          style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255,255,255,0.22)',
            border: '2px solid rgba(255,255,255,0.3)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.15s ease',
          }}
        >
          {isPlaying ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
              <rect x="6" y="4" width="4" height="16" rx="1"/>
              <rect x="14" y="4" width="4" height="16" rx="1"/>
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
              <polygon points="5 3 19 12 5 21 5 3"/>
            </svg>
          )}
        </button>

        {/* Skip forward */}
        <button style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '6px', position: 'relative' }} aria-label="Maju 10 detik">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <polyline points="23 4 23 10 17 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M20.49 15a9 9 0 1 1-.49-4" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <span style={{ position: 'absolute', bottom: '2px', left: '1px', fontSize: '0.5rem', color: 'white', fontWeight: 800 }}>10</span>
        </button>

        {/* Volume */}
        <button style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '6px', opacity: 0.8 }} aria-label="Volume">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>
    </div>
  );
}
