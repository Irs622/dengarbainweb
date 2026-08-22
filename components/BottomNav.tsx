'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  {
    href: '/hadis',
    label: 'Hadis',
    activeColor: '#1A5C40',
    icon: (active: boolean) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="18" rx="3"
          stroke={active ? '#1A5C40' : '#9CA3AF'}
          strokeWidth="2"
          fill={active ? '#E8F5EE' : 'none'}
        />
        <path d="M7 8h10M7 12h10M7 16h6"
          stroke={active ? '#1A5C40' : '#9CA3AF'}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    href: '/progres',
    label: 'Progres',
    activeColor: '#1A5C40',
    icon: (active: boolean) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="18" rx="3"
          stroke={active ? '#1A5C40' : '#9CA3AF'}
          strokeWidth="2"
          fill={active ? '#E8F5EE' : 'none'}
        />
        <path d="M7 14l3.5-3.5 3 3L18 8"
          stroke={active ? '#1A5C40' : '#9CA3AF'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    href: '/settings',
    label: 'Settings',
    activeColor: '#1A5C40',
    icon: (active: boolean) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="3" stroke={active ? '#1A5C40' : '#9CA3AF'} strokeWidth="2"/>
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
          stroke={active ? '#1A5C40' : '#9CA3AF'} strokeWidth="2"/>
      </svg>
    ),
  },
];

export default function BottomNav() {
  const pathname = usePathname();

  if (pathname === '/' || pathname === '/welcome') return null;

  return (
    <>
      {/* COMPONENT MOBILE BOTTOM NAV (Aktif hanya saat max-width: 767px) */}
      <nav 
        className="nav-mobile-view"
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          height: '100px',
          backgroundColor: '#FFFFFF',
          borderTop: '1px solid #E8E8E2',
          alignItems: 'center',
          justifyContent: 'space-around',
          zIndex: 9999,
          boxShadow: '0 -4px 20px rgba(0,0,0,0.06)',
        }}
      >
        {navItems.map((item) => {
          const isActive = pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '4px',
                padding: '8px 20px',
                borderRadius: '16px',
                backgroundColor: isActive ? '#E8F5EE' : 'transparent',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
              }}
            >
              {item.icon(isActive)}
              <span style={{
                fontSize: '0.6875rem',
                fontWeight: isActive ? 700 : 500,
                color: isActive ? '#1A5C40' : '#9CA3AF',
                fontFamily: "'Plus Jakarta Sans', sans-serif",
              }}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>

      {/* COMPONENT DESKTOP SIDEBAR (Aktif hanya saat min-width: 768px) */}
      <aside 
        className="nav-desktop-view"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          bottom: 0,
          width: '72px',
          backgroundColor: '#FFFFFF',
          borderRight: '1px solid #E8E8E2',
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: '32px',
          zIndex: 9999,
          boxShadow: '2px 0 10px rgba(0,0,0,0.03)',
        }}
      >

        {/* Brand Icon Header */}
        <div style={{ marginBottom: '32px' }}>
          <Link href="/hadis" style={{ display: 'block' }}>
            <div
              className="header-logo-icon"
              aria-hidden="true"
              style={{
                width: 36,
                height: 36,
                borderRadius: '50%',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <img
                src="/brand/dengarbain-secondary.png"
                alt="DengarBain Logo"
                style={{ width: 26, height: 26, objectFit: 'contain', display: 'block' }}
              />
            </div>
          </Link>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {navItems.map((item) => {
            const isActive = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  padding: '12px',
                  borderRadius: '14px',
                  backgroundColor: isActive ? '#E8F5EE' : 'transparent',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s ease',
                }}
                title={item.label}
              >
                {item.icon(isActive)}
              </Link>
            );
          })}
        </div>
      </aside>
    </>
  );
}