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
      <div className="page-header">
        <Link href="/hadis">
          <button className="back-btn" aria-label="Kembali ke Daftar Hadis">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M19 12H5M12 5l-7 7 7 7" stroke="#1A5C40" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </Link>
        <h1 className="page-header-title font-playfair">DengarBain</h1>
        <div style={{ width: '36px' }} />
      </div>

      {/* Content Container */}
      <div style={{ padding: '12px 16px 36px' }}>
        
        {/* Hadis Title */}
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#1A1A1A', marginBottom: '6px' }}>
            Hadis {hadis.id} : {hadis.judul}
          </h2>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
            <span style={{ fontSize: '0.875rem', color: '#6B7280', fontWeight: 500 }}>
              {hadis.judul} • {hadis.sumber.startsWith('HR') ? hadis.sumber : `HR. ${hadis.sumber}`}
            </span>
          </div>
        </div>

        {/* Interactive Status Selector Bar */}
        <div style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '16px',
          padding: '12px 16px',
          marginBottom: '20px',
          boxShadow: '0 1px 6px rgba(0,0,0,0.05)',
          border: '1px solid #F0F0EA',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <span style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#4B5563' }}>
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
                    padding: '6px 12px',
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
        <div style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '20px',
          padding: '28px 24px',
          marginBottom: '24px',
          boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
          borderLeft: '4px solid #1A5C40',
          border: '1px solid #E8E8E2',
          borderLeftWidth: '4px',
          borderLeftColor: '#1A5C40',
        }}>
          <p className="arabic-text">
            {hadis.arab}
          </p>
        </div>

        {/* Transliterasi */}
        {hadis.transliterasi && hadis.transliterasi !== '-' && (
          <div style={{ marginBottom: '20px' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#1A1A1A', marginBottom: '8px' }}>
              Transliterasi
            </h3>
            <p style={{
              fontSize: '0.9rem',
              color: '#3D3D3D',
              fontStyle: 'italic',
              lineHeight: 1.8,
            }}>
              {hadis.transliterasi}
            </p>
          </div>
        )}

        {/* Audio Player */}
        <AudioPlayer duration={hadis.durasiAudio} hadisId={hadis.id} />

        {/* Terjemahan Card */}
        <div style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '16px',
          padding: '20px',
          marginTop: '20px',
          boxShadow: '0 1px 6px rgba(0,0,0,0.05)',
          border: '1px solid #F0F0EA',
        }}>
          <h3 style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#1A1A1A', marginBottom: '10px' }}>
            Terjemahan
          </h3>
          <p style={{ fontSize: '0.875rem', color: '#3D3D3D', lineHeight: 1.8, marginBottom: '16px' }}>
            {hadis.terjemahan}
          </p>
          <div style={{
            borderTop: '1px solid #F0F0EA',
            paddingTop: '14px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
            <div>
              <p style={{ fontSize: '0.75rem', color: '#9CA3AF', marginBottom: '2px' }}>Rawi</p>
              <p style={{ fontSize: '0.875rem', fontWeight: 600, color: '#1A1A1A' }}>{hadis.rawi}</p>
            </div>
            <span style={{
              backgroundColor: statusConfig[hadis.status].bg,
              color: statusConfig[hadis.status].text,
              fontSize: '0.75rem',
              fontWeight: 800,
              padding: '4px 12px',
              borderRadius: '9999px',
            }}>
              {statusConfig[hadis.status].label}
            </span>
          </div>
        </div>

        {/* Previous / Next Navigation */}
        <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
          {hadis.id > 1 && (
            <Link href={`/hadis/${hadis.id - 1}`} style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              backgroundColor: '#FFFFFF',
              border: '1.5px solid #E8E8E2',
              borderRadius: '12px',
              padding: '12px',
              fontSize: '0.8125rem',
              fontWeight: 600,
              color: '#6B7280',
              textDecoration: 'none',
              transition: 'all 0.15s',
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M19 12H5M12 5l-7 7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Hadis {hadis.id - 1}
            </Link>
          )}
          {hadis.id < totalHadis && (
            <Link href={`/hadis/${hadis.id + 1}`} style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              backgroundColor: '#1A5C40',
              borderRadius: '12px',
              padding: '12px',
              fontSize: '0.8125rem',
              fontWeight: 600,
              color: '#FFFFFF',
              textDecoration: 'none',
              transition: 'all 0.15s',
            }}>
              Hadis {hadis.id + 1}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
