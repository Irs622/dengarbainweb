'use client';

import React from 'react';

interface AppHeaderProps {
  title?: string;
  showSearch?: boolean;
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
  resultCount?: number;
}

export default function AppHeader({
  title = 'DengarBain',
  showSearch = false,
  searchQuery = '',
  onSearchChange,
  resultCount,
}: AppHeaderProps) {
  const handleClear = () => {
    if (onSearchChange) {
      onSearchChange('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Escape') {
      handleClear();
    }
  };

  return (
    <header className="app-header">
      <div className="header-container">
        {/* Header Top Branding Row */}
        <div className="header-top-row">
          <div className="header-brand">
            <div className="header-logo-icon" aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14.5c-2.49 0-4.5-2.01-4.5-4.5S9.51 7.5 12 7.5s4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5z"
                  fill="currentColor"
                />
                <circle cx="12" cy="12" r="2.5" fill="#FFFFFF" />
              </svg>
            </div>
            <h1 className="header-title font-playfair">{title}</h1>
          </div>
          
          <div className="header-badge">
            <span>40 HADIS</span>
          </div>
        </div>

        {/* Integrated Search Bar */}
        {showSearch && (
          <div className="header-search-section" role="search">
            <div className="header-search-bar">
              <svg
                className="search-icon"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="7" stroke="#1A5C40" strokeWidth="2" />
                <path
                  d="m20 20-3.5-3.5"
                  stroke="#1A5C40"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              
              <input
                type="search"
                className="header-search-input"
                placeholder="Cari hadis berdasarkan judul atau urutan..."
                value={searchQuery}
                onChange={(e) => onSearchChange && onSearchChange(e.target.value)}
                onKeyDown={handleKeyDown}
                aria-label="Cari hadis berdasarkan judul atau urutan"
                aria-autocomplete="list"
              />

              {searchQuery && (
                <button
                  type="button"
                  className="search-clear-btn"
                  onClick={handleClear}
                  aria-label="Hapus teks pencarian"
                  title="Hapus pencarian"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M18 6 6 18M6 6l12 12"
                      stroke="#6B7280"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              )}
            </div>

            {searchQuery && typeof resultCount === 'number' && (
              <div className="search-result-badge fade-in">
                {resultCount} Hadis ditemukan
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
}
