'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const settingsSections = [
  {
    label: 'DUKUNGAN',
    items: [
      {
        id: 'bantuan',
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="#1A5C40" strokeWidth="2"/>
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3M12 17h.01" stroke="#1A5C40" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ),
        iconBg: '#E8F5EE',
        title: 'Bantuan',
        subtitle: 'Panduan dan Tutorial',
        danger: false,
      },
    ],
  },
  {
    label: 'PENYIMPANAN',
    items: [
      {
        id: 'penyimpanan-lokal',
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" stroke="#1A5C40" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" stroke="#1A5C40" strokeWidth="2" strokeLinejoin="round"/>
          </svg>
        ),
        iconBg: '#E8F5EE',
        title: 'Penyimpanan Lokal',
        subtitle: 'Kelola 1.2 GB unduhan Audio',
        danger: false,
      },
      {
        id: 'unduh-aplikasi',
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <rect x="5" y="2" width="14" height="20" rx="2" stroke="#1A5C40" strokeWidth="2"/>
            <path d="M12 18h.01" stroke="#1A5C40" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        ),
        iconBg: '#E8F5EE',
        title: 'Unduh Aplikasi',
        subtitle: 'Tambahkan ke beranda untuk akses lebih cepat',
        danger: false,
      },
    ],
  },
  {
    label: 'ABOUT',
    items: [
      {
        id: 'tentang',
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="#1A5C40" strokeWidth="2"/>
            <path d="M12 16v-4M12 8h.01" stroke="#1A5C40" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        ),
        iconBg: '#E8F5EE',
        title: 'Tentang DengarBain',
        subtitle: 'Version 1.0.0',
        danger: false,
      },
    ],
  },
  {
    label: 'ZONA BAHAYA',
    labelColor: '#DC2626',
    items: [
      {
        id: 'hapus-progres',
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <polyline points="3 6 5 6 21 6" stroke="#DC2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" stroke="#DC2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ),
        iconBg: '#FEE2E2',
        title: 'Hapus Semua Progres',
        subtitle: 'Reset semua data belajar',
        danger: true,
      },
    ],
  },
];

export default function SettingsPage() {
  const [showDangerConfirm, setShowDangerConfirm] = useState(false);

  const router = useRouter();

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

      <main
        style={{
          paddingTop: 20,
        }}
      >

        <div style={{ paddingTop: '8px' }}>
        {settingsSections.map((section) => (
          <div key={section.label}>
            <p className="settings-section-label" style={{ color: section.labelColor || '#9CA3AF' }}>
              {section.label}
            </p>
            <div className="settings-section">
              {section.items.map((item, idx) => (
                <button
                  key={item.id}
                  className="settings-item"
                  style={{
                    width: '100%',
                    border: 'none',
                    fontFamily: 'inherit',
                    borderBottom: idx < section.items.length - 1 ? '1px solid #F0F0EA' : 'none',
                  }}
                  onClick={() => {
                    switch (item.id) {
                      case 'bantuan':
                        router.push('/settings/help');
                        break;

                      case 'penyimpanan-lokal':
                        router.push('/settings/storage');
                        break;

                      case 'unduh-aplikasi':
                        router.push('/settings/download');
                        break;

                      case 'tentang':
                        router.push('/settings/about');
                        break;

                      case 'hapus-progres':
                        setShowDangerConfirm(true);
                        break;
                    }
                  }}
                >
                  {/* Icon */}
                  <div style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '11px',
                    backgroundColor: item.iconBg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    {item.icon}
                  </div>
                  {/* Text */}
                  <div style={{ flex: 1, textAlign: 'left' }}>
                    <p style={{
                      fontSize: '0.9375rem',
                      fontWeight: 600,
                      color: item.danger ? '#DC2626' : '#1A1A1A',
                      marginBottom: '2px',
                    }}>
                      {item.title}
                    </p>
                    <p style={{ fontSize: '0.75rem', color: '#9CA3AF' }}>
                      {item.subtitle}
                    </p>
                  </div>
                  {/* Chevron */}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M9 18l6-6-6-6" stroke="#D1D5DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* App version footer */}
      <div style={{ textAlign: 'center', padding: '24px 16px', color: '#b8bcc2' }}>
        <p style={{ fontSize: '0.75rem' }}>DengarBain v1.0.0</p>
        <p style={{ fontSize: '0.6875rem', marginTop: '4px' }}>© 2025 DengarBain. Semua hak dilindungi.</p>
      </div>

      {/* Danger confirm modal */}
      {showDangerConfirm && (
        <div style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
          zIndex: 999,
          padding: '16px',
        }}
          onClick={() => setShowDangerConfirm(false)}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '20px',
              padding: '24px',
              width: '100%',
              maxWidth: '400px',
              textAlign: 'center',
            }}
          >
            <div style={{
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              backgroundColor: '#FEE2E2',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 16px',
            }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path d="M12 9v4M12 17h.01" stroke="#DC2626" strokeWidth="2" strokeLinecap="round"/>
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" stroke="#DC2626" strokeWidth="2" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 style={{ fontSize: '1rem', fontWeight: 800, marginBottom: '8px', color: '#1A1A1A' }}>Hapus Semua Progres?</h3>
            <p style={{ fontSize: '0.8125rem', color: '#6B7280', lineHeight: 1.6, marginBottom: '20px' }}>
              Semua data belajar, streak, dan pencapaian akan dihapus permanen. Tindakan ini tidak dapat diurungkan.
            </p>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button
                onClick={() => setShowDangerConfirm(false)}
                style={{
                  flex: 1, padding: '12px', borderRadius: '12px',
                  border: '1.5px solid #E8E8E2', background: 'none',
                  fontFamily: 'inherit', fontSize: '0.9rem', fontWeight: 600,
                  color: '#6B7280', cursor: 'pointer',
                }}
              >Batal</button>
              <button
                onClick={() => setShowDangerConfirm(false)}
                style={{
                  flex: 1, padding: '12px', borderRadius: '12px',
                  border: 'none', background: '#DC2626',
                  fontFamily: 'inherit', fontSize: '0.9rem', fontWeight: 700,
                  color: 'white', cursor: 'pointer',
                }}
              >Hapus</button>
            </div>
          </div>
        </div>
      )}
      
      </main>
    </>
  );
}
