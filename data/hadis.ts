export type HadisStatus = 'hafal' | 'sedang' | 'belum';

export interface Hadis {
  id: number;
  judul: string;
  arab: string;
  transliterasi: string;
  terjemahan: string;
  rawi: string;
  sumber: string;
  status: HadisStatus;
  durasiAudio: string;
}

export const hadisData: Hadis[] = [
  {
    id: 1,
    judul: 'Amal bergantung kepada Niat',
    arab: 'عَنْ أَمِيرِ الْمُؤْمِنِينَ أَبِي حَفْصٍ عُمَرَ بْنِ الْخَطَّابِ رَضِيَ اللهُ عَنْهُ قَالَ: سَمِعْتُ رَسُولَ اللهِ صلى الله عليه و سلم يَقُولُ: إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى',
    transliterasi: "Innamal a'maalu bin niyyaat, wa innama likulli imri'in maa nawaa",
    terjemahan: 'Sesungguhnya setiap amalan itu tergantung pada niatnya. Dan sesungguhnya setiap orang mendapatkan apa yang ia niatkan.',
    rawi: 'Umar bin Khattab',
    sumber: 'Bukhari & Muslim',
    status: 'hafal',
    durasiAudio: '2:15',
  },
  {
    id: 2,
    judul: 'Islam, Iman, Ihsan',
    arab: 'عَنْ عُمَرَ رَضِيَ اللهُ عَنْهُ أَيْضاً قَالَ: بَيْنَمَا نَحْنُ جُلُوسٌ عِنْدَ رَسُولِ اللهِ صلى الله عليه وسلم ذَاتَ يَوْمٍ، إِذْ طَلَعَ عَلَيْنَا رَجُلٌ شَدِيدُ بَيَاضِ الثِّيَابِ، شَدِيدُ سَوَادِ الشَّعَرِ',
    transliterasi: "Baynamaa nahnu juluusun 'inda Rasulillaahi sallallaahu 'alaihi wasallam dhata yawmin",
    terjemahan: 'Nabi (ﷺ) ditanyakan tentang Islam, Iman dan Ihsan. Beliau menjawab dengan lengkap tentang ketiganya dengan sangat terperinci.',
    rawi: 'Umar bin Khattab',
    sumber: 'Muslim',
    status: 'belum',
    durasiAudio: '3:42',
  },
  {
    id: 3,
    judul: 'Rukun Islam',
    arab: 'عَنِ ابْنِ عُمَرَ رَضِيَ اللهُ عَنْهُمَا قَالَ: قَالَ رَسُولُ اللهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ: بُنِيَ الإِسْلاَمُ عَلَى خَمْسٍ: شَهَادَةِ أَنْ لاَ إِلَهَ إِلاَّ اللهُ وَأَنَّ مُحَمَّداً رَسُولُ اللهِ',
    transliterasi: "Bunial Islaamu 'alaa khamsin: shahaadati an laa ilaaha illallaahu wa anna Muhammadan rasuululllaah",
    terjemahan: 'Islam didirikan 5 perkara: Bersaksi bahwa tiada tuhan selain Allah dan Muhammad adalah utusan Allah, mendirikan shalat, menunaikan zakat, haji ke Baitullah, dan puasa Ramadhan.',
    rawi: 'Ibn Umar',
    sumber: 'Muslim',
    status: 'sedang',
    durasiAudio: '2:58',
  },
  {
    id: 4,
    judul: 'Penciptaan Manusia',
    arab: 'عَنْ أَبِي عَبْدِ الرَّحْمَنِ عَبْدِ اللهِ بْنِ مَسْعُودٍ رَضِيَ اللهُ عَنْهُ قَالَ: حَدَّثَنَا رَسُولُ اللهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ وَهُوَ الصَّادِقُ الْمَصْدُوقُ',
    transliterasi: "Inna ahadakum yujma'u khalquhu fii bathni ummihi arba'iina yawman nutfatan",
    terjemahan: 'Sesungguhnya setiap kalian dikumpulkan penciptaannya dalam rahim ibunya selama 40 hari dalam bentuk nutfah, kemudian menjadi segumpal darah, lalu segumpal daging.',
    rawi: 'Abdullah bin Masud',
    sumber: 'Bukhari & Muslim',
    status: 'belum',
    durasiAudio: '4:10',
  },
  {
    id: 5,
    judul: 'Keutamaan Berbuat Baik',
    arab: 'عَنْ أُمِّ الْمُؤْمِنِينَ أُمِّ عَبْدِ اللهِ عَائِشَةَ رَضِيَ اللهُ عَنْهَا قَالَتْ: قَالَ رَسُولُ اللهِ صلى الله عليه وسلم: مَا مِنْ شَيْءٍ أَثْقَلُ فِي الْمِيزَانِ مِنْ حُسْنِ الْخُلُقِ',
    transliterasi: "Maa min shay'in atsqalu fil miizaani min husnil khuluq",
    terjemahan: 'Tidak ada yang lebih berat dalam timbangan amal daripada kebaikan akhlak seseorang. Dan sungguh, orang yang berakhlak baik akan mencapai derajat orang yang berpuasa dan shalat.',
    rawi: 'Aisyah',
    sumber: 'Bukhari & Muslim',
    status: 'sedang',
    durasiAudio: '1:55',
  },
  {
    id: 6,
    judul: 'Halal dan Haram',
    arab: 'عَنْ أَبِي عَبْدِ اللهِ النُّعْمَانِ بْنِ بَشِيرٍ رَضِيَ اللهُ عَنْهُمَا قَالَ: سَمِعْتُ رَسُولَ اللهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ يَقُولُ: إِنَّ الْحَلاَلَ بَيِّنٌ وَإِنَّ الْحَرَامَ بَيِّنٌ',
    transliterasi: "Innal halaala bayyinun wa innal haraama bayyinun wa baynahumaa umuurun mushtabihaatun",
    terjemahan: 'Sesungguhnya yang halal itu jelas dan yang haram itu jelas, dan di antara keduanya terdapat perkara-perkara yang meragukan (syubhat) yang tidak diketahui oleh kebanyakan manusia.',
    rawi: 'Numan bin Basyir',
    sumber: 'Bukhari & Muslim',
    status: 'belum',
    durasiAudio: '3:20',
  },
  {
    id: 7,
    judul: 'Agama adalah Nasihat',
    arab: 'عَنْ أَبِي رُقَيَّةَ تَمِيمٍ بْنِ أَوْسٍ الدَّارِيِّ رَضِيَ اللهُ عَنْهُ أَنَّ النَّبِيَّ صلى الله عليه وسلم قَالَ: الدِّينُ النَّصِيحَةُ',
    transliterasi: "Ad-diinu an-nasiihat. Qulnaa: liman? Qaala: lillaahi wa likitaabihi wa lirasuulihi",
    terjemahan: 'Agama itu adalah nasihat. Kami bertanya: Untuk siapa? Beliau menjawab: Untuk Allah, kitab-Nya, rasul-Nya, pemimpin kaum muslimin dan orang awam mereka.',
    rawi: 'Tamim ad-Dari',
    sumber: 'Muslim',
    status: 'belum',
    durasiAudio: '2:05',
  },
  {
    id: 8,
    judul: 'Kesucian Seorang Muslim',
    arab: 'عَنِ ابْنِ عُمَرَ رَضِيَ اللهُ عَنْهُمَا أَنَّ رَسُولَ اللهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ قَالَ: أُمِرْتُ أَنْ أُقَاتِلَ النَّاسَ حَتَّى يَشْهَدُوا أَنْ لاَ إِلَهَ إِلاَّ اللهُ',
    transliterasi: "Umirtu an uqaatilan naasa hattaa yashhaduu an laa ilaaha illallaah wa anna Muhammadan rasuulullaah",
    terjemahan: 'Aku diperintahkan untuk memerangi manusia hingga mereka bersaksi bahwa tiada ilah selain Allah dan Muhammad adalah Rasul-Nya.',
    rawi: 'Ibn Umar',
    sumber: 'Bukhari & Muslim',
    status: 'belum',
    durasiAudio: '2:45',
  },
];

export const lastOpenedHadis = hadisData[4]; // Hadis ke-5
