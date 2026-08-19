import type { ReactNode } from 'react';

interface LegalLayoutProps {
  children: ReactNode;
}

export default function LegalLayout({ children }: LegalLayoutProps) {
  return (
    <div className="min-h-screen w-full bg-[var(--clr-bg)]">
      <div className="mx-auto flex min-h-screen w-full max-w-[480px] flex-col">
        {children}
      </div>
    </div>
  );
}