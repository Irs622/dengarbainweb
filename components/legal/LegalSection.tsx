import React from "react";

interface LegalSectionProps {
  number: number;
  title: string;
  children: React.ReactNode;
}

export default function LegalSection({
  number,
  title,
  children,
}: LegalSectionProps) {
  return (
    <section
      style={{
        width: "100%",
        padding: "0 16px",
        marginBottom: "28px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          width: "100%",
          paddingBottom: "5px",
          borderBottom: "1px solid rgba(255, 255, 255, 0.75)",
          boxSizing: "border-box",
        }}
      >
        <h2
          style={{
            margin: 0,
            fontFamily: "Playfair Display, serif",
            fontSize: "1.5rem",
            fontWeight: 800,
            lineHeight: 1.3,
            letterSpacing: "-0.02em",
            color: "#164c3c",
          }}
        >
          {number}. {title}
        </h2>
      </div>

      <div
        style={{
          width: "100%",
          margin: "12px 0 0",
          fontFamily: "inherit",
          fontSize: "1.125rem",
          fontWeight: 500,
          lineHeight: 1.65,
          color: "#626a66",
          textAlign: "justify",
        }}
      >
        {children}
      </div>
    </section>
  );
}