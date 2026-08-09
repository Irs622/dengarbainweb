import CircularProgress from '@/components/CircularProgress';
import Link from 'next/link';

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
    value: '14.5 Jam',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2a10 10 0 0 1 10 10c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2z" stroke="#F59E0B" strokeWidth="2"/>
        <path d="M12 6v6l4 2" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    iconBg: '#FEF3C7',
    label: 'Streak',
    value: '7 Hari',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" stroke="#6B7280" strokeWidth="2" strokeLinejoin="round"/>
        <line x1="4" y1="22" x2="4" y2="15" stroke="#6B7280" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    iconBg: '#F3F4F6',
    label: 'Pencapaian',
    value: '15 Hadis',
  },
];

const recentActivity = [
  { id: 'a1', title: 'Hadis tentang Marah', desc: 'Didengarkan selama 10 menit' },
  { id: 'a2', title: 'Hadis tentang Rukun Islam', desc: 'Didengarkan selama 10 menit' },
];

export default function ProgresPage() {
  return (
    <>
      {/* App Header */}
      <header
        style={{
          backgroundColor: "#FFFFFF",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
          padding: "12px 16px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1
          className="font-playfair"
          style={{
            margin: 0,
            fontSize: "1.75rem",
            fontWeight: 900,
            color: "#1A5C40",
            lineHeight: 1,
          }}
        >
          DengarBain
        </h1>
      </header>

      <main>
        <div style={{ padding: '4px 0' }}>
        <h2 className="font-playfair" style={{ fontSize: '1.5rem', fontWeight: 800, color: '#064E3B', padding: '12px 16px 16px' }}>
          Progres Anda
        </h2>

        {/* Progress Card */}
        <div style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '20px',
          margin: '0 16px 28px',
          padding: '24px 32px',
          boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
          border: '1px solid #F0F0EA',
          textAlign: 'center',
        }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
            <CircularProgress percent={30} />
          </div>

          <h3 className="font-playfair" style={{ fontSize: '1.5rem', fontWeight: 800, color: '#1A1A1A', marginBottom: '6px' }}>
            Hafal 12 dari 40
          </h3>
          <p style={{ fontSize: '0.8125rem', color: '#6B7280', lineHeight: 1.6, marginBottom: '20px' }}>
            Hebat! Kamu menguasai 3 hadis lebih banyak di banding minggu sebelumnya
          </p>
          <Link href="/">
            <button className="font-playfair" style={{
              backgroundColor: '#1A5C40',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '12px',
              padding: '13px 32px',
              fontSize: '1.125rem',
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

        {/* Quote card */}
        <div style={{
          background: 'linear-gradient(135deg, #1A5C40 0%, #0D3D2A 100%)',
          borderRadius: '16px',
          margin: '0 16px 28px',
          padding: '36px',
          color: '#FFFFFF',
        }}>
          <div style={{
            backgroundColor: '064E3B',
            borderRadius: '9999px',
            display: 'inline-block',
            padding: '2px 10px',
            fontSize: '1rem',
            fontWeight: 700,
            marginBottom: '10px',
          }}>
            99
          </div>
          <p style={{ fontSize: '1rem', fontWeight: 600, lineHeight: 1.6, marginBottom: '8px', fontStyle: 'italic' }}>
            &ldquo;Sebaik-baiknya di antara kalian adalah yang mempelajari Al-Quran dan mengajarkannya&rdquo;
          </p>
          <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.65)' }}>— Sahih al-Bukhari</p>
        </div>

        {/* Stats */}
        {stats.map((s) => (
          <div key={s.label} className="stat-card">
            <div className="stat-icon" style={{ backgroundColor: s.iconBg }}>
              {s.icon}
            </div>
            <div>
              <p style={{ fontSize: '0.9rem', color: '#9CA3AF', fontWeight: 500 }}>{s.label}</p>
              <p style={{ fontSize: '1.25rem', fontWeight: 800, color: '#1A1A1A' }}>{s.value}</p>
            </div>
          </div>
        ))}

        {/* Recent Activity */}
        <h3 className="font-playfair" style={{ fontSize: '1.5rem', fontWeight: 800, color: '#064E3B', padding: '16px 16px 10px' }}>
          Aktivitas Terbaru
        </h3>

        {recentActivity.map((act) => (
          <div key={act.id} style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '14px',
            margin: '0 16px 10px',
            padding: '32px',
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
            border: '1px solid #F0F0EA',
          }}>
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: '12px',
              backgroundColor: '#E8F5EE',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="3" width="20" height="14" rx="2" stroke="#1A5C40" strokeWidth="2"/>
                <path d="M8 21h8M12 17v4" stroke="#1A5C40" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <div>
              <p className="font-playfair" style={{ fontSize: '1.125rem', fontWeight: 700, color: '#1a1a1a' }}>{act.title}</p>
              <p style={{ fontSize: '0.875rem', color: '#9CA3AF' }}>{act.desc}</p>
            </div>
          </div>
        ))}
      </div>
      </main>
    </>
  );
}
