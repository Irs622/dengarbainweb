'use client';

import Link from 'next/link';

export default function WelcomePage() {
  return (
    <div
      className="welcome-page"
      style={{
        width: '100%',
        minHeight: '100dvh',
        background: '#FCF9F8',
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        margin: 0,
        padding: 0,
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          width: '100%',
          flex: 1,
          minHeight: '100dvh',
          position: 'relative',
          background: 'linear-gradient(180deg, #26987A 0%, #53A791 33%, #26987A 100%)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Background ambient glow circles */}
        <div
          style={{
            width: 394,
            height: 333,
            left: -7,
            top: 626,
            position: 'absolute',
            background: 'rgba(255, 255, 255, 0.79)',
            boxShadow: '53.9px 53.9px 53.9px rgba(0,0,0,0.1)',
            borderRadius: 70,
            filter: 'blur(26.95px)',
            pointerEvents: 'none',
          }}
        />

        {/* Top & Middle Content Box */}
        <div
          style={{
            padding: '48px 24px 180px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            maxWidth: '440px',
            margin: 'auto',
            zIndex: 10,
            boxSizing: 'border-box',
          }}
        >
          {/* DengarBain Primary Logo */}
          <div
            style={{
              width: 220,
              marginBottom: 16,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img
              src="/brand/dengarbain-primary.png"
              alt="DengarBain"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
              }}
            />
          </div>

          {/* App Title */}
          <div style={{ marginBottom: 12, textAlign: 'center' }}>
            <h1
              className="font-playfair"
              style={{
                color: 'white',
                fontSize: 36,
                fontWeight: '700',
                lineHeight: '40px',
                margin: 0,
              }}
            >
              DengArbain
            </h1>
          </div>

          {/* Subtitle */}
          <div style={{ marginBottom: 28, textAlign: 'center', maxWidth: 320 }}>
            <p
              style={{
                color: 'rgba(255, 255, 255, 0.80)',
                fontSize: 16,
                fontWeight: '400',
                lineHeight: '26px',
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
              maxWidth: 384,
              padding: 20,
              background: 'rgba(255, 255, 255, 0.10)',
              boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
              borderRadius: 16,
              border: '0.70px rgba(255, 255, 255, 0.20) solid',
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
                color: 'rgba(255, 255, 255, 0.90)',
                fontSize: 20,
                fontWeight: '400',
                lineHeight: '32.50px',
                marginBottom: 12,
              }}
            >
              طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ
            </div>
            <div
              style={{
                color: 'white',
                fontSize: 14,
                fontWeight: '400',
                lineHeight: '20px',
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
            background: 'white',
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            padding: '32px 24px 40px',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 0px 4px rgba(0, 0, 0, 0.25)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            zIndex: 20,
            boxSizing: 'border-box',
          }}
        >
          {/* Pagination Indicators */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 24 }}>
            <div
              style={{
                width: 16,
                height: 16,
                borderRadius: '50%',
                border: '1.33px #2D6A5A solid',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#2D6A5A' }} />
            </div>
            <div style={{ width: 12, height: 12, borderRadius: '50%', border: '1px #2D6A5A solid' }} />
            <div style={{ width: 16, height: 16, borderRadius: '50%', border: '1.33px #2D6A5A solid' }} />
          </div>

          {/* Get Started Button */}
          <Link href="/hadis" style={{ width: '100%', maxWidth: 360, textDecoration: 'none' }}>
            <button
              type="button"
              style={{
                width: '100%',
                height: 60,
                background: '#064E3B',
                boxShadow: '0px 8px 10px -6px rgba(0, 0, 0, 0.10), 0px 20px 25px -5px rgba(0, 0, 0, 0.10)',
                borderRadius: 16,
                border: 'none',
                color: 'white',
                fontSize: 16,
                fontWeight: '600',
                lineHeight: '24px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
                transition: 'transform 0.15s ease, background-color 0.15s ease',
              }}
            >
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
