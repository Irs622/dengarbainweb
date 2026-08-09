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
          alignItems: 'left',
          backgroundColor: '#064E3B',
          gap : '6px',
          borderRadius: '9999px',
          marginBottom: '12px',
        }}>
          <span style={{
            backgroundColor: '#C3ECD733',
            width: '36px',
            height: '16px',
            borderRadius: '9999px',
            fontSize: '0.625rem',
            fontWeight: 700,
            color: '#C3ECD7',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>#{hadis.id}</span>
          <span style={{ fontSize: '0.7rem', color: '#C3ECD7' ,height: '16px', fontWeight: 600, alignItems: 'center', justifyContent: 'center', display: 'flex'}}>
            Lanjutkan terakhir dibuka
          </span>
        </div>

        {/* Title & play button row */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px', marginBottom: '12px' }}>
          <h2 className="font-playfair" style={{
            fontSize: '1.5rem',
            fontWeight: 800,
            color: '#FFFFFF',
            lineHeight: 1.25,
            flex: 1,
            maxWidth: '250px'
          }}>
            {hadis.judul}
          </h2>
          {/* Play button */}
          <div style={{
            width: '44px',
            height: '44px',
            marginBottom: '20px',
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
          fontSize: '1rem',
          color: 'rgba(255,255,255,0.75)',
          fontStyle: 'italic',
          lineHeight: 1.6,
          marginBottom: '16px',
        }}>
          &ldquo;{hadis.terjemahan.substring(0, 80)}...&rdquo;
        </p>

        {/* Progress bar */}
        <div style={{
          height: '6px',
          backgroundColor: 'rgba(255,255,255,0.2)',
          borderRadius: '9999px'
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
          marginTop: '16px',
        }}>
          {hadis.sumber}
        </p>
      </div>
    </Link>
  );
}
