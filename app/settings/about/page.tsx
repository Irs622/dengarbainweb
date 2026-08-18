'use client';

import Link from "next/link";

export default function DownloadPage() {

  return (
    <div
    style={{
      minHeight: "100vh",
      backgroundColor: "#2B9A7C",
    }}
  >
      {/* App Header */}
  <header
    style={{
      padding: "10px 16px",
      display: "flex",
      alignItems: "center",
      backgroundColor: "#2B9A7C",
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

  </header>

    <main
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#2B9A7C",
          padding: "20px 16px 16px",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* App Identity */}
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "28px",
              marginBottom: "28px",
            }}
          >
            {/* DengarBain Primary Logo */}
        <div
          style={{
            width: 220,
            marginBottom: -32,
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

            {/* App Name */}
            <h2
              className="font-playfair"
              style={{
                margin: "28px 0 0",
                fontSize: "2.25rem",
                fontWeight: 700,
                color: "#FFFFFF",
                lineHeight: 1.1,
              }}
            >
              DengarBain
            </h2>

            {/* Version */}
            <p
              style={{
                margin: "8px 0 0",
                marginBottom: "28px",
                fontSize: "0.8rem",
                fontWeight: 600,
                letterSpacing: "0.04em",
                color: "#FFFFFF",
              }}
            >
              VERSION 1.0.0
            </p>
          </div>

          {/* Description Card */}
          <div
            style={{
              width: "100%",
              boxSizing: "border-box",
              backgroundColor: "#FFFFFF",
              borderRadius: "28px",
              border: "1px solid rgba(29, 29, 29, 0.05)",
              boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
              padding: "30px 32px",
              marginBottom: "18px",
            }}
          >
            {/* Card Title */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "20px",
              }}
            >
              <svg
                width="21"
                height="21"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="9"
                  stroke="#003527"
                  strokeWidth="1.8"
                />
                <path
                  d="M12 10V16"
                  stroke="#003527"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <circle
                  cx="12"
                  cy="7"
                  r="1"
                  fill="#003527"
                />
              </svg>

              <h3
                className="font-playfair"
                style={{
                  margin: 0,
                  fontSize: "1.4rem",
                  fontWeight: 700,
                  color: "#003527",
                }}
              >
                Description
              </h3>
            </div>

            <p
              style={{
                margin: 0,
                fontSize: "0.95rem",
                lineHeight: 1.75,
                color: "#222222",
                textAlign: "justify",
              }}
            >
              DengarBain is a platform for learning hadith. This
              application provides high-quality audio recitations
              and clear text layout, specifically designed for
              visually impaired users.
            </p>
          </div>

          {/* Developer Card */}
          <div
            style={{
              width: "100%",
              boxSizing: "border-box",
              backgroundColor: "#FFFFFF",
              borderRadius: "28px",
              padding: "30px 32px",
              border: "1px solid rgba(29, 29, 29, 0.05)",
              boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
              marginBottom: "18px",
            }}
          >
            {/* Card Title */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "20px",
              }}
            >
              <svg
                width="21"
                height="21"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M8 9L4 12L8 15"
                  stroke="#003527"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 9L20 12L16 15"
                  stroke="#003527"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14 5L10 19"
                  stroke="#003527"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>

              <h3
                className="font-playfair"
                style={{
                  margin: 0,
                  fontSize: "1.4rem",
                  fontWeight: 700,
                  color: "#003527",
                }}
              >
                Developer
              </h3>
            </div>

            <p
              style={{
                margin: 0,
                fontSize: "0.95rem",
                lineHeight: 1.7,
                color: "#4A4A4A",
              }}
            >
              A project dedicated to Islamic educational
              technology and open research.
            </p>

            <p
              style={{
                margin: "26px 0 0",
                fontSize: "0.85rem",
                fontWeight: 700,
                letterSpacing: "0.03em",
                color: "#003527",
              }}
            >
              Contact: support@dengarbain.org
            </p>
          </div>

          {/* License Card */}
          <div
            style={{
              width: "100%",
              boxSizing: "border-box",
              backgroundColor: "#FFFFFF",
              borderRadius: "28px",
              padding: "30px 32px",
              border: "1px solid rgba(29, 29, 29, 0.05)",
              boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
              marginBottom: "18px",
            }}
          >
            {/* Card Title */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "20px",
              }}
            >
              <svg
                width="21"
                height="21"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 3L19 6V11C19 15.5 16.2 19.3 12 21C7.8 19.3 5 15.5 5 11V6L12 3Z"
                  stroke="#003527"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 12L11 14L15 10"
                  stroke="#003527"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <h3
                className="font-playfair"
                style={{
                  margin: 0,
                  fontSize: "1.4rem",
                  fontWeight: 700,
                  color: "#003527",
                }}
              >
                License
              </h3>
            </div>

            <p
              style={{
                margin: 0,
                fontSize: "0.95rem",
                lineHeight: 1.7,
                color: "#4A4A4A",
              }}
            >
              Open source software under the MIT License.
              Distributed for the benefit of the Sam&apos;an
              Islamic boarding school.
            </p>

            <Link
              href="/license"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "5px",
                marginTop: "26px",
                color: "#003527",
                fontSize: "0.9rem",
                fontWeight: 500,
                textDecoration: "none",
              }}
            >
              Read full license

              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M14 5H19V10"
                  stroke="#003527"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19 5L12 12"
                  stroke="#003527"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <path
                  d="M19 14V19H5V5H10"
                  stroke="#003527"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>

          {/* Privacy Policy */}
          <Link
            href="/privacy"
            style={{
              width: "100%",
              height: "64px",
              boxSizing: "border-box",
              backgroundColor: "#ffffff",
              borderRadius: "28px",
              padding: "0 28px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              textDecoration: "none",
              border: "1px solid rgba(29, 29, 29, 0.05)",
              boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
              marginBottom: "18px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
              }}
            >
              <svg
                width="21"
                height="21"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 3L19 6V11C19 15.5 16.2 19.3 12 21C7.8 19.3 5 15.5 5 11V6L12 3Z"
                  stroke="#003527"
                  strokeWidth="1.8"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 10V15"
                  stroke="#003527"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <circle
                  cx="12"
                  cy="7.5"
                  r="0.8"
                  fill="#003527"
                />
              </svg>

              <span
                style={{
                  fontSize: "0.95rem",
                  fontWeight: 500,
                  color: "#222222",
                }}
              >
                Privacy Policy
              </span>
            </div>

            <span
              style={{
                fontSize: "1.6rem",
                color: "#555555",
                lineHeight: 1,
              }}
            >
              ›
            </span>
          </Link>

          {/* Terms of Service */}
          <Link
            href="/terms"
            style={{
              width: "100%",
              height: "64px",
              boxSizing: "border-box",
              backgroundColor: "#ffffff",
              borderRadius: "28px",
              padding: "0 28px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              textDecoration: "none",
              border: "1px solid rgba(29, 29, 29, 0.05)",
              boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
              }}
            >
              <svg
                width="21"
                height="21"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M5 20H19"
                  stroke="#003527"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <path
                  d="M7 17L17 7"
                  stroke="#003527"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <path
                  d="M5 14L10 19"
                  stroke="#003527"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <path
                  d="M15 5L19 9"
                  stroke="#003527"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>

              <span
                style={{
                  fontSize: "0.95rem",
                  fontWeight: 500,
                  color: "#222222",
                }}
              >
                Terms of Service
              </span>
            </div>

            <span
              style={{
                fontSize: "1.6rem",
                color: "#555555",
                lineHeight: 1,
              }}
            >
              ›
            </span>
          </Link>

          {/* Footer */}
          <div
            style={{
              width: "100%",
              textAlign: "center",
              marginTop: "42px",
              paddingBottom: "12px",
            }}
          >
            <p
              style={{
                margin: 0,
                color: "#FFFFFF",
                fontSize: "0.8rem",
                lineHeight: 1.55,
                fontWeight: 700,
              }}
            >
              Designed to study and memorize the 40 Hadith
              <br />
              of Imam An-Nawawi
            </p>

            <p
              style={{
                margin: "28px 0 0",
                color: "#FFFFFF",
                fontSize: "0.8rem",
                lineHeight: 1.5,
                fontWeight: 700,
              }}
            >
              Education &amp; Research Project.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}