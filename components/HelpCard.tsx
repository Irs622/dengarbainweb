"use client";

import Image from "next/image";
import type { ReactNode } from "react";

interface HelpCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  badge?: string;
  image?: string;
  onClick?: () => void;
}

export default function HelpCard({
  title,
  description,
  icon,
  badge,
  image,
  onClick,
}: HelpCardProps) {
  return (
    <>
      <button
        type="button"
        className="help-card"
        onClick={onClick}
        aria-label={`Opsi bantuan: ${title}`}
      >
        {/* Badge */}
        {badge && (
          <div className="help-card-badge">
            {badge}
          </div>
        )}

        {/* Icon */}
        {!badge && (
          <div className="help-card-icon">
            {icon}
          </div>
        )}

        {/* Content */}
        <div className="help-card-content">
          <h2 className="help-card-title">
            {title}
          </h2>

          <p className="help-card-description">
            {description}
          </p>
        </div>

        {/* Image */}
        {image && (
          <div className="help-card-image">
            <Image
              src={image}
              alt=""
              width={600}
              height={320}
              priority={false}
            />
          </div>
        )}
      </button>
    </>
  );
}