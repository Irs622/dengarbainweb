'use client';

import Link from "next/link";
import BottomNav from '@/components/BottomNav';
import HelpCard from '@/components/HelpCard';

const helpCards = [
  {
    title: 'Menguasai DengarBain',
    badge: 'Aksesibilitas Utama',
    description:
      'Setiap fitur dioptimalkan untuk TalkBack (Android) dan VoiceOver (iOS), memastikan hafalan Hadits bisa digunakan bagi semua orang.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <circle
          cx="12"
          cy="12"
          r="9"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M9 12a3 3 0 1 1 6 0"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M12 15v3"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
    image: '/images/menguasai-dengarbain.png',
  },

  {
    title: 'TalkBack Gestures',
    description:
      'Navigasi dasar menggunakan gestur pembaca layar standar. Jelajahi dengan sentuhan untuk mendengar label item atau geser untuk berpindah antara tombol fungsional dan segmen teks Hadits.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M8 11V6a2 2 0 1 1 4 0v5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M12 10V5a2 2 0 1 1 4 0v7"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M16 11V8a2 2 0 1 1 4 0v6c0 4-2.5 7-7 7h-1c-3.5 0-5.5-2-7-5l-2-4a2 2 0 0 1 3.6-1.7L8 13"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },

  {
    title: 'Swipe Navigation',
    description:
      'Geser ke kiri atau kanan dengan satu jari untuk memindahkan fokus aksesibilitas. Tata letak linier kami memastikan Anda menemukan konten Hadits sebelum kontrol navigasi.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M7 12h10"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="m10 9-3 3 3 3"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="m14 9 3 3-3 3"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },

  {
    title: 'Double Tap',
    description:
      'Geser ke kiri atau kanan dengan satu jari untuk memindahkan fokus aksesibilitas. Tata letak linier kami memastikan Anda menemukan Hadits sebelum kontrol navigasi.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <circle
          cx="12"
          cy="12"
          r="9"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <circle
          cx="9"
          cy="12"
          r="1.2"
          fill="currentColor"
        />
        <circle
          cx="15"
          cy="12"
          r="1.2"
          fill="currentColor"
        />
      </svg>
    ),
  },

  {
    title: 'Membaca Hadis',
    description:
      'Teks hadis dipecah menjadi bagian-bagian semantik. Pembaca layar Anda akan mengumumkan teks Arab diikuti dengan terjemahan untuk setiap segmen.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M4 5.5A2.5 2.5 0 0 1 6.5 3H11v16H6.5A2.5 2.5 0 0 0 4 21V5.5Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M20 5.5A2.5 2.5 0 0 0 17.5 3H13v16h4.5A2.5 2.5 0 0 1 20 21V5.5Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },

  {
    title: 'Memulai Audio',
    description:
      'Kontrol audio ditempatkan di bagian bawah tampilan Hadits. Setiap tombol memiliki label dengan kontras tinggi dan isyarat suara yang berbeda saat diaktifkan.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <circle
          cx="12"
          cy="12"
          r="9"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="m10 8.5 5 3.5-5 3.5v-7Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
];

export default function HelpPage() {
  const handleCardClick = (title: string) => {
    console.log(`Help card clicked: ${title}`);
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
  >
    <div style = {{gap: '2px', display: 'flex', flexDirection: 'column', padding: '20px 16px 16px'}}>
    <div>
        <h2 className="font-playfair" style={{ fontSize: '1.75rem', fontWeight: 700, color: '#064E3B'}}>
          Bantuan
        </h2>
            <p
              style={{ fontSize: '1rem', color: '#595b5f' }}
            >
              Panduan dan tutorial menggunakan DengarBain
            </p>
    </div>
    </div>

    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', 
                }}>     
        
        {helpCards.map((card) => (
              <HelpCard
                key={card.title}
                title={card.title}
                description={card.description}
                icon={card.icon}
                badge={card.badge}
                image={card.image}
                onClick={() => handleCardClick(card.title)}
              />
            ))}
        </div>
      </main>
    </>
  );
}