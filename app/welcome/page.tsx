'use client';

import Link from 'next/link';

export default function WelcomePage() {
  return (
    <div className="welcome-page">
      {/* Centered Mobile/Desktop Container Frame */}
      <div className="welcome-frame">
        {/* Subtle Ambient Glow */}
        <div
          style={{
            width: 320,
            height: 320,
            left: -40,
            top: -40,
            position: 'absolute',
            background: 'rgba(255, 255, 255, 0.12)',
            borderRadius: '50%',
            filter: 'blur(40px)',
            pointerEvents: 'none',
          }}
        />

        {/* Top & Middle Hero Branding Content */}
        <div
          style={{
            padding: '48px 24px 200px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            margin: 'auto 0',
            zIndex: 10,
            boxSizing: 'border-box',
          }}
        >
          {/* Logo Card Icon */}
          <div
            style={{
              width: 140,
              height: 140,
              marginBottom: 20,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '28px',
              backgroundColor: 'rgba(255, 255, 255, 0.18)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              boxShadow: '0 12px 30px rgba(0, 0, 0, 0.15)',
              padding: '16px',
            }}
          >
            <img
              src="/brand/dengarbain-secondary.png"
              alt="DengarBain Logo"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
              }}
            />
          </div>

          {/* App Title */}
          <div style={{ marginBottom: 8, textAlign: 'center' }}>
            <h1
              className="font-playfair"
              style={{
                color: '#FFFFFF',
                fontSize: '2.25rem',
                fontWeight: 900,
                lineHeight: 1.15,
                margin: 0,
                letterSpacing: '-0.02em',
                textShadow: '0 2px 10px rgba(0,0,0,0.12)',
              }}
            >
              DengarBain
            </h1>
          </div>

          {/* Subtitle */}
          <div style={{ marginBottom: 24, textAlign: 'center', maxWidth: 320 }}>
            <p
              style={{
                color: 'rgba(255, 255, 255, 0.90)',
                fontSize: '0.9375rem',
                fontWeight: 500,
                lineHeight: '1.5',
                margin: 0,
              }}
            >
              42 Hadis Pilihan untuk Kehidupan Sehari-hari
            </p>
          </div>

          {/* Hadis Quote Box */}
          <div
            style={{
              width: '100%',
              maxWidth: 360,
              padding: '18px 20px',
              background: 'rgba(255, 255, 255, 0.14)',
              backdropFilter: 'blur(8px)',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
              borderRadius: '20px',
              border: '1px solid rgba(255, 255, 255, 0.25)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              boxSizing: 'border-box',
            }}
          >
            <div
              className="font-arabic"
              dir="rtl"
              style={{
                color: '#FFFFFF',
                fontSize: '1.25rem',
                fontWeight: 600,
                lineHeight: 1.7,
                marginBottom: 8,
              }}
            >
              طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ
            </div>
            <div
              style={{
                color: 'rgba(255, 255, 255, 0.92)',
                fontSize: '0.8125rem',
                fontWeight: 500,
                lineHeight: 1.5,
                fontStyle: 'italic',
              }}
            >
              &quot;Menuntut ilmu adalah kewajiban bagi setiap Muslim&quot;
            </div>
          </div>
        </div>

        {/* Bottom White Card Sheet & Get Started Action */}
        <div
          style={{
            width: '100%',
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            background: '#FFFFFF',
            borderTopLeftRadius: '36px',
            borderTopRightRadius: '36px',
            padding: '28px 24px 36px',
            boxShadow: '0 -8px 30px rgba(0, 0, 0, 0.15)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            zIndex: 20,
            boxSizing: 'border-box',
          }}
        >
          {/* Pagination Indicators */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
            <div
              style={{
                width: 14,
                height: 14,
                borderRadius: '50%',
                border: '1.5px #1A5C40 solid',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#1A5C40' }} />
            </div>
            <div style={{ width: 10, height: 10, borderRadius: '50%', border: '1px #9CA3AF solid' }} />
            <div style={{ width: 10, height: 10, borderRadius: '50%', border: '1px #9CA3AF solid' }} />
          </div>

          {/* Get Started Button */}
          <Link href="/hadis" style={{ width: '100%', maxWidth: 360, textDecoration: 'none' }}>
            <button
              type="button"
              style={{
                width: '100%',
                height: 56,
                background: '#064E3B',
                boxShadow: '0 8px 20px rgba(6, 78, 59, 0.35)',
                borderRadius: '16px',
                border: 'none',
                color: '#FFFFFF',
                fontSize: '1rem',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 10,
                transition: 'all 0.2s ease',
              }}
              aria-label="Mulai Belajar 42 Hadis Arbain"
            >
              <span>Get Started</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
