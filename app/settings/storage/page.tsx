'use client';

import { useState } from "react";
import Link from "next/link";

type AudioFile = {
  id: number;
  name: string;
  sizeBytes: number;
};

const STORAGE_CAPACITY = 2 * 1024 * 1024 * 1024; // 2 GB

const INITIAL_AUDIO_FILES: AudioFile[] = Array.from(
  { length: 48 },
  (_, index) => ({
    id: index + 1,
    name: `hadis-${String(index + 1).padStart(2, "0")}.mp3`,
    sizeBytes: 25 * 1024 * 1024,
  })
);

function formatStorage(bytes: number) {
  if (bytes === 0) return "0 MB";

  const gb = bytes / (1024 * 1024 * 1024);

  if (gb >= 1) {
    return `${gb.toFixed(1)} GB`;
  }

  const mb = bytes / (1024 * 1024);

  return `${Math.round(mb)} MB`;
}

function formatRemaining(bytes: number) {
  if (bytes <= 0) return "0 MB";

  const mb = bytes / (1024 * 1024);

  return `${Math.round(mb).toLocaleString("en-US")} MB`;
}

export default function StoragePage() {
  const [audioFiles, setAudioFiles] = useState<AudioFile[]>(
    INITIAL_AUDIO_FILES
  );

  const storageUsed = audioFiles.reduce(
    (total, file) => total + file.sizeBytes,
    0
  );

  const remainingStorage = Math.max(
    STORAGE_CAPACITY - storageUsed,
    0
  );

  const storagePercentage = Math.min(
    (storageUsed / STORAGE_CAPACITY) * 100,
    100
  );

  const downloadedFiles = audioFiles.length;

  const handleClearDownloads = () => {
    setAudioFiles([]);
  };

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

      <main
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "20px 24px 40px",
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
          {/* Page Title */}
          <div
            style={{
              width: "100%",
              marginTop: "28px",
              marginBottom: "34px",
            }}
          >
            <h2
              className="font-playfair"
              style={{
                margin: 0,
                fontSize: "1.75rem",
                fontWeight: 800,
                color: "#00543F",
                lineHeight: 1.2,
              }}
            >
              Kelola Penyimpanan
            </h2>
          </div>

          {/* Storage Capacity Card */}
          <div
            style={{
              width: "100%",
              boxSizing: "border-box",
              backgroundColor: "#ffffff",
              borderRadius: "28px",
              padding: "30px 32px",
              boxShadow: "0 2px 6px rgba(0,0,0,0.07)",
            }}
          >
            {/* Label */}
            <p
              style={{
                margin: 0,
                fontSize: "0.85rem",
                fontWeight: 700,
                letterSpacing: "0.04em",
                color: "#4A4A4A",
              }}
            >
              KAPASITAS RUANG
            </p>

            {/* Storage Numbers */}
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "space-between",
                marginTop: "22px",
                gap: "10px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  whiteSpace: "nowrap",
                }}
              >
                <span
                  className="font-playfair"
                  style={{
                    fontSize: "2rem",
                    fontWeight: 900,
                    color: "#003F2F",
                  }}
                >
                  {formatStorage(storageUsed)}
                </span>

                <span
                  className="font-playfair"
                  style={{
                    fontSize: "1.3rem",
                    color: "#333333",
                    marginLeft: "3px",
                  }}
                >
                  / 2.0 GB
                </span>
              </div>

              <span
                className="font-playfair"
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 900,
                  color: "#003F2F",
                }}
              >
                {Math.round(storagePercentage)}%
              </span>
            </div>

            {/* Progress Bar */}
            <div
              style={{
                width: "100%",
                height: "10px",
                backgroundColor: "#E6E5E3",
                borderRadius: "999px",
                marginTop: "20px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: `${storagePercentage}%`,
                  height: "100%",
                  backgroundColor: "#003F2F",
                  borderRadius: "999px",
                  transition: "width 0.3s ease",
                }}
              />
            </div>

            {/* Storage Details */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "10px",
                marginTop: "14px",
              }}
            >
              <span
                style={{
                  fontSize: "0.85rem",
                  color: "#4A4A4A",
                }}
              >
                Digunakan: {formatStorage(storageUsed)}
              </span>

              <span
                style={{
                  fontSize: "0.85rem",
                  color: "#4A4A4A",
                }}
              >
                Tersisa: {formatRemaining(remainingStorage)}
              </span>
            </div>
          </div>

          {/* Storage Statistics */}
          <div
            style={{
              width: "100%",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "18px",
              marginTop: "34px",
            }}
          >
            {/* Downloaded Files */}
            <div
              style={{
                minHeight: "186px",
                boxSizing: "border-box",
                backgroundColor: "#ffffff",
                borderRadius: "28px",
                padding: "24px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.07)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "15px",
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
                    d="M6 3H14L18 7V21H6V3Z"
                    stroke="#70B89F"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14 3V8H18"
                    stroke="#70B89F"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 11V17"
                    stroke="#70B89F"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                  <path
                    d="M9.5 14.5L12 17L14.5 14.5"
                    stroke="#70B89F"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div style={{ marginTop: "40px" }}>
                <p
                  style={{
                    margin: 0,
                    fontSize: "0.85rem",
                    color: "#555555",
                  }}
                >
                  Unduhan Audio
                </p>

                <p
                  className="font-playfair"
                  style={{
                    margin: "4px 0 0",
                    fontSize: "1.6rem",
                    fontWeight: 900,
                    color: "#003F2F",
                  }}
                >
                  {downloadedFiles} File
                </p>
              </div>
            </div>

            {/* Storage Used */}
            <div
              style={{
                minHeight: "186px",
                boxSizing: "border-box",
                backgroundColor: "#ffffff",
                borderRadius: "28px",
                padding: "24px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.07)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "15px",
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
                  <ellipse
                    cx="12"
                    cy="6"
                    rx="7"
                    ry="3"
                    stroke="#70B89F"
                    strokeWidth="1.8"
                  />
                  <path
                    d="M5 6V12C5 13.7 8.1 15 12 15C15.9 15 19 13.7 19 12V6"
                    stroke="#70B89F"
                    strokeWidth="1.8"
                  />
                  <path
                    d="M5 12V18C5 19.7 8.1 21 12 21C15.9 21 19 19.7 19 18V12"
                    stroke="#70B89F"
                    strokeWidth="1.8"
                  />
                </svg>
              </div>

              <div style={{ marginTop: "40px" }}>
                <p
                  style={{
                    margin: 0,
                    fontSize: "0.85rem",
                    color: "#555555",
                  }}
                >
                  Storage Used
                </p>

                <p
                  className="font-playfair"
                  style={{
                    margin: "4px 0 0",
                    fontSize: "1.6rem",
                    fontWeight: 900,
                    color: "#003F2F",
                  }}
                >
                  {formatStorage(storageUsed)}
                </p>
              </div>
            </div>
          </div>

          {/* Clear Downloads Button */}
          <button
            type="button"
            onClick={handleClearDownloads}
            disabled={audioFiles.length === 0}
            style={{
              width: "100%",
              height: "48px",
              marginTop: "44px",
              borderRadius: "28px",
              border: "2px solid #00543F",
              backgroundColor: "transparent",
              color: "#00543F",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              fontFamily: "Georgia, serif",
              fontSize: "0.9rem",
              fontWeight: 700,
              cursor: audioFiles.length === 0 ? "default" : "pointer",
              opacity: audioFiles.length === 0 ? 0.45 : 1,
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M4 7H20"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
              <path
                d="M9 7V4H15V7"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 7L7 20H17L18 7"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinejoin="round"
              />
              <path
                d="M10 11V17"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
              <path
                d="M14 11V17"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>

            Bersihkan Unduhan Audio
          </button>

          {/* Clear Description */}
          <p
            style={{
              maxWidth: "330px",
              margin: "24px auto 0",
              textAlign: "center",
              fontSize: "0.8rem",
              lineHeight: 1.55,
              color: "#555555",
            }}
          >
            Menghapus audio akan membebaskan ruang
            sekitar {formatStorage(storageUsed)}.
          </p>

          {/* Offline Illustration */}
          <div
            style={{
              width: "128px",
              height: "128px",
              borderRadius: "50%",
              backgroundColor: "#E9E7E7",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "66px",
            }}
          >
            <svg
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M1 1L23 23"
                stroke="#4C5651"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M9.5 5.2C10.3 4.9 11.1 4.8 12 4.8C16.7 4.8 20.7 7.7 22.2 11.8"
                stroke="#4C5651"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M4.8 7.2C3.2 8.2 2 9.6 1.4 11.2"
                stroke="#4C5651"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M5.5 16.5H17C19.2 16.5 21 14.7 21 12.5C21 10.4 19.4 8.7 17.3 8.5"
                stroke="#4C5651"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M8 16.5C6.1 16.5 4.5 15 4.5 13.1C4.5 11.5 5.6 10.1 7.1 9.7"
                stroke="#4C5651"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Offline Description */}
          <p
            style={{
              maxWidth: "350px",
              margin: "24px auto 0",
              textAlign: "center",
              fontSize: "0.8rem",
              lineHeight: 1.55,
              color: "#555555",
            }}
          >
            Konten yang Anda unduh tetap dapat diakses
            bahkan tanpa koneksi internet aktif.
          </p>
        </div>
      </main>
    </>
  );
}