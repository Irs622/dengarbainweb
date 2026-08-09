'use client';

import { useState } from 'react';
import { hadisData, lastOpenedHadis } from '@/data/hadis';
import HadisCard from '@/components/HadisCard';
import ContinueCard from '@/components/ContinueCard';

export default function HomePage() {
  const [search, setSearch] = useState('');

  const filtered = hadisData.filter(h =>
    h.judul.toLowerCase().includes(search.toLowerCase()) ||
    String(h.id).includes(search)
  );

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



      {/* Wrapper untuk main content */}
      <main
        style={{
          paddingTop: 32,
        }}
      >

        {/* Search bar */}
      <div className="search-bar">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <circle cx="11" cy="11" r="8" stroke="#9CA3AF" strokeWidth="2"/>
          <path d="m21 21-4.35-4.35" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round"/>
        </svg>
        <input
          type="search"
          placeholder="Cari hadis berdasarkan judul atau urutan"
          value={search}
          onChange={e => setSearch(e.target.value)}
          aria-label="Cari hadis"
        />
        {search && (
          <button onClick={() => setSearch('')} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '2px' }} aria-label="Hapus pencarian">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M18 6 6 18M6 6l12 12" stroke="#9CA3AF" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        )}
      </div>

      {/* Continue Card (hidden when searching) */}
      {!search && (
        <>
          <div style={{ padding: '0 16px 4px' }}>
            <h2 className="font-playfair" style={{ fontSize: '1.5rem', fontWeight: 800, color: '#064E3B', marginBottom: '12px' }}>
              Lanjut Belajar
            </h2>
          </div>
          <ContinueCard hadis={lastOpenedHadis} />
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
              Memuat lebih banyak Hadis ...
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
