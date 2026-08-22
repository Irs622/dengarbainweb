import Link from 'next/link';
import { Hadis } from '@/data/hadis';

const statusConfig: Record<string, { bg: string; text: string; label: string }> = {
  hafal: { bg: '#D1FAE5', text: '#065F46', label: 'HAFAL' },
  sedang: { bg: '#FEF3C7', text: '#92400E', label: 'SEDANG' },
  belum: { bg: '#F3F4F6', text: '#6B7280', label: 'BELUM' },
};

interface HadisCardProps {
  hadis: Hadis;
}

export default function HadisCard({ hadis }: HadisCardProps) {
  const st = statusConfig[hadis.status];
  const numColor = hadis.status === 'hafal' ? '#1A5C40' : hadis.status === 'sedang' ? '#D97706' : '#9CA3AF';
  const numBg = hadis.status === 'hafal' ? '#E8F5EE' : hadis.status === 'sedang' ? '#FEF3C7' : '#F3F4F6';

  return (
    <Link href={`/hadis/${hadis.id}`} className="hadis-card">
      {/* Top row */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px', marginBottom: '10px' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', flex: 1, minWidth: 0 }}>
          {/* Number bubble */}
          <div style={{
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            backgroundColor: numBg,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}>
            <span style={{ fontSize: '0.8125rem', fontWeight: 800, color: numColor }}>{hadis.id}</span>
          </div>
          {/* Title */}
          <h3 className="font-playfair" style={{
            fontSize: '1.25rem',
            fontWeight: 500,
            color: '#1A1A1A',
            lineHeight: 1.35,
            paddingTop: '2px',
            flex: 1,
            minWidth: 0,
          }}>
            {hadis.judul}
          </h3>
        </div>
        {/* Status badge */}
        <span className={`badge badge-${hadis.status}`} style={{ flexShrink: 0 }}>
          {st.label}
        </span>
      </div>

      {/* Preview */}
      <p style={{
        fontSize: '0.9rem',
        color: '#6B7280',
        lineHeight: 1.6,
        marginTop: '20px',
        marginBottom: '10px',
        overflow: 'hidden',
        display: '-webkit-box',
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical',
      }}>
        {hadis.terjemahan}
      </p>

      {/* Footer */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '32px' }}>
        <span style={{ fontSize: '0.8rem', color: '#9CA3AF', fontWeight: 500 }}>
          {hadis.sumber}
        </span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"
            stroke={hadis.status === 'hafal' ? '#1A5C40' : '#D1D5DB'}
            strokeWidth="2"
            strokeLinejoin="round"
            fill={hadis.status === 'hafal' ? '#D1FAE5' : 'none'}
          />
        </svg>
      </div>
    </Link>
  );
}
