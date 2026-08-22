'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

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
  const pathname = usePathname();

  const hideDesktopHeader =
    pathname === '/progres' ||
    pathname === '/settings';

  const handleClear = () => {
    if (onSearchChange) {
      onSearchChange('');
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === 'Escape') {
      handleClear();
    }
  };

  return (
    <header
      className={`app-header ${
        hideDesktopHeader ? 'header-hide-desktop' : ''
      }`}
    >
      <div className="header-container">

        {/* Header Top Branding Row */}
        <div className="header-top-row">
          <div className="header-brand">
            <div
              className="header-logo-icon"
              aria-hidden="true"
            >
              <img
                src="/brand/dengarbain-secondary.png"
                alt=""
              />
            </div>

            <h1 className="header-title font-playfair">
              {title}
            </h1>
          </div>

          <div className="header-badge">
            <span>42 HADIS</span>
          </div>
        </div>

        {/* Integrated Search Bar */}
        {showSearch && (
          <div
            className="header-search-section"
            role="search"
          >
            <div className="header-search-bar">

              {/* Search Icon */}
              <svg
                className="search-icon"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <circle
                  cx="11"
                  cy="11"
                  r="7"
                  stroke="#1A5C40"
                  strokeWidth="2"
                />

                <path
                  d="m20 20-3.5-3.5"
                  stroke="#1A5C40"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>

              {/* Search Input */}
              <input
                type="search"
                className="header-search-input"
                placeholder="Cari hadis berdasarkan judul atau urutan..."
                value={searchQuery}
                onChange={(e) =>
                  onSearchChange &&
                  onSearchChange(e.target.value)
                }
                onKeyDown={handleKeyDown}
                aria-label="Cari hadis berdasarkan judul atau urutan"
                aria-autocomplete="list"
              />

              {/* Clear Button */}
              {searchQuery && (
                <button
                  type="button"
                  className="search-clear-btn"
                  onClick={handleClear}
                  aria-label="Hapus teks pencarian"
                  title="Hapus pencarian"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
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

            {/* Search Result Count */}
            {searchQuery &&
              typeof resultCount === 'number' && (
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