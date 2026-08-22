'use client';

import CircularProgress from '@/components/CircularProgress';
import Link from 'next/link';
import AppHeader from '@/components/AppHeader';
import { useProgress } from '@/context/ProgressContext';

export default function ProgresPage() {
  const { getHadisList, activities, learningTimeMinutes, streakDays } = useProgress();

  const hadisList = getHadisList();
  const total = hadisList.length;
  const hafalCount = hadisList.filter((h) => h.status === 'hafal').length;
  const sedangCount = hadisList.filter((h) => h.status === 'sedang').length;
  const belumCount = hadisList.filter((h) => h.status === 'belum').length;
  const percent = total > 0 ? Math.round((hafalCount / total) * 100) : 0;

  const hours = (learningTimeMinutes / 60).toFixed(1);

  const stats = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M3 18v-6a9 9 0 0 1 18 0v6" stroke="#1A5C40" strokeWidth="2" strokeLinecap="round"/>
          <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" stroke="#1A5C40" strokeWidth="2"/>
        </svg>
      ),
      iconBg: '#E8F5EE',
      label: 'Waktu Belajar',
      value: `${hours} Jam`,
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 2a10 10 0 0 1 10 10c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2z" stroke="#F59E0B" strokeWidth="2"/>
          <path d="M12 6v6l4 2" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      iconBg: '#FEF3C7',
      label: 'Streak Belajar',
      value: `${streakDays} Hari`,
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" stroke="#1A5C40" strokeWidth="2" strokeLinejoin="round"/>
          <line x1="4" y1="22" x2="4" y2="15" stroke="#1A5C40" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      iconBg: '#E8F5EE',
      label: 'Target Selesai',
      value: `${total} Hadis`,
    },
  ];

  return (
    <>
      <AppHeader />

      <div className="progres-page-container" style={{ paddingBottom: '32px', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        <div style={{ padding: '4px 0' }}>
          <h2 className="font-playfair" style={{ fontSize: '1.5rem', fontWeight: 800, color: '#064E3B', padding: '12px 16px 16px' }}>
            Progres Anda
          </h2>

          {/* Dynamic Real-time Progress Card */}
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '20px',
            margin: '0 16px 20px',
            padding: '24px 20px',
            boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
            border: '1px solid #F0F0EA',
            textAlign: 'center',
          }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
              <CircularProgress percent={percent} />
            </div>

            <h3 className="font-playfair" style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1A1A1A', marginBottom: '6px' }}>
              Hafal {hafalCount} dari {total}
            </h3>
            <p style={{ fontSize: '0.8125rem', color: '#6B7280', lineHeight: 1.6, marginBottom: '20px' }}>
              MasyaAllah! Kamu telah menguasai {percent}% dari total {total} Hadis Arbain An-Nawawiyah
            </p>

            {/* Status Breakdown Pills */}
            <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginBottom: '20px' }}>
              <div style={{ flex: 1, backgroundColor: '#D1FAE5', borderRadius: '12px', padding: '10px 6px', textAlign: 'center' }}>
                <p style={{ fontSize: '0.75rem', color: '#065F46', fontWeight: 700 }}>Hafal</p>
                <p style={{ fontSize: '1.125rem', color: '#065F46', fontWeight: 800 }}>{hafalCount}</p>
              </div>
              <div style={{ flex: 1, backgroundColor: '#FEF3C7', borderRadius: '12px', padding: '10px 6px', textAlign: 'center' }}>
                <p style={{ fontSize: '0.75rem', color: '#92400E', fontWeight: 700 }}>Sedang</p>
                <p style={{ fontSize: '1.125rem', color: '#92400E', fontWeight: 800 }}>{sedangCount}</p>
              </div>
              <div style={{ flex: 1, backgroundColor: '#F3F4F6', borderRadius: '12px', padding: '10px 6px', textAlign: 'center' }}>
                <p style={{ fontSize: '0.75rem', color: '#4B5563', fontWeight: 700 }}>Belum</p>
                <p style={{ fontSize: '1.125rem', color: '#4B5563', fontWeight: 800 }}>{belumCount}</p>
              </div>
            </div>

            <Link href="/hadis">
              <button className="font-playfair" style={{
                backgroundColor: '#1A5C40',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '12px',
                padding: '13px 32px',
                fontSize: '1rem',
                fontWeight: 700,
                cursor: 'pointer',
                fontFamily: 'inherit',
                width: '100%',
                transition: 'opacity 0.15s',
              }}>
                Lanjutkan Belajar
              </button>
            </Link>
          </div>

          {/* Quote Card */}
          <div style={{
            background: 'linear-gradient(135deg, #1A5C40 0%, #0D3D2A 100%)',
            borderRadius: '16px',
            margin: '0 16px 28px',
            padding: '28px 24px',
            color: '#FFFFFF',
            position: 'relative',
          }}>
            <div style={{
              backgroundColor: '#064E3B',
              borderRadius: '9999px',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '32px',
              height: '32px',
              fontSize: '1.25rem',
              fontWeight: 800,
              marginBottom: '12px',
            }}>
              “
            </div>
            <p style={{ fontSize: '0.95rem', fontWeight: 600, lineHeight: 1.6, marginBottom: '8px', fontStyle: 'italic' }}>
              &ldquo;Sebaik-baiknya di antara kalian adalah yang mempelajari Al-Quran dan mengajarkannya&rdquo;
            </p>
            <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)' }}>— Sahih al-Bukhari</p>
          </div>

          {/* Stats Cards */}
          {stats.map((s) => (
            <div key={s.label} className="stat-card">
              <div className="stat-icon" style={{ backgroundColor: s.iconBg }}>
                {s.icon}
              </div>
              <div>
                <p style={{ fontSize: '0.85rem', color: '#9CA3AF', fontWeight: 500 }}>{s.label}</p>
                <p style={{ fontSize: '1.125rem', fontWeight: 800, color: '#1A1A1A' }}>{s.value}</p>
              </div>
            </div>
          ))}

          {/* Real-time Recent Activity Log */}
          <h3 className="font-playfair" style={{ fontSize: '1.375rem', fontWeight: 800, color: '#064E3B', padding: '20px 16px 10px' }}>
            Aktivitas Terbaru
          </h3>

          {activities.length > 0 ? (
            activities.map((act) => (
              <Link key={act.id} href={`/hadis/${act.hadisId}`} style={{ textDecoration: 'none', display: 'block' }}>
                <div style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '14px',
                  margin: '0 16px 10px',
                  padding: '16px 20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
                  border: '1px solid #F0F0EA',
                  transition: 'transform 0.15s ease',
                }}>
                  <div style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    backgroundColor: '#E8F5EE',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <rect x="2" y="3" width="20" height="14" rx="2" stroke="#1A5C40" strokeWidth="2"/>
                      <path d="M8 21h8M12 17v4" stroke="#1A5C40" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div style={{ flex: 1 }}>
                    <p className="font-playfair" style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#1a1a1a', marginBottom: '2px' }}>{act.title}</p>
                    <p style={{ fontSize: '0.75rem', color: '#9CA3AF' }}>{act.desc} • {act.timestamp}</p>
                  </div>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M9 18l6-6-6-6" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </Link>
            ))
          ) : (
            <div style={{ textAlign: 'center', padding: '24px 16px', color: '#9CA3AF', fontSize: '0.875rem' }}>
              Belum ada aktivitas tercatat
            </div>
          )}
        </div>
      </div>
    </>
  );
}
