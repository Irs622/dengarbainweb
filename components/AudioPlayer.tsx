'use client';

import { useState, useRef, useEffect } from 'react';
import { useProgress } from '@/context/ProgressContext';

interface AudioPlayerProps {
  duration: string;
  hadisId?: number;
}

export default function AudioPlayer({ duration, hadisId }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0); // 0 to 100%
  const barRef = useRef<HTMLDivElement>(null);
  const { addLearningSeconds } = useProgress();

  // Convert duration "MM:SS" to total seconds
  const parseTotalSeconds = (durStr: string) => {
    const parts = durStr.split(':').map(Number);
    if (parts.length === 2) return parts[0] * 60 + parts[1];
    return 135; // default 2:15
  };

  const totalSeconds = parseTotalSeconds(duration);

  // Audio Playback loop timer
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prevProgress) => {
          const currentSec = (prevProgress / 100) * totalSeconds;
          const nextSec = currentSec + 1;

          if (nextSec >= totalSeconds) {
            setIsPlaying(false);
            return 100;
          }

          // Accumulate listening seconds to real progress store
          addLearningSeconds(1, hadisId);

          return (nextSec / totalSeconds) * 100;
        });
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying, totalSeconds, hadisId, addLearningSeconds]);

  // Convert progress% to time string "MM:SS"
  const toTime = (pct: number) => {
    const curSeconds = Math.round((pct / 100) * totalSeconds);
    const m = Math.floor(curSeconds / 60);
    const s = curSeconds % 60;
    return `${m}:${String(s).padStart(2, '0')}`;
  };

  const handleBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!barRef.current) return;
    const rect = barRef.current.getBoundingClientRect();
    const pct = ((e.clientX - rect.left) / rect.width) * 100;
    setProgress(Math.min(100, Math.max(0, pct)));
  };

  const handleSeek = (offsetSeconds: number) => {
    setProgress((prev) => {
      const curSeconds = (prev / 100) * totalSeconds;
      const targetSeconds = Math.min(totalSeconds, Math.max(0, curSeconds + offsetSeconds));
      return (targetSeconds / totalSeconds) * 100;
    });
  };

  return (
    <div style={{
      backgroundColor: '#1A5C40',
      borderRadius: '20px',
      padding: '18px 20px 20px',
      color: '#FFFFFF',
      boxShadow: '0 4px 16px rgba(26,92,64,0.18)',
    }}>
      {/* Time row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
        <span style={{ fontSize: '0.75rem', opacity: 0.85, fontWeight: 600 }}>{toTime(progress)}</span>
        <span style={{ fontSize: '0.75rem', opacity: 0.85, fontWeight: 600 }}>{duration}</span>
      </div>

      {/* Progress bar */}
      <div
        ref={barRef}
        onClick={handleBarClick}
        style={{
          height: '6px',
          backgroundColor: 'rgba(255,255,255,0.25)',
          borderRadius: '9999px',
          marginBottom: '18px',
          cursor: 'pointer',
          position: 'relative',
        }}
        role="slider"
        aria-label="Kemajuan Audio"
        aria-valuenow={Math.round(progress)}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div style={{
          height: '100%',
          width: `${progress}%`,
          backgroundColor: '#FFFFFF',
          borderRadius: '9999px',
          position: 'relative',
          transition: 'width 0.1s linear',
        }}>
          <div style={{
            position: 'absolute',
            right: '-6px',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '14px',
            height: '14px',
            backgroundColor: '#FFFFFF',
            borderRadius: '50%',
            boxShadow: '0 0 0 3px rgba(255,255,255,0.3)',
          }} />
        </div>
      </div>

      {/* Controls */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Repeat */}
        <button
          onClick={() => setProgress(0)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '6px', opacity: 0.8 }}
          aria-label="Putar Ulang dari Awal"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M17 1l4 4-4 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 11V9a4 4 0 0 1 4-4h14" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            <path d="M7 23l-4-4 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M21 13v2a4 4 0 0 1-4 4H3" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>

        {/* Skip back 10s */}
        <button
          onClick={() => handleSeek(-10)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '6px', position: 'relative' }}
          aria-label="Mundur 10 Detik"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <polyline points="1 4 1 10 7 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3.51 15a9 9 0 1 0 .49-4" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <span style={{ position: 'absolute', bottom: '2px', right: '1px', fontSize: '0.5rem', color: 'white', fontWeight: 800 }}>10</span>
        </button>

        {/* Play/Pause Button */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          aria-label={isPlaying ? 'Jeda Audio' : 'Putar Audio'}
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

        {/* Skip forward 10s */}
        <button
          onClick={() => handleSeek(10)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '6px', position: 'relative' }}
          aria-label="Maju 10 Detik"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <polyline points="23 4 23 10 17 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M20.49 15a9 9 0 1 1-.49-4" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <span style={{ position: 'absolute', bottom: '2px', left: '1px', fontSize: '0.5rem', color: 'white', fontWeight: 800 }}>10</span>
        </button>

        {/* Volume / Info */}
        <button
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '6px', opacity: 0.8 }}
          aria-label="Pengaturan Volume"
        >
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
