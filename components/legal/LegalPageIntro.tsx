interface LegalPageIntroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  description?: string;
  metadata?: string;
}

export default function LegalPageIntro({
  eyebrow,
  title,
  subtitle,
  description,
  metadata,
}: LegalPageIntroProps) {
  return (
    <main className="w-full">
      <div
        className="flex flex-col"
        style={{
          gap: '2px',
          display: 'flex',
          flexDirection: 'column',
          padding: '0px 16px',
          paddingTop: '16px',
        }}
      >
        {eyebrow && (
          <p
            className="font-['Atkinson_Hyperlegible_Next']"
            style={{ fontSize: '1.75rem', fontWeight: 700, color: '#064E3B'}}
          >
            {eyebrow}
          </p>
        )}

        <div>
          <h2
            className="font-playfair"
            style={{
              fontSize: "1.75rem",
              fontWeight: 700,
              color: "#064E3B",
              paddingBottom : "16px",
            }}
          >
            {title}
          </h2>

          {subtitle && (
            <p
              className="font-playfair"
              style={{
                fontSize: "1.25rem",
                fontWeight: 700,
                color: "#595b5f",
              paddingBottom : "16px",
              }}
            >
              {subtitle}
            </p>
          )}

          {description && (
            <p
              className="font-['Atkinson_Hyperlegible_Next']"
              style={{
                fontSize: "0.875rem",
                lineHeight: "1.5rem",
                color: "#595b5f",
                paddingBottom : "16px",
              }}
            >
              {description}
            </p>
          )}

          {metadata && (
            <p
              className="font-['Atkinson_Hyperlegible_Next']"
              style={{
                fontSize: "0.75rem",
                lineHeight: "1.25rem",
                color: "#8a8d91",
                paddingBottom : "16px",
              }}
            >
              {metadata}
            </p>
          )}
        </div>
      </div>
    </main>
  );
}