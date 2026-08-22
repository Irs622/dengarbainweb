'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { db, StorageEstimateResult } from '@/lib/db';

function formatStorage(bytes: number): string {
  if (!bytes || bytes <= 0) return '0 KB';
  const gb = bytes / (1024 * 1024 * 1024);
  if (gb >= 1) {
    return `${gb.toFixed(1)} GB`;
  }
  const mb = bytes / (1024 * 1024);
  if (mb >= 1) {
    return `${mb.toFixed(1)} MB`;
  }
  const kb = bytes / 1024;
  return `${Math.round(kb)} KB`;
}

function formatRemaining(bytes: number): string {
  if (!bytes || bytes <= 0) return '0 MB';
  const gb = bytes / (1024 * 1024 * 1024);
  if (gb >= 1) {
    return `${gb.toFixed(1)} GB`;
  }
  const mb = bytes / (1024 * 1024);
  return `${Math.round(mb).toLocaleString('id-ID')} MB`;
}

export default function StoragePage() {
  const [storageData, setStorageData] = useState<StorageEstimateResult>({
    usageBytes: 0,
    quotaBytes: 2 * 1024 * 1024 * 1024, // 2 GB fallback
    cachedAudioCount: 0,
    hasIndexedDB: true,
  });
  const [loading, setLoading] = useState(true);
  const [clearing, setClearing] = useState(false);
  const [feedbackMsg, setFeedbackMsg] = useState<string | null>(null);

  // Load real storage estimates from browser API & Cache Storage
  const loadStorageInfo = async () => {
    try {
      const estimate = await db.getRealStorageEstimate();
      setStorageData(estimate);
    } catch (err) {
      console.warn('Gagal memuat kapasitas penyimpanan:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadStorageInfo();
  }, []);

  const storageUsed = storageData.usageBytes;
  const storageCapacity = storageData.quotaBytes || 2 * 1024 * 1024 * 1024;
  const remainingStorage = Math.max(storageCapacity - storageUsed, 0);
  const storagePercentage = Math.min(
    Math.max((storageUsed / storageCapacity) * 100, storageUsed > 0 ? 0.5 : 0),
    100
  );
  const downloadedFiles = storageData.cachedAudioCount;

  // Real Clear Audio Cache
  const handleClearDownloads = async () => {
    setClearing(true);
    try {
      await db.clearAudioCache();
      await loadStorageInfo();
      setFeedbackMsg('Penyimpanan cache audio berhasil dibersihkan.');
      setTimeout(() => setFeedbackMsg(null), 4000);
    } catch (err) {
      console.error('Gagal membersihkan cache:', err);
      setFeedbackMsg('Terjadi kendala saat membersihkan cache.');
      setTimeout(() => setFeedbackMsg(null), 4000);
    } finally {
      setClearing(false);
    }
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
        className="storage-page-container"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '20px 24px 40px',
          maxWidth: '1200px',
          margin: '0 auto',
          width: '100%',
        }}
      >
        <div
          style={{
            width: '100%',
            maxWidth: '560px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* Page Title */}
          <div
            style={{
              width: '100%',
              marginTop: '16px',
              marginBottom: '24px',
              textAlign: 'center',
            }}
          >
            <h2
              className="font-playfair"
              style={{
                margin: 0,
                fontSize: '1.75rem',
                fontWeight: 800,
                color: '#00543F',
                lineHeight: 1.2,
              }}
            >
              Kelola Penyimpanan
            </h2>
            <p style={{ margin: '6px 0 0', fontSize: '0.875rem', color: '#6B7280' }}>
              Penyimpanan lokal Offline-First (IndexedDB & Cache Storage)
            </p>
          </div>

          {/* Feedback message banner */}
          {feedbackMsg && (
            <div
              role="status"
              aria-live="polite"
              style={{
                width: '100%',
                padding: '12px 16px',
                marginBottom: '18px',
                borderRadius: '16px',
                backgroundColor: '#D1FAE5',
                color: '#065F46',
                fontSize: '0.875rem',
                fontWeight: 600,
                textAlign: 'center',
                boxShadow: '0 2px 8px rgba(6, 95, 70, 0.1)',
              }}
            >
              {feedbackMsg}
            </div>
          )}

          {/* Storage Capacity Card */}
          <div
            style={{
              width: '100%',
              boxSizing: 'border-box',
              backgroundColor: '#ffffff',
              borderRadius: '28px',
              padding: '28px 30px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
              border: '1px solid #E8E8E2',
            }}
          >
            {/* Label */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <p
                style={{
                  margin: 0,
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  letterSpacing: '0.04em',
                  color: '#4A4A4A',
                }}
              >
                KAPASITAS RUANG PENYIMPANAN
              </p>
              {loading && (
                <span style={{ fontSize: '0.75rem', color: '#1A5C40', fontWeight: 600 }}>
                  Memuat kuota...
                </span>
              )}
            </div>

            {/* Storage Numbers */}
            <div
              style={{
                display: 'flex',
                alignItems: 'baseline',
                justifyContent: 'space-between',
                marginTop: '18px',
                gap: '10px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  whiteSpace: 'nowrap',
                }}
              >
                <span
                  className="font-playfair"
                  style={{
                    fontSize: '2rem',
                    fontWeight: 900,
                    color: '#003F2F',
                  }}
                >
                  {formatStorage(storageUsed)}
                </span>

                <span
                  className="font-playfair"
                  style={{
                    fontSize: '1.2rem',
                    color: '#6B7280',
                    marginLeft: '6px',
                  }}
                >
                  / {formatStorage(storageCapacity)}
                </span>
              </div>

              <span
                className="font-playfair"
                style={{
                  fontSize: '1.4rem',
                  fontWeight: 900,
                  color: '#003F2F',
                }}
              >
                {storagePercentage < 1 && storagePercentage > 0
                  ? '< 1%'
                  : `${Math.round(storagePercentage)}%`}
              </span>
            </div>

            {/* Progress Bar */}
            <div
              style={{
                width: '100%',
                height: '10px',
                backgroundColor: '#E6E5E3',
                borderRadius: '999px',
                marginTop: '16px',
                overflow: 'hidden',
              }}
              role="progressbar"
              aria-valuenow={Math.round(storagePercentage)}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label="Persentase ruang penyimpanan yang terpakai"
            >
              <div
                style={{
                  width: `${Math.max(storagePercentage, storageUsed > 0 ? 1 : 0)}%`,
                  height: '100%',
                  backgroundColor: '#1A5C40',
                  borderRadius: '999px',
                  transition: 'width 0.3s ease',
                }}
              />
            </div>

            {/* Storage Details */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: '10px',
                marginTop: '14px',
              }}
            >
              <span
                style={{
                  fontSize: '0.85rem',
                  color: '#4A4A4A',
                }}
              >
                Digunakan: {formatStorage(storageUsed)}
              </span>

              <span
                style={{
                  fontSize: '0.85rem',
                  color: '#4A4A4A',
                }}
              >
                Tersisa: {formatRemaining(remainingStorage)}
              </span>
            </div>
          </div>

          {/* Storage Statistics */}
          <div
            style={{
              width: '100%',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '16px',
              marginTop: '24px',
            }}
          >
            {/* Downloaded Files */}
            <div
              style={{
                boxSizing: 'border-box',
                backgroundColor: '#ffffff',
                borderRadius: '24px',
                padding: '20px',
                boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
                border: '1px solid #E8E8E2',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '12px',
                  backgroundColor: '#C8F1DF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6 3H14L18 7V21H6V3Z"
                    stroke="#1A5C40"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14 3V8H18"
                    stroke="#1A5C40"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 11V17"
                    stroke="#1A5C40"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  <path
                    d="M9.5 14.5L12 17L14.5 14.5"
                    stroke="#1A5C40"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div style={{ marginTop: '24px' }}>
                <p
                  style={{
                    margin: 0,
                    fontSize: '0.8125rem',
                    color: '#6B7280',
                    fontWeight: 600,
                  }}
                >
                  Cache Audio
                </p>

                <p
                  className="font-playfair"
                  style={{
                    margin: '4px 0 0',
                    fontSize: '1.5rem',
                    fontWeight: 900,
                    color: '#003F2F',
                  }}
                >
                  {downloadedFiles} Berkas
                </p>
              </div>
            </div>

            {/* Storage Used */}
            <div
              style={{
                boxSizing: 'border-box',
                backgroundColor: '#ffffff',
                borderRadius: '24px',
                padding: '20px',
                boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
                border: '1px solid #E8E8E2',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '12px',
                  backgroundColor: '#C8F1DF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <ellipse
                    cx="12"
                    cy="6"
                    rx="7"
                    ry="3"
                    stroke="#1A5C40"
                    strokeWidth="1.8"
                  />
                  <path
                    d="M5 6V12C5 13.7 8.1 15 12 15C15.9 15 19 13.7 19 12V6"
                    stroke="#1A5C40"
                    strokeWidth="1.8"
                  />
                  <path
                    d="M5 12V18C5 19.7 8.1 21 12 21C15.9 21 19 19.7 19 18V12"
                    stroke="#1A5C40"
                    strokeWidth="1.8"
                  />
                </svg>
              </div>

              <div style={{ marginTop: '24px' }}>
                <p
                  style={{
                    margin: 0,
                    fontSize: '0.8125rem',
                    color: '#6B7280',
                    fontWeight: 600,
                  }}
                >
                  Penyimpanan Terpakai
                </p>

                <p
                  className="font-playfair"
                  style={{
                    margin: '4px 0 0',
                    fontSize: '1.5rem',
                    fontWeight: 900,
                    color: '#003F2F',
                  }}
                >
                  {formatStorage(storageUsed)}
                </p>
              </div>
            </div>
          </div>

          {/* Clear Downloads Button */}
          <button
            type="button"
            onClick={handleClearDownloads}
            disabled={clearing || (downloadedFiles === 0 && storageUsed < 1024 * 100)}
            style={{
              width: '100%',
              height: '48px',
              marginTop: '32px',
              borderRadius: '28px',
              border: '2px solid #00543F',
              backgroundColor: 'transparent',
              color: '#00543F',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: '0.9rem',
              fontWeight: 700,
              cursor: clearing ? 'wait' : 'pointer',
              opacity: clearing || (downloadedFiles === 0 && storageUsed < 1024 * 100) ? 0.5 : 1,
              transition: 'all 0.15s ease',
            }}
            aria-label="Bersihkan unduhan audio dan cache lokal"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 7H20"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
              <path
                d="M9 7V4H15V7"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 7L7 20H17L18 7"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
              <path
                d="M10 11V17"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
              <path
                d="M14 11V17"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
            {clearing ? 'Membersihkan Cache...' : 'Bersihkan Unduhan Audio'}
          </button>

          {/* Clear Description */}
          <p
            style={{
              maxWidth: '360px',
              margin: '16px auto 0',
              textAlign: 'center',
              fontSize: '0.8rem',
              lineHeight: 1.55,
              color: '#6B7280',
            }}
          >
            Membersihkan cache audio akan mengosongkan berkas audio luring tanpa menghapus catatan progres belajar Anda di IndexedDB.
          </p>

          {/* Offline Illustration */}
          <div
            style={{
              width: '96px',
              height: '96px',
              borderRadius: '50%',
              backgroundColor: '#E8F5EE',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '44px',
            }}
          >
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
              <path
                d="M1 1L23 23"
                stroke="#1A5C40"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
              <path
                d="M9.5 5.2C10.3 4.9 11.1 4.8 12 4.8C16.7 4.8 20.7 7.7 22.2 11.8"
                stroke="#1A5C40"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
              <path
                d="M4.8 7.2C3.2 8.2 2 9.6 1.4 11.2"
                stroke="#1A5C40"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
              <path
                d="M5.5 16.5H17C19.2 16.5 21 14.7 21 12.5C21 10.4 19.4 8.7 17.3 8.5"
                stroke="#1A5C40"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
              <path
                d="M8 16.5C6.1 16.5 4.5 15 4.5 13.1C4.5 11.5 5.6 10.1 7.1 9.7"
                stroke="#1A5C40"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Offline Description */}
          <p
            style={{
              maxWidth: '350px',
              margin: '18px auto 0',
              textAlign: 'center',
              fontSize: '0.8125rem',
              lineHeight: 1.6,
              color: '#4B5563',
            }}
          >
            Aplikasi tetap menyimpan progres dan data hadis di IndexedDB secara luring sehingga Anda dapat belajar kapan saja tanpa koneksi internet.
          </p>
        </div>
      </div>
    </>
  );
}