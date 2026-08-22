'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePWAInstall } from '@/context/PWAInstallContext';

export default function DownloadPage() {
  const { isInstallable, isInstalled, isIOS, promptInstall } = usePWAInstall();
  const [feedback, setFeedback] = useState<string | null>(null);
  const [showIOSModal, setShowIOSModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleInstallClick = async () => {
    if (isInstalled) {
      setFeedback('Aplikasi DengarBain sudah terpasang di perangkat Anda.');
      return;
    }

    if (isIOS) {
      setShowIOSModal(true);
      return;
    }

    if (isInstallable) {
      setLoading(true);
      try {
        const result = await promptInstall();
        if (result === 'accepted') {
          setFeedback('Aplikasi berhasil ditambahkan ke Layar Utama!');
        } else if (result === 'dismissed') {
          setFeedback('Pemasangan aplikasi dibatalkan.');
        }
      } catch (err) {
        console.warn('Gagal memicu install prompt:', err);
      } finally {
        setLoading(false);
      }
      return;
    }

    // If browser does not support or event hasn't fired yet
    setFeedback('Untuk memasang: buka menu browser Anda (titik tiga) lalu pilih "Instal Aplikasi" atau "Tambahkan ke Layar Utama".');
  };

  return (
    <>
      {/* App Header */}
      <header
        style={{
          padding: '10px 16px',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          backgroundColor: '#FFFFFF',
          borderBottom: '1px solid #E8E8E2',
        }}
      >
        {/* Back Button */}
        <Link href="/settings">
          <button className="back-btn" aria-label="Kembali ke Pengaturan">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M19 12H5M12 5l-7 7 7 7"
                stroke="#1A5C40"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </Link>

        {/* Center Title */}
        <h1
          className="font-playfair"
          style={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            margin: 0,
            fontSize: '1.75rem',
            fontWeight: 900,
            color: '#1A5C40',
            lineHeight: 1,
            whiteSpace: 'nowrap',
          }}
        >
          DengarBain
        </h1>
      </header>

      <div
        className="download-page-container"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '20px 24px 48px',
          maxWidth: '1200px',
          margin: '0 auto',
          width: '100%',
          boxSizing: 'border-box',
        }}
      >
        <div
          style={{
            width: '100%',
            maxWidth: '520px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* Intro */}
          <div
            style={{
              width: '100%',
              textAlign: 'center',
              marginTop: '16px',
              marginBottom: '28px',
            }}
          >
            <h2
              className="font-playfair"
              style={{
                margin: 0,
                fontSize: '1.85rem',
                fontWeight: 900,
                color: '#00543F',
                lineHeight: 1.3,
              }}
            >
              Pasang DengarBain
            </h2>

            <p
              style={{
                margin: '12px auto 0',
                maxWidth: '360px',
                fontSize: '0.875rem',
                lineHeight: 1.65,
                color: '#555555',
              }}
            >
              Tambahkan aplikasi ke layar utama perangkat Anda untuk mendengarkan dan menghafal hadis secara luring (Offline-First) dan terfokus.
            </p>
          </div>

          {/* Feedback banner */}
          {feedback && (
            <div
              role="status"
              aria-live="polite"
              style={{
                width: '100%',
                padding: '12px 16px',
                marginBottom: '20px',
                borderRadius: '16px',
                backgroundColor: '#D1FAE5',
                color: '#065F46',
                fontSize: '0.875rem',
                fontWeight: 600,
                textAlign: 'center',
                boxShadow: '0 2px 8px rgba(6, 95, 70, 0.1)',
              }}
            >
              {feedback}
            </div>
          )}

          {/* Feature Cards */}
          <div
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
          >
            {/* Faster Launch */}
            <div
              style={{
                width: '100%',
                boxSizing: 'border-box',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                backgroundColor: '#FFFFFF',
                borderRadius: '24px',
                padding: '22px 20px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '16px',
                border: '1px solid #E8E8E2',
              }}
            >
              {/* Icon */}
              <div
                style={{
                  flexShrink: 0,
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  backgroundColor: '#C8F1DF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M13 2L4 14H11L10 22L20 9H13L13 2Z"
                    stroke="#1A5C40"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Text */}
              <div>
                <h3
                  className="font-playfair"
                  style={{
                    margin: 0,
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: '#004B39',
                  }}
                >
                  Akses Cepat & Mandiri
                </h3>

                <p
                  style={{
                    margin: '6px 0 0',
                    fontSize: '0.85rem',
                    lineHeight: 1.5,
                    color: '#555555',
                  }}
                >
                  Buka hadis secara instan langsung dari ikon di layar beranda tanpa perlu mengetik alamat peramban.
                </p>
              </div>
            </div>

            {/* Offline Access */}
            <div
              style={{
                width: '100%',
                boxSizing: 'border-box',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                backgroundColor: '#FFFFFF',
                borderRadius: '24px',
                padding: '22px 20px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '16px',
                border: '1px solid #E8E8E2',
              }}
            >
              {/* Icon */}
              <div
                style={{
                  flexShrink: 0,
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  backgroundColor: '#C8F1DF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M1 1L23 23"
                    stroke="#1A5C40"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  <path
                    d="M9.5 5.2C10.3 4.9 11.1 4.8 12 4.8C16.7 4.8 20.7 7.7 22.2 11.8"
                    stroke="#1A5C40"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  <path
                    d="M4.8 7.2C3.2 8.2 2 9.6 1.4 11.2"
                    stroke="#1A5C40"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  <path
                    d="M7.2 10.1C6.3 10.7 5.6 11.5 5.2 12.5"
                    stroke="#1A5C40"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  <path
                    d="M10.5 14.2C10.9 13.8 11.4 13.6 12 13.6C13.3 13.6 14.4 14.6 14.4 15.9"
                    stroke="#1A5C40"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              {/* Text */}
              <div>
                <h3
                  className="font-playfair"
                  style={{
                    margin: 0,
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: '#004B39',
                  }}
                >
                  Dukungan Luring 100% (Offline)
                </h3>

                <p
                  style={{
                    margin: '6px 0 0',
                    fontSize: '0.85rem',
                    lineHeight: 1.5,
                    color: '#555555',
                  }}
                >
                  Seluruh 42 teks matan, terjemahan, dan progres hafalan tersimpan di memori perangkat bahkan saat kuota habis.
                </p>
              </div>
            </div>
          </div>

          {/* iOS Safari Guide Section (if toggled or on iOS) */}
          {(showIOSModal || isIOS) && (
            <div
              style={{
                width: '100%',
                boxSizing: 'border-box',
                backgroundColor: '#F0F9F5',
                borderRadius: '20px',
                padding: '20px',
                marginTop: '20px',
                border: '1.5px solid #C8F1DF',
              }}
            >
              <h4 style={{ margin: '0 0 10px', fontSize: '0.925rem', fontWeight: 800, color: '#004B39' }}>
                Panduan Pasang di iOS / Safari:
              </h4>
              <ol style={{ margin: 0, paddingLeft: '20px', fontSize: '0.85rem', color: '#374151', lineHeight: 1.7 }}>
                <li>
                  Ketuk tombol <strong>Bagikan (Share)</strong> di bilah bawah peramban Safari (ikon kotak berpanah atas).
                </li>
                <li>
                  Gulir ke bawah dan pilih <strong>&quot;Tambahkan ke Layar Utama&quot; (Add to Home Screen)</strong>.
                </li>
                <li>
                  Ketuk <strong>&quot;Tambah&quot; (Add)</strong> di sudut kanan atas untuk menyelesaikan.
                </li>
              </ol>
            </div>
          )}

          {/* Native Install Action Button */}
          <button
            type="button"
            onClick={handleInstallClick}
            disabled={loading}
            style={{
              width: '100%',
              height: '54px',
              marginTop: '36px',
              borderRadius: '28px',
              backgroundColor: isInstalled ? '#065F46' : '#003F2F',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: '1rem',
              fontWeight: 700,
              boxShadow: '0 4px 14px rgba(0, 63, 47, 0.25)',
              border: 'none',
              cursor: loading ? 'wait' : 'pointer',
              transition: 'all 0.15s ease',
            }}
            aria-label={
              isInstalled
                ? 'Aplikasi DengarBain sudah terpasang'
                : isIOS
                ? 'Buka petunjuk pasang DengarBain untuk iOS'
                : 'Pasang aplikasi DengarBain ke layar utama'
            }
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              {isInstalled ? (
                <path
                  d="M20 6L9 17L4 12"
                  stroke="white"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              ) : (
                <>
                  <path
                    d="M21 15V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V15"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7 10L12 15L17 10"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 15V3"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </>
              )}
            </svg>
            {isInstalled
              ? 'Aplikasi Sudah Terpasang ✓'
              : loading
              ? 'Mempersiapkan...'
              : isIOS
              ? 'Petunjuk Pasang di iPhone/iPad'
              : 'Pasang DengarBain (Install App)'}
          </button>

          {/* Later Link */}
          <Link
            href="/settings"
            style={{
              marginTop: '20px',
              color: '#6B7280',
              fontSize: '0.875rem',
              fontWeight: 600,
              textDecoration: 'none',
              padding: '6px 12px',
            }}
          >
            Nanti saja, kembali ke Pengaturan
          </Link>
        </div>
      </div>
    </>
  );
}