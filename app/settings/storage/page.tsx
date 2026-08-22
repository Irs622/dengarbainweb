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
  const [downloading, setDownloading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState<{
    current: number;
    total: number;
    percent: number;
    currentHadisId: number;
  }>({
    current: 0,
    total: 42,
    percent: 0,
    currentHadisId: 1,
  });
  const [feedbackMsg, setFeedbackMsg] = useState<string | null>(null);
  const [announcement, setAnnouncement] = useState<string>('');

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
  const isAllAudioCached = downloadedFiles >= 42;

  // 1-Click Bulk Offline Audio Download
  const handleBulkDownloadAudio = async () => {
    if (downloading) return;
    setDownloading(true);
    setAnnouncement('Memulai pengunduhan 42 berkas audio hadis...');

    try {
      const result = await db.cacheAllAudioFiles((curr, total, hadisId) => {
        const pct = Math.round((curr / total) * 100);
        setDownloadProgress({
          current: curr,
          total,
          percent: pct,
          currentHadisId: hadisId,
        });
      });

      await loadStorageInfo();

      if (result.success >= 42) {
        setFeedbackMsg('MasyaAllah! Seluruh 42 audio hadis berhasil disimpan ke memori luring.');
        setAnnouncement('Semua 42 audio hadis berhasil tersimpan luring.');
      } else {
        setFeedbackMsg(`Berhasil mengunduh ${result.success} dari 42 audio hadis ke memori.`);
      }
      setTimeout(() => setFeedbackMsg(null), 5000);
    } catch (err) {
      console.error('Gagal mengunduh audio:', err);
      setFeedbackMsg('Terjadi kendala saat mengunduh berkas audio.');
      setTimeout(() => setFeedbackMsg(null), 4000);
    } finally {
      setDownloading(false);
    }
  };

  // Real Clear Audio Cache
  const handleClearDownloads = async () => {
    setClearing(true);
    setAnnouncement('Membersihkan cache audio luring...');
    try {
      await db.clearAudioCache();
      await loadStorageInfo();
      setFeedbackMsg('Penyimpanan cache audio berhasil dibersihkan.');
      setAnnouncement('Cache audio berhasil dibersihkan.');
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

      {/* Screen Reader Live Announcement */}
      {announcement && (
        <div className="sr-only" role="status" aria-live="polite">
          {announcement}
        </div>
      )}

      <div
        className="storage-page-container"
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

          {/* Storage Statistics Cards */}
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
                  {downloadedFiles} / 42 Berkas
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

          {/* BULK OFFLINE AUDIO BUNDLE CARD */}
          <div
            style={{
              width: '100%',
              boxSizing: 'border-box',
              backgroundColor: '#FFFFFF',
              borderRadius: '24px',
              padding: '24px',
              marginTop: '24px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
              border: '1.5px solid #C8F1DF',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  backgroundColor: '#1A5C40',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M21 15V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V15"
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
                </svg>
              </div>

              <div>
                <h3
                  className="font-playfair"
                  style={{
                    margin: 0,
                    fontSize: '1.15rem',
                    fontWeight: 800,
                    color: '#004B39',
                  }}
                >
                  Paket Audio Luring (Offline)
                </h3>
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: isAllAudioCached ? '#065F46' : '#92400E',
                  }}
                >
                  {isAllAudioCached
                    ? '✓ 42/42 Audio Hadis Tersedia Lengkap Luring'
                    : `Tersimpan ${downloadedFiles} dari 42 Audio`}
                </span>
              </div>
            </div>

            <p
              style={{
                margin: '0 0 16px',
                fontSize: '0.85rem',
                lineHeight: 1.6,
                color: '#555555',
              }}
            >
              Unduh seluruh 42 rekaman audio hadis ke memori lokal peramban agar Anda dapat mendengarkan dan menghafal hadis kapan saja tanpa koneksi internet dan tanpa memakai kuota data.
            </p>

            {/* Live Download Progress Bar */}
            {downloading && (
              <div style={{ marginBottom: '16px' }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '6px',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    color: '#1A5C40',
                  }}
                >
                  <span>Mengunduh Hadis #{downloadProgress.currentHadisId}...</span>
                  <span>{downloadProgress.current} / {downloadProgress.total} ({downloadProgress.percent}%)</span>
                </div>
                <div
                  style={{
                    width: '100%',
                    height: '8px',
                    backgroundColor: '#E8F5EE',
                    borderRadius: '999px',
                    overflow: 'hidden',
                  }}
                  role="progressbar"
                  aria-valuenow={downloadProgress.percent}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    style={{
                      width: `${downloadProgress.percent}%`,
                      height: '100%',
                      backgroundColor: '#1A5C40',
                      borderRadius: '999px',
                      transition: 'width 0.15s ease',
                    }}
                  />
                </div>
              </div>
            )}

            {/* Action Button */}
            <button
              type="button"
              onClick={handleBulkDownloadAudio}
              disabled={downloading}
              style={{
                width: '100%',
                height: '48px',
                borderRadius: '16px',
                backgroundColor: isAllAudioCached ? '#065F46' : '#1A5C40',
                color: '#FFFFFF',
                border: 'none',
                fontSize: '0.925rem',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                cursor: downloading ? 'wait' : 'pointer',
                boxShadow: '0 4px 14px rgba(26, 92, 64, 0.25)',
                transition: 'all 0.15s ease',
              }}
              aria-label={
                isAllAudioCached
                  ? 'Perbarui unduhan semua audio hadis'
                  : 'Unduh seluruh 42 audio hadis untuk pemakaian luring'
              }
            >
              {downloading ? (
                <>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ animation: 'spin 1s linear infinite' }}>
                    <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="3" strokeDasharray="32" strokeLinecap="round" />
                  </svg>
                  <span>Mengunduh Audio ({downloadProgress.percent}%)...</span>
                </>
              ) : isAllAudioCached ? (
                <>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>Semua 42 Audio Sudah Tersimpan (Perbarui)</span>
                </>
              ) : (
                <>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M21 15V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M7 10L12 15L17 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 15V3" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  <span>Unduh Semua 42 Audio (Mode Luring)</span>
                </>
              )}
            </button>
          </div>

          {/* Clear Downloads Button */}
          <button
            type="button"
            onClick={handleClearDownloads}
            disabled={clearing || downloading || (downloadedFiles === 0 && storageUsed < 1024 * 100)}
            style={{
              width: '100%',
              height: '48px',
              marginTop: '28px',
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
              opacity: clearing || downloading || (downloadedFiles === 0 && storageUsed < 1024 * 100) ? 0.5 : 1,
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
                strokeLinecap="round"
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
              margin: '14px auto 0',
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
              marginTop: '40px',
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