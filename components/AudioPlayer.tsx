'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { useProgress } from '@/context/ProgressContext';

interface AudioPlayerProps {
  duration: string;
  hadisId?: number;
}

export default function AudioPlayer({ duration, hadisId }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const { addLearningSeconds } = useProgress();

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [audioDuration, setAudioDuration] = useState<number>(0);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1.0);
  
  // A-B Looping state
  const [pointA, setPointA] = useState<number | null>(null);
  const [pointB, setPointB] = useState<number | null>(null);
  const [isABLoopActive, setIsABLoopActive] = useState<boolean>(false);
  const [showSpeedMenu, setShowSpeedMenu] = useState<boolean>(false);
  const [announcement, setAnnouncement] = useState<string>('');

  const speeds = [0.75, 1.0, 1.25, 1.5];

  // Convert duration "MM:SS" string to total seconds
  const parseTotalSeconds = (durStr: string) => {
    const parts = durStr.split(':').map(Number);
    if (parts.length === 2) return parts[0] * 60 + parts[1];
    return 135;
  };

  const fallbackDuration = parseTotalSeconds(duration);
  const totalDuration = audioDuration > 0 ? audioDuration : fallbackDuration;

  // File paths for audio
  const paddedId = String(hadisId || 1).padStart(2, '0');
  const audioSrcWav = `/audio/hadis/hadis-${paddedId}.wav`;
  const audioSrcMp3 = `/audio/hadis/hadis-${paddedId}.mp3`;

  // Format seconds to "M:SS"
  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${String(s).padStart(2, '0')}`;
  };

  // Set audio duration when metadata is loaded
  const handleLoadedMetadata = () => {
    if (audioRef.current && !isNaN(audioRef.current.duration) && isFinite(audioRef.current.duration)) {
      setAudioDuration(audioRef.current.duration);
    }
  };

  // Handle time update and A-B looping logic
  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    const cur = audioRef.current.currentTime;
    setCurrentTime(cur);

    // A-B Loop check
    if (isABLoopActive && pointA !== null && pointB !== null && pointB > pointA) {
      if (cur >= pointB) {
        audioRef.current.currentTime = pointA;
        setCurrentTime(pointA);
      }
    }
  };

  const addLearningSecondsRef = useRef(addLearningSeconds);
  useEffect(() => {
    addLearningSecondsRef.current = addLearningSeconds;
  }, [addLearningSeconds]);

  // Learning time accumulation
  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;
    if (isPlaying) {
      timer = setInterval(() => {
        addLearningSecondsRef.current(1, hadisId);
      }, 1000);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isPlaying, hadisId]);

  // Toggle Play / Pause
  const togglePlay = async () => {
    if (!audioRef.current) return;
    try {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
        setAnnouncement('Audio dijeda');
      } else {
        await audioRef.current.play();
        setIsPlaying(true);
        setAnnouncement('Audio diputar');
      }
    } catch (err) {
      console.warn('Gagal memutar audio:', err);
      // Fallback state if audio play is blocked
      setIsPlaying(!isPlaying);
    }
  };

  // Handle Seek / Scrubbing
  const handleBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!barRef.current) return;
    const rect = barRef.current.getBoundingClientRect();
    const pct = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
    const targetTime = pct * totalDuration;

    if (audioRef.current) {
      audioRef.current.currentTime = targetTime;
    }
    setCurrentTime(targetTime);
    setAnnouncement(`Posisi audio di detik ${Math.round(targetTime)}`);
  };

  // Seek relative seconds (+/- 10s)
  const handleRelativeSeek = (offsetSec: number) => {
    if (!audioRef.current) return;
    const target = Math.min(totalDuration, Math.max(0, audioRef.current.currentTime + offsetSec));
    audioRef.current.currentTime = target;
    setCurrentTime(target);
    setAnnouncement(offsetSec > 0 ? 'Maju 10 detik' : 'Mundur 10 detik');
  };

  // Speed change
  const handleSpeedChange = (speed: number) => {
    setPlaybackSpeed(speed);
    if (audioRef.current) {
      audioRef.current.playbackRate = speed;
    }
    setShowSpeedMenu(false);
    setAnnouncement(`Kecepatan audio diatur ke ${speed} kali`);
  };

  // A-B Looping Set Point A
  const handleSetPointA = () => {
    const cur = audioRef.current ? audioRef.current.currentTime : currentTime;
    setPointA(cur);
    setAnnouncement(`Titik awal A diatur pada menit ${formatTime(cur)}`);
    if (pointB !== null && cur >= pointB) {
      setPointB(null);
      setIsABLoopActive(false);
    }
  };

  // A-B Looping Set Point B
  const handleSetPointB = () => {
    const cur = audioRef.current ? audioRef.current.currentTime : currentTime;
    if (pointA === null) {
      setAnnouncement('Silakan atur Titik A terlebih dahulu');
      return;
    }
    if (cur <= pointA) {
      setAnnouncement('Titik B harus berada setelah Titik A');
      return;
    }
    setPointB(cur);
    setIsABLoopActive(true);
    setAnnouncement(`Titik akhir B diatur pada menit ${formatTime(cur)}. Mode A-B Loop aktif.`);
  };

  // Reset A-B Loop
  const handleResetLoop = () => {
    setPointA(null);
    setPointB(null);
    setIsABLoopActive(false);
    setAnnouncement('Pengulangan A-B dimatikan');
  };

  const progressPercent = totalDuration > 0 ? (currentTime / totalDuration) * 100 : 0;
  const pointAPercent = pointA !== null && totalDuration > 0 ? (pointA / totalDuration) * 100 : null;
  const pointBPercent = pointB !== null && totalDuration > 0 ? (pointB / totalDuration) * 100 : null;

  return (
    <div
      style={{
        backgroundColor: '#1A5C40',
        borderRadius: '24px',
        padding: '20px 22px',
        color: '#FFFFFF',
        boxShadow: '0 6px 20px rgba(26,92,64,0.22)',
      }}
    >
      {/* Hidden HTML5 Audio Element */}
      <audio
        ref={audioRef}
        onLoadedMetadata={handleLoadedMetadata}
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => {
          setIsPlaying(false);
          setCurrentTime(0);
        }}
        preload="metadata"
      >
        <source src={audioSrcWav} type="audio/wav" />
        <source src={audioSrcMp3} type="audio/mpeg" />
      </audio>

      {/* Screen Reader Live Region for Audio Actions */}
      {announcement && (
        <div className="sr-only" role="status" aria-live="polite">
          {announcement}
        </div>
      )}

      {/* Time Display & Speed Tag */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
        <span style={{ fontSize: '0.8125rem', opacity: 0.9, fontWeight: 700 }}>
          {formatTime(currentTime)} / {formatTime(totalDuration)}
        </span>

        {/* Speed Selector Button */}
        <div style={{ position: 'relative' }}>
          <button
            type="button"
            onClick={() => setShowSpeedMenu(!showSpeedMenu)}
            style={{
              backgroundColor: 'rgba(255,255,255,0.2)',
              border: '1px solid rgba(255,255,255,0.35)',
              borderRadius: '12px',
              padding: '3px 10px',
              color: '#FFFFFF',
              fontSize: '0.75rem',
              fontWeight: 800,
              cursor: 'pointer',
            }}
            aria-label={`Kecepatan putar ${playbackSpeed}x. Klik untuk mengubah.`}
          >
            {playbackSpeed}x Kecepatan
          </button>

          {/* Speed Dropdown Menu */}
          {showSpeedMenu && (
            <div
              style={{
                position: 'absolute',
                top: '100%',
                right: 0,
                marginTop: '6px',
                backgroundColor: '#FFFFFF',
                borderRadius: '14px',
                boxShadow: '0 4px 16px rgba(0,0,0,0.18)',
                padding: '6px',
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
                zIndex: 20,
              }}
            >
              {speeds.map((spd) => (
                <button
                  key={spd}
                  onClick={() => handleSpeedChange(spd)}
                  style={{
                    backgroundColor: playbackSpeed === spd ? '#1A5C40' : '#FAFAF8',
                    color: playbackSpeed === spd ? '#FFFFFF' : '#374151',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '6px 14px',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    textAlign: 'center',
                  }}
                >
                  {spd}x {spd === 1.0 ? '(Normal)' : ''}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Interactive Progress Bar with A-B Marker Overlays */}
      <div
        ref={barRef}
        onClick={handleBarClick}
        style={{
          height: '8px',
          backgroundColor: 'rgba(255,255,255,0.25)',
          borderRadius: '9999px',
          marginBottom: '16px',
          cursor: 'pointer',
          position: 'relative',
        }}
        role="slider"
        aria-label="Kemajuan Audio Hadis"
        aria-valuenow={Math.round(progressPercent)}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        {/* Active Fill */}
        <div
          style={{
            height: '100%',
            width: `${progressPercent}%`,
            backgroundColor: '#FFFFFF',
            borderRadius: '9999px',
            position: 'relative',
          }}
        >
          <div
            style={{
              position: 'absolute',
              right: '-6px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '14px',
              height: '14px',
              backgroundColor: '#FFFFFF',
              borderRadius: '50%',
              boxShadow: '0 0 0 3px rgba(255,255,255,0.3)',
            }}
          />
        </div>

        {/* Marker Point A */}
        {pointAPercent !== null && (
          <div
            title={`Titik A: ${formatTime(pointA!)}`}
            style={{
              position: 'absolute',
              left: `${pointAPercent}%`,
              top: '-4px',
              width: '4px',
              height: '16px',
              backgroundColor: '#FDE047',
              borderRadius: '2px',
              zIndex: 5,
            }}
          />
        )}

        {/* Marker Point B */}
        {pointBPercent !== null && (
          <div
            title={`Titik B: ${formatTime(pointB!)}`}
            style={{
              position: 'absolute',
              left: `${pointBPercent}%`,
              top: '-4px',
              width: '4px',
              height: '16px',
              backgroundColor: '#F87171',
              borderRadius: '2px',
              zIndex: 5,
            }}
          />
        )}
      </div>

      {/* Main Playback Controls */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
        {/* Restart from beginning */}
        <button
          type="button"
          onClick={() => {
            if (audioRef.current) audioRef.current.currentTime = 0;
            setCurrentTime(0);
            setAnnouncement('Diputar ulang dari awal');
          }}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '6px', opacity: 0.85 }}
          aria-label="Putar Ulang dari Awal"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M17 1l4 4-4 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3 11V9a4 4 0 0 1 4-4h14" stroke="white" strokeWidth="2" strokeLinecap="round" />
            <path d="M7 23l-4-4 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M21 13v2a4 4 0 0 1-4 4H3" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>

        {/* Skip back 10s */}
        <button
          type="button"
          onClick={() => handleRelativeSeek(-10)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '6px', position: 'relative' }}
          aria-label="Mundur 10 Detik"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <polyline points="1 4 1 10 7 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3.51 15a9 9 0 1 0 .49-4" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <span style={{ position: 'absolute', bottom: '2px', right: '1px', fontSize: '0.55rem', color: 'white', fontWeight: 800 }}>10</span>
        </button>

        {/* Play/Pause Button */}
        <button
          type="button"
          onClick={togglePlay}
          aria-label={isPlaying ? 'Jeda Audio' : 'Putar Audio'}
          style={{
            width: '58px',
            height: '58px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255,255,255,0.22)',
            border: '2px solid rgba(255,255,255,0.35)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.15s ease',
          }}
        >
          {isPlaying ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
              <rect x="6" y="4" width="4" height="16" rx="1" />
              <rect x="14" y="4" width="4" height="16" rx="1" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          )}
        </button>

        {/* Skip forward 10s */}
        <button
          type="button"
          onClick={() => handleRelativeSeek(10)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '6px', position: 'relative' }}
          aria-label="Maju 10 Detik"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <polyline points="23 4 23 10 17 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M20.49 15a9 9 0 1 1-.49-4" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <span style={{ position: 'absolute', bottom: '2px', left: '1px', fontSize: '0.55rem', color: 'white', fontWeight: 800 }}>10</span>
        </button>

        {/* Stop / Reset */}
        <button
          type="button"
          onClick={() => {
            if (audioRef.current) {
              audioRef.current.pause();
              audioRef.current.currentTime = 0;
            }
            setIsPlaying(false);
            setCurrentTime(0);
            setAnnouncement('Audio dihentikan');
          }}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '6px', opacity: 0.85 }}
          aria-label="Hentikan Audio"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
            <rect x="5" y="5" width="14" height="14" rx="2" />
          </svg>
        </button>
      </div>

      {/* A-B Looping Section for Hafalan */}
      <div
        style={{
          borderTop: '1px solid rgba(255,255,255,0.18)',
          paddingTop: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '8px',
        }}
      >
        <span style={{ fontSize: '0.75rem', fontWeight: 700, opacity: 0.9 }}>
          Pengulangan Hafalan (A-B Loop):
        </span>

        <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
          {/* Set A */}
          <button
            type="button"
            onClick={handleSetPointA}
            style={{
              backgroundColor: pointA !== null ? '#FDE047' : 'rgba(255,255,255,0.2)',
              color: pointA !== null ? '#78350F' : '#FFFFFF',
              border: 'none',
              borderRadius: '8px',
              padding: '4px 10px',
              fontSize: '0.75rem',
              fontWeight: 800,
              cursor: 'pointer',
            }}
            aria-label={pointA !== null ? `Titik A aktif di ${formatTime(pointA)}` : 'Tandai Titik Awal (Titik A)'}
          >
            {pointA !== null ? `A: ${formatTime(pointA)}` : 'Tandai A'}
          </button>

          {/* Set B */}
          <button
            type="button"
            onClick={handleSetPointB}
            style={{
              backgroundColor: pointB !== null ? '#F87171' : 'rgba(255,255,255,0.2)',
              color: pointB !== null ? '#FFFFFF' : '#FFFFFF',
              border: 'none',
              borderRadius: '8px',
              padding: '4px 10px',
              fontSize: '0.75rem',
              fontWeight: 800,
              cursor: 'pointer',
            }}
            aria-label={pointB !== null ? `Titik B aktif di ${formatTime(pointB)}` : 'Tandai Titik Akhir (Titik B)'}
          >
            {pointB !== null ? `B: ${formatTime(pointB)}` : 'Tandai B'}
          </button>

          {/* Reset Loop */}
          {(pointA !== null || pointB !== null) && (
            <button
              type="button"
              onClick={handleResetLoop}
              style={{
                backgroundColor: 'rgba(255,255,255,0.15)',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '8px',
                padding: '4px 8px',
                fontSize: '0.75rem',
                fontWeight: 700,
                cursor: 'pointer',
              }}
              aria-label="Hapus Pengulangan A-B"
            >
              Reset Loop
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
