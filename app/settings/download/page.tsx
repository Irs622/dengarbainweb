'use client';

import Link from "next/link";

export default function DownloadPage() {

  return (
    <>
      {/* App Header */}
  <header
    style={{
      padding: "10px 16px",
      display: "flex",
      alignItems: "center",
      position: "relative",
    }}
  >
    {/* Back Button */}
    <Link href="/settings">
          <button className="back-btn" aria-label="Kembali">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M19 12H5M12 5l-7 7 7 7" stroke="#1A5C40" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </Link>

    {/* Center Title */}
    <h1
      className="font-playfair"
      style={{
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%)",
        margin: 0,
        fontSize: "1.75rem",
        fontWeight: 900,
        color: "#1A5C40",
        lineHeight: 1,
        whiteSpace: "nowrap",
      }}
    >
      DengarBain
    </h1>
  </header>

    <main style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "20px 16px 16px" }}>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Intro */}
          <div
            style={{
              width: "100%",
              textAlign: "center",
              marginTop: "28px",
              marginBottom: "36px",
            }}
          >
            <h2
              className="font-playfair"
              style={{
                margin: 0,
                fontSize: "1.8rem",
                fontWeight: 900,
                color: "#00543F",
                lineHeight: 1.3,
              }}
            >
              Install DengarBain
            </h2>

            <p
              style={{
                margin: "16px auto 0",
                maxWidth: "340px",
                fontSize: "0.8rem",
                lineHeight: 1.7,
                color: "#666666",
              }}
            >
              Tambahkan aplikasi ke layar utama anda untuk
              mendengarkan hadist dengan lancar dan terfokus.
            </p>
          </div>

          {/* Feature Cards */}
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              
              gap: "18px",
            }}
          >
            {/* Faster Launch */}
            <div
              style={{
                width: "100%",
                minHeight: "145px",
                boxSizing: "border-box",
                boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
                backgroundColor: "#FFFFFF",
                borderRadius: "28px",
                padding: "25px 24px",
                display: "flex",
                alignItems: "flex-start",
                gap: "16px",
              }}
            >
              {/* Icon */}
              <div
                style={{
                  flexShrink: 0,
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  backgroundColor: "#C8F1DF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  width="23"
                  height="23"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M13 2L4 14H11L10 22L20 9H13L13 2Z"
                    stroke="#55796B"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Text */}
              <div style={{ paddingTop: "1px" }}>
                <h3
                  className="font-playfair"
                  style={{
                    margin: 0,
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    color: "#004B39",
                  }}
                >
                  Faster Launch
                </h3>

                <p
                  className="font-playfair"
                  style={{
                    margin: "6px 0 0",
                    fontSize: "0.95rem",
                    lineHeight: 1.45,
                    color: "#555555",
                  }}
                >
                  Akses Hadist secara instan dari
                  layar beranda Anda tanpa perlu
                  membuka peramban.
                </p>
              </div>
            </div>

            {/* Offline Access */}
            <div
              style={{
                width: "100%",
                minHeight: "145px",
                boxSizing: "border-box",
                boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
                backgroundColor: "#FFFFFF",
                borderRadius: "28px",
                padding: "25px 24px",
                display: "flex",
                alignItems: "flex-start",
                gap: "16px",
              }}
            >
              {/* Icon */}
              <div
                style={{
                  flexShrink: 0,
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  backgroundColor: "#C8F1DF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition:
                    "transform 300ms ease",
                }}
              >
                <svg
                  width="23"
                  height="23"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M1 1L23 23"
                    stroke="#55796B"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  <path
                    d="M9.5 5.2C10.3 4.9 11.1 4.8 12 4.8C16.7 4.8 20.7 7.7 22.2 11.8"
                    stroke="#55796B"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  <path
                    d="M4.8 7.2C3.2 8.2 2 9.6 1.4 11.2"
                    stroke="#55796B"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  <path
                    d="M7.2 10.1C6.3 10.7 5.6 11.5 5.2 12.5"
                    stroke="#55796B"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  <path
                    d="M10.5 14.2C10.9 13.8 11.4 13.6 12 13.6C13.3 13.6 14.4 14.6 14.4 15.9"
                    stroke="#55796B"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              {/* Text */}
              <div style={{ paddingTop: "1px" }}>
                <h3
                  className="font-playfair"
                  style={{
                    margin: 0,
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    color: "#004B39",
                  }}
                >
                  Offline access
                </h3>

                <p
                  className="font-playfair"
                  style={{
                    margin: "6px 0 0",
                    fontSize: "0.95rem",
                    lineHeight: 1.45,
                    color: "#555555",
                  }}
                >
                  Dengarkan Hadis bahkan saat
                  Anda terputus dari koneksi
                  internet.
                </p>
              </div>
            </div>
          </div>

          {/* Install Button */}
          <a
            href="/DengarBain.apk"
            download
            style={{
              width: "100%",
              height: "56px",
              marginTop: "52px",
              borderRadius: "30px",
              backgroundColor: "#003F2F",
              color: "#FFFFFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textDecoration: "none",
              fontFamily: "Georgia, serif",
              fontSize: "1rem",
              fontWeight: 700,
              boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
            }}
          >
            Install App
          </a>

          {/* Later */}
          <Link
            href="/settings"
            style={{
              marginTop: "28px",
              color: "#555555",
              fontFamily: "Georgia, serif",
              fontSize: "0.9rem",
              textDecoration: "none",
            }}
          >
            Nanti saja
          </Link>
        </div>
      </main>
    </>
  );
}