import Link from 'next/link';
import { Hadis } from '@/data/hadis';

interface ContinueCardProps {
  hadis: Hadis;
}

export default function ContinueCard({ hadis }: ContinueCardProps) {
  return (
    <Link href={`/hadis/${hadis.id}`} style={{ textDecoration: 'none' }}>
      <div className="continue-card">
        {/* Top tag */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          backgroundColor: 'rgba(255,255,255,0.15)',
          borderRadius: '9999px',
          padding: '4px 12px',
          marginBottom: '12px',
        }}>
          <span style={{
            backgroundColor: '#4ADE80',
            width: '18px',
            height: '18px',
            borderRadius: '50%',
            fontSize: '0.625rem',
            fontWeight: 700,
            color: '#1A1A1A',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>#{hadis.id}</span>
          <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.85)', fontWeight: 500 }}>
            Lanjutkan terakhir dibuka
          </span>
        </div>

        {/* Title & play button row */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px', marginBottom: '12px' }}>
          <h2 style={{
            fontSize: '1.25rem',
            fontWeight: 800,
            color: '#FFFFFF',
            lineHeight: 1.25,
            flex: 1,
          }}>
            {hadis.judul}
          </h2>
          {/* Play button */}
          <div style={{
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255,255,255,0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            border: '2px solid rgba(255,255,255,0.3)',
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
              <polygon points="5 3 19 12 5 21 5 3"/>
            </svg>
          </div>
        </div>

        {/* Quote */}
        <p style={{
          fontSize: '0.8125rem',
          color: 'rgba(255,255,255,0.75)',
          fontStyle: 'italic',
          lineHeight: 1.6,
          marginBottom: '16px',
        }}>
          &ldquo;{hadis.terjemahan.substring(0, 80)}...&rdquo;
        </p>

        {/* Progress bar */}
        <div style={{
          height: '4px',
          backgroundColor: 'rgba(255,255,255,0.2)',
          borderRadius: '9999px',
        }}>
          <div style={{
            height: '100%',
            width: '30%',
            backgroundColor: '#F59E0B',
            borderRadius: '9999px',
          }} />
        </div>

        <p style={{
          fontSize: '0.6875rem',
          color: 'rgba(255,255,255,0.6)',
          marginTop: '6px',
        }}>
          {hadis.sumber}
        </p>
      </div>
    </Link>
  );
}
