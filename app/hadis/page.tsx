'use client';

import { useState } from 'react';
import HadisCard from '@/components/HadisCard';
import ContinueCard from '@/components/ContinueCard';
import AppHeader from '@/components/AppHeader';
import { useProgress } from '@/context/ProgressContext';

export default function HadisListPage() {
  const [search, setSearch] = useState('');
  const { getHadisList, getLastOpenedHadis } = useProgress();

  const hadisList = getHadisList();
  const lastOpened = getLastOpenedHadis();

  const filtered = hadisList.filter(h =>
    h.judul.toLowerCase().includes(search.toLowerCase()) ||
    String(h.id).includes(search)
  );

  return (
    <>
      {/* Integrated App Header with Search */}
      <AppHeader
        showSearch={true}
        searchQuery={search}
        onSearchChange={setSearch}
        resultCount={filtered.length}
      />

      {/* Wrapper untuk main content */}
      <main
        style={{
          paddingTop: 16,
          paddingBottom: 32,
        }}
      >
        {/* Continue Card (hidden when searching) */}
        {!search && (
          <>
            <div style={{ padding: '0 16px 4px' }}>
              <h2 className="font-playfair" style={{ fontSize: '1.5rem', fontWeight: 800, color: '#064E3B', marginBottom: '12px' }}>
                Lanjut Belajar
              </h2>
            </div>
            <ContinueCard hadis={lastOpened} />
          </>
        )}

        {/* Hadis List */}
        <div className="section-header">
          <h2 className="font-playfair" style={{ fontSize: '1.5rem', fontWeight: 800, color: '#064E3B', marginBottom: '12px' }}>
            {search ? `Hasil "${search}"` : 'Semua Hadis'}
          </h2>
        </div>

        {/* Hadis cards */}
        {filtered.length > 0 ? (
          <div>
            {filtered.map((hadis) => (
              <div key={hadis.id} className="fade-in">
                <HadisCard hadis={hadis} />
              </div>
            ))}
            {!search && (
              <p style={{
                textAlign: 'center',
                fontSize: '0.8125rem',
                color: '#9CA3AF',
                padding: '16px',
                fontStyle: 'italic',
              }}>
                Menampilkan {filtered.length} Hadis Arbain
              </p>
            )}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '40px 16px', color: '#9CA3AF' }}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" style={{ margin: '0 auto 12px', display: 'block', opacity: 0.4 }}>
              <circle cx="11" cy="11" r="8" stroke="#9CA3AF" strokeWidth="2"/>
              <path d="m21 21-4.35-4.35" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <p style={{ fontSize: '0.9rem' }}>Hadis tidak ditemukan</p>
          </div>
        )}
      </main>
    </>
  );
}
