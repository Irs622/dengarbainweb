import Link from 'next/link';

interface LegalHeaderProps {
  backLabel?: string;
}

export default function LegalHeader({
  backLabel = 'About',
}: LegalHeaderProps) {
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
    <Link href="/settings/about">
          <button className="back-btn" aria-label={`Kembali ke ${backLabel}`}>
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
  </>
  );
}