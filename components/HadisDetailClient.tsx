'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import AudioPlayer from '@/components/AudioPlayer';
import { useProgress } from '@/context/ProgressContext';
import { HadisStatus } from '@/data/hadis';

interface HadisDetailClientProps {
  hadisId: number;
}

export default function HadisDetailClient({ hadisId }: HadisDetailClientProps) {
  const { getHadisById, updateStatus, updateLastOpened, getHadisList } = useProgress();

  const hadis = getHadisById(hadisId);
  const totalHadis = getHadisList().length;

  useEffect(() => {
    if (hadisId) {
      updateLastOpened(hadisId);
    }
  }, [hadisId, updateLastOpened]);

  if (!hadis) {
    return (
      <div style={{ textAlign: 'center', padding: '60px 16px', color: '#9CA3AF' }}>
        Hadis tidak ditemukan
      </div>
    );
  }

  const statusConfig: Record<HadisStatus, { bg: string; text: string; label: string }> = {
    hafal: { bg: '#D1FAE5', text: '#065F46', label: 'Hafal' },
    sedang: { bg: '#FEF3C7', text: '#92400E', label: 'Sedang' },
    belum: { bg: '#F3F4F6', text: '#6B7280', label: 'Belum' },
  };

  const handleStatusChange = (newStatus: HadisStatus) => {
    updateStatus(hadisId, newStatus);
  };

  return (
    <>
      {/* Page Header */}
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
        <Link href="/hadis">
          <button className="back-btn" aria-label="Kembali ke Daftar Hadis">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M19 12H5M12 5l-7 7 7 7" stroke="#1A5C40" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </Link>
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

      {/* Content Container */}
      <div
        style={{
          padding: '16px 20px 48px',
          maxWidth: '900px',
          margin: '0 auto',
          width: '100%',
          boxSizing: 'border-box',
        }}
      >
        {/* Hadis Title */}
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <h2
            className="font-playfair"
            style={{ fontSize: '1.4rem', fontWeight: 900, color: '#004B39', marginBottom: '8px' }}
          >
            Hadis {hadis.id} : {hadis.judul}
          </h2>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.875rem', color: '#555555', fontWeight: 600 }}>
              {hadis.sumber.startsWith('HR') || hadis.sumber.startsWith('Kitab') ? hadis.sumber : `HR. ${hadis.sumber}`}
            </span>
            {hadis.kualitas && (
              <span
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  backgroundColor: '#E8F5EE',
                  color: '#1A5C40',
                  padding: '2px 8px',
                  borderRadius: '6px',
                  border: '1px solid #C8F1DF',
                }}
              >
                Status: {hadis.kualitas}
              </span>
            )}
          </div>
        </div>

        {/* Interactive Status Selector Bar */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '18px',
            padding: '12px 18px',
            marginBottom: '20px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
            border: '1px solid #E8E8E2',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px',
            flexWrap: 'wrap',
          }}
        >
          <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#374151' }}>
            Status Hafalan:
          </span>
          <div style={{ display: 'flex', gap: '6px' }}>
            {(['hafal', 'sedang', 'belum'] as HadisStatus[]).map((stKey) => {
              const active = hadis.status === stKey;
              const cfg = statusConfig[stKey];
              return (
                <button
                  key={stKey}
                  onClick={() => handleStatusChange(stKey)}
                  style={{
                    border: active ? `1.5px solid ${cfg.text}` : '1px solid #E8E8E2',
                    backgroundColor: active ? cfg.bg : '#FAFAF8',
                    color: active ? cfg.text : '#6B7280',
                    fontSize: '0.75rem',
                    fontWeight: active ? 800 : 600,
                    padding: '6px 14px',
                    borderRadius: '9999px',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                  }}
                  aria-pressed={active}
                  aria-label={`Ubah status hafalan ke ${cfg.label}`}
                >
                  {cfg.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Arabic Text Card */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '24px',
            padding: '30px 24px',
            marginBottom: '24px',
            boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
            border: '1px solid #E8E8E2',
            borderLeft: '5px solid #1A5C40',
          }}
        >
          <p className="arabic-text" lang="ar" dir="rtl">
            {hadis.arab}
          </p>
        </div>

        {/* Audio Player */}
        <div style={{ marginBottom: '24px' }}>
          <AudioPlayer duration={hadis.durasiAudio} hadisId={hadis.id} />
        </div>

        {/* Terjemahan Card */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '20px',
            padding: '24px',
            marginBottom: '20px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
            border: '1px solid #E8E8E2',
          }}
        >
          <h3
            className="font-playfair"
            style={{ fontSize: '1.05rem', fontWeight: 800, color: '#004B39', marginBottom: '12px' }}
          >
            Terjemahan Hadis
          </h3>
          <p
            lang="id"
            style={{
              fontSize: '0.925rem',
              color: '#2D3748',
              lineHeight: 1.85,
              marginBottom: '18px',
            }}
          >
            {hadis.terjemahan}
          </p>

          <div
            style={{
              borderTop: '1px solid #F0F0EA',
              paddingTop: '14px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '10px',
            }}
          >
            <div>
              <p style={{ fontSize: '0.75rem', color: '#9CA3AF', margin: '0 0 2px' }}>Perawi Utama</p>
              <p style={{ fontSize: '0.875rem', fontWeight: 700, color: '#1A1A1A', margin: 0 }}>
                {hadis.rawi}
              </p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <p style={{ fontSize: '0.75rem', color: '#9CA3AF', margin: '0 0 2px' }}>Sumber & Kualitas</p>
              <p style={{ fontSize: '0.85rem', fontWeight: 600, color: '#1A5C40', margin: 0 }}>
                {hadis.sumber} {hadis.kualitas ? `(${hadis.kualitas})` : ''}
              </p>
            </div>
          </div>
        </div>

        {/* Urgensi Hadis Section */}
        {hadis.urgensi && hadis.urgensi.length > 0 && (
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '20px',
              padding: '24px',
              marginBottom: '20px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
              border: '1px solid #E8E8E2',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  backgroundColor: '#C8F1DF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="#1A5C40" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3
                className="font-playfair"
                style={{ fontSize: '1.05rem', fontWeight: 800, color: '#004B39', margin: 0 }}
              >
                Urgensi & Faedah Hadis
              </h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {hadis.urgensi.map((point, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px',
                    padding: '10px 14px',
                    backgroundColor: '#FAFAF8',
                    borderRadius: '12px',
                    border: '1px solid #F0F0EA',
                  }}
                >
                  <span
                    style={{
                      width: '22px',
                      height: '22px',
                      borderRadius: '50%',
                      backgroundColor: '#1A5C40',
                      color: '#FFFFFF',
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: '2px',
                    }}
                  >
                    {idx + 1}
                  </span>
                  <p
                    style={{
                      margin: 0,
                      fontSize: '0.875rem',
                      color: '#374151',
                      lineHeight: 1.65,
                    }}
                  >
                    {point.replace(/^\d+\.\s*/, '')}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Konteks / Sebab Turunnya Hadis Section */}
        {hadis.konteks && (
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '20px',
              padding: '24px',
              marginBottom: '20px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
              border: '1px solid #E8E8E2',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  backgroundColor: '#C8F1DF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="#1A5C40" strokeWidth="2"/>
                  <path d="M12 16V12M12 8H12.01" stroke="#1A5C40" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3
                className="font-playfair"
                style={{ fontSize: '1.05rem', fontWeight: 800, color: '#004B39', margin: 0 }}
              >
                Sebab Turunnya Hadis (Konteks)
              </h3>
            </div>
            <p
              style={{
                margin: 0,
                fontSize: '0.9rem',
                color: '#374151',
                lineHeight: 1.75,
              }}
            >
              {hadis.konteks}
            </p>
          </div>
        )}

        {/* Kata-kata Pilihan (Kosakata) Section */}
        {hadis.kataPilihan && hadis.kataPilihan.length > 0 && (
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '20px',
              padding: '24px',
              marginBottom: '28px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
              border: '1px solid #E8E8E2',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  backgroundColor: '#C8F1DF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="#1A5C40" strokeWidth="2"/>
                  <path d="M6.5 2H20V22H6.5A2.5 2.5 0 0 1 4 19.5V4.5A2.5 2.5 0 0 1 6.5 2Z" stroke="#1A5C40" strokeWidth="2"/>
                </svg>
              </div>
              <h3
                className="font-playfair"
                style={{ fontSize: '1.05rem', fontWeight: 800, color: '#004B39', margin: 0 }}
              >
                Kata-kata Pilihan
              </h3>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '12px' }}>
              {hadis.kataPilihan.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: '#FAFAF8',
                    borderRadius: '14px',
                    padding: '14px 16px',
                    border: '1px solid #E8E8E2',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '4px' }}>
                    <span lang="ar" dir="rtl" style={{ fontSize: '1.15rem', fontWeight: 800, color: '#1A5C40', fontFamily: 'serif' }}>
                      {item.arab}
                    </span>
                    <span style={{ fontSize: '0.8rem', fontStyle: 'italic', color: '#6B7280', fontWeight: 600 }}>
                      ({item.transliterasi})
                    </span>
                  </div>
                  <p style={{ margin: 0, fontSize: '0.8125rem', color: '#4B5563', lineHeight: 1.5 }}>
                    {item.arti}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Previous / Next Navigation */}
        <div style={{ display: 'flex', gap: '12px', marginTop: '16px' }}>
          {hadis.id > 1 && (
            <Link
              href={`/hadis/${hadis.id - 1}`}
              style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                backgroundColor: '#FFFFFF',
                border: '1.5px solid #E8E8E2',
                borderRadius: '14px',
                padding: '14px',
                fontSize: '0.875rem',
                fontWeight: 700,
                color: '#4B5563',
                textDecoration: 'none',
                boxShadow: '0 2px 6px rgba(0,0,0,0.04)',
                transition: 'all 0.15s ease',
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M19 12H5M12 5l-7 7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Hadis {hadis.id - 1}
            </Link>
          )}
          {hadis.id < totalHadis && (
            <Link
              href={`/hadis/${hadis.id + 1}`}
              style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                backgroundColor: '#1A5C40',
                borderRadius: '14px',
                padding: '14px',
                fontSize: '0.875rem',
                fontWeight: 700,
                color: '#FFFFFF',
                textDecoration: 'none',
                boxShadow: '0 2px 6px rgba(26,92,64,0.2)',
                transition: 'all 0.15s ease',
              }}
            >
              Hadis {hadis.id + 1}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
