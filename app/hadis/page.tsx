'use client';

import { useState, useMemo } from 'react';
import HadisCard from '@/components/HadisCard';
import ContinueCard from '@/components/ContinueCard';
import AppHeader from '@/components/AppHeader';
import { useProgress } from '@/context/ProgressContext';
import { HadisStatus } from '@/data/hadis';

type FilterTab = 'all' | HadisStatus;

export default function HadisListPage() {
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState<FilterTab>('all');
  const { getHadisList, getLastOpenedHadis } = useProgress();

  const hadisList = getHadisList();
  const lastOpened = getLastOpenedHadis();

  // Status counts for badge tabs
  const counts = useMemo(() => {
    const total = hadisList.length;
    const hafal = hadisList.filter((h) => h.status === 'hafal').length;
    const sedang = hadisList.filter((h) => h.status === 'sedang').length;
    const belum = hadisList.filter((h) => h.status === 'belum').length;
    return { all: total, hafal, sedang, belum };
  }, [hadisList]);

  // Smart Multi-Parameter Search & Status Filter
  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();

    return hadisList.filter((h) => {
      // 1. Status Filter
      if (activeTab !== 'all' && h.status !== activeTab) {
        return false;
      }

      // 2. Query Search
      if (!q) return true;

      // Match Hadis ID (e.g. "1", "40", "hadis 1", "#1")
      const idMatch =
        String(h.id) === q ||
        `hadis ${h.id}`.includes(q) ||
        `#${h.id}`.includes(q);

      // Match Title
      const titleMatch = h.judul.toLowerCase().includes(q);

      // Match Rawi / Perawi Utama
      const rawiMatch = h.rawi.toLowerCase().includes(q);

      // Match Sumber / Kitab Riwayat
      const sumberMatch = h.sumber.toLowerCase().includes(q);

      // Match Transliterasi
      const translitMatch = h.transliterasi?.toLowerCase().includes(q);

      // Match Terjemahan
      const terjemahanMatch = h.terjemahan.toLowerCase().includes(q);

      // Match Kata-kata Pilihan
      const kataPilihanMatch = h.kataPilihan?.some(
        (k) =>
          k.transliterasi.toLowerCase().includes(q) ||
          k.arti.toLowerCase().includes(q) ||
          k.arab.includes(q)
      );

      // Match Arabic text
      const arabMatch = h.arab.includes(q);

      return (
        idMatch ||
        titleMatch ||
        rawiMatch ||
        sumberMatch ||
        translitMatch ||
        terjemahanMatch ||
        kataPilihanMatch ||
        arabMatch
      );
    });
  }, [hadisList, search, activeTab]);

  const tabs: { key: FilterTab; label: string; count: number }[] = [
    { key: 'all', label: 'Semua', count: counts.all },
    { key: 'hafal', label: 'Hafal', count: counts.hafal },
    { key: 'sedang', label: 'Sedang', count: counts.sedang },
    { key: 'belum', label: 'Belum', count: counts.belum },
  ];

  return (
    <>
      {/* Integrated App Header with Search */}
      <AppHeader
        showSearch={true}
        searchQuery={search}
        onSearchChange={setSearch}
        resultCount={filtered.length}
      />

      {/* Wrapper untuk content */}
      <div
        className="hadis-page-container"
        style={{
          paddingTop: 16,
          paddingBottom: 32,
          maxWidth: '1200px',
          margin: '0 auto',
          width: '100%',
        }}
      >
        {/* Continue Card (hidden when searching or filtering) */}
        {!search && activeTab === 'all' && (
          <>
            <div style={{ padding: '0 16px 4px' }}>
              <h2
                className="font-playfair"
                style={{ fontSize: '1.5rem', fontWeight: 800, color: '#064E3B', marginBottom: '12px' }}
              >
                Lanjut Belajar
              </h2>
            </div>
            <ContinueCard hadis={lastOpened} />
          </>
        )}

        {/* Section Title & Status Filter Tabs */}
        <div style={{ padding: '8px 16px 14px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px', flexWrap: 'wrap', gap: '8px' }}>
            <h2
              className="font-playfair"
              style={{ fontSize: '1.4rem', fontWeight: 800, color: '#064E3B', margin: 0 }}
            >
              {search
                ? `Hasil Pencarian "${search}"`
                : activeTab === 'all'
                ? 'Daftar 42 Hadis Arbain'
                : activeTab === 'hafal'
                ? 'Hadis yang Sudah Hafal'
                : activeTab === 'sedang'
                ? 'Hadis Sedang Dipelajari'
                : 'Hadis Belum Dihafal'}
            </h2>
            <span style={{ fontSize: '0.8125rem', color: '#6B7280', fontWeight: 600 }}>
              {filtered.length} Hadis
            </span>
          </div>

          {/* Status Filter Tab Pills */}
          <div
            role="tablist"
            aria-label="Filter status hafalan hadis"
            style={{
              display: 'flex',
              gap: '8px',
              overflowX: 'auto',
              paddingBottom: '4px',
              scrollbarWidth: 'none',
            }}
          >
            {tabs.map((tab) => {
              const active = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  role="tab"
                  aria-selected={active}
                  onClick={() => setActiveTab(tab.key)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '8px 14px',
                    borderRadius: '9999px',
                    border: active ? '1.5px solid #1A5C40' : '1px solid #E8E8E2',
                    backgroundColor: active ? '#1A5C40' : '#FFFFFF',
                    color: active ? '#FFFFFF' : '#4B5563',
                    fontSize: '0.8125rem',
                    fontWeight: active ? 700 : 600,
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    boxShadow: active ? '0 2px 8px rgba(26,92,64,0.22)' : '0 1px 4px rgba(0,0,0,0.03)',
                    transition: 'all 0.15s ease',
                  }}
                >
                  <span>{tab.label}</span>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      padding: '2px 7px',
                      borderRadius: '9999px',
                      backgroundColor: active ? 'rgba(255,255,255,0.25)' : '#F3F4F6',
                      color: active ? '#FFFFFF' : '#6B7280',
                    }}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Hadis cards list */}
        {filtered.length > 0 ? (
          <div>
            {filtered.map((hadis) => (
              <div key={hadis.id} className="fade-in">
                <HadisCard hadis={hadis} />
              </div>
            ))}
            <p
              style={{
                textAlign: 'center',
                fontSize: '0.8125rem',
                color: '#9CA3AF',
                padding: '20px 16px',
                fontStyle: 'italic',
              }}
            >
              Menampilkan {filtered.length} dari {counts.all} Hadis Arbain
            </p>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '48px 16px', color: '#9CA3AF' }}>
            <svg
              width="52"
              height="52"
              viewBox="0 0 24 24"
              fill="none"
              style={{ margin: '0 auto 14px', display: 'block', opacity: 0.45 }}
            >
              <circle cx="11" cy="11" r="8" stroke="#1A5C40" strokeWidth="2" />
              <path d="m21 21-4.35-4.35" stroke="#1A5C40" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#374151', margin: '0 0 6px' }}>
              Hadis Tidak Ditemukan
            </h3>
            <p style={{ fontSize: '0.875rem', color: '#6B7280', maxWidth: '300px', margin: '0 auto' }}>
              Tidak ada hadis yang cocok dengan kata kunci atau filter status yang Anda pilih.
            </p>
            {(search || activeTab !== 'all') && (
              <button
                type="button"
                onClick={() => {
                  setSearch('');
                  setActiveTab('all');
                }}
                style={{
                  marginTop: '16px',
                  padding: '8px 18px',
                  borderRadius: '20px',
                  backgroundColor: '#E8F5EE',
                  border: '1px solid #C8F1DF',
                  color: '#1A5C40',
                  fontSize: '0.8125rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                }}
              >
                Reset Pencarian & Filter
              </button>
            )}
          </div>
        )}
      </div>
    </>
  );
}
