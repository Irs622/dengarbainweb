export type HadisStatus = 'hafal' | 'sedang' | 'belum';

export interface KataPilihan {
  arab: string;
  transliterasi: string;
  arti: string;
}

export interface Hadis {
  id: number;
  judul: string;
  arab: string;
  transliterasi: string;
  terjemahan: string;
  rawi: string;
  sumber: string;
  kualitas?: string;
  status: HadisStatus;
  durasiAudio: string;
  urgensi?: string[];
  konteks?: string;
  kataPilihan?: KataPilihan[];
}

export const hadisData: Hadis[] = [
  {
    id: 1,
    judul: "Amal Bergantung pada Niat",
    arab: "عَنْ أَمِيْرِ الْمُؤْمِنِينَ أَبِي حَفْصٍ عُمَرَ بْنِ الْخَطَّابِ رَضِيَ اللهُ عَنْهُ قَالَ: سَمِعْتُ رَسُوْلَ اللهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ يَقُوْلُ: إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى. فَمَنْ كَانَتْ هِجْرَتُهُ إِلَى اللهِ وَرَسُوْلِهِ فَهِجْرَتُهُ إِلَى اللهِ وَرَسُوْلِهِ، وَمَنْ كَانَتْ هِجْرَتُهُ لِدُنْيَا يُصِيْبُهَا أَوْ امْرَأَةٍ يَنْكِحُهَا فَهِجْرَتُهُ إِلَى مَا هَاجَرَ إِلَيْهِ.",
    transliterasi: "Innamal a'maalu bin-niyyaati, wa innamaa likullimri-in maa nawaa...",
    terjemahan: "Dari Amirul Mukminin, Abu Hafsh Umar bin Khattab radhiyallahu 'anhu, ia berkata: Aku mendengar Rasulullah shallallahu 'alaihi wa sallam bersabda: \"Sesungguhnya semua perbuatan itu bergantung pada niatnya. Dan sesungguhnya setiap orang akan mendapatkan balasan sesuai dengan apa yang ia niatkan. Maka, barang siapa yang berhijrah (berpindah) karena Allah dan Rasul-Nya, maka hijrahnya akan diterima oleh Allah dan Rasul-Nya. Namun, barang siapa yang berhijrah karena urusan dunia yang ingin didapatkannya, atau karena wanita yang ingin dinikahinya, maka hijrahnya hanya mendapatkan sesuai dengan apa yang ia tuju tersebut.\"",
    rawi: "Umar bin Khattab",
    sumber: "HR. Bukhari dan Muslim",
    kualitas: "Shahih",
    status: "hafal",
    durasiAudio: "2:15",
    urgensi: [
      "Niat adalah pondasi amal. Sebuah perbuatan baik harus dimulai dengan niat yang tulus karena Allah agar diterima dan mendapatkan pahala. Tanpa niat yang benar, perbuatan baik bisa menjadi sia-sia.",
      "Mengajarkan kejujuran hati. Manusia mungkin hanya bisa melihat tindakan kita dari luar, tetapi Allah Maha Melihat sampai ke dalam hati dan niat kita yang paling tersembunyi.",
      "Memotivasi untuk memperbaiki tujuan hidup. Pekerjaan sehari-hari yang sederhana bisa bernilai ibadah yang besar jika diniatkan untuk kebaikan dan karena Allah."
    ],
    konteks: "Hadis ini disampaikan oleh Nabi Muhammad SAW berkaitan dengan peristiwa hijrah (perpindahan umat Islam) dari kota Makkah ke Madinah. Saat itu, ada seorang laki-laki yang ikut berpindah bukan karena niat ibadah kepada Allah atau membela agama. Laki-laki tersebut ikut pindah karena ingin menikahi seorang wanita bernama Ummu Qais yang kebetulan juga ikut berhijrah. Oleh karena itu, Nabi Muhammad SAW menjelaskan bahwa nilai dan pahala dari sebuah tindakan sangat bergantung pada niat di dalam hati pelakunya. Jika niatnya hanya untuk dunia, ia hanya mendapat dunia. Jika niatnya karena Allah, ia akan mendapat kebaikan dari Allah.",
    kataPilihan: [
      { arab: "النِّيَّاتِ", transliterasi: "An-Niyyaati", arti: "Niat atau maksud di dalam hati. Ini adalah dorongan atau tekad kuat di dalam hati sebelum melakukan suatu perbuatan." },
      { arab: "هِجْرَتُهُ", transliterasi: "Hijratuhu", arti: "Hijrah atau perpindahannya. Secara sejarah berarti pindah dari Makkah ke Madinah, tapi secara makna umum berarti berpindah dari keburukan menuju kebaikan." },
      { arab: "يُصِيْبُهَا", transliterasi: "Yushiibuhaa", arti: "Meraihnya atau mendapatkannya. Merujuk pada orang yang melakukan suatu perbuatan hanya untuk mendapatkan keuntungan duniawi semata." }
    ]
  },
  {
    id: 2,
    judul: "Pengertian Islam, Iman, dan Ihsan",
    arab: "عَنْ عُمَرَ رَضِيَ اللهُ عَنْهُ أَيْضًا قَالَ: بَيْنَمَا نَحْنُ جُلُوْسٌ عِنْدَ رَسُوْلِ اللهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ ذَاتَ يَوْمٍ إِذْ طَلَعَ عَلَيْنَا رَجُلٌ شَدِيْدُ بَيَاضِ الثِّيَابِ شَدِيْدُ سَوَادِ الشَّعْرِ، لَا يُرَى عَلَيْهِ أَثَرُ السَّفَرِ، وَلَا يَعْرِفُهُ مِنَّا أَحَدٌ، حَتَّى جَلَسَ إِلَى النَّبِيِّ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ، فَأَسْنَدَ رُكْبَتَيْهِ إِلَى رُكْبَتَيْهِ وَوَضَعَ كَفَّيْهِ عَلَى فَخِذَيْهِ وَقَالَ: يَا مُحَمَّدُ أَخْبِرْنِي عَنِ الْإِسْلَامِ. فَقَالَ رَسُوْلُ اللهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ: الْإِسْلَامُ أَنْ تَشْهَدَ أَنْ لَا إِلَهَ إِلَّا اللهُ وَأَنَّ مُحَمَّدًا رَسُوْلُ اللهِ، وَتُقِيْمَ الصَّلَاةَ، وَتُؤْتِيَ الزَّكَاةَ، وَتَصُوْمَ رَمَضَانَ، وَتَحُجَّ الْبَيْتَ إِنِ اسْتَطَعْتَ إِلَيْهِ سَبِيْلًا. قَالَ: صَدَقْتَ. فَعَجِبْنَا لَهُ يَسْأَلُهُ وَيُصَدِّقُهُ. قَالَ: فَأَخْبِرْنِي عَنِ الْإِيْمَانِ. قَالَ: أَنْ تُؤْمِنَ بِاللهِ وَمَلَائِكَتِهِ وَكُتُبِهِ وَرُسُلِهِ وَالْيَوْمِ الْآخِرِ، وَتُؤْمِنَ بِالْقَدَرِ خَيْرِهِ وَشَرِّهِ. قَالَ: صَدَقْتَ. قَالَ: فَأَخْبِرْنِي عَنِ الْإِحْسَانِ. قَالَ: أَنْ تَعْبُدَ اللهَ كَأَنَّكَ تَرَاهُ، فَإِنْ لَمْ تَكُنْ تَرَاهُ فَإِنَّهُ يَرَاكَ. قَالَ: فَأَخْبِرْنِي عَنِ السَّاعَةِ. قَالَ: مَا الْمَسْئُوْلُ عَنْهَا بِأَعْلَمَ مِنَ السَّائِلِ. قَالَ: فَأَخْبِرْنِي عَنْ أَمَارَاتِهَا. قَالَ: أَنْ تَلِدَ الْأَمَةُ رَبَّتَهَا، وَأَنْ تَرَى الْحُفَاةَ الْعُرَاةَ الْعَالَةَ رِعَاءَ الشَّاءِ يَتَطَاوَلُوْنَ فِي الْبُنْيَانِ. ثُمَّ انْطَلَقَ فَلَبِثْتُ مَلِيًّا، ثُمَّ قَالَ: يَا عُمَرُ، أَتَدْرِي مَنِ السَّائِلُ؟ قُلْتُ: اللهُ وَرَسُوْلُهُ أَعْلَمُ. قَالَ: فَإِنَّهُ جِبْرِيْلُ أَتَاكُمْ يُعَلِّمُكُمْ دِيْنَكُمْ.",
    transliterasi: "Baynamaa nahnu juluusun 'inda Rasuulillaahi shallallaahu 'alaihi wa sallama dzaata yawmin...",
    terjemahan: "Dari Umar radhiyallahu 'anhu, ia berkata: Suatu hari, ketika kami sedang duduk bersama Rasulullah shallallahu 'alaihi wa sallam, tiba-tiba datang seorang laki-laki. Pakaiannya sangat putih dan rambutnya sangat hitam. Tidak terlihat tanda-tanda dia habis bepergian jauh, dan tidak ada satu pun dari kami yang mengenalnya. Laki-laki itu duduk di depan Nabi, menempelkan kedua lututnya ke lutut Nabi, meletakkan kedua tangannya di atas paha Nabi, lalu berkata, \"Wahai Muhammad, beritahu aku tentang Islam.\" Rasulullah menjawab, \"Islam adalah engkau bersaksi bahwa tidak ada Tuhan selain Allah dan Muhammad adalah utusan Allah, mendirikan shalat, membayar zakat, berpuasa di bulan Ramadhan, dan pergi haji ke Baitullah jika engkau mampu.\" Laki-laki itu berkata, \"Engkau benar.\" Kami merasa heran, dia yang bertanya tapi dia juga yang membenarkannya. Lalu dia bertanya lagi, \"Beritahu aku tentang Iman.\" Rasulullah menjawab, \"Engkau yakin dan percaya kepada Allah, malaikat-malaikat-Nya, kitab-kitab-Nya, rasul-rasul-Nya, hari kiamat, dan engkau percaya pada takdir yang baik maupun yang buruk.\" Laki-laki itu berkata, \"Engkau benar.\" Dia bertanya lagi, \"Beritahu aku tentang Ihsan.\" Rasulullah menjawab, \"Engkau beribadah kepada Allah seolah-olah engkau melihat-Nya. Jika engkau tidak bisa melihat-Nya, ketahuilah bahwa Allah pasti melihatmu.\" Laki-laki itu bertanya lagi, \"Beritahu aku kapan terjadinya hari kiamat.\" Rasulullah menjawab, \"Yang ditanya tidak lebih tahu daripada yang bertanya.\" Laki-laki itu berkata, \"Kalau begitu, beritahu aku tanda-tandanya.\" Rasulullah menjawab, \"Jika seorang budak perempuan melahirkan anak majikannya, dan jika engkau melihat orang miskin, tidak beralas kaki, dan penggembala domba, mereka saling berlomba membangun gedung yang tinggi.\" Setelah itu laki-laki tersebut pergi. Aku terdiam beberapa saat. Lalu Rasulullah bertanya kepadaku, \"Wahai Umar, tahukah kamu siapa yang bertanya tadi?\" Aku menjawab, \"Allah dan Rasul-Nya lebih tahu.\" Rasulullah bersabda, \"Dia adalah Malaikat Jibril yang datang kepada kalian untuk mengajarkan agama kalian.\"",
    rawi: "Umar bin Khattab",
    sumber: "HR. Muslim",
    kualitas: "Shahih",
    status: "sedang",
    durasiAudio: "4:30",
    urgensi: [
      "Hadis ini adalah rangkuman dari seluruh ajaran agama Islam. Agama kita dibangun di atas tiga hal utama: Islam (tindakan nyata), Iman (keyakinan dalam hati), dan Ihsan (kesadaran beribadah dengan sepenuh hati).",
      "Mengajarkan cara belajar dan sopan santun (adab) yang baik. Laki-laki tersebut (Malaikat Jibril) duduk dengan tenang, rapi, dan bertanya dengan jelas. Ini adalah contoh bagaimana kita harus bersikap saat belajar agama.",
      "Menyadarkan kita bahwa hanya Allah yang tahu kapan hari kiamat akan terjadi. Tugas manusia bukanlah menebak kapan kiamat tiba, melainkan mempersiapkan diri dengan berbuat kebaikan."
    ],
    konteks: "Hadis ini terjadi karena para sahabat Nabi biasanya merasa segan dan malu untuk bertanya langsung kepada Nabi Muhammad SAW tentang hal-hal yang sangat mendasar. Oleh karena itu, Allah mengutus Malaikat Jibril dalam wujud seorang manusia yang bersih dan rapi. Jibril datang dan bertanya langsung kepada Nabi di hadapan para sahabat. Tujuannya bukan karena Jibril tidak tahu, melainkan agar para sahabat yang mendengarkan percakapan tersebut bisa belajar dan memahami dasar-dasar agama mereka secara langsung.",
    kataPilihan: [
      { arab: "الْإِسْلَامُ", transliterasi: "Al-Islaamu", arti: "Kepatuhan dan ketundukan. Ini adalah tindakan ibadah fisik yang terlihat oleh orang lain, seperti shalat, puasa, dan zakat." },
      { arab: "الْإِيْمَانُ", transliterasi: "Al-Iimaanu", arti: "Keyakinan atau kepercayaan. Ini adalah rasa percaya yang kuat di dalam hati tentang Allah, malaikat, kitab, rasul, hari kiamat, dan takdir." },
      { arab: "الْإِحْسَانُ", transliterasi: "Al-Ihsaanu", arti: "Berbuat kebaikan secara maksimal. Yaitu beribadah dan berbuat baik dengan penuh kesadaran bahwa Allah selalu mengawasi dan melihat kita." }
    ]
  },
  {
    id: 3,
    judul: "Rukun Islam Sebagai Fondasi Agama",
    arab: "عَنْ أَبِيْ عَبْدِ الرَّحْمَنِ عَبْدِ اللهِ بْنِ عُمَرَ بْنِ الْخَطَّابِ رَضِيَ اللهُ عَنْهُمَا قَالَ: سَمِعْتُ رَسُوْلَ اللهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ يَقُوْلُ: بُنِيَ الْإِسْلَامُ عَلَى خَمْسٍ: شَهَادَةِ أَنْ لَا إِلَهَ إِلَّا اللهُ وَأَنَّ مُحَمَّدًا رَسُوْلُ اللهِ، وَإِقَامِ الصَّلَاةِ، وَإِيْتَاءِ الزَّكَاةِ، وَحَجِّ الْبَيْتِ، وَصَوْمِ رَمَضَانَ.",
    transliterasi: "Buniya al-Islaamu 'alaa khamsin: syahaadati an laa ilaaha illallaah...",
    terjemahan: "Dari Abu Abdurrahman, yaitu Abdullah bin Umar bin Khattab radhiyallahu 'anhuma, ia berkata: Aku mendengar Rasulullah shallallahu 'alaihi wa sallam bersabda, \"Islam itu dibangun di atas lima hal (tiang): bersaksi bahwa tidak ada Tuhan selain Allah dan bahwa Muhammad adalah utusan Allah, mendirikan shalat, membayar zakat, pergi haji ke Baitullah (Kakbah), dan berpuasa di bulan Ramadhan.\"",
    rawi: "Abdullah bin Umar",
    sumber: "HR. Bukhari dan Muslim",
    kualitas: "Shahih",
    status: "hafal",
    durasiAudio: "2:10",
    urgensi: [
      "Hadis ini menjelaskan bahwa Islam seperti sebuah bangunan rumah. Lima hal di atas adalah tiang-tiang utamanya. Jika tiangnya kuat, maka kuatlah iman seseorang.",
      "Mengajarkan urutan ibadah yang paling penting. Dimulai dari keyakinan hati (syahadat), lalu ibadah fisik sehari-hari (shalat), ibadah harta (zakat), ibadah menahan diri (puasa), hingga ibadah gabungan fisik dan harta jika mampu (haji).",
      "Memberikan semangat agar setiap muslim berusaha mengerjakan kelima ibadah tersebut dengan rutin dan ikhlas, agar bangunan agamanya tidak runtuh."
    ],
    konteks: "Rasulullah shallallahu 'alaihi wa sallam menyampaikan hadis ini sebagai cara yang mudah dan indah untuk mengajar para sahabat tentang hal-hal paling wajib dalam agama Islam. Karena pada zaman itu tidak semua orang bisa langsung paham ajaran agama yang luas, Nabi menggunakan perumpamaan yang sangat jelas, yaitu \"sebuah bangunan\". Dengan perumpamaan ini, setiap muslim dari kalangan mana pun dapat dengan mudah mengingat bahwa mereka harus memelihara kelima tiang tersebut agar agama Islam tetap tegak di dalam diri mereka.",
    kataPilihan: [
      { arab: "بُنِيَ", transliterasi: "Buniya", arti: "Dibangun. Menunjukkan bahwa agama Islam itu nyata dan harus ditegakkan seperti kita sedang menyusun batu bata menjadi sebuah bangunan rumah." },
      { arab: "خَمْسٍ", transliterasi: "Khamsin", arti: "Lima. Yaitu lima ibadah paling utama yang menjadi tiang agama (Rukun Islam)." },
      { arab: "شَهَادَةِ", transliterasi: "Syahaadati", arti: "Persaksian atau janji setia. Ini adalah ucapan tegas dari mulut yang diyakini dalam hati bahwa Allah adalah satu-satunya Tuhan dan Nabi Muhammad adalah utusan-Nya." }
    ]
  },
  {
    id: 4,
    judul: "Tahapan Penciptaan Manusia dan Ketetapan Takdir",
    arab: "عَنْ أَبِيْ عَبْدِ الرَّحْمَنِ عَبْدِ اللهِ بْنِ مَسْعُوْدٍ رَضِيَ اللهُ عَنْهُ قَالَ: حَدَّثَنَا رَسُوْلُ اللهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ وَهُوَ الصَّادِقُ الْمَصْدُوْقُ: إِنَّ أَحَدَكُمْ يُجْمَعُ خَلْقُهُ فِيْ بَطْنِ أُمِّهِ أَرْبَعِيْنَ يَوْمًا نُطْفَةً، ثُمَّ يَكُوْنُ عَلَقَةً مِثْلَ ذَلِكَ، ثُمَّ يَكُوْنُ مُضْغَةً مِثْلَ ذَلِكَ، ثُمَّ يُرْسَلُ إِلَيْهِ الْمَلَكُ فَيَنْفُخُ فِيْهِ الرُّوْحَ، وَيُؤْمَرُ بِأَرْبَعِ كَلِمَاتٍ: بِكَتْبِ رِزْقِهِ، وَأَجَلِهِ، وَعَمَلِهِ، وَشَقِيٌّ أَوْ سَعِيْدٌ. فَوَاللهِ الَّذِيْ لَا إِلَهَ غَيْرُهُ، إِنَّ أَحَدَكُمْ لَيَعْمَلُ بِعَمَلِ أَهْلِ الْجَنَّةِ حَتَّى مَا يَكُوْنُ بَيْنَهُ وَبَيْنَهَا إِلَّا ذِرَاعٌ، فَيَسْبِقُ عَلَيْهِ الْكِتَابُ فَيَعْمَلُ بِعَمَلِ أَهْلِ النَّارِ فَيَدْخُلُهَا. وَإِنَّ أَحَدَكُمْ لَيَعْمَلُ بِعَمَلِ أَهْلِ النَّارِ حَتَّى مَا يَكُوْنُ بَيْنَهُ وَبَيْنَهَا إِلَّا ذِرَاعٌ، فَيَسْبِقُ عَلَيْهِ الْكِتَابُ فَيَعْمَلُ بِعَمَلِ أَهْلِ الْجَنَّةِ فَيَدْخُلُهَا.",
    transliterasi: "Inna ahadakum yujma'u khalquhu fii bathni ummihi arba'iina yawman nutfatan...",
    terjemahan: "Dari Abu Abdurrahman, yaitu Abdullah bin Mas'ud radhiyallahu 'anhu, ia berkata: Rasulullah shallallahu 'alaihi wa sallam yang selalu benar dan dibenarkan, telah bercerita kepada kami: \"Sesungguhnya setiap orang dari kalian dikumpulkan proses penciptaannya di dalam perut ibunya selama empat puluh hari sebagai setetes mani. Kemudian berubah menjadi segumpal darah selama empat puluh hari juga. Kemudian berubah menjadi segumpal daging selama empat puluh hari juga. Lalu, diutuslah malaikat kepadanya untuk meniupkan roh (jiwa) ke dalamnya. Malaikat itu diperintahkan untuk mencatat empat hal: catatan rezekinya, batas umurnya (ajalnya), amal perbuatannya, dan apakah dia kelak menjadi orang yang celaka atau orang yang bahagia. Maka demi Allah yang tidak ada Tuhan selain-Nya, sesungguhnya ada seseorang dari kalian yang terus melakukan perbuatan baik seperti ahli surga, sampai jarak antara dirinya dan surga sangat dekat (tinggal seukuran lengan). Namun karena takdirnya sudah tercatat, ia malah berbuat keburukan di akhir hidupnya, sehingga ia masuk neraka. Dan sesungguhnya ada seseorang dari kalian yang terus melakukan perbuatan buruk seperti ahli neraka, sampai jarak antara dirinya dan neraka sangat dekat. Namun karena takdirnya sudah tercatat, ia malah berbuat kebaikan di akhir hidupnya, sehingga ia masuk surga.\"",
    rawi: "Abdullah bin Mas'ud",
    sumber: "HR. Bukhari dan Muslim",
    kualitas: "Shahih",
    status: "belum",
    durasiAudio: "3:40",
    urgensi: [
      "Mengingatkan kita untuk tidak sombong dengan ibadah yang sudah dilakukan. Akhir hidup seseorang adalah rahasia Allah, sehingga kita harus selalu berdoa agar diakhiri dalam keadaan baik (husnul khatimah).",
      "Memberikan harapan besar bagi orang yang pernah berbuat salah. Jangan pernah putus asa, karena pintu tobat selalu terbuka dan selalu ada kesempatan untuk menjadi baik sebelum ajal tiba.",
      "Memberikan ketenangan batin. Rezeki, umur, dan takdir kita sudah diatur dengan sangat baik oleh Allah sejak kita di dalam kandungan. Tugas kita hanya terus berusaha dan berbuat kebaikan."
    ],
    konteks: "Rasulullah shallallahu 'alaihi wa sallam menyampaikan hadis ini untuk mengajarkan tentang kehebatan dan kekuasaan Allah dalam menciptakan manusia di dalam perut ibu, sebuah proses yang pada zaman itu belum bisa dilihat langsung oleh mata manusia. Nabi juga ingin menanamkan keyakinan bahwa seluruh perjalanan hidup manusia sudah direncanakan dengan rapi oleh Allah. Pelajaran ini diberikan agar para sahabat memiliki hati yang tenang dalam menjalani hidup dan selalu bergantung kepada Allah sampai akhir hayat.",
    kataPilihan: [
      { arab: "نُطْفَةً", transliterasi: "Nuthfatan", arti: "Setetes mani (sperma). Ini adalah tahap paling awal dari proses pembentukan calon bayi di dalam rahim ibu." },
      { arab: "الرُّوْحَ", transliterasi: "Ar-Ruuha", arti: "Roh atau jiwa. Ini adalah sesuatu yang ditiupkan oleh malaikat atas perintah Allah sehingga janin mulai memiliki kehidupan." },
      { arab: "شَقِيٌّ", transliterasi: "Syaqiyyun", arti: "Celaka atau menderita. Merujuk pada orang yang di akhir hidupnya melakukan keburukan sehingga ia tidak mendapatkan kasih sayang Allah." }
    ]
  },
  {
    id: 5,
    judul: "Larangan Membuat Sesuatu yang Baru dalam Agama",
    arab: "عَنْ أُمِّ الْمُؤْمِنِيْنَ أُمِّ عَبْدِ اللهِ عَائِشَةَ رَضِيَ اللهُ عَنْهَا قَالَتْ: قَالَ رَسُوْلُ اللهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ: مَنْ أَحْدَثَ فِيْ أَمْرِنَا هَذَا مَا لَيْسَ مِنْهُ فَهُوَ رَدٌّ. رَوَاهُ الْبُخَارِيُّ وَمُسْلِمٌ. وَفِيْ رِوَايَةٍ لِمُسْلِمٍ: مَنْ عَمِلَ عَمَلًا لَيْسَ عَلَيْهِ أَمْرُنَا فَهُوَ رَدٌّ.",
    transliterasi: "Man ahdatsa fii amrinaa haadzaa maa laysa minhu fahuwa raddun...",
    terjemahan: "Dari Ibu orang-orang beriman, Ummu Abdillah, yaitu Aisyah radhiyallahu 'anha, ia berkata: Rasulullah shallallahu 'alaihi wa sallam bersabda, \"Barang siapa yang membuat-buat hal baru dalam urusan agama kami ini, padahal tidak ada contohnya dari kami, maka perbuatan itu ditolak.\" Dan dalam riwayat Imam Muslim disebutkan: \"Barang siapa melakukan suatu amal ibadah yang tidak ada perintahnya dari kami, maka ibadah itu ditolak.\"",
    rawi: "Aisyah",
    sumber: "HR. Bukhari dan Muslim",
    kualitas: "Shahih",
    status: "belum",
    durasiAudio: "1:45",
    urgensi: [
      "Menjaga kemurnian ajaran Islam. Agama Islam sudah sempurna. Hadis ini mengingatkan kita untuk menjaga ibadah agar tetap asli seperti yang diajarkan oleh Nabi Muhammad SAW.",
      "Niat baik saja tidak cukup. Sebuah ibadah akan diterima oleh Allah jika memenuhi dua syarat: niatnya ikhlas karena Allah, dan caranya benar sesuai contoh dari Rasulullah SAW.",
      "Memberikan rasa tenang dan mudah. Kita tidak perlu repot mencari-cari atau membuat cara ibadah yang baru. Kita cukup meniru dan mengikuti apa yang sudah diajarkan dengan sebaik-baiknya."
    ],
    konteks: "Rasulullah shallallahu 'alaihi wa sallam menyampaikan pesan ini sebagai bentuk kasih sayang dan perlindungan bagi umatnya. Beliau mengetahui bahwa di masa depan akan ada orang-orang yang mencoba menambah atau mengubah aturan ibadah karena merasa itu baik. Oleh karena itu, beliau memberikan pedoman yang sangat jelas sejak awal: dalam urusan ibadah kepada Allah, pedomannya adalah aturan agama yang sudah ada, bukan sekadar perasaan atau selera manusia. Tujuannya agar agama Islam tidak rusak atau berubah dari jalan aslinya.",
    kataPilihan: [
      { arab: "أَحْدَثَ", transliterasi: "Ahdatsa", arti: "Membuat-buat atau menciptakan sesuatu yang baru. Dalam hadis ini maksudnya adalah mengarang cara ibadah baru yang tidak pernah diajarkan oleh Nabi." },
      { arab: "أَمْرِنَا", transliterasi: "Amrinaa", arti: "Urusan kami. Maksudnya adalah urusan aturan ibadah dan agama Islam, bukan urusan dunia sehari-hari seperti teknologi, makanan, atau ilmu pengetahuan." },
      { arab: "رَدٌّ", transliterasi: "Raddun", arti: "Tertolak atau ditolak. Maksudnya adalah ibadah tersebut tidak akan diterima oleh Allah dan tidak akan mendapatkan pahala." }
    ]
  },
  {
    id: 6,
    judul: "Menjauhi Hal yang Meragukan dan Menjaga Hati",
    arab: "عَنْ أَبِيْ عَبْدِ اللهِ النُّعْمَانِ بْنِ بَشِيْرٍ رَضِيَ اللهُ عَنْهُمَا قَالَ: سَمِعْتُ رَسُوْلَ اللهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ يَقُوْلُ: إِنَّ الْحَلَالَ بَيِّنٌ، وَإِنَّ الْحَرَامَ بَيِّنٌ، وَبَيْنَهُمَا أُمُوْرٌ مُشْتَبِهَاتٌ لَا يَعْلَمُهُنَّ كَثِيْرٌ مِنَ النَّاسِ، فَمَنِ اتَّقَى الشُّبُهَاتِ فَقَدِ اسْتَبْرَأَ لِدِيْنِهِ وَعِرْضِهِ، وَمَنْ وَقَعَ فِي الشُّبُهَاتِ وَقَعَ فِي الْحَرَامِ، كَالرَّاعِي يَرْعَى حَوْلَ الْحِمَى يُوْشِكُ أَنْ يَرْتَعَ فِيْهِ. أَلَا وَإِنَّ لِكُلِّ مَلِكٍ حِمًى، أَلَا وَإِنَّ حِمَى اللهِ مَحَارِمُهُ. أَلَا وَإِنَّ فِي الْجَسَدِ مُضْغَةً إِذَا صَلَحَتْ صَلَحَ الْجَسَدُ كُلُّهُ، وَإِذَا فَسَدَتْ فَسَدَ الْجَسَدُ كُلُّهُ، أَلَا وَهِيَ الْقَلْبُ.",
    transliterasi: "Innal halaala bayyinun wa innal haraama bayyinun wa baynahumaa umuurun musytabihaat...",
    terjemahan: "Dari Abu Abdillah, yaitu Nu'man bin Basyir radhiyallahu 'anhuma, ia berkata: Aku mendengar Rasulullah shallallahu 'alaihi wa sallam bersabda, \"Sesungguhnya yang halal (boleh) itu sudah jelas, dan yang haram (dilarang) itu juga sudah jelas. Di antara keduanya ada hal-hal yang samar atau meragukan (syubhat), yang tidak diketahui oleh kebanyakan manusia. Maka, barang siapa yang menjauhi hal-hal yang meragukan itu, berarti ia telah menyelamatkan agama dan nama baiknya. Namun, barang siapa yang jatuh ke dalam hal yang meragukan, maka ia akan jatuh ke dalam hal yang diharamkan. Sama seperti seorang penggembala yang membawa ternaknya makan rumput di dekat kebun larangan, lama-lama ternaknya pasti akan masuk memakan tanaman di kebun itu. Ketahuilah, setiap raja memiliki daerah larangan. Dan ketahuilah, daerah larangan Allah adalah hal-hal yang diharamkan-Nya. Ketahuilah, di dalam tubuh manusia ada segumpal daging. Jika daging itu baik, maka baiklah seluruh tubuhnya. Jika daging itu rusak, maka rusaklah seluruh tubuhnya. Ketahuilah, segumpal daging itu adalah hati.\"",
    rawi: "An-Nu'man bin Basyir",
    sumber: "HR. Bukhari dan Muslim",
    kualitas: "Shahih",
    status: "belum",
    durasiAudio: "2:50",
    urgensi: [
      "Mengajarkan kita untuk selalu berhati-hati. Jika kita ragu apakah sebuah perbuatan atau makanan itu boleh atau tidak, lebih baik ditinggalkan. Hal ini untuk mencegah kita melakukan dosa secara tidak sengaja.",
      "Menjaga nama baik dan kehormatan. Menjauhi perbuatan yang tidak jelas hukumnya akan membuat orang lain tidak berburuk sangka kepada kita.",
      "Hati adalah pusat kendali manusia. Jika hati kita baik, bersih, dan ikhlas, maka perkataan dan perbuatan fisik kita juga akan otomatis menjadi baik."
    ],
    konteks: "Rasulullah shallallahu 'alaihi wa sallam menyampaikan hadis ini untuk memberikan pedoman hidup yang aman. Beliau menyadari bahwa dalam kehidupan sehari-hari akan ada situasi di mana batas antara yang boleh (halal) dan yang dilarang (haram) terasa kurang jelas bagi sebagian orang. Agar mudah dipahami oleh semua kalangan, Nabi menggunakan contoh seorang penggembala ternak. Beliau mengajar kita agar tidak bermain-main atau mendekati batas larangan Allah, supaya kita selalu aman dan terjaga dari perbuatan dosa.",
    kataPilihan: [
      { arab: "مُشْتَبِهَاتٌ", transliterasi: "Musytabihaatun", arti: "Sesuatu yang samar atau meragukan. Yaitu hal-hal yang belum jelas bagi kita apakah itu diperbolehkan (halal) atau dilarang (haram)." },
      { arab: "حِمَى", transliterasi: "Hima", arti: "Daerah larangan atau wilayah yang dijaga ketat. Diumpamakan sebagai aturan atau batas larangan dari Allah yang sama sekali tidak boleh kita langgar." },
      { arab: "الْقَلْبُ", transliterasi: "Al-Qalbu", arti: "Hati. Ini adalah pusat perasaan dan penggerak di dalam tubuh manusia yang mengendalikan semua perbuatan fisik." }
    ]
  },
  {
    id: 7,
    judul: "Agama adalah Nasihat",
    arab: "عَنْ أَبِيْ رُقَيَّةَ تَمِيْمِ بْنِ أَوْسٍ الدَّارِيِّ رَضِيَ اللهُ عَنْهُ، أَنَّ النَّبِيَّ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ قَالَ: الدِّيْنُ النَّصِيْحَةُ. قُلْنَا: لِمَنْ؟ قَالَ: لِلَّهِ، وَلِكِتَابِهِ، وَلِرَسُوْلِهِ، وَلِأَئِمَّةِ الْمُسْلِمِيْنَ، وَعَامَّتِهِمْ.",
    transliterasi: "Ad-diinun-nashiihatu. Qulnaa: liman? Qaala: lillaahi wa likitaabihi...",
    terjemahan: "Dari Abu Ruqayyah Tamim bin Aus Ad-Dari radhiyallahu 'anhu, ia berkata bahwa Nabi shallallahu 'alaihi wa sallam bersabda, \"Agama itu adalah nasihat (ketulusan dan kepedulian).\" Kami (para sahabat) bertanya, \"Untuk siapa?\" Beliau menjawab, \"Untuk Allah, untuk kitab-Nya (Al-Qur'an), untuk utusan-Nya (Rasulullah), untuk para pemimpin umat Islam, dan untuk seluruh umat Islam pada umumnya.\"",
    rawi: "Tamim Ad-Dari",
    sumber: "HR. Muslim",
    kualitas: "Shahih",
    status: "belum",
    durasiAudio: "1:30",
    urgensi: [
      "Agama Islam mengajarkan kita untuk selalu peduli dan tulus. Nasihat dalam hadis ini berarti rasa sayang, kejujuran, dan keinginan agar pihak lain mendapatkan kebaikan.",
      "Mengajarkan sikap taat dan hormat. Nasihat untuk Allah, kitab-Nya, dan Rasul-Nya berarti kita harus beriman kepada Allah, rajin membaca dan mengamalkan Al-Qur'an, serta meniru perilaku Nabi Muhammad SAW.",
      "Mengajarkan kerukunan hidup berbangsa. Nasihat untuk pemimpin dan masyarakat berarti kita harus mendukung pemimpin dalam kebaikan, mengingatkan dengan cara yang sopan, serta saling tolong-menolong dengan sesama manusia."
    ],
    konteks: "Rasulullah shallallahu 'alaihi wa sallam menyampaikan hadis ini untuk merangkum seluruh ajaran agama Islam ke dalam satu kalimat yang sangat pendek dan mudah dihafal. Nabi ingin para sahabat paham bahwa inti dari beragama bukan sekadar gerakan ibadah untuk diri sendiri, melainkan memiliki hati yang tulus dan peduli. Pesan ini disampaikan agar umat Islam selalu menjaga niat yang bersih dalam berhubungan dengan Tuhan, dengan pemerintah, dan dengan teman-teman di lingkungan sekitar.",
    kataPilihan: [
      { arab: "الدِّيْنُ", transliterasi: "Ad-Diinu", arti: "Agama. Yaitu jalan atau aturan hidup yang menuntun manusia menuju kebahagiaan dan kebaikan." },
      { arab: "النَّصِيْحَةُ", transliterasi: "An-Nashiihah", arti: "Nasihat atau ketulusan. Yaitu memiliki niat yang bersih dan selalu menginginkan kebaikan untuk orang lain tanpa ada rasa iri." },
      { arab: "عَامَّتِهِمْ", transliterasi: "'Aammatihim", arti: "Masyarakat umum atau orang banyak. Merujuk kepada seluruh saudara sesama umat Islam dan orang-orang di sekitar kita." }
    ]
  },
  {
    id: 8,
    judul: "Terjaganya Darah dan Harta Seorang Muslim",
    arab: "عَنِ ابْنِ عُمَرَ رَضِيَ اللهُ عَنْهُمَا أَنَّ رَسُوْلَ اللهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ قَالَ: أُمِرْتُ أَنْ أُقَاتِلَ النَّاسَ حَتَّى يَشْهَدُوْا أَنْ لَا إِلَهَ إِلَّا اللهُ، وَأَنَّ مُحَمَّدًا رَسُوْلُ اللهِ، وَيُقِيْمُوا الصَّلَاةَ، وَيُؤْتُوا الزَّكَاةَ، فَإِذَا فَعَلُوْا ذَلِكَ عَصَمُوْا مِنِّيْ دِمَاءَهُمْ وَأَمْوَالَهُمْ إِلَّا بِحَقِّ الْإِسْلَامِ، وَحِسَابُهُمْ عَلَى اللهِ تَعَالَى.",
    transliterasi: "Umirtu an uqaatilan-naasa hattaa yasyhaduu an laa ilaaha illallaah...",
    terjemahan: "Dari Ibnu Umar radhiyallahu 'anhuma, bahwa Rasulullah shallallahu 'alaihi wa sallam bersabda, \"Aku diperintahkan (oleh Allah) untuk memerangi manusia (yang memusuhi agama) sampai mereka mau bersaksi bahwa tidak ada Tuhan selain Allah dan bahwa Muhammad adalah utusan Allah, serta mereka mendirikan shalat dan membayar zakat. Jika mereka sudah melakukan hal itu, maka darah (nyawa) dan harta mereka aman serta terlindungi dariku, kecuali ada pelanggaran aturan Islam. Dan perhitungan niat hati mereka adalah urusan Allah Ta'ala.\"",
    rawi: "Ibnu Umar",
    sumber: "HR. Bukhari dan Muslim",
    kualitas: "Shahih",
    status: "belum",
    durasiAudio: "2:00",
    urgensi: [
      "Nyawa dan harta sangat berharga. Dalam ajaran Islam, nyawa (darah) dan harta setiap manusia sangat dihormati, dilindungi, dan tidak boleh disakiti atau dirampas sembarangan.",
      "Menilai orang dari tindakan luarnya saja. Kita sebagai manusia hanya boleh menilai orang lain dari tindakan fisik yang terlihat (seperti syahadat, shalat, dan zakat). Kita tidak boleh menebak-nebak isi hati orang lain.",
      "Keadilan hanya milik Allah. Hanya Allah yang berhak menilai apakah hati seseorang itu benar-benar tulus beriman atau hanya berpura-pura. Tugas kita hanyalah berbuat baik kepada sesama."
    ],
    konteks: "Hadis ini disampaikan oleh Nabi Muhammad SAW dalam situasi peperangan zaman dahulu untuk mempertahankan diri dari musuh yang terus menyerang dan ingin menghancurkan umat Islam. Pesan utama dari hadis ini bukan untuk memaksa orang masuk Islam dengan kekerasan, melainkan untuk memberikan aturan pelindungan. Aturannya adalah: jika musuh di tengah perang mengucapkan syahadat, mau mendirikan shalat, dan membayar zakat, maka umat Islam harus berhenti menyerang. Nyawa dan harta mereka langsung dilindungi saat itu juga. Soal apakah hati mereka benar-benar beriman atau hanya takut karena perang, itu diserahkan sepenuhnya kepada penilaian Allah.",
    kataPilihan: [
      { arab: "أُقَاتِلَ", transliterasi: "Uqaatila", arti: "Berjuang atau memerangi. Dalam hadis ini, artinya adalah aturan pertahanan dalam menghadapi musuh yang sedang menyerang umat Islam secara fisik." },
      { arab: "عَصَمُوْا", transliterasi: "'Ashomuu", arti: "Terlindungi, terjaga, atau aman. Yaitu nyawa dan harta seseorang harus dihormati dan tidak boleh diganggu sama sekali." },
      { arab: "حِسَابُهُمْ", transliterasi: "Hisaabuhum", arti: "Perhitungan atau penilaian mereka. Maksudnya adalah penilaian tentang keikhlasan niat di dalam hati yang hanya bisa diketahui oleh Allah." }
    ]
  },
  {
    id: 9,
    judul: "Menjalankan Perintah Semampunya",
    arab: "عَنْ أَبِيْ هُرَيْرَةَ عَبْدِ الرَّحْمَنِ بْنِ صَخْرٍ رَضِيَ اللهُ عَنْهُ قَالَ: سَمِعْتُ رَسُوْلَ اللهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ يَقُوْلُ: مَا نَهَيْتُكُمْ عَنْهُ فَاجْتَنِبُوْهُ، وَمَا أَمَرْتُكُمْ بِهِ فَأْتُوا مِنْهُ مَا اسْتَطَعْتُمْ، فَإِنَّمَا أَهْلَكَ الَّذِيْنَ مِنْ قَبْلِكُمْ كَثْرَةُ مَسَائِلِهِمْ وَاخْتِلَافُهُمْ عَلَى أَنْبِيَائِهِمْ.",
    transliterasi: "Maa nahaytukum 'anhu fajtanibuuhu, wa maa amartukum bihi fa'tuu minhu mastatha'tum...",
    terjemahan: "Dari Abu Hurairah, yaitu Abdurrahman bin Shakhr radhiyallahu 'anhu, ia berkata: Aku mendengar Rasulullah shallallahu 'alaihi wa sallam bersabda, \"Apa saja yang aku larang kepada kalian, maka jauhilah. Dan apa saja yang aku perintahkan kepada kalian, maka kerjakanlah semampu kalian. Sesungguhnya yang menghancurkan umat-umat sebelum kalian adalah karena mereka terlalu banyak bertanya dan suka membantah para nabi mereka.\"",
    rawi: "Abu Hurairah",
    sumber: "HR. Bukhari dan Muslim",
    kualitas: "Shahih",
    status: "belum",
    durasiAudio: "1:40",
    urgensi: [
      "Agama Islam itu mudah dan tidak memberatkan. Jika ada perintah agama, kita diminta mengerjakannya sesuai dengan batas kemampuan dan tenaga kita. (Contohnya: jika tidak kuat shalat sambil berdiri, kita boleh shalat sambil duduk).",
      "Larangan harus dijauhi sepenuhnya. Berbeda dengan perintah yang bisa disesuaikan dengan kemampuan, jika itu adalah sebuah larangan (seperti mencuri atau berbohong), maka kita harus benar-benar menjauhinya dan tidak boleh melakukannya sama sekali.",
      "Hindari kebiasaan mencari-cari alasan. Kita diajarkan untuk langsung patuh pada perintah agama yang baik. Jangan banyak bertanya tentang hal-hal yang tidak penting, yang pada akhirnya malah bisa menyusahkan dan memberatkan diri kita sendiri."
    ],
    konteks: "Hadis ini disampaikan ketika Nabi Muhammad SAW sedang menjelaskan kewajiban ibadah haji kepada umat Islam. Saat itu, ada seorang sahabat yang bertanya berulang kali, \"Wahai Rasulullah, apakah kita harus pergi haji setiap tahun?\" Nabi sempat terdiam, lalu beliau menjawab, \"Jika aku jawab 'Ya', maka haji akan menjadi wajib setiap tahun dan kalian pasti tidak akan sanggup mengerjakannya.\" Oleh karena itu, Nabi menyampaikan pesan ini agar umatnya tidak banyak menanyakan hal yang sudah jelas, karena hal itu justru bisa membuat sebuah aturan menjadi lebih berat untuk dilakukan.",
    kataPilihan: [
      { arab: "فَاجْتَنِبُوْهُ", transliterasi: "Fajtanibuuhu", arti: "Maka jauhilah. Berlaku untuk larangan agama, yang artinya harus dihindari sepenuhnya tanpa alasan." },
      { arab: "مَا اسْتَطَعْتُمْ", transliterasi: "Mastatha'tum", arti: "Semampu kalian. Berlaku untuk perintah agama, yang dikerjakan sesuai batas kemampuan, kesehatan, dan tenaga seseorang." },
      { arab: "أَهْلَكَ", transliterasi: "Ahlaka", arti: "Menghancurkan atau membinasakan. Merujuk pada orang-orang di zaman dahulu yang hidupnya rusak karena suka membantah dan melawan nabi mereka." }
    ]
  },
  {
    id: 10,
    judul: "Makanan Halal dan Syarat Terkabulnya Doa",
    arab: "عَنْ أَبِيْ هُرَيْرَةَ رَضِيَ اللهُ عَنْهُ قَالَ: قَالَ رَسُوْلُ اللهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ: إِنَّ اللهَ تَعَالَى طَيِّبٌ لَا يَقْبَلُ إِلَّا طَيِّبًا، وَإِنَّ اللهَ أَمَرَ الْمُؤْمِنِيْنَ بِمَا أَمَرَ بِهِ الْمُرْسَلِيْنَ فَقَالَ: ﴿يَا أَيُّهَا الرُّسُلُ كُلُوا مِنَ الطَّيِّبَاتِ وَاعْمَلُوا صَالِحًا﴾، وَقَالَ: ﴿يَا أَيُّهَا الَّذِينَ آمَنُوا كُلُوا مِنْ طَيِّبَاتِ مَا رَزَقْنَاكُمْ﴾. ثُمَّ ذَكَرَ الرَّجُلَ يُطِيْلُ السَّفَرَ أَشْعَثَ أَغْبَرَ يَمُدُّ يَدَيْهِ إِلَى السَّمَاءِ: يَا رَبِّ، يَا رَبِّ، وَمَطْعَمُهُ حَرَامٌ، وَمَشْرَبُهُ حَرَامٌ، وَمَلْبَسُهُ حَرَامٌ، وَغُذِيَ بِالْحَرَامِ، فَأَنَّى يُسْتَجَابُ لَهُ؟ رَوَاهُ مُسْلِمٌ.",
    transliterasi: "Innallaaha Ta'aalaa thoyyibun laa yaqbalu illaa thoyyiban...",
    terjemahan: "Dari Abu Hurairah radhiyallahu 'anhu, ia berkata: Rasulullah shallallahu 'alaihi wa sallam bersabda, \"Sesungguhnya Allah itu Maha Baik dan hanya menerima hal-hal yang baik. Dan sesungguhnya Allah memerintahkan orang-orang beriman sama seperti apa yang Dia perintahkan kepada para rasul. Allah berfirman: 'Wahai para rasul, makanlah dari makanan yang baik-baik dan kerjakanlah kebajikan' (QS. Al-Mu'minun: 51). Dan Allah juga berfirman: 'Wahai orang-orang yang beriman, makanlah dari rezeki yang baik yang telah Kami berikan kepadamu' (QS. Al-Baqarah: 172). Kemudian Nabi menceritakan tentang seorang laki-laki yang melakukan perjalanan jauh, rambutnya kusut dan badannya berdebu. Orang itu mengangkat kedua tangannya ke langit sambil berdoa, 'Wahai Tuhanku, wahai Tuhanku!' Padahal makanannya dari yang haram, minumannya dari yang haram, pakaiannya dari yang haram, dan tubuhnya tumbuh dari hal-hal yang haram. Maka, bagaimana mungkin doanya bisa dikabulkan?\"",
    rawi: "Abu Hurairah",
    sumber: "HR. Muslim",
    kualitas: "Shahih",
    status: "belum",
    durasiAudio: "2:40",
    urgensi: [
      "Menjaga rezeki agar selalu halal dan bersih. Makanan, minuman, dan pakaian yang kita dapatkan dari jalan yang halal sangat berpengaruh pada diterimanya ibadah dan kebersihan hati kita.",
      "Kunci utama terkabulnya doa. Berdoa dengan bersungguh-sungguh dan mengangkat tangan adalah anjuran yang baik. Namun, doa bisa terhalang jika kehidupan kita masih dipenuhi oleh barang atau perbuatan yang haram.",
      "Meneladani para Nabi. Perintah untuk mencari rezeki yang halal serta mengerjakan amal saleh berlaku untuk semua manusia tanpa terkecuali, baik para rasul maupun umat biasa."
    ],
    konteks: "Rasulullah shallallahu 'alaihi wa sallam menyampaikan hadis ini sebagai pelajaran penting tentang adab berdoa. Sering kali seseorang merasa sudah berdoa dalam keadaan susah, lelah, dan sedang bepergian jauh (kondisi yang umumnya membuat doa cepat dijawab Allah), tetapi doanya belum terkabul. Melalui hadis ini, Nabi menjelaskan bahwa penyebab utama terhalangnya doa adalah keberadaan rezeki yang tidak halal di dalam diri seseorang, baik dari apa yang dimakan, diminum, maupun dipakai.",
    kataPilihan: [
      { arab: "طَيِّبٌ", transliterasi: "Thoyyibun", arti: "Maha Baik, suci, dan bersih. Menjelaskan bahwa Allah itu Mahasempurna dan hanya menyukai amal perbuatan serta rezeki yang halal dan bersih." },
      { arab: "أَشْعَثَ أَغْبَرَ", transliterasi: "Asy'atsa Aghbaro", arti: "Berambut kusut dan berdebu karena perjalanan jauh. Keadaan orang yang sedang susah seperti ini sangat pantas dikasihani dan didengar doanya oleh Allah, selama tidak terhalang oleh hal yang haram." },
      { arab: "يُسْتَجَابُ", transliterasi: "Yustajaabu", arti: "Dikabulkan atau dijawab. Merujuk pada permohonan doa yang diterima dan diwujudkan oleh Allah Ta'ala." }
    ]
  },
  {
    id: 11,
    judul: "Tinggalkan Hal yang Membuat Ragu",
    arab: "عَنْ أَبِيْ مُحَمَّدٍ الْحَسَنِ بْنِ عَلِيِّ بْنِ أَبِيْ طَالِبٍ سِبْطِ رَسُوْلِ اللهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ وَرَيْحَانَتِهِ رَضِيَ اللهُ عَنْهُمَا قَالَ: حَفِظْتُ مِنْ رَسُوْلِ اللهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ: «دَعْ مَا يَرِيْبُكَ إِلَى مَا لَا يَرِيْبُكَ». رَوَاهُ التِّرْمِذِيُّ وَالنَّسَائِيُّ، وَقَالَ التِّرْمِذِيُّ: حَدِيْثٌ حَسَنٌ صَحِيْحٌ.",
    transliterasi: "Da' maa yariibuka ilaa maa laa yariibuka...",
    terjemahan: "Dari Abu Muhammad, yaitu Al-Hasan bin Ali bin Abi Thalib, cucu Rasulullah shallallahu 'alaihi wa sallam dan kesayangan beliau radhiyallahu 'anhuma, ia berkata: Aku menghafal dari Rasulullah shallallahu 'alaihi wa sallam (sebuah sabda): \"Tinggalkanlah apa yang meragukanmu, dan beralihlah kepada apa yang tidak meragukanmu.\"",
    rawi: "Al-Hasan bin Ali",
    sumber: "HR. At-Tirmidzi dan An-Nasa'i",
    kualitas: "Hasan Shahih",
    status: "belum",
    durasiAudio: "1:20",
    urgensi: [
      "Mendatangkan ketenangan hati. Kebenaran dan kebaikan selalu mendatangkan rasa tenang dan damai di hati, sedangkan hal yang meragukan selalu menimbulkan rasa gelisah dan waswas.",
      "Menjaga diri dari dosa. Dengan membiasakan diri meninggalkan hal-hal yang tidak jelas kehalalannya, kita akan terlindung dari perbuatan haram.",
      "Menjadi pedoman praktis dalam mengambil keputusan. Jika kita bimbang antara dua pilihan tindakan atau makanan, pilihlah yang paling jelas kebaikannya dan paling menenangkan pikiran."
    ],
    konteks: "Al-Hasan bin Ali mengingat dan menghafal kalimat singkat ini langsung dari kakeknya, Nabi Muhammad SAW. Rasulullah menyampaikan pesan ini sebagai pedoman praktis bagi para sahabat dan umatnya ketika menghadapi pilihan yang membingungkan dalam kehidupan sehari-hari. Jika seseorang merasa ragu apakah suatu perkara itu halal atau haram, atau ragu tentang sahnya suatu ibadah, cara terbaik untuk menjaga hati tetap bersih adalah dengan segera meninggalkan hal yang meragukan tersebut dan memilih hal yang pasti benar.",
    kataPilihan: [
      { arab: "دَعْ", transliterasi: "Da'", arti: "Tinggalkanlah atau biarkanlah. Perintah tegas untuk melepaskan atau menjauhi sesuatu yang tidak memberi ketenangan." },
      { arab: "يَرِيْبُكَ", transliterasi: "Yariibuka", arti: "Hal yang membuatmu ragu, bimbang, atau gelisah di dalam hati." },
      { arab: "سِبْطِ", transliterasi: "Sibthi", arti: "Cucu, khususnya panggilan kasih sayang untuk cucu dari jalur anak perempuan (dalam hal ini Fatimah az-Zahra, putri Rasulullah SAW)." }
    ]
  },
  {
    id: 12,
    judul: "Meninggalkan Hal yang Tidak Bermanfaat",
    arab: "عَنْ أَبِيْ هُرَيْرَةَ رَضِيَ اللهُ عَنْهُ قَالَ: قَالَ رَسُوْلُ اللهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ: «مِنْ حُسْنِ إِسْلَامِ الْمَرْءِ تَرْكُهُ مَا لَا يَعْنِيْهِ».حَدِيْثٌ حَسَنٌ، رَوَاهُ التِّرْمِذِيُّ وَغَيْرُهُ هَكَذَا.",
    transliterasi: "Min husni Islaamil-mar-i tarkuhu maa laa ya'niihi...",
    terjemahan: "Dari Abu Hurairah radhiyallahu 'anhu, ia berkata: Rasulullah shallallahu 'alaihi wa sallam bersabda, \"Di antara tanda baiknya keislaman seseorang adalah ia meninggalkan apa yang tidak bermanfaat baginya.\"",
    rawi: "Abu Hurairah",
    sumber: "HR. At-Tirmidzi dan Ibnu Majah",
    kualitas: "Hasan",
    status: "belum",
    durasiAudio: "1:15",
    urgensi: [
      "Menjaga waktu dan tenaga. Waktu hidup manusia sangat terbatas. Hadis ini mengajarkan kita agar tidak membuang waktu untuk hal-hal yang sia-sia dan tidak mendatangkan pahala atau kebaikan.",
      "Menjaga lisan dan perbuatan. Mengingatkan kita agar tidak ikut campur urusan pribadi orang lain yang bukan hak kita, serta menghindari obrolan yang tidak ada gunanya.",
      "Cermin kebaikan iman. Kualitas keislaman seseorang dinilai baik jika ia mampu memilah mana hal yang berguna untuk dikerjakan dan mana hal yang tidak berguna untuk ditinggalkan."
    ],
    konteks: "Rasulullah shallallahu 'alaihi wa sallam menyampaikan hadis ini sebagai bimbingan akhlak dan panduan hidup sehari-hari. Dalam pergaulan masyarakat, sering kali manusia tergoda untuk banyak membicarakan hal-hal yang tidak penting, mencari-cari tahu masalah orang lain, atau sibuk dengan hal-hal yang tidak memberi manfaat untuk masa depannya. Melalui hadis ini, Nabi mendidik para sahabat dan seluruh umat Islam agar memiliki pribadi yang bijaksana, tenang, dan selalu fokus melakukan kegiatan yang membawa manfaat nyata bagi dunia dan akhirat.",
    kataPilihan: [
      { arab: "حُسْنِ", transliterasi: "Husni", arti: "Kebaikan atau keindahan. Menunjukkan tingginya kualitas keimanan dan keluhuran akhlak seseorang." },
      { arab: "تَرْكُهُ", transliterasi: "Tarkuhu", arti: "Tindakannya meninggalkan atau menjauhi sesuatu secara sadar." },
      { arab: "لَا يَعْنِيْهِ", transliterasi: "Laa Ya'niihi", arti: "Tidak bermanfaat baginya atau bukan urusannya. Mencakup perkataan, tontonan, obrolan, maupun perbuatan yang tidak mendatangkan kebaikan untuk kehidupan duniawi maupun akhirat." }
    ]
  },
  {
    id: 13,
    judul: "Mencintai Saudara Seperti Mencintai Diri Sendiri",
    arab: "عَنْ أَبِيْ حَمْزَةَ أَنَسِ بْنِ مَالِكٍ رَضِيَ اللهُ عَنْهُ خَادِمِ رَسُوْلِ اللهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ، عَنِ النَّبِيِّ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ قَالَ: لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لِأَخِيْهِ مَا يُحِبُّ لِنَفْسِهِ. رَوَاهُ الْبُخَارِيُّ وَمُسْلِمٌ.",
    transliterasi: "Laa yu'minu ahadukum hattaa yuhibba li-akhiihi maa yuhibbu linafsihi...",
    terjemahan: "Dari Abu Hamzah, yaitu Anas bin Malik radhiyallahu 'anhu, pembantu Rasulullah shallallahu 'alaihi wa sallam, dari Nabi shallallahu 'alaihi wa sallam, beliau bersabda, \"Tidaklah sempurna iman salah seorang dari kalian, sampai ia mencintai untuk saudaranya apa yang ia cintai untuk dirinya sendiri.\"",
    rawi: "Anas bin Malik",
    sumber: "HR. Bukhari dan Muslim",
    kualitas: "Shahih",
    status: "belum",
    durasiAudio: "1:25",
    urgensi: [
      "Mengajarkan empati dan kepedulian yang tinggi. Kita diajarkan untuk selalu menginginkan kebaikan bagi orang lain dan membuang jauh-jauh sifat egois atau menang sendiri.",
      "Menciptakan kedamaian dalam masyarakat. Jika semua orang saling menyayangi dan memperlakukan orang lain dengan baik, maka tidak akan ada lagi rasa iri, dengki, atau permusuhan.",
      "Menjadi tolok ukur kesempurnaan iman. Iman seseorang tidak hanya dinilai dari ibadahnya kepada Allah seperti shalat, tetapi juga dinilai dari seberapa baik dan tulus ia menyayangi sesama manusia."
    ],
    konteks: "Rasulullah shallallahu 'alaihi wa sallam menyampaikan hadis ini untuk mendidik para sahabat agar memiliki ikatan persaudaraan yang sangat kuat (ukhuwah). Saat itu, Nabi sedang mempersatukan kaum Muhajirin (umat Islam yang pindah dari Makkah tanpa membawa harta) dengan kaum Anshar (penduduk asli Madinah). Agar persatuan ini berhasil, Nabi Muhammad SAW menanamkan pesan penting bahwa keimanan sejati adalah ketika seseorang rela berbagi kebahagiaan dan selalu mengharapkan teman atau saudaranya mendapatkan hal-hal yang baik, sama seperti ia menginginkan kebaikan tersebut untuk dirinya sendiri.",
    kataPilihan: [
      { arab: "لَا يُؤْمِنُ", transliterasi: "Laa Yu'minu", arti: "Tidak beriman (dengan sempurna). Ini bukan berarti orang tersebut keluar dari agama Islam, melainkan kualitas keimanannya belum mencapai titik yang paling baik." },
      { arab: "يُحِبَّ", transliterasi: "Yuhibba", arti: "Mencintai, menyukai, atau menginginkan. Yaitu perasaan tulus dari dalam hati yang menginginkan kebahagiaan, kemudahan, dan kebaikan untuk orang lain." },
      { arab: "لِنَفْسِهِ", transliterasi: "Linafsihi", arti: "Untuk dirinya sendiri. Maksudnya, apa pun yang kita anggap baik dan menyenangkan bagi diri kita, kita juga harus menganggap itu baik untuk orang lain." }
    ]
  },
  {
    id: 14,
    judul: "Perlindungan Terhadap Nyawa Seorang Muslim",
    arab: "عَنِ ابْنِ مَسْعُوْدٍ رَضِيَ اللهُ عَنْهُ قَالَ: قَالَ رَسُوْلُ اللهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ: لَا يَحِلُّ دَمُ امْرِئٍ مُسْلِمٍ يَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللهُ وَأَنِّيْ رَسُوْلُ اللهِ إِلَّا بِإِحْدَى ثَلَاثٍ: الثَّيِّبُ الزَّانِيْ، وَالنَّفْسُ بِالنَّفْسِ، وَالتَّارِكُ لِدِيْنِهِ الْمُفَارِقُ لِلْجَمَاعَةِ. رَوَاهُ الْبُخَارِيُّ وَمُسْلِمٌ.",
    transliterasi: "Laa yahillu damum-ri-in muslimin yasyhadu an laa ilaaha illallaahu...",
    terjemahan: "Dari Ibnu Mas'ud radhiyallahu 'anhu, ia berkata: Rasulullah shallallahu 'alaihi wa sallam bersabda, \"Tidak boleh ditumpahkan darah (dihukum mati) seorang muslim yang bersaksi bahwa tidak ada Tuhan selain Allah dan bahwa aku adalah utusan Allah, kecuali karena salah satu dari tiga sebab: orang yang sudah pernah menikah tetapi berzina, orang yang membunuh orang lain dengan sengaja, dan orang yang keluar dari agamanya (murtad) serta memisahkan diri dari persatuan masyarakatnya.\"",
    rawi: "Ibnu Mas'ud",
    sumber: "HR. Bukhari dan Muslim",
    kualitas: "Shahih",
    status: "belum",
    durasiAudio: "2:00",
    urgensi: [
      "Menjunjung tinggi kehormatan nyawa manusia. Islam melindungi hak hidup setiap orang. Tidak boleh ada seorang pun yang disakiti atau dihilangkan nyawanya secara sembarangan.",
      "Menjelaskan aturan hukum yang adil. Hukuman berat hanya diberikan untuk kejahatan luar biasa yang merusak keutuhan keluarga dan mengancam keselamatan orang banyak.",
      "Menjaga ketertiban bersama. Penerapan hukuman hukum seperti ini tidak boleh dilakukan sendiri-sendiri atau main hakim sendiri, melainkan harus diputuskan secara resmi oleh pengadilan dan pemerintah yang sah."
    ],
    konteks: "Rasulullah shallallahu 'alaihi wa sallam menyampaikan hadis ini sebagai dasar hukum untuk menjaga keamanan dan ketenteraman masyarakat luas. Nabi menegaskan bahwa nyawa setiap orang beriman adalah suci dan wajib dijaga. Hukuman yang sangat berat hanya menjadi jalan terakhir untuk tiga jenis pelanggaran besar, yaitu merusak ikatan pernikahan resmi melalui perzinaan, merampas nyawa orang lain tanpa hak, serta melakukan pengkhianatan yang memecah-belah persatuan masyarakat.",
    kataPilihan: [
      { arab: "لَا يَحِلُّ", transliterasi: "Laa Yahillu", arti: "Tidak boleh atau tidak halal. Maksudnya adalah dilarang keras dan diharamkan secara aturan agama." },
      { arab: "الثَّيِّبُ", transliterasi: "Ats-Tsayyibu", arti: "Orang yang sudah pernah menikah secara sah." },
      { arab: "النَّفْسُ بِالنَّفْسِ", transliterasi: "An-Nafsu bin-Nafsi", arti: "Nyawa dibalas dengan nyawa. Yaitu hukum keadilan (qisas) bagi pelaku yang sengaja membunuh orang lain tanpa alasan yang dibenarkan." }
    ]
  },
  {
    id: 15,
    judul: "Menjaga Lisan, Memuliakan Tetangga, dan Menghormati Tamu",
    arab: "عَنْ أَبِيْ هُرَيْرَةَ رَضِيَ اللهُ عَنْهُ، أَنَّ رَسُوْلَ اللهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ قَالَ: «مَنْ كَانَ يُؤْمِنُ بِاللهِ وَالْيَوْمِ الْآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ، وَمَنْ كَانَ يُؤْمِنُ بِاللهِ وَالْيَوْمِ الْآخِرِ فَلْيُكْرِمْ جَارَهُ، وَمَنْ كَانَ يُؤْمِنُ بِاللهِ وَالْيَوْمِ الْآخِرِ فَلْيُكْرِمْ ضَيْفَهُ». رَوَاهُ الْبُخَارِيُّ وَمُسْلِمٌ.",
    transliterasi: "Man kaana yu'minu billaahi wal yawmil aakhiri falyaqul khayran aw liyashmut...",
    terjemahan: "Dari Abu Hurairah radhiyallahu 'anhu, bahwa Rasulullah shallallahu 'alaihi wa sallam bersabda, \"Barang siapa yang beriman kepada Allah dan hari akhir, hendaklah ia berkata yang baik atau diam. Barang siapa yang beriman kepada Allah dan hari akhir, hendaklah ia memuliakan tetangganya. Dan barang siapa yang beriman kepada Allah dan hari akhir, hendaklah ia memuliakan tamunya.\"",
    rawi: "Abu Hurairah",
    sumber: "HR. Bukhari dan Muslim",
    kualitas: "Shahih",
    status: "belum",
    durasiAudio: "1:50",
    urgensi: [
      "Menjaga ucapan dari hal buruk. Kita diajarkan untuk berpikir terlebih dahulu sebelum berbicara. Jika tidak bisa menyampaikan hal yang bermanfaat, lebih baik diam agar tidak menyakiti perasaan orang lain.",
      "Hidup rukun dengan tetangga. Tetangga adalah orang yang paling dekat dengan tempat tinggal kita. Memperlakukan tetangga dengan ramah dan tidak mengganggu kenyamanan mereka adalah bukti nyata keimanan.",
      "Menghormati dan menyambut tamu. Menyambut orang yang berkunjung ke rumah dengan wajah ceria, sikap sopan, dan jamuan semampu kita merupakan akhlak terpuji yang mendatangkan pahala besar."
    ],
    konteks: "Rasulullah shallallahu 'alaihi wa sallam menyampaikan hadis ini sebagai pedoman utama dalam membangun tata krama pergaulan masyarakat. Keimanan di dalam hati seseorang tidak cukup hanya diwujudkan lewat ibadah shalat dan doa, melainkan harus tampak dalam akhlak sehari-hari. Oleh karena itu, Nabi menghubungkan tiga perilaku sosial ini—menjaga lisan, berbuat baik kepada tetangga, dan menjamu tamu—langsung dengan keimanan kepada Allah dan hari pembalasan, agar setiap muslim selalu menjaga tutur kata dan hubungan baik dengan orang-orang di sekitarnya.",
    kataPilihan: [
      { arab: "لِيَصْمُتْ", transliterasi: "Liyashmut", arti: "Hendaklah ia diam. Anjuran untuk menahan diri dari berbicara apabila kata-kata yang akan diucapkan tidak membawa manfaat atau berpotensi menyakiti orang lain." },
      { arab: "فَلْيُكْرِمْ", transliterasi: "Falyukrim", arti: "Hendaklah ia memuliakan, menghormati, atau berbuat baik. Yaitu memperlakukan orang lain dengan santun, ramah, dan penuh penghargaan." },
      { arab: "جَارَهُ", transliterasi: "Jaarohu", arti: "Tetangganya. Yaitu orang-orang yang tinggal di dekat lingkungan rumah kita, baik yang memiliki hubungan keluarga maupun tidak." }
    ]
  },
  {
    id: 16,
    judul: "Jangan Marah",
    arab: "عَنْ أَبِيْ هُرَيْرَةَ رَضِيَ اللهُ عَنْهُ، أَنَّ رَجُلًا قَالَ لِلنَّبِيِّ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ: أَوْصِنِيْ، قَالَ: «لَا تَغْضَبْ»، فَرَدَّدَ مِرَارًا، قَالَ: «لَا تَغْضَبْ». رَوَاهُ الْبُخَارِيُّ.",
    transliterasi: "Qoola lir-Nabiyyi shallallaahu 'alayhi wa sallama: awshinii, qaala: laa taghdhab...",
    terjemahan: "Dari Abu Hurairah radhiyallahu 'anhu, bahwa ada seorang laki-laki berkata kepada Nabi shallallahu 'alaihi wa sallam: \"Berilah aku nasihat (wasiat).\" Nabi menjawab: \"Jangan marah.\" Orang itu mengulangi permintaannya beberapa kali, dan Nabi tetap menjawab: \"Jangan marah.\"",
    rawi: "Abu Hurairah",
    sumber: "HR. Bukhari",
    kualitas: "Shahih",
    status: "belum",
    durasiAudio: "1:10",
    urgensi: [
      "Mencegah penyesalan di kemudian hari. Rasa marah yang tidak dikendalikan sering kali membuat seseorang berkata kasar atau berbuat jahat, yang akhirnya hanya akan menimbulkan rasa bersalah dan penyesalan.",
      "Menjaga ketenangan hati dan persahabatan. Membiasakan diri untuk bersabar dan tenang saat ada masalah akan membuat pikiran damai serta hubungan dengan keluarga dan teman tetap rukun.",
      "Ciri orang yang kuat sebenarnya. Orang yang paling hebat bukanlah yang paling jago berkelahi atau berteriak keras, melainkan orang yang mampu menahan dan mengontrol dirinya saat sedang emosi."
    ],
    konteks: "Seorang sahabat datang kepada Nabi Muhammad SAW untuk meminta nasihat yang ringkas, jelas, dan mudah diingat sebagai pedoman hidupnya sehari-hari. Nabi yang memahami watak manusia kemudian memberikan nasihat yang sangat penting, yaitu menahan amarah. Ketika sahabat itu mengulangi pertanyaannya karena merasa nasihat tersebut sangat singkat, Nabi tetap mengulang jawaban yang sama: \"Jangan marah.\" Hal ini menunjukkan bahwa bisa menahan amarah adalah kunci utama dari hampir seluruh akhlak baik dan keselamatan hidup manusia.",
    kataPilihan: [
      { arab: "أَوْصِنِيْ", transliterasi: "Aushinii", arti: "Berilah aku wasiat atau nasihat. Yaitu permintaan tulus untuk mendapatkan petunjuk hidup yang berharga dari orang yang bijaksana." },
      { arab: "لَا تَغْضَبْ", transliterasi: "Laa Taghdhab", arti: "Jangan marah. Maksudnya adalah tahanlah emosimu, jangan biarkan amarah menguasai pikiran dan perbuatanmu, serta biasakanlah untuk bersabar." },
      { arab: "مِرَارًا", transliterasi: "Miraaran", arti: "Berkali-kali atau berulang-ulang. Menggambarkan sahabat tersebut menanyakan hal yang sama beberapa kali untuk mencari nasihat tambahan, namun jawaban Nabi tetap tidak berubah." }
    ]
  },
  {
    id: 17,
    judul: "Berbuat Baik dalam Segala Hal",
    arab: "عَنْ أَبِيْ يَعْلَى شَدَّادِ بْنِ أَوْسٍ رَضِيَ اللهُ عَنْهُ، عَنْ رَسُوْلِ اللهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ قَالَ: «إِنَّ اللهَ كَتَبَ الْإِحْسَانَ عَلَى كُلِّ شَيْءٍ، فَإِذَا قَتَلْتُمْ فَأَحْسِنُوا الْقِتْلَةَ، وَإِذَا ذَبَحْتُمْ فَأَحْسِنُوا الذِّبْحَةَ، وَلْيُحِدَّ أَحَدُكُمْ شَفْرَتَهُ، وَلْيُرِحْ ذَبِيْحَتَهُ». رَوَاهُ مُسْلِمٌ.",
    transliterasi: "Innallaaha katabal ihsaana 'alaa kulli syay-in...",
    terjemahan: "Dari Abu Ya'la, yaitu Syaddad bin Aus radhiyallahu 'anhu, dari Rasulullah shallallahu 'alaihi wa sallam, beliau bersabda, \"Sesungguhnya Allah mewajibkan untuk berbuat baik kepada segala sesuatu. Maka, jika kalian harus membunuh (dalam tugas hukum atau perang yang dibenarkan), lakukanlah dengan cara yang baik. Dan jika kalian menyembelih hewan, sembelihlah dengan cara yang baik. Hendaklah salah seorang dari kalian menajamkan pisaunya dan membuat hewan sembelihannya merasa tenang dan nyaman.\"",
    rawi: "Syaddad bin Aus",
    sumber: "HR. Muslim",
    kualitas: "Shahih",
    status: "belum",
    durasiAudio: "1:40",
    urgensi: [
      "Menyayangi semua makhluk ciptaan Allah. Ajaran Islam penuh dengan kasih sayang. Kasih sayang tidak hanya diberikan kepada sesama manusia, melainkan juga kepada hewan dan alam sekitar.",
      "Melakukan segala hal dengan cara terbaik. Dalam mengerjakan tugas, belajar, atau bekerja, kita diajarkan untuk selalu berusaha memberikan hasil yang paling rapi, tertib, dan bermanfaat.",
      "Menghindari kekejaman dan penyiksaan. Bahkan ketika kita perlu menyembelih hewan ternak untuk dimakan, kita tetap dilarang keras menyiksa, menakut-nakuti, atau memperlakukan hewan tersebut dengan kasar."
    ],
    konteks: "Rasulullah shallallahu 'alaihi wa sallam menyampaikan hadis ini untuk menanamkan budaya kasih sayang dan kelembutan. Pada masa itu di masyarakat Arab, penyembelihan hewan sering dilakukan dengan alat yang tumpul dan cara yang kasar sehingga hewan merasakan sakit yang lama. Nabi Muhammad SAW mendidik umatnya untuk menghentikan kebiasaan tersebut. Beliau memerintahkan agar pisau diasah hingga sangat tajam, sehingga proses penyembelihan berlangsung sangat cepat, tidak menyiksa hewan, dan hewan tersebut dapat mati dengan tenang.",
    kataPilihan: [
      { arab: "الْإِحْسَانَ", transliterasi: "Al-Ihsaana", arti: "Berbuat baik, bersikap lembut, atau melakukan sesuatu dengan cara yang paling sempurna dan bermanfaat." },
      { arab: "شَفْرَتَهُ", transliterasi: "Syafratahu", arti: "Mata pisaunya. Menajamkan pisau bertujuan agar proses pemotongan berlangsung secepat mungkin tanpa menyakiti hewan berlama-lama." },
      { arab: "وَلْيُرِحْ", transliterasi: "Walyurih", arti: "Hendaklah ia memberikan rasa tenang atau kenyamanan. Maksudnya adalah memperlakukan hewan sembelihan dengan lembut sebelum disembelih agar tidak panik dan tidak tersiksa." }
    ]
  },
  {
    id: 18,
    judul: "Bertakwa, Menghapus Keburukan, dan Berakhlak Mulia",
    arab: "عَنْ أَبِيْ ذَرٍّ جُنْدُبِ بْنِ جُنَادَةَ، وَأَبِيْ عَبْدِ الرَّحْمَنِ مُعَاذِ بْنِ جَبَلٍ رَضِيَ اللهُ عَنْهُمَا، عَنْ رَسُوْلِ اللهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ قَالَ: «اتَّقِ اللهَ حَيْثُمَا كُنْتَ، وَأَتْبِعِ السَّيِّئَةَ الْحَسَنَةَ تَمْحُهَا، وَخَالِقِ النَّاسَ بِخُلُقٍ حَسَنٍ». رَوَاهُ التِّرْمِذِيُّ وَقَالَ: حَدِيْثٌ حَسَنٌ، وَفِيْ بَعْضِ النُّسَخِ: حَسَنٌ صَحِيْحٌ.",
    transliterasi: "Ittaqillaaha haytsumaa kunta, wa atbi'is-sayyi-atal hasanata tamhuhaa...",
    terjemahan: "Dari Abu Dzar Jundub bin Junadah dan Abu Abdirrahman Mu'adz bin Jabal radhiyallahu 'anhuma, dari Rasulullah shallallahu 'alaihi wa sallam, beliau bersabda, \"Bertakwalah kepada Allah di mana pun engkau berada. Iringilah perbuatan buruk dengan perbuatan baik, niscaya kebaikan itu akan menghapus keburukan tersebut. Dan bergaullah dengan sesama manusia dengan perilaku (akhlak) yang baik.\"",
    rawi: "Abu Dzar dan Mu'adz bin Jabal",
    sumber: "HR. At-Tirmidzi",
    kualitas: "Hasan",
    status: "belum",
    durasiAudio: "1:35",
    urgensi: [
      "Selalu merasa diawasi oleh Allah. Kita diajarkan untuk tetap taat dan berbuat baik di mana saja, baik saat berada di tempat ramai bersama banyak orang maupun saat sedang sendirian di dalam kamar.",
      "Segera memperbaiki kesalahan. Manusia tidak luput dari salah. Jika kita tidak sengaja melakukan keburukan, segeralah berbuat kebaikan—seperti memohon ampun, bersedekah, atau menolong orang—agar kesalahan kita diampuni oleh Allah.",
      "Bersikap ramah kepada sesama. Berakhlak baik seperti tersenyum, menyapa dengan sopan, dan tidak menyakiti perasaan orang lain adalah bagian penting dari ibadah."
    ],
    konteks: "Rasulullah shallallahu 'alaihi wa sallam memberikan pesan berharga ini kepada sahabatnya, Abu Dzar dan Mu'adz bin Jabal, sebagai bekal saat mereka hendak bepergian dan bertugas di tempat yang jauh. Nabi membekali mereka dengan tiga prinsip hidup yang sangat lengkap dan mudah diingat: menjaga hubungan baik dengan Allah (takwa), menjaga kebersihan jiwa sendiri (segera menebus kesalahan dengan kebaikan), dan menjaga hubungan baik dengan masyarakat (akhlak yang santun).",
    kataPilihan: [
      { arab: "اتَّقِ اللهَ", transliterasi: "Ittaqillaah", arti: "Bertakwalah kepada Allah. Yaitu menjalankan apa yang diperintahkan Allah dan menjauhi apa yang dilarang-Nya." },
      { arab: "تَمْحُهَا", transliterasi: "Tamhuhaa", arti: "Kebaikan itu akan menghapusnya. Menggambarkan bahwa amal perbuatan baik memiliki kemampuan untuk menghapus catatan dosa dan noda di dalam hati." },
      { arab: "بِخُلُقٍ حَسَنٍ", transliterasi: "Bikhuluqin Hasanin", arti: "Dengan budi pekerti yang baik. Yaitu sikap jujur, santun, suka memaafkan, dan saling menghargai dalam berteman." }
    ]
  },
  {
    id: 19,
    judul: "Jagalah Allah, Allah akan Menjagamu",
    arab: "عَنْ أَبِيْ الْعَبَّاسِ عَبْدِ اللهِ بْنِ عَبَّاسٍ رَضِيَ اللهُ عَنْهُمَا قَالَ: كُنْتُ خَلْفَ النَّبِيِّ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ يَوْمًا، فَقَالَ: «يَا غُلَامُ! إِنِّيْ أُعَلِّمُكَ كَلِمَاتٍ: احْفَظِ اللهَ يَحْفَظْكَ، احْفَظِ اللهَ تَجِدْهُ تُجَاهَكَ، إِذَا سَأَلْتَ فَاسْأَلِ اللهَ، وَإِذَا اسْتَعَنْتَ فَاسْتَعِنْ بِاللهِ، وَاعْلَمْ أَنَّ الْأُمَّةَ لَوِ اجْتَمَعَتْ عَلَى أَنْ يَنْفَعُوْكَ بِشَيْءٍ لَمْ يَنْفَعُوْكَ إِلَّا بِشَيْءٍ قَدْ كَتَبَهُ اللهُ لَكَ، وَإِنِ اجْتَمَعُوْا عَلَى أَنْ يَضُرُّوْكَ بِشَيْءٍ لَمْ يَضُرُّوْكَ إِلَّا بِشَيْءٍ قَدْ كَتَبَهُ اللهُ عَلَيْكَ، رُفِعَتِ الْأَقْلَامُ وَجَفَّتِ الصُّحُفُ». رَوَاهُ التِّرْمِذِيُّ وَقَالَ: حَدِيْثٌ حَسَنٌ صَحِيْحٌ.",
    transliterasi: "Yaa ghulaamu! Innii u'allimuka kalimaat: Ihfadzillaaha yahfadzk...",
    terjemahan: "Dari Abul Abbas, yaitu Abdullah bin Abbas radhiyallahu 'anhuma, ia berkata: Suatu hari aku pernah dibonceng di belakang Nabi shallallahu 'alaihi wa sallam, lalu beliau bersabda, \"Wahai anak muda! Aku akan mengajarkan kepadamu beberapa nasihat: Jagalah aturan Allah, niscaya Allah akan selalu menjagamu. Jagalah aturan Allah, niscaya engkau akan mendapati pertolongan-Nya selalu ada di hadapanmu. Jika engkau meminta sesuatu, mintalah kepada Allah. Jika engkau memohon pertolongan, mohonlah pertolongan kepada Allah. Ketahuilah, seandainya seluruh manusia bersatu untuk memberimu suatu keuntungan, mereka tidak akan bisa melakukannya kecuali apa yang sudah ditetapkan oleh Allah untukmu. Dan seandainya mereka semua bersatu untuk mencelakakanmu, mereka tidak akan bisa mencelakakanmu kecuali apa yang sudah ditetapkan oleh Allah atasmu. Pena takdir telah diangkat dan lembaran catatan telah kering.\"",
    rawi: "Ibnu Abbas",
    sumber: "HR. At-Tirmidzi",
    kualitas: "Hasan Shahih",
    status: "belum",
    durasiAudio: "2:45",
    urgensi: [
      "Menghilangkan rasa takut kepada sesama manusia. Kita diajarkan untuk tidak perlu takut kepada ancaman siapa pun, karena tidak ada yang bisa mencelakakan atau memberi kita rezeki tanpa izin dari Allah.",
      "Membiasakan diri memohon hanya kepada Allah. Dalam keadaan sedih, sakit, atau menghadapi ujian, tempat pertama yang harus kita tuju untuk berdoa dan meminta tolong adalah Allah.",
      "Kunci mendapatkan perlindungan Allah. Jika kita selalu menjaga perintah Allah dan menjauhi larangan-Nya di saat kita sehat dan senang, maka Allah pasti akan menjaga dan menolong kita di saat kita sedang susah."
    ],
    konteks: "Hadis ini disampaikan oleh Nabi Muhammad SAW kepada Abdullah bin Abbas ketika ia masih berusia anak-anak dan sedang berboncengan di atas kendaraan bersama Nabi. Rasulullah memanfaatkan suasana perjalanan yang akrab itu untuk menanamkan pondasi keyakinan dan keberanian sejak usia dini. Nabi ingin mendidik generasi muda agar memiliki jiwa yang kuat, tidak mudah putus asa, serta selalu menggantungkan harapan hidupnya hanya kepada Allah.",
    kataPilihan: [
      { arab: "يَا غُلَامُ", transliterasi: "Yaa Ghulaamu", arti: "Wahai anak muda. Sapaan yang lembut dan penuh kasih sayang dari orang dewasa kepada anak-anak atau remaja." },
      { arab: "احْفَظِ اللهَ", transliterasi: "Ihfadzillaah", arti: "Jagalah aturan Allah. Maksudnya adalah taat menjalankan perintah Allah, rajin beribadah, dan menjauhi hal-hal yang dilarang." },
      { arab: "جَفَّتِ الصُّحُفُ", transliterasi: "Jaffatish-Shuhufu", arti: "Catatan takdir telah kering. Kiasan bahwa segala takdir dan ketentuan dari Allah sudah tertulis rapi dan tidak akan bisa diubah oleh manusia mana pun." }
    ]
  },
  {
    id: 20,
    judul: "Memiliki Rasa Malu Sebagai Benteng Diri",
    arab: "عَنْ أَبِيْ مَسْعُوْدٍ عُقْبَةَ بْنِ عَمْرٍو الْأَنْصَارِيِّ الْبَدْرِيِّ رَضِيَ اللهُ عَنْهُ قَالَ: قَالَ رَسُوْلُ اللهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ: «إِنَّ مِمَّا أَدْرَكَ النَّاسُ مِنْ كَلَامِ النُّبُوَّةِ الْأُولَى: إِذَا لَمْ تَسْتَحِ فَاصْنَعْ مَا شِئْتَ». رَوَاهُ الْبُخَارِيُّ.",
    transliterasi: "Inna mimmaa adrakan-naasu min kalaamin-nubuwwatil uulaa: idzaa lam tastahi fashna' maa syi'ta...",
    terjemahan: "Dari Abu Mas'ud, yaitu Uqbah bin Amr Al-Anshari Al-Badri radhiyallahu 'anhu, ia berkata: Rasulullah shallallahu 'alaihi wa sallam bersabda, \"Sesungguhnya di antara ajaran para nabi terdahulu yang masih diingat oleh manusia sampai sekarang adalah: 'Jika engkau sudah tidak memiliki rasa malu, maka berbuatlah sesukamu.'\"",
    rawi: "Abu Mas'ud Al-Badri",
    sumber: "HR. Bukhari",
    kualitas: "Shahih",
    status: "belum",
    durasiAudio: "1:20",
    urgensi: [
      "Rasa malu adalah rem pelindung diri. Memiliki rasa malu kepada Allah dan sesama manusia akan menjaga kita agar tidak melakukan hal-hal yang buruk, kasar, atau melanggar aturan.",
      "Nilai kebaikan yang abadi. Sifat malu adalah ajaran pokok yang selalu disampaikan oleh semua nabi sejak zaman dahulu karena rasa malu merupakan mahkota akhlak manusia.",
      "Pengingat akan akibat perbuatan. Ungkapan \"berbuatlah sesukamu\" adalah bentuk peringatan keras bahwa orang yang kehilangan rasa malu akan berbuat jahat tanpa kendali, dan ia pasti akan menanggung akibat serta balasan dari perbuatannya."
    ],
    konteks: "Rasulullah shallallahu 'alaihi wa sallam menyampaikan hadis ini untuk menegaskan bahwa ajaran utama para nabi sejak awal peradaban tidak pernah berubah, yaitu menjaga kehormatan dan budi pekerti lewat rasa malu. Nabi Muhammad SAW mengingatkan para sahabat bahwa rasa malu bukanlah tanda seseorang itu lemah atau penakut, melainkan tanda jiwa yang hidup dan sehat. Jika rasa malu itu hilang, manusia akan bertindak semaunya dan merusak ketertiban hidup bersama.",
    kataPilihan: [
      { arab: "النُّبُوَّةِ الْأُولَى", transliterasi: "An-Nubuwwatil Uulaa", arti: "Kenabian yang terdahulu. Menunjukkan bahwa pesan moral ini adalah warisan mulia yang sudah diajarkan oleh para nabi sebelum Nabi Muhammad SAW." },
      { arab: "لَمْ تَسْتَحِ", transliterasi: "Lam Tastahi", arti: "Tidak merasa malu. Menggambarkan keadaan seseorang yang hatinya sudah tidak peduli pada rasa bersalah, teguran Allah, maupun perasaan orang lain." },
      { arab: "فَاصْنَعْ مَا شِئْتَ", transliterasi: "Fashna' Maa Syi'ta", arti: "Berbuatlah sesukamu. Kalimat teguran yang bermakna bahwa siapa saja yang tidak tahu malu akan bertindak bebas sesuka hatinya dan harus siap mempertanggungjawabkan perbuatannya kelak." }
    ]
  },
  {
    id: 21,
    judul: "Beriman dan Tetap Teguh Pendirian (Istiqamah)",
    arab: "عَنْ أَبِيْ عَمْرٍو - وَقِيْلَ: أَبِيْ عَمْرَةَ - سُفْيَانَ بْنِ عَبْدِ اللهِ رَضِيَ اللهُ عَنْهُ قَالَ: قُلْتُ: يَا رَسُوْلَ اللهِ! قُلْ لِيْ فِي الْإِسْلَامِ قَوْلًا لَا أَسْأَلُ عَنْهُ أَحَدًا غَيْرَكَ. قَالَ: «قُلْ: آمَنْتُ بِاللهِ، ثُمَّ اسْتَقِمْ». رَوَاهُ مُسْلِمٌ.",
    transliterasi: "Qul: aamantu billaahi tsummas-taqim...",
    terjemahan: "Dari Abu 'Amr (ada juga yang memanggilnya Abu 'Amrah), yaitu Sufyan bin Abdillah radhiyallahu 'anhu, ia berkata: Aku berkata kepada Nabi: \"Wahai Rasulullah! Beritahukanlah kepadaku satu nasihat tentang Islam yang begitu jelas, sehingga aku tidak perlu lagi bertanya kepada siapa pun selain kepadamu.\" Rasulullah menjawab: \"Ucapkanlah: 'Aku beriman kepada Allah', lalu beristiqamahlah (tetaplah teguh dan konsisten di jalan yang benar).\"",
    rawi: "Sufyan bin Abdillah",
    sumber: "HR. Muslim",
    kualitas: "Shahih",
    status: "belum",
    durasiAudio: "1:25",
    urgensi: [
      "Pedoman hidup yang sangat ringkas dan lengkap. Ajaran Islam dirangkum dalam dua langkah utama: memiliki keyakinan iman yang mantap kepada Allah, dan membuktikannya lewat perbuatan baik yang terus-menerus.",
      "Pentingnya sikap konsisten (istiqamah). Melakukan kebaikan sederhana yang dikerjakan secara rutin setiap hari jauh lebih dicintai Allah daripada berbuat baik dalam jumlah banyak tetapi hanya sekali lalu berhenti.",
      "Menjaga keteguhan hati. Menghadapi godaan atau masa-masa sulit, hadis ini mengingatkan kita untuk tidak mudah menyerah dan tetap setia memegang aturan agama yang benar."
    ],
    konteks: "Sahabat bernama Sufyan bin Abdillah datang kepada Nabi Muhammad SAW meminta sebuah nasihat kunci yang padat, menyeluruh, dan mengena di hati sebagai pegangan hidupnya seumur hidup. Nabi yang bijaksana memahami kebutuhan tersebut, lalu memberikan jawaban yang sangat singkat namun mencakup seluruh inti ajaran Islam: pertama, yakini Allah di dalam hati dan lisan; kedua, jaga ketaatan itu secara berkelanjutan tanpa ragu-ragu.",
    kataPilihan: [
      { arab: "آمَنْتُ بِاللهِ", transliterasi: "Aamantu Billaah", arti: "Aku beriman kepada Allah. Yaitu ikrar keyakinan yang kuat di dalam hati dan diucapkan oleh lisan bahwa kita percaya serta tunduk kepada Allah." },
      { arab: "اسْتَقِمْ", transliterasi: "Istaqim", arti: "Beristiqamahlah, teguhlah, atau konsistenlah. Maksudnya adalah terus berada di jalan yang lurus, disiplin beribadah, dan tidak berubah-ubah dalam berbuat baik." },
      { arab: "لَا أَسْأَلُ", transliterasi: "Laa As-alu", arti: "Aku tidak akan bertanya lagi. Menggambarkan keinginan penanya untuk mendapatkan jawaban yang tuntas dan cukup menjadi pedoman seumur hidup." }
    ]
  },
  {
    id: 22,
    judul: "Menjalankan Kewajiban Sebagai Jalan Menuju Surga",
    arab: "عَنْ أَبِيْ عَبْدِ اللهِ جَابِرِ بْنِ عَبْدِ اللهِ الْأَنْصَارِيِّ رَضِيَ اللهُ عَنْهُمَا: أَنَّ رَجُلًا سَأَلَ رَسُوْلَ اللهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ فَقَالَ: «أَرَأَيْتَ إِذَا صَلَّيْتُ الْمَكْتُوْبَاتِ، وَصُمْتُ رَمَضَانَ، وَأَحْلَلْتُ الْحَلَالَ، وَحَرَّمْتُ الْحَرَامَ، وَلَمْ أَزِدْ عَلَى ذَلِكَ شَيْئًا، أَأَدْخُلُ الْجَنَّةَ؟» قَالَ: «نَعَمْ». رَوَاهُ مُسْلِمٌ.",
    transliterasi: "A-ra-ayta idzaa shallaytul maktuubaati wa shumtu ramadhaana...",
    terjemahan: "Dari Abu Abdillah, yaitu Jabir bin Abdillah Al-Anshari radhiyallahu 'anhuma, bahwa ada seorang laki-laki bertanya kepada Rasulullah shallallahu 'alaihi wa sallam: \"Bagaimana pendapatmu jika aku mengerjakan shalat-shalat wajib, berpuasa di bulan Ramadhan, melakukan apa yang halal, menjauhi apa yang haram, dan aku tidak menambah amalan sunnah sedikit pun selain itu, apakah aku bisa masuk surga?\" Rasulullah menjawab: \"Ya.\"",
    rawi: "Jabir bin Abdillah",
    sumber: "HR. Muslim",
    kualitas: "Shahih",
    status: "belum",
    durasiAudio: "1:30",
    urgensi: [
      "Ibadah wajib adalah kunci utama surga. Menjalankan kewajiban pokok secara disiplin (seperti shalat lima waktu dan puasa Ramadhan) sudah cukup menjadi jalan keselamatan bagi seorang muslim.",
      "Menunjukkan bahwa agama Islam itu mudah. Islam tidak membebani umatnya dengan hal-hal yang berat. Siapa pun yang baru sanggup mengerjakan hal-hal yang wajib tetap memiliki harapan besar untuk meraih surga.",
      "Ketaatan pada aturan hidup. Keselamatan hidup dicapai bukan hanya dengan beribadah, tetapi juga dengan menjaga diri agar selalu menikmati yang halal dan menjauhi perbuatan yang dilarang (haram)."
    ],
    konteks: "Seorang sahabat datang kepada Nabi Muhammad SAW dengan penuh kejujuran mengenai kemampuan dirinya. Ia ingin mengetahui jalan paling sederhana dan pasti menuju surga, tanpa merasa terbebani oleh amalan tambahan yang mungkin belum sanggup ia rutinkan. Nabi memberikan jawaban yang sangat menenangkan dan memberi harapan. Beliau menegaskan bahwa siapa pun yang setia memegang kewajiban pokok dan menjauhi larangan agama, ia sudah berada di jalan yang benar menuju surga.",
    kataPilihan: [
      { arab: "الْمَكْتُوْبَاتِ", transliterasi: "Al-Maktuubaati", arti: "Hal-hal yang diwajibkan. Dalam hadis ini merujuk kepada shalat fardhu lima waktu (Subuh, Zhuhur, Ashar, Maghrib, dan Isya)." },
      { arab: "أَحْلَلْتُ الْحَلَالَ", transliterasi: "Ahlaltul Halaala", arti: "Aku menghalalkan yang halal. Maksudnya adalah meyakini kebolehan apa yang diizinkan Allah dan melakukannya dengan cara yang benar." },
      { arab: "حَرَّمْتُ الْحَرَامَ", transliterasi: "Harramtul Haraama", arti: "Aku mengharamkan yang haram. Maksudnya adalah meyakini larangan dari Allah dan benar-benar menjauhinya dalam kehidupan sehari-hari." }
    ]
  },
  {
    id: 23,
    judul: "Keutamaan Bersuci, Dzikir, Shalat, Sedekah, dan Al-Qur'an",
    arab: "عَنْ أَبِيْ مَالِكٍ الْحَارِثِ بْنِ عَاصِمٍ الْأَشْعَرِيِّ رَضِيَ اللهُ عَنْهُ قَالَ: قَالَ رَسُوْلُ اللهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ: «الطُّهُوْرُ شَطْرُ الْإِيْمَانِ، وَالْحَمْدُ لِلَّهِ تَمْلَأُ الْمِيْزَانَ، وَسُبْحَانَ اللهِ وَالْحَمْدُ لِلَّهِ تَمْلَآنِ - أَوْ: تَمْلَأُ - مَا بَيْنَ السَّمَاءِ وَالْأَرْضِ، وَالصَّلَاةُ نُوْرٌ، وَالصَّدَقَةُ بُرْهَانٌ، وَالصَّبْرُ ضِيَاءٌ، وَالْقُرْآنُ حُجَّةٌ لَكَ أَوْ عَلَيْكَ، كُلُّ النَّاسِ يَغْدُوْ، فَبَائِعٌ نَفْسَهُ فَمُعْتِقُهَا أَوْ مُوْبِقُهَا». رَوَاهُ مُسْلِمٌ.",
    transliterasi: "Ath-thuhuuru syathrul iimaan, walhamdu lillaahi tamla-ul miizaan...",
    terjemahan: "Dari Abu Malik, yaitu Al-Harits bin Ashim Al-Asy'ari radhiyallahu 'anhu, ia berkata: Rasulullah shallallahu 'alaihi wa sallam bersabda, \"Bersuci (menjaga kebersihan) itu adalah sebagian dari iman. Kalimat 'Alhamdulillah' (segala puji bagi Allah) memenuhi timbangan kebaikan. Kalimat 'Subhanallah' (Maha Suci Allah) dan 'Alhamdulillah' memenuhi ruang antara langit dan bumi. Shalat adalah cahaya, sedekah adalah bukti nyata keimanan, sabar adalah sinar penerang, dan Al-Qur'an adalah pembela untukmu atau penuntut yang memberatkanmu. Setiap manusia memulai harinya di pagi hari, lalu ia menjual dirinya; ada yang membebaskan dirinya (dari siksa karena berbuat taat), dan ada pula yang mencelakakan dirinya (karena berbuat dosa).\"",
    rawi: "Abu Malik Al-Asy'ari",
    sumber: "HR. Muslim",
    kualitas: "Shahih",
    status: "belum",
    durasiAudio: "2:30",
    urgensi: [
      "Merangkum amalan utama sehari-hari. Hadis ini mengajarkan paket lengkap kebaikan: menjaga kebersihan fisik dan hati, rajin mengingat Allah (dzikir), mendirikan shalat, berbagi lewat sedekah, dan selalu bersabar.",
      "Al-Qur'an sebagai penentu nasib akhirat. Jika kita rajin membaca, memahami, dan mematuhi isi Al-Qur'an, ia akan membela kita di hadapan Allah. Sebaliknya, jika diabaikan, ia akan menjadi saksi yang menuntut kita.",
      "Pilihan hidup setiap hari ada pada diri kita. Setiap pagi saat kita bangun, kita bebas memilih: apakah menggunakan waktu dan tenaga untuk hal-hal baik yang menyelamatkan jiwa kita, atau untuk hal-hal buruk yang merugikan diri sendiri."
    ],
    konteks: "Rasulullah shallallahu 'alaihi wa sallam menyampaikan hadis ini sebagai motivasi menyeluruh bagi para sahabat agar tidak meremehkan amalan-amalan harian yang tampak sederhana. Nabi merangkai keindahan Islam dari kebersihan badan (wudhu dan mandi) hingga kebersihan rohani (dzikir dan sabar). Nabi mengibaratkan kehidupan manusia setiap hari seperti seorang pedagang yang keluar rumah di pagi hari: apakah ia akan membawa pulang keuntungan besar berupa surga dengan ketaatan, atau kerugian berupa celaka karena dosa.",
    kataPilihan: [
      { arab: "الطُّهُوْرُ", transliterasi: "Ath-Thuhuuru", arti: "Bersuci atau kebersihan. Mencakup kebersihan fisik (wudhu, mandi, badan yang bersih) serta kebersihan jiwa dari dosa dan sifat tercela." },
      { arab: "بُرْهَانٌ", transliterasi: "Burhaanun", arti: "Bukti nyata atau tanda yang jelas. Sedekah menjadi bukti kejujuran iman seseorang, karena ia rela membagikan harta yang ia sukai demi menolong orang lain karena Allah." },
      { arab: "ضِيَاءٌ", transliterasi: "Dhiyaa-un", arti: "Sinar penerang yang kuat dan hangat. Kesabaran digambarkan seperti sinar terang yang membimbing seseorang agar tidak tersesat saat melewati masa-masa sulit dalam hidup." }
    ]
  },
  {
    id: 24,
    judul: "Larangan Berbuat Zalim dan Luasnya Kekayaan Allah",
    arab: "عَنْ أَبِيْ ذَرٍّ الْغِفَارِيِّ رَضِيَ اللهُ عَنْهُ، عَنِ النَّبِيِّ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ فِيْمَا يَرْوِيْهِ عَنْ رَبِّهِ عَزَّ وَجَلَّ أَنَّهُ قَالَ: «يَا عِبَادِيْ! إِنِّيْ حَرَّمْتُ الظُّلْمَ عَلَى نَفْسِيْ، وَجَعَلْتُهُ بَيْنَكُمْ مُحَرَّمًا، فَلَا تَظَالَمُوْا. يَا عِبَادِيْ! كُلُّكُمْ ضَالٌّ إِلَّا مَنْ هَدَيْتُهُ، فَاسْتَهْدُوْنِيْ أَهْدِكُمْ. يَا عِبَادِيْ! كُلُّكُمْ جَائِعٌ إِلَّا مَنْ أَطْعَمْتُهُ، فَاسْتَطْعِمُوْنِيْ أُطْعِمْكُمْ. يَا عِبَادِيْ! كُلُّكُمْ عَارٍ إِلَّا مَنْ كَسَوْتُهُ، فَاسْتَكْسُوْنِيْ أَكْسُكُمْ. يَا عِبَادِيْ! إِنَّكُمْ تُخْطِئُوْنَ بِاللَّيْلِ وَالنَّهَارِ، وَأَنَا أَغْفِرُ الذُّنُوْبَ جَمِيْعًا، فَاسْتَغْفِرُوْنِيْ أَغْفِرْ لَكُمْ. يَا عِبَادِيْ! إِنَّكُمْ لَنْ تَبْلُغُوْا ضَرِّيْ فَتَضُرُّوْنِيْ، وَلَنْ تَبْلُغُوْا نَفْعِيْ فَتَنْفَعُوْنِيْ. يَا عِبَادِيْ! لَوْ أَنَّ أَوَّلَكُمْ وَآخِرَكُمْ وَإِنْسَكُمْ وَجِنَّكُمْ كَانُوْا عَلَى أَتْقَى قَلْبِ رَجُلٍ وَاحِدٍ مِنْكُمْ، مَا زَادَ ذَلِكَ فِيْ مُلْكِيْ شَيْئًا. يَا عِبَادِيْ! لَوْ أَنَّ أَوَّلَكُمْ وَآخِرَكُمْ وَإِنْسَكُمْ وَجِنَّكُمْ كَانُوْا عَلَى أَفْجَرِ قَلْبِ رَجُلٍ وَاحِدٍ مِنْكُمْ، مَا نَقَصَ ذَلِكَ مِنْ مُلْكِيْ شَيْئًا. يَا عِبَادِيْ! لَوْ أَنَّ أَوَّلَكُمْ وَآخِرَكُمْ وَإِنْسَكُمْ وَجِنَّكُمْ قَامُوْا فِيْ صَعِيْدٍ وَاحِدٍ فَسَأَلُوْنِيْ، فَأَعْطَيْتُ كُلَّ إِنْسَانٍ مَسْأَلَتَهُ، مَا نَقَصَ ذَلِكَ مِمَّا عِنْدِيْ إِلَّا كَمَا يَنْقُصُ الْمِخْيَطُ إِذَا أُدْخِلَ الْبَحْرَ. يَا عِبَادِيْ! إِنَّمَا هِيَ أَعْمَالُكُمْ أُحْصِيْهَا لَكُمْ، ثُمَّ أُوَفِّيْكُمْ إِيَّاهَا، فَمَنْ وَجَدَ خَيْرًا فَلْيَحْمَدِ اللهَ، وَمَنْ وَجَدَ غَيْرَ ذَلِكَ فَلَا يَلُوْمَنَّ إِلَّا نَفْسَهُ». رَوَاهُ مُسْلِمٌ.",
    transliterasi: "Yaa 'ibaadii! Innii harramtuzh-zhulma 'alaa nafsii wa ja'altuhu baynakum muharraman...",
    terjemahan: "Dari Abu Dzar Al-Ghifari radhiyallahu 'anhu, dari Nabi shallallahu 'alaihi wa sallam tentang apa yang beliau sampaikan dari Tuhannya (Allah) 'Azza wa Jalla, bahwa Allah berfirman: \"Wahai hamba-hamba-Ku! Sesungguhnya Aku telah mengharamkan perbuatan zalim (berbuat jahat/aniaya) atas diri-Ku, dan Aku jadikan zalim itu haram di antara kalian, maka janganlah kalian saling berbuat zalim. Wahai hamba-hamba-Ku! Kalian semua tersesat kecuali orang yang Aku beri petunjuk, maka mintalah petunjuk kepada-Ku, niscaya Aku beri kalian petunjuk. Wahai hamba-hamba-Ku! Kalian semua lapar kecuali orang yang Aku beri makan, maka mintalah makan kepada-Ku, niscaya Aku beri kalian makan. Wahai hamba-hamba-Ku! Kalian semua tidak berpakaian kecuali orang yang Aku beri pakaian, maka mintalah pakaian kepada-Ku, niscaya Aku beri kalian pakaian. Wahai hamba-hamba-Ku! Sesungguhnya kalian berbuat salah pada waktu malam dan siang hari, sedangkan Aku mengampuni seluruh dosa, maka mintalah ampunan kepada-Ku, niscaya Aku ampuni kalian. Wahai hamba-hamba-Ku! Sesungguhnya kalian tidak akan mampu mendatangkan bahaya kepada-Ku, dan kalian tidak akan mampu memberi manfaat kepada-Ku. Wahai hamba-hamba-Ku! Seandainya seluruh manusia dan jin dari yang pertama hingga yang terakhir semuanya memiliki hati yang paling bertakwa, hal itu tidak akan menambah kekuasaan-Ku sedikit pun. Wahai hamba-hamba-Ku! Seandainya seluruh manusia dan jin dari yang pertama hingga yang terakhir semuanya memiliki hati yang paling jahat, hal itu tidak akan mengurangi kekuasaan-Ku sedikit pun. Wahai hamba-hamba-Ku! Seandainya seluruh manusia dan jin dari yang pertama hingga yang terakhir berkumpul di satu tanah lapang lalu meminta apa saja kepada-Ku, kemudian Aku kabulkan semua permintaan masing-masing orang, hal itu tidak akan mengurangi kekayaan yang ada pada-Ku sedikit pun, kecuali seperti berkurangnya air ketika sebatang jarum dicelupkan ke dalam lautan. Wahai hamba-hamba-Ku! Sesungguhnya semua itu hanyalah amal perbuatan kalian yang Aku catat untuk kalian, lalu Aku berikan balasannya secara sempurna. Maka, barang siapa yang mendapati balasan kebaikan, hendaklah ia bersyukur dan memuji Allah. Dan barang siapa yang mendapati balasan selain itu (keburukan), janganlah ia menyalahkan siapa pun kecuali dirinya sendiri.\"",
    rawi: "Abu Dzar Al-Ghifari",
    sumber: "HR. Muslim",
    kualitas: "Shahih (Hadis Qudsi)",
    status: "belum",
    durasiAudio: "4:15",
    urgensi: [
      "Larangan keras berbuat zalim atau menindas orang lain. Allah yang Mahakuasa saja tidak pernah berbuat zalim kepada makhluk-Nya, maka manusia yang lemah sama sekali tidak boleh menindas, menyakiti, atau mengambil hak orang lain.",
      "Manusia selalu membutuhkan pertolongan Allah. Kita semua membutuhkan bimbingan (hidayah), makanan, pakaian, dan pengampunan dosa dari Allah. Kita diajarkan untuk selalu rendah hati dan rajin berdoa meminta kebutuhan hidup kepada-Nya.",
      "Allah Maha Kaya dan Maha Adil. Ketaatan manusia tidak membuat Allah bertambah kaya, dan dosa manusia tidak membuat Allah rugi. Seluruh amal baik yang kita lakukan pada akhirnya akan kembali untuk kebaikan dan keselamatan diri kita sendiri."
    ],
    konteks: "Rasulullah shallallahu 'alaihi wa sallam menyampaikan Hadis Qudsi yang sangat agung ini untuk menjelaskan sifat-sifat Allah yang Mahasempurna, Maha Kaya, dan Maha Adil. Nabi mengajarkan bahwa manusia adalah makhluk yang serbaterbatas dan sangat bergantung pada kasih sayang Sang Pencipta. Pesan ini ditanamkan agar setiap orang membuang rasa sombong atas amal ibadahnya, tidak bertindak semena-mena kepada orang yang lebih lemah, serta menyadari bahwa kebahagiaan hidup sepenuhnya bersumber dari ketaatan kepada Allah.",
    kataPilihan: [
      { arab: "حَرَّمْتُ الظُّلْمَ", transliterasi: "Harramtuzh-Zhulma", arti: "Aku mengharamkan kezaliman. Kezaliman adalah perbuatan merugikan, menyakiti, atau merampas hak orang lain secara tidak adil." },
      { arab: "فَاسْتَهْدُوْنِيْ", transliterasi: "Fastahduunii", arti: "Maka mintalah petunjuk kepada-Ku. Anjuran untuk selalu memohon bimbingan, ilmu yang benar, dan jalan yang lurus kepada Allah setiap saat." },
      { arab: "الْمِخْيَطُ", transliterasi: "Al-Mikhyathu", arti: "Jarum jahit. Perumpamaan jarum yang dicelupkan ke samudra luas menggambarkan bahwa kekayaan dan karunia Allah tidak akan berkurang sedikit pun meski Dia mengabulkan doa seluruh makhluk di alam semesta." }
    ]
  },
  {
    id: 25,
    judul: "Setiap Kebaikan adalah Sedekah",
    arab: "عَنْ أَبِيْ ذَرٍّ رَضِيَ اللهُ عَنْهُ أَيْضًا: أَنَّ نَاسًا مِنْ أَصْحَابِ رَسُوْلِ اللهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ قَالُوْا لِلنَّبِيِّ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ: يَا رَسُوْلَ اللهِ، ذَهَبَ أَهْلُ الدُّثُوْرِ بِالْأُجُوْرِ؛ يُصَلُّوْنَ كَمَا نُصَلِّيْ، وَيَصُوْمُوْنَ كَمَا نَصُوْمُ، وَيَتَصَدَّقُوْنَ بِفُضُوْلِ أَمْوَالِهِمْ. قَالَ: «أَوَلَيْسَ قَدْ جَعَلَ اللهُ لَكُمْ مَا تَصَّدَّقُوْنَ؟ إِنَّ بِكُلِّ تَسْبِيْحَةٍ صَدَقَةً، وَكُلِّ تَكْبِيْرَةٍ صَدَقَةً، وَكُلِّ تَحْمِيْدَةٍ صَدَقَةً، وَكُلِّ تَهْلِيْلَةٍ صَدَقَةً، وَأَمْرٌ بِالْمَعْرُوْفِ صَدَقَةٌ، وَنَهْيٌ عَنْ مُنْكَرٍ صَدَقَةٌ، وَفِيْ بُضْعِ أَحَدِكُمْ صَدَقَةٌ». قَالُوْا: يَا رَسُوْلَ اللهِ، أَيَأْتِيْ أَحَدُنَا شَهْوَتَهُ وَيَكُوْنُ لَهُ فِيْهَا أَجْرٌ؟ قَالَ: «أَرَأَيْتُمْ لَوْ وَضَعَهَا فِيْ حَرَامٍ أَكَانَ عَلَيْهِ فِيْهَا وِزْرٌ؟ فَكَذَلِكَ إِذَا وَضَعَهَا فِيْ الْحَلَالِ كَانَ لَهُ أَجْرٌ». رَوَاهُ مُسْلِمٌ.",
    transliterasi: "Awa laysa qad ja'alallaahu lakum maa tashaddaquun...",
    terjemahan: "Dari Abu Dzar radhiyallahu 'anhu juga: Ada sekelompok sahabat berkata kepada Nabi shallallahu 'alaihi wa sallam: \"Wahai Rasulullah! Orang-orang kaya telah memborong banyak pahala. Mereka mengerjakan shalat seperti kami shalat, mereka berpuasa seperti kami berpuasa, namun mereka bisa bersedekah dengan kelebihan harta mereka (sedangkan kami tidak memiliki harta untuk disedekahkan).\" Nabi menjawab: \"Bukankah Allah telah menjadikan untuk kalian banyak hal yang bisa kalian sedekahkan? Sesungguhnya setiap ucapan tasbih (Subhanallah) adalah sedekah, setiap takbir (Allahu Akbar) adalah sedekah, setiap tahmid (Alhamdulillah) adalah sedekah, dan setiap tahlil (Laa ilaaha illallah) adalah sedekah. Mengajak kepada kebaikan adalah sedekah, melarang dari keburukan adalah sedekah, dan hubungan yang halal antara suami dengan istri juga sedekah.\" Para sahabat bertanya: \"Wahai Rasulullah, apakah seseorang yang memenuhi kebutuhan biologisnya dengan pasangannya yang sah bisa mendapatkan pahala?\" Nabi menjawab: \"Bagaimana pendapat kalian jika ia menyalurkannya pada hal yang haram, bukankah ia berdosa? Maka begitu pula jika ia menyalurkannya pada jalan yang halal, ia pasti mendapatkan pahala.\"",
    rawi: "Abu Dzar Al-Ghifari",
    sumber: "HR. Muslim",
    kualitas: "Shahih",
    status: "belum",
    durasiAudio: "2:50",
    urgensi: [
      "Sedekah tidak terbatas pada uang. Semua orang—baik kaya, miskin, kuat, maupun memiliki keterbatasan fisik—bisa bersedekah setiap hari melalui ucapan dzikir, senyuman, perbuatan ramah, dan membantu sesama.",
      "Pintu pahala terbuka sangat luas. Keterbatasan ekonomi atau fisik tidak menghalangi seseorang untuk meraih kedudukan tinggi di surga, karena Allah menilai ketulusan niat dan amal kebaikan non-materi.",
      "Niat yang benar mengubah hal biasa menjadi bernilai pahala. Aktivitas sehari-hari dan pemenuhan kebutuhan hidup yang dilakukan di jalan yang halal serta diniatkan untuk menjaga diri dari dosa akan bernilai ibadah di sisi Allah."
    ],
    konteks: "Sekelompok sahabat dari kalangan fakir miskin merasa sedih bukan karena mereka kekurangan makan, melainkan karena merasa tertinggal dalam perolehan pahala dibandingkan sahabat yang kaya. Sahabat yang kaya bisa bersedekah dan berinfak dengan harta yang melimpah, sedangkan sahabat miskin tidak memiliki uang untuk disedekahkan. Mendengar kekhawatiran yang tulus tersebut, Nabi Muhammad SAW memberikan kabar gembira dan membuka wawasan mereka bahwa pintu sedekah dalam Islam sangat luas, meliputi seluruh ucapan yang baik dan perbuatan mulia.",
    kataPilihan: [
      { arab: "أَهْلُ الدُّثُوْرِ", transliterasi: "Ahlud-Dutsuuri", arti: "Orang-orang yang memiliki banyak harta atau kekayaan berlebih." },
      { arab: "تَسْبِيْحَةٍ", transliterasi: "Tasbiihatin", arti: "Ucapan 'Subhanallah' (Maha Suci Allah). Setiap kali seorang muslim membaca kalimat ini, ia dicatat telah bersedekah." },
      { arab: "بُضْعِ", transliterasi: "Budh'i", arti: "Hubungan yang sah antara suami dan istri. Hal ini menjadi bukti bahwa perbuatan yang halal dan menjaga kehormatan diri akan mendatangkan pahala dari Allah." }
    ]
  },
  {
    id: 26,
    judul: "Bersedekah untuk Setiap Persendian Tubuh",
    arab: "عَنْ أَبِيْ هُرَيْرَةَ رَضِيَ اللهُ عَنْهُ قَالَ: قَالَ رَسُوْلُ اللهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ: «كُلُّ سُلَامَى مِنَ النَّاسِ عَلَيْهِ صَدَقَةٌ كُلَّ يَوْمٍ تَطْلُعُ فِيْهِ الشَّمْسُ: تَعْدِلُ بَيْنَ الِاثْنَيْنِ صَدَقَةٌ، وَتُعِيْنُ الرَّجُلَ فِيْ دَابَّتِهِ فَتَحْمِلُهُ عَلَيْهَا أَوْ تَرْفَعُ لَهُ عَلَيْهَا مَتَاعَهُ صَدَقَةٌ، وَالْكَلِمَةُ الطَّيِّبَةُ صَدَقَةٌ، وَكُلُّ خَطْوَةٍ تَمْشِيْهَا إِلَى الصَّلَاةِ صَدَقَةٌ، وَتُمِيْطُ الْأَذَى عَنِ الطَّرِيْقِ صَدَقَةٌ». رَوَاهُ الْبُخَارِيُّ وَمُسْلِمٌ.",
    transliterasi: "Kullu sulaamaa minan-naasi 'alayhi shadaqatun kulla yawmin tathlu'u fiihisy-syams...",
    terjemahan: "Dari Abu Hurairah radhiyallahu 'anhu, ia berkata: Rasulullah shallallahu 'alaihi wa sallam bersabda, \"Setiap ruas sendi tulang manusia wajib disedekahi pada setiap hari selagi matahari masih terbit. Berlaku adil untuk mendamaikan dua orang yang berselisih adalah sedekah. Menolong seseorang menaiki kendaraannya atau membantu mengangkat barang bawaannya ke atas kendaraan adalah sedekah. Berbicara dengan kata-kata yang baik dan santun adalah sedekah. Setiap langkah kaki yang engkau ayunkan untuk pergi shalat adalah sedekah. Dan menyingkirkan duri atau benda yang mengganggu dari jalanan juga adalah sedekah.\"",
    rawi: "Abu Hurairah",
    sumber: "HR. Bukhari dan Muslim",
    kualitas: "Shahih",
    status: "belum",
    durasiAudio: "2:10",
    urgensi: [
      "Mensyukuri nikmat kesehatan fisik. Tubuh kita memiliki ratusan ruas sendi yang memudahkan kita untuk bergerak dan beraktivitas. Cara bersyukur terbaik adalah menggunakan anggota tubuh untuk membantu orang lain.",
      "Menghidupkan kepedulian di lingkungan sekitar. Perbuatan baik sehari-hari—seperti membantu orang mengangkat barang, menjaga kebersihan fasilitas umum, dan berbicara dengan ramah—semuanya bernilai ibadah sedekah di mata Allah.",
      "Menjaga kerukunan masyarakat. Menjadi penengah yang adil untuk mendamaikan teman atau keluarga yang sedang berselisih adalah amalan mulia yang mendatangkan pahala besar."
    ],
    konteks: "Rasulullah shallallahu 'alaihi wa sallam menyampaikan hadis ini untuk mengajarkan arti syukur yang sesungguhnya. Bersyukur atas nikmat badan yang sehat tidak hanya diucapkan lewat lisan, melainkan dibuktikan melalui tindakan nyata yang memberi manfaat kepada masyarakat luas. Nabi memberikan contoh-contoh kebaikan yang sangat mudah ditemui dalam kehidupan sehari-hari, agar setiap muslim terbiasa melakukan aksi sosial dan saling menolong sejak pagi hari.",
    kataPilihan: [
      { arab: "سُلَامَى", transliterasi: "Sulaama", arti: "Ruas tulang atau persendian pada tubuh manusia. Sendi-sendi ini merupakan anugerah yang membuat tubuh manusia bisa ditekuk, digerakkan, dan difungsikan dengan baik." },
      { arab: "تَعْدِلُ", transliterasi: "Ta'dilu", arti: "Bersikap adil atau mendamaikan dengan jujur. Maksudnya adalah membantu menyelesaikan masalah di antara dua orang yang bertengkar tanpa memihak salah satunya." },
      { arab: "تُمِيْطُ الْأَذَى", transliterasi: "Tumiithul Adzaa", arti: "Menyingkirkan gangguan atau rintangan. Yaitu membersihkan jalan umum dari benda-benda berbahaya seperti paku, pecahan kaca, dahan berduri, atau sampah yang bisa mencelakakan orang lewat." }
    ]
  },
  {
    id: 27,
    judul: "Mengenali Kebaikan dan Tanda Perbuatan Dosa",
    arab: "عَنِ النَّوَّاسِ بْنِ سَمْعَانَ رَضِيَ اللهُ عَنْهُ، عَنِ النَّبِيِّ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ قَالَ: «الْبِرُّ حُسْنُ الْخُلُقِ، وَالْإِثْمُ مَا حَاكَ فِيْ نَفْسِكَ وَكَرِهْتَ أَنْ يَطَّلِعَ عَلَيْهِ النَّاسُ». رَوَاهُ مُسْلِمٌ. وَعَنْ وَابِصَةَ بْنِ مَعْبَدٍ رَضِيَ اللهُ عَنْهُ قَالَ: أَتَيْتُ رَسُوْلَ اللهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ فَقَالَ: «جِئْتَ تَسْأَلُ عَنِ الْبِرِّ؟» قُلْتُ: نَعَمْ. قَالَ: «اسْتَفْتِ قَلْبَكَ؛ الْبِرُّ مَا اطْمَأَنَّتْ إِلَيْهِ النَّفْسُ، وَاطْمَأَنَّ إِلَيْهِ الْقَلْبُ، وَالْإِثْمُ مَا حَاكَ فِيْ النَّفْسِ، وَتَرَدَّدَ فِيْ الصَّدْرِ، وَإِنْ أَفْتَاكَ النَّاسُ وَأَفْتَوْكَ». حَدِيْثٌ حَسَنٌ، رُوِّيْنَاهُ فِيْ مُسْنَدَيِ الْإِمَامَيْنِ: أَحْمَدَ بْنِ حَنْبَلٍ، وَالدَّارِمِيِّ بِإِسْنَادٍ حَسَنٍ.",
    transliterasi: "Al-birru husnul khuluq, wal itsmu maa haaka fii nafsika wa karihta an yath-thali'a 'alayhin-naas...",
    terjemahan: "Dari An-Nawwas bin Sam'an radhiyallahu 'anhu, dari Nabi shallallahu 'alaihi wa sallam, beliau bersabda, \"Kebaikan itu adalah akhlak (perilaku) yang mulia. Sedangkan dosa adalah apa yang membuat hatimu gelisah dan engkau tidak suka jika hal itu dilihat atau diketahui oleh orang lain.\" (HR. Muslim). Dan dari Wabishah bin Ma'bad radhiyallahu 'anhu, ia berkata: Aku datang menemui Rasulullah shallallahu 'alaihi wa sallam, lalu beliau bertanya: \"Apakah engkau datang untuk menanyakan tentang arti kebaikan?\" Aku menjawab: \"Ya.\" Beliau bersabda: \"Tanyakanlah kepada hatimu sendiri. Kebaikan adalah apa yang membuat jiwa dan hatimu merasa tenang dan tentram. Sedangkan dosa adalah apa yang mengganjal di dalam jiwa dan menimbulkan keragu-raguan di dalam dada, meskipun orang-orang berkali-kali memberimu pembenaran.\" (HR. Ahmad dan Ad-Darimi, Hasan).",
    rawi: "An-Nawwas bin Sam'an dan Wabishah",
    sumber: "HR. Muslim dan Ahmad",
    kualitas: "Shahih & Hasan",
    status: "belum",
    durasiAudio: "2:30",
    urgensi: [
      "Hati nurani sebagai penunjuk arah. Hati orang yang beriman memiliki kepekaan alami. Kebaikan akan selalu menghadirkan rasa damai dan lega, sedangkan perbuatan buruk akan menimbulkan rasa resah dan tidak tenang.",
      "Akhlak mulia adalah puncak kebaikan. Menjadi orang baik tidak cukup hanya dengan beribadah ritual, tetapi harus diwujudkan dengan tutur kata yang santun, suka menolong, dan bersikap jujur.",
      "Mengenali tanda-tanda dosa. Jika kita melakukan sesuatu secara sembunyi-sembunyi karena takut diketahui orang lain dan merasa bersalah di dalam dada, itu adalah tanda bahwa perbuatan tersebut tidak baik dan harus segera dihentikan."
    ],
    konteks: "Sahabat bernama Wabishah bin Ma'bad datang menemui Rasulullah shallallahu 'alaihi wa sallam dengan niat ingin menanyakan perbedaan mendasar antara kebaikan dan dosa. Sebelum Wabishah sempat berbicara, Nabi dengan kebijaksanaannya sudah mengetahui maksud kedatangannya dan langsung menjelaskan hakikat tersebut. Nabi mengajarkan bahwa hukum aturan agama itu sejalan dengan fitrah hati manusia yang bersih. Jika suatu perbuatan benar, hati akan merasa tenteram; jika suatu perbuatan salah, hati akan merasa gundah meskipun ada orang lain yang membela perbuatan tersebut.",
    kataPilihan: [
      { arab: "الْبِرُّ", transliterasi: "Al-Birru", arti: "Kebajikan atau kebaikan yang luas. Mencakup segala perbuatan terpuji, akhlak mulia, dan ketaatan yang mendatangkan ridha Allah." },
      { arab: "الْإِثْمُ", transliterasi: "Al-Itsmu", arti: "Perbuatan dosa atau kesalahan yang menimbulkan akibat buruk bagi pelakunya." },
      { arab: "اسْتَفْتِ قَلْبَكَ", transliterasi: "Istafti Qalbaka", arti: "Tanyakanlah atau mintalah fatwa kepada hatimu sendiri. Petunjuk untuk mendengarkan kejujuran suara hati nurani yang bersih ketika menghadapi hal yang meragukan." }
    ]
  },
  {
    id: 28,
    judul: "Berpegang Teguh pada Sunnah Nabi dan Taat kepada Pemimpin",
    arab: "عَنْ أَبِيْ نَجِيْحٍ الْعِرْبَاضِ بْنِ سَارِيَةَ رَضِيَ اللهُ عَنْهُ قَالَ: وَعَظَنَا رَسُوْلُ اللهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ مَوْعِظَةً وَجِلَتْ مِنْهَا الْقُلُوْبُ، وَذَرَفَتْ مِنْهَا الْعُيُوْنُ، فَقُلْنَا: يَا رَسُوْلَ اللهِ، كَأَنَّهَا مَوْعِظَةُ مُوَدِّعٍ فَأَوْصِنَا. قَالَ: «أُوْصِيْكُمْ بِتَقْوَى اللهِ، وَالسَّمْعِ وَالطَّاعَةِ وَإِنْ تَأَمَّرَ عَلَيْكُمْ عَبْدٌ، فَإِنَّهُ مَنْ يَعِشْ مِنْكُمْ بَعْدِيْ فَسَيَرَى اخْتِلَافًا كَثِيْرًا، فَعَلَيْكُمْ بِسُنَّتِيْ وَسُنَّةِ الْخُلَفَاءِ الرَّاشِدِيْنَ الْمَهْدِيِّيْنَ، عَضُّوْا عَلَيْهَا بِالنَّوَاجِذِ، وَإِيَّاكُمْ وَمُحْدَثَاتِ الْأُمُوْرِ، فَإِنَّ كُلَّ بِدْعَةٍ ضَلَالَةٌ». رَوَاهُ أَبُوْ دَاوُدَ، وَالتِّرْمِذِيُّ وَقَالَ: حَدِيْثٌ حَسَنٌ صَحِيْحٌ.",
    transliterasi: "Wa'adzanaa Rasuulullaahi shallallaahu 'alayhi wa sallama maw'idhatan wajilat minhal quluub...",
    terjemahan: "Dari Abu Najih, yaitu Al-Irbadh bin Sariyah radhiyallahu 'anhu, ia berkata: Rasulullah shallallahu 'alaihi wa sallam pernah memberikan nasihat kepada kami dengan nasihat yang membuat hati bergetar dan air mata menetes. Kami berkata: \"Wahai Rasulullah, seakan-akan ini adalah nasihat perpisahan, maka berilah kami wasiat.\" Beliau bersabda: \"Aku berwasiat kepada kalian untuk selalu bertakwa kepada Allah, serta patuh dan taat kepada pemimpin, meskipun yang memimpin kalian adalah seorang budak. Sesungguhnya siapa saja di antara kalian yang masih hidup setelah aku wafat, ia akan melihat banyak perselisihan. Maka hendaklah kalian berpegang teguh pada ajaranku (sunnah) dan ajaran para pemimpin pengganti yang lurus dan mendapat petunjuk (Khulafaur Rasyidin). Peganglah ajaran itu kuat-kuat seolah kalian menggigitnya dengan gigi geraham. Dan jauhilah perkara-perkara baru yang diada-adakan dalam urusan agama, karena setiap perkara baru dalam ibadah adalah bid'ah, dan setiap bid'ah adalah sesat.\"",
    rawi: "Al-Irbadh bin Sariyah",
    sumber: "HR. Abu Dawud dan At-Tirmidzi",
    kualitas: "Hasan Shahih",
    status: "belum",
    durasiAudio: "2:55",
    urgensi: [
      "Menjaga persatuan dan ketertiban umum. Taat dan patuh kepada aturan pemerintah atau pemimpin dalam hal-hal yang baik adalah kunci menjaga keamanan agar masyarakat tidak terpecah-belah dan tidak terjadi kerusuhan.",
      "Pedoman utama saat terjadi perselisihan. Ketika ada banyak perbedaan pendapat yang membingungkan di masyarakat, pegangan hidup yang paling aman dan benar adalah kembali mencontoh ajaran Nabi Muhammad SAW dan para sahabat utamanya.",
      "Menjaga keaslian ajaran agama. Kita diperintahkan untuk berpegang teguh pada tuntunan ibadah yang asli dan tidak membuat-buat aturan baru yang menyimpang dari Al-Qur'an dan Sunnah."
    ],
    konteks: "Hadis ini disampaikan oleh Nabi Muhammad SAW dengan penuh haru menjelang masa akhir hidup beliau. Gaya bicara dan kedalaman pesan yang disampaikan membuat para sahabat merasa bahwa waktu kebersamaan mereka dengan Nabi sudah tidak lama lagi. Menyadari hal tersebut, Nabi membekali para sahabat dengan wasiat penting agar umat Islam tetap memiliki arah hidup yang jelas, tidak terombang-ambing oleh perpecahan zaman, serta selalu menjaga kerukunan hidup berbangsa dan beragama.",
    kataPilihan: [
      { arab: "وَجِلَتْ", transliterasi: "Wajilat", arti: "Bergetar, tersentuh, atau takut. Menggambarkan suasana hati para sahabat yang sangat tersentuh dan penuh rasa takzim saat mendengarkan nasihat Nabi." },
      { arab: "بِالنَّوَاجِذِ", transliterasi: "Bin-Nawaajidzi", arti: "Dengan gigi geraham. Kiasan yang menggambarkan perintah untuk memegang prinsip kebenaran dan ajaran agama dengan sangat kuat dan sungguh-sungguh tanpa mudah melepaskannya." },
      { arab: "الْخُلَفَاءِ الرَّاشِدِيْنَ", transliterasi: "Al-Khulafaa-ir Raasyidiin", arti: "Para pemimpin penerus yang lurus dan bijaksana. Merujuk kepada empat sahabat utama Nabi yang melanjutkan kepemimpinan Islam: Abu Bakar, Umar, Utsman, dan Ali radhiyallahu 'anhum." }
    ]
  },
  {
    id: 29,
    judul: "Pintu-Pintu Kebaikan dan Bahaya Lisan (Ucapan)",
    arab: "عَنْ مُعَاذِ بْنِ جَبَلٍ رَضِيَ اللهُ عَنْهُ قَالَ: قُلْتُ: يَا رَسُوْلَ اللهِ! أَخْبِرْنِيْ بِعَمَلٍ يُدْخِلُنِي الْجَنَّةَ وَيُبَاعِدُنِيْ عَنِ النَّارِ. قَالَ: «لَقَدْ سَأَلْتَ عَنْ عَظِيْمٍ، وَإِنَّهُ لَيَسِيْرٌ عَلَى مَنْ يَسَّرَهُ اللهُ تَعَالَى عَلَيْهِ: تَعْبُدُ اللهَ لَا تُشْرِكُ بِهِ شَيْئًا، وَتُقِيْمُ الصَّلَاةَ، وَتُؤْتِي الزَّكَاةَ، وَتَصُوْمُ رَمَضَانَ، وَتَحُجُّ الْبَيْتَ». ثُمَّ قَالَ: «أَلَا أَدُلُّكَ عَلَى أَبْوَابِ الْخَيْرِ؟ الصَّوْمُ جُنَّةٌ، وَالصَّدَقَةُ تُطْفِئُ الْخَطِيْئَةَ كَمَا يُطْفِئُ الْمَاءُ النَّارَ، وَصَلَاةُ الرَّجُلِ فِيْ جَوْفِ اللَّيْلِ»، ثُمَّ تَلَا: ﴿تَتَجَافَىٰ جُنُوبُهُمْ عَنِ الْمَضَاجِعِ﴾ حَتَّى بَلَغَ ﴿يَعْمَلُونَ﴾. ثُمَّ قَالَ: «أَلَا أُخْبِرُكَ بِرَأْسِ الْأَمْرِ وَعَمُوْدِهِ وَذِرْوَةِ سَنَامِهِ؟» قُلْتُ: بَلَى يَا رَسُوْلَ اللهِ. قَالَ: «رَأْسُ الْأَمْرِ الْإِسْلَامُ، وَعَمُوْدُهُ الصَّلَاةُ، وَذِرْوَةُ سَنَامِهِ الْجِهَادُ». ثُمَّ قَالَ: «أَلَا أُخْبِرُكَ بِمِلَاكِ ذَلِكَ كُلِّهِ؟» قُلْتُ: بَلَى يَا نَبِيَّ اللهِ. فَأَخَذَ بِلِسَانِهِ وَقَالَ: «كُفَّ عَلَيْكَ هَذَا». فَقُلْتُ: يَا نَبِيَّ اللهِ، وَإِنَّا لَمُؤَاخَذُوْنَ بِمَا نَتَكَلَّمُ بِهِ؟ فَقَالَ: «ثَكِلَتْكَ أُمُّكَ يَا مُعَاذُ! وَهَلْ يَكُبُّ النَّاسَ فِيْ النَّارِ عَلَى وُجُوْهِهِمْ - أَوْ قَالَ: عَلَى مَنَاخِرِهِمْ - إِلَّا حَصَائِدُ أَلْسِنَتِهِمْ؟». رَوَاهُ التِّرْمِذِيُّ وَقَالَ: حَدِيْثٌ حَسَنٌ صَحِيْحٌ.",
    transliterasi: "Laqad sa-alta 'an 'adzhiimin, wa innahu layasiirun 'alaa man yassarahu-llaahu ta'aalaa 'alayh...",
    terjemahan: "Dari Mu'adz bin Jabal radhiyallahu 'anhu, ia berkata: Aku berkata kepada Nabi: \"Wahai Rasulullah! Beritahukanlah kepadaku tentang amalan yang dapat memasukkanku ke dalam surga dan menjauhkanku dari neraka.\" Nabi menjawab: \"Sungguh engkau telah menanyakan perkara yang sangat besar, tetapi hal itu terasa mudah bagi siapa saja yang dimudahkan oleh Allah Ta'ala: Engkau beribadah kepada Allah tanpa menyekutukan-Nya dengan apa pun, mendirikan shalat, membayar zakat, berpuasa di bulan Ramadhan, dan menunaikan ibadah haji ke Baitullah.\" Kemudian beliau bersabda: \"Maukah aku tunjukkan kepadamu pintu-pintu kebaikan? Puasa adalah perisai (pelindung dari dosa), sedekah itu dapat memadamkan dosa sebagaimana air memadamkan api, dan shalat seseorang di tengah malam.\" Lalu beliau membaca ayat tentang orang-orang yang bangun malam untuk berdoa dan beribadah (QS. As-Sajdah: 16-17). Kemudian beliau bersabda: \"Maukah aku beritahu pokok urusan agama, tiangnya, dan puncaknya yang tertinggi?\" Aku menjawab: \"Tentu mau, wahai Rasulullah.\" Beliau bersabda: \"Pokok urusan adalah Islam, tiangnya adalah shalat, dan puncaknya adalah jihad (berjuang di jalan Allah).\" Kemudian beliau bersabda lagi: \"Maukah aku beritahu kunci pengendali dari semua itu?\" Aku menjawab: \"Tentu mau, wahai Nabi Allah.\" Lalu Nabi memegang lidahnya sendiri dan bersabda: \"Jagalah ini (tahanlah lisanmu dari bicara buruk).\" Aku bertanya: \"Wahai Nabi Allah, apakah kita benar-benar akan dihukum karena apa yang kita bicarakan?\" Nabi menjawab: \"Wahai Mu'adz, bukankah banyak orang yang terlempar dan tersungkur ke dalam neraka dengan wajah mereka terlebih dahulu, tidak lain karena akibat buruk dari ucapan lisan mereka sendiri?\"",
    rawi: "Mu'adz bin Jabal",
    sumber: "HR. At-Tirmidzi",
    kualitas: "Hasan Shahih",
    status: "belum",
    durasiAudio: "4:00",
    urgensi: [
      "Peta lengkap jalan menuju surga. Hadis ini menjelaskan tahapan amalan seorang muslim mulai dari kewajiban pokok (rukun Islam), amalan sunnah pelengkap (puasa, sedekah, shalat tahajud), hingga amalan penjaga iman.",
      "Sedekah sebagai pembersih kesalahan. Sedekah yang tulus memiliki kekuatan untuk memadamkan dosa-dosa kecil seperti halnya air menyiram dan memadamkan api.",
      "Menjaga lisan adalah kunci keselamatan seluruh amal. Rajin shalat dan puasa bisa sia-sia jika lisan kita suka berbohong, menghina, menggunjing, atau menyakiti perasaan orang lain."
    ],
    konteks: "Mu'adz bin Jabal radhiyallahu 'anhu adalah sahabat yang memiliki cita-cita mulia untuk selamat di akhirat. Ia meminta bimbingan langsung kepada Nabi Muhammad SAW mengenai amalan apa saja yang bisa menjamin seseorang masuk surga. Nabi menyambut pertanyaan tersebut dengan antusias dan mengajarkannya secara bertahap. Di akhir penjelasannya, Nabi memberikan penekanan yang sangat penting bahwa seluruh amalan hebat tersebut harus dikunci dengan kemampuan menahan lisan dari perkataan kotor dan jahat.",
    kataPilihan: [
      { arab: "جُنَّةٌ", transliterasi: "Junnatun", arti: "Perisai atau benteng pelindung. Puasa berfungsi melindungi seseorang dari dorongan hawa nafsu buruk di dunia dan melindunginya dari api neraka di akhirat." },
      { arab: "كُفَّ عَلَيْكَ هَذَا", transliterasi: "Kuffa 'Alaika Haadzaa", arti: "Tahanlah dan jagalah ini. Perintah tegas dari Nabi sambil memegang lidah, agar seseorang berhati-hati dalam berbicara dan menjaga tutur katanya." },
      { arab: "حَصَائِدُ أَلْسِنَتِهِمْ", transliterasi: "Hasaa-idu Alsinatihim", arti: "Panenan atau akibat dari ucapan lidah mereka. Kiasan bahwa setiap kata yang diucapkan manusia akan membuahkan hasil, baik berupa pahala jika ucapannya baik, maupun dosa jika ucapannya buruk." }
    ]
  },
  {
    id: 30,
    judul: "Menjaga Batasan dan Aturan Allah",
    arab: "عَنْ أَبِيْ ثَعْلَبَةَ الْخُشَنِيِّ جُرْثُوْمِ بْنِ نَاشِرٍ رَضِيَ اللهُ عَنْهُ، عَنْ رَسُوْلِ اللهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ قَالَ: «إِنَّ اللهَ تَعَالَى فَرَضَ فَرَائِضَ فَلَا تُضَيِّعُوْهَا، وَحَدَّ حُدُوْدًا فَلَا تَعْتَدُوْهَا، وَحَرَّمَ أَشْيَاءَ فَلَا تَنْتَهِكُوْهَا، وَسَكَتَ عَنْ أَشْيَاءَ رَحْمَةً لَكُمْ غَيْرَ نِسْيَانٍ فَلَا تَبْحَثُوْا عَنْهَا». حَدِيْثٌ حَسَنٌ، رَوَاهُ الدَّارَقُطْنِيُّ وَغَيْرُهُ.",
    transliterasi: "Innallaaha Ta'aalaa faradha faraa-idha falaa tudhayyi'uuhaa...",
    terjemahan: "Dari Abu Tsa'labah Al-Khusyani, yaitu Jurtsum bin Nasyir radhiyallahu 'anhu, dari Rasulullah shallallahu 'alaihi wa sallam, beliau bersabda, \"Sesungguhnya Allah Ta'ala telah menetapkan kewajiban-kewajiban, maka janganlah kalian menyia-nyiakannya. Dia telah menentukan batasan-batasan aturan, maka janganlah kalian melanggarnya. Dia telah mengharamkan beberapa perkara, maka janganlah kalian melanggarnya. Dan Dia mendiamkan (tidak mewajibkan atau mengharamkan) beberapa hal sebagai bentuk kasih sayang kepada kalian, bukan karena lupa, maka janganlah kalian mempermasalahkannya (mencari-cari kesulitannya).\"",
    rawi: "Abu Tsa'labah Al-Khusyani",
    sumber: "HR. Ad-Daruquthni dan Al-Baihaqi",
    kualitas: "Hasan",
    status: "belum",
    durasiAudio: "1:45",
    urgensi: [
      "Memahami pembagian aturan hidup. Hadis ini membagi hukum menjadi empat bagian yang jelas: hal wajib yang harus dikerjakan, batas hukum yang tidak boleh dilanggar, hal haram yang harus dijauhi, dan hal yang dimaafkan (dibolehkan) sebagai bentuk kemudahan.",
      "Bukti kasih sayang Allah. Hal-hal yang tidak disebutkan larangannya di dalam agama berarti dibolehkan untuk dimanfaatkan manusia secara wajar dan bijaksana.",
      "Menghindari sikap mempersulit diri. Kita diajarkan untuk fokus mengerjakan hal-hal yang jelas perintahnya dan tidak memusingkan diri dengan pertanyaan yang berlebihan atau mengada-ada."
    ],
    konteks: "Rasulullah shallallahu 'alaihi wa sallam menyampaikan hadis ini untuk memberikan kerangka berpikir yang tenang dan teratur bagi umat Islam dalam menjalankan aturan agama. Nabi mendidik para sahabat agar tidak merasa tertekan atau takut berlebihan dalam menjalani kehidupan sehari-hari. Nabi menegaskan bahwa Allah adalah Tuhan yang Maha Pengasih; segala aturan dibuat untuk kebaikan manusia, dan apa yang tidak diatur secara ketat adalah bentuk keleluasaan hidup yang patut disyukuri.",
    kataPilihan: [
      { arab: "فَرَائِضَ", transliterasi: "Faraa-idha", arti: "Kewajiban-kewajiban pokok yang telah ditetapkan oleh Allah (seperti shalat fardhu, puasa, dan zakat) yang tidak boleh diabaikan." },
      { arab: "حُدُوْدًا", transliterasi: "Huduudan", arti: "Batasan-batasan aturan hukum yang menjadi pagar pengaman agar manusia tidak berbuat zalim atau berlebihan." },
      { arab: "رَحْمَةً لَكُمْ", transliterasi: "Rahmatan Lakum", arti: "Sebagai bentuk rahmat, kelonggaran, dan kasih sayang bagi kalian semua." }
    ]
  },
  {
    id: 31,
    judul: "Meraih Cinta Allah dan Cinta Sesama Manusia (Zuhud)",
    arab: "عَنْ أَبِيْ الْعَبَّاسِ سَهْلِ بْنِ سَعْدٍ السَّاعِدِيِّ رَضِيَ اللهُ عَنْهُ قَالَ: جَاءَ رَجُلٌ إِلَى النَّبِيِّ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ فَقَالَ: يَا رَسُوْلَ اللهِ! دُلَّنِيْ عَلَى عَمَلٍ إِذَا عَمِلْتُهُ أَحَبَّنِيَ اللهُ، وَأَحَبَّنِيَ النَّاسُ. فَقَالَ: «ازْهَدْ فِيْ الدُّنْيَا يُحِبَّكَ اللهُ، وَازْهَدْ فِيْمَا عِنْدَ النَّاسِ يُحِبَّكَ النَّاسُ». حَدِيْثٌ حَسَنٌ، رَوَاهُ ابْنُ مَاجَهْ وَغَيْرُهُ بِأَسَانِيْدَ حَسَنَةٍ.",
    transliterasi: "Izhad fid-dunyaa yuhibbakallaah, wazhad fiimaa 'indan-naasi yuhibbakan-naas...",
    terjemahan: "Dari Abul Abbas, yaitu Sahl bin Sa'd As-Sa'idi radhiyallahu 'anhu, ia berkata: Ada seorang laki-laki datang kepada Nabi shallallahu 'alaihi wa sallam lalu berkata: \"Wahai Rasulullah! Tunjukkanlah kepadaku suatu perbuatan yang jika aku mengerjakannya, maka aku akan dicintai oleh Allah dan juga dicintai oleh sesama manusia.\" Rasulullah menjawab: \"Bersikap zuhudlah (jangan serakah) terhadap urusan dunia, niscaya Allah akan mencintaimu. Dan bersikap zuhudlah (jangan mengharapkan atau mengingini) apa yang dimiliki orang lain, niscaya manusia akan mencintaimu.\"",
    rawi: "Sahl bin Sa'd",
    sumber: "HR. Ibnu Majah",
    kualitas: "Hasan",
    status: "belum",
    durasiAudio: "1:40",
    urgensi: [
      "Kunci dicintai oleh Allah. Allah mencintai hamba-Nya yang tidak serakah, tidak diperbudak oleh harta, dan selalu menggunakan apa yang dimilikinya untuk berbuat kebaikan dan menolong sesama.",
      "Kunci hidup rukun di tengah masyarakat. Manusia akan merasa nyaman dan menyayangi orang yang tidak suka meminta-minta, tidak iri atas rezeki orang lain, dan tidak ingin merebut kepunyaan orang lain.",
      "Menghadirkan rasa tenang dan rasa cukup (qana'ah). Hidup akan jauh lebih bahagia jika kita bersyukur atas apa yang kita miliki dan tidak membanding-bandingkannya dengan milik orang lain."
    ],
    konteks: "Seorang sahabat datang menemui Nabi Muhammad SAW dengan harapan ingin mendapatkan jalan pintas menuju kebahagiaan hidup yang sempurna: dicintai oleh Pencipta di langit dan dicintai oleh sesama manusia di bumi. Nabi memberikan resep hidup yang sangat praktis dan menenangkan, yaitu dengan mengendalikan keinginan hati. Hubungan dengan Allah dijaga dengan tidak dibutakan oleh kemilau dunia, sedangkan hubungan dengan manusia dijaga dengan tidak serakah terhadap hak dan milik orang lain.",
    kataPilihan: [
      { arab: "ازْهَدْ", transliterasi: "Izhad", arti: "Bersikap zuhudlah, yaitu hidup sederhana, tidak serakah, merasa cukup dengan apa yang ada, dan tidak menggantungkan kebahagiaan hanya pada harta benda." },
      { arab: "دُلَّنِيْ", transliterasi: "Dullanii", arti: "Tunjukkanlah atau bimbinglah aku menuju jalan kebaikan." },
      { arab: "عِنْدَ النَّاسِ", transliterasi: "'Indan-Naas", arti: "Apa yang ada di tangan orang lain. Maksudnya adalah rezeki, harta, atau barang-barang yang menjadi milik orang lain yang tidak boleh kita iri atau harapkan secara berlebihan." }
    ]
  },
  {
    id: 32,
    judul: "Larangan Menimbulkan Bahaya dan Merugikan Orang Lain",
    arab: "عَنْ أَبِيْ سَعِيْدٍ سَعْدِ بْنِ مَالِكِ بْنِ سِنَانٍ الْخُدْرِيِّ رَضِيَ اللهُ عَنْهُ، أَنَّ رَسُوْلَ اللهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ قَالَ: «لَا ضَرَرَ وَلَا ضِرَارَ». حَدِيْثٌ حَسَنٌ، رَوَاهُ ابْنُ مَاجَهْ، وَالدَّارَقُطْنِيُّ وَغَيْرُهُمَا مُسْنَدًا، وَرَوَاهُ مَالِكٌ فِيْ الْمُوَطَّإِ مُرْسَلًا عَنْ عَمْرِو بْنِ يَحْيَى عَنْ أَبِيْهِ عَنِ النَّبِيِّ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ فَأَسْقَطَ أَبَا سَعِيْدٍ، وَلَهُ طُرُقٌ يُقَوِّيْ بَعْضُهَا بَعْضًا.",
    transliterasi: "Laa dharara wa laa dhiraar...",
    terjemahan: "Dari Abu Sa'id, yaitu Sa'ad bin Malik bin Sinan Al-Khudri radhiyallahu 'anhu, bahwa Rasulullah shallallahu 'alaihi wa sallam bersabda, \"Tidak boleh menimbulkan bahaya (merugikan diri sendiri atau orang lain), dan tidak boleh pula membalas bahaya dengan bahaya (saling merugikan).\"",
    rawi: "Abu Sa'id Al-Khudri",
    sumber: "HR. Ibnu Majah, Ad-Daruquthni, dan Malik",
    kualitas: "Hasan",
    status: "belum",
    durasiAudio: "1:15",
    urgensi: [
      "Prinsip dasar keselamatan hidup. Hadis ini melarang segala hal yang merusak kesehatan diri sendiri (seperti perbuatan berbahaya) dan melarang perbuatan yang menyusahkan orang lain.",
      "Larangan membalas dendam dengan cara merusak. Jika seseorang berbuat salah kepada kita, kita tidak boleh membalasnya dengan cara yang merugikan atau menimbulkan bahaya baru, melainkan harus diselesaikan dengan adil dan damai.",
      "Menjaga ketertiban di ruang publik. Aturan ini berlaku dalam segala hal, seperti tidak membuang sampah sembarangan, tidak berkendara ugal-ugalan, dan tidak menjual barang yang rusak kepada pembeli."
    ],
    konteks: "Rasulullah shallallahu 'alaihi wa sallam menyampaikan dua patah kata yang sangat padat ini sebagai kaidah hukum agung dalam kehidupan bermasyarakat. Pada masa itu dan masa seterusnya, sering kali terjadi gesekan antarwarga dalam urusan tanah, bangunan, atau perdagangan yang merugikan salah satu pihak. Nabi menegaskan bahwa seluruh ajaran Islam berdiri di atas prinsip menghadirkan manfaat serta menghilangkan dan mencegah segala bentuk bahaya bagi semua orang.",
    kataPilihan: [
      { arab: "لَا ضَرَرَ", transliterasi: "Laa Dharara", arti: "Tidak boleh menimbulkan bahaya atau kerugian sejak awal, baik merugikan fisik, harta, maupun perasaan orang lain." },
      { arab: "لَا ضِرَارَ", transliterasi: "Laa Dhiraara", arti: "Tidak boleh saling merugikan atau membalas kerugian dengan perbuatan yang sama-sama merusak." },
      { arab: "سَنَدٌ / مُسْنَدًا", transliterasi: "Musnadan", arti: "Riwayat yang jalurnya lengkap dan bersambung tanpa putus sampai kepada sahabat dan Rasulullah SAW." }
    ]
  },
  {
    id: 33,
    judul: "Kewajiban Menghadirkan Bukti dalam Menuduh",
    arab: "عَنِ ابْنِ عَبَّاسٍ رَضِيَ اللهُ عَنْهُمَا، أَنَّ رَسُوْلَ اللهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ قَالَ: «لَوْ يُعْطَى النَّاسُ بِدَعْوَاهُمْ، لَادَّعَى رِجَالٌ أَمْوَالَ قَوْمٍ وَدِمَاءَهُمْ، لَكِنِ الْبَيِّنَةُ عَلَى الْمُدَّعِيْ، وَالْيَمِيْنُ عَلَى مَنْ أَنْكَرَ». حَدِيْثٌ حَسَنٌ، رَوَاهُ الْبَيْهَقِيُّ وَغَيْرُهُ هَكَذَا، وَبَعْضُهُ فِيْ الصَّحِيْحَيْنِ.",
    transliterasi: "Law yu'than-naasu bida'waahum, ladda'aa rijaalun amwaala qawmin wa dimaa-ahum...",
    terjemahan: "Dari Ibnu Abbas radhiyallahu 'anhuma, bahwa Rasulullah shallallahu 'alaihi wa sallam bersabda, \"Seandainya setiap manusia langsung dikabulkan permintaannya hanya berdasarkan tuduhan atau klaim mereka saja, tentu akan ada orang-orang yang sembarangan menuntut harta dan nyawa orang lain. Oleh karena itu, bukti wajib didatangkan oleh orang yang menuduh (menuntut), dan sumpah wajib diucapkan oleh orang yang membantah (menolak) tuduhan tersebut.\"",
    rawi: "Ibnu Abbas",
    sumber: "HR. Al-Baihaqi, Bukhari, dan Muslim",
    kualitas: "Hasan",
    status: "belum",
    durasiAudio: "1:40",
    urgensi: [
      "Menjaga keadilan dan mencegah fitnah. Kita dilarang menuduh orang lain berbuat salah, mencuri, atau berbohong tanpa memiliki bukti yang nyata dan jelas.",
      "Melindungi hak milik dan nama baik setiap orang. Hadis ini memastikan bahwa barang atau harta seseorang tidak bisa dirampas begitu saja oleh orang lain yang sekadar mengaku-aku sebagai pemiliknya.",
      "Menjadi pedoman dalam menyelesaikan perselisihan. Siapa pun yang menuduh wajib menunjukkan bukti (seperti saksi atau tanda yang nyata). Jika tidak ada bukti, orang yang dituduh cukup bersumpah atas nama Allah untuk membuktikan dirinya tidak bersalah."
    ],
    konteks: "Rasulullah shallallahu 'alaihi wa sallam menyampaikan hadis ini sebagai prinsip dasar tata hukum yang adil di tengah masyarakat. Dalam kehidupan sehari-hari, sering terjadi pertengkaran mengenai kepemilikan barang atau perselisihan utang piutang. Nabi menetapkan aturan peradilan yang rapi agar orang yang berniat jahat tidak bisa memanfaatkan celah untuk menipu atau merugikan orang lain hanya dengan modal kata-kata atau tuduhan palsu.",
    kataPilihan: [
      { arab: "دَعْوَاهُمْ", transliterasi: "Da'waahum", arti: "Pengakuan, klaim, atau tuduhan sepihak tanpa disertai bukti yang sah." },
      { arab: "الْبَيِّنَةُ", transliterasi: "Al-Bayyinatu", arti: "Bukti yang jelas dan nyata, seperti adanya saksi yang jujur, tanda kepemilikan resmi, atau bukti fisik yang tidak terbantahkan." },
      { arab: "الْمُدَّعِيْ", transliterasi: "Al-Mudda'ii", arti: "Orang yang menuntut, menggugat, atau menuduh pihak lain di hadapan penengah atau hakim." }
    ]
  },
  {
    id: 34,
    judul: "Kewajiban Mengubah dan Mencegah Kemungkaran (Keburukan)",
    arab: "عَنْ أَبِيْ سَعِيْدٍ الْخُدْرِيِّ رَضِيَ اللهُ عَنْهُ قَالَ: سَمِعْتُ رَسُوْلَ اللهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ يَقُوْلُ: «مَنْ رَأَى مِنْكُمْ مُنْكَرًا فَلْيُغَيِّرْهُ بِيَدِهِ، فَإِنْ لَمْ يَسْتَطِعْ فَبِلِسَانِهِ، فَإِنْ لَمْ يَسْتَطِعْ فَبِقَلْبِهِ، وَذَلِكَ أَضْعَفُ الْإِيْمَانِ». رَوَاهُ مُسْلِمٌ.",
    transliterasi: "Man ra-aa minkum munkaran falyughayyirhu biyadih, fa-illam yastathi' fabilisaanih...",
    terjemahan: "Dari Abu Sa'id Al-Khudri radhiyallahu 'anhu, ia berkata: Aku mendengar Rasulullah shallallahu 'alaihi wa sallam bersabda, \"Barang siapa di antara kalian melihat suatu kemungkaran (keburukan atau kejahatan), hendaklah ia mengubahnya dengan tangannya (tindakan/kekuasaannya). Jika ia tidak mampu, maka dengan lisannya (ucapan atau nasihat yang baik). Dan jika ia tetap tidak mampu, maka dengan hatinya (menolak dan tidak menyetujui keburukan itu), dan yang demikian itu adalah selemah-lemahnya iman.\"",
    rawi: "Abu Sa'id Al-Khudri",
    sumber: "HR. Muslim",
    kualitas: "Shahih",
    status: "belum",
    durasiAudio: "1:35",
    urgensi: [
      "Menumbuhkan rasa peduli di lingkungan agar kita tidak bersikap acuh tak acuh ketika melihat teman atau orang lain melakukan perbuatan salah atau berbahaya.",
      "Mengajarkan tiga cara mencegah keburukan sesuai kemampuan kita, yaitu dengan tindakan nyata jika kita punya wewenang, dengan ucapan yang santun jika kita mampu menasihati, atau dengan hati jika kita merasa tidak aman atau tidak berdaya.",
      "Menjaga kesucian hati orang beriman agar selalu menolak perbuatan buruk dan senantiasa mendoakan kebaikan demi keselamatan bersama."
    ],
    konteks: "Rasulullah shallallahu 'alaihi wa sallam menyampaikan hadis ini untuk mendidik umat Islam agar menjadi masyarakat yang saling menjaga. Jika kejahatan atau kebiasaan buruk dibiarkan terjadi tanpa ada yang mengingatkan, maka kerusakan akan meluas dan merugikan semua orang. Nabi memberikan tiga tingkatan solusi yang sangat bijaksana dan adil, agar setiap muslim bisa mengambil peran dalam mencegah keburukan sesuai dengan batas kemampuan dan situasi yang dihadapinya.",
    kataPilihan: [
      { arab: "مُنْكَرًا", transliterasi: "Munkaran", arti: "Kemungkaran, yaitu segala perbuatan buruk, jahat, atau melanggar aturan agama dan merugikan orang lain." },
      { arab: "فَلْيُغَيِّرْهُ", transliterasi: "Falyughayyirhu", arti: "Hendaklah ia mengubahnya, memperbaikinya, atau menghentikan perbuatan buruk tersebut." },
      { arab: "أَضْعَفُ الْإِيْمَانِ", transliterasi: "Adh'aful Iimaani", arti: "Selemah-lemahnya iman. Maksudnya adalah tingkatan iman yang paling dasar ketika seseorang hanya mampu menolak keburukan di dalam hatinya karena tidak memiliki kekuatan untuk menegur secara langsung." }
    ]
  },
  {
    id: 35,
    judul: "Menjaga Persaudaraan Sesama Muslim",
    arab: "عَنْ أَبِيْ هُرَيْرَةَ رَضِيَ اللهُ عَنْهُ قَالَ: قَالَ رَسُوْلُ اللهِ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ: «لَا تَحَاسَدُوْا، وَلَا تَنَاجَشُوْا، وَلَا تَبَاغَضُوْا، وَلَا تَدَابَرُوْا، وَلَا يَبِعْ بَعْضُكُمْ عَلَى بَيْعِ بَعْضٍ، وَكُوْنُوْا عِبَادَ اللهِ إِخْوَانًا، الْمُسْلِمُ أَخُوْ الْمُسْلِمِ؛ لَا يَظْلِمُهُ، وَلَا يَخْذُلُهُ، وَلَا يَكْذِبُهُ، وَلَا يَحْقِرُهُ، التَّقْوَى هَاهُنَا - وَيُشِيْرُ إِلَى صَدْرِهِ ثَلَاثَ مَرَّاتٍ - بِحَسْبِ امْرِئٍ مِنَ الشَّرِّ أَنْ يَحْقِرَ أَخَاهُ الْمُسْلِمَ، كُلُّ الْمُسْلِمِ عَلَى الْمُسْلِمِ حَرَامٌ؛ دَمُهُ، وَمَالُهُ، وَعِرْضُهُ». رَوَاهُ مُسْلِمٌ.",
    transliterasi: "Laa tahaasaduu, wa laa tanaajasyuu, wa laa tabaaghadhuu, wa laa tadaabaruu...",
    terjemahan: "Dari Abu Hurairah radhiyallahu 'anhu, ia berkata: Rasulullah shallallahu 'alaihi wa sallam bersabda, \"Janganlah kalian saling mendengki (iri hati), jangan saling menipu dalam jual beli, jangan saling membenci, jangan saling membelakangi (memutus silaturahmi), dan janganlah sebagian dari kalian menjual atau menawar di atas tawaran saudaranya. Jadilah kalian hamba-hamba Allah yang bersaudara. Seorang muslim adalah saudara bagi muslim lainnya: ia tidak boleh menzaliminya, tidak boleh menelantarkannya (membiarkannya saat butuh tolong), tidak boleh membohonginya, dan tidak boleh meremehkannya. Takwa itu letaknya di sini—sambil Nabi menunjuk ke dadanya sebanyak tiga kali—. Cukuplah seseorang dianggap melakukan keburukan besar jika ia meremehkan atau menghina saudaranya sesama muslim. Setiap muslim atas muslim lainnya adalah haram (wajib dilindungi): darahnya (nyawanya), hartanya, dan kehormatannya (nama baiknya).\"",
    rawi: "Abu Hurairah",
    sumber: "HR. Muslim",
    kualitas: "Shahih",
    status: "belum",
    durasiAudio: "2:40",
    urgensi: [
      "Larangan keras terhadap penyakit hati dan perpecahan. Kita dilarang memiliki rasa iri, dendam, benci, serta memutus komunikasi dengan teman atau keluarga.",
      "Menjaga hak dan kehormatan orang lain. Tidak boleh ada orang yang merasa lebih hebat lalu menghina orang lain karena kekurangan fisik, status ekonomi, atau kelemahannya.",
      "Perlindungan mutlak tiga hal berharga. Ajaran Islam secara tegas melarang kita menumpahkan darah (menyakiti fisik), mengambil harta tanpa izin, atau mencemarkan nama baik orang lain."
    ],
    konteks: "Rasulullah shallallahu 'alaihi wa sallam menyampaikan hadis ini sebagai aturan akhlak dan persaudaraan sosial. Sebelum Islam datang, masyarakat sering terpecah karena permusuhan suku, saling pamer kekayaan, dan saling menipu dalam berdagang. Nabi Muhammad SAW ingin menghapus kebiasaan buruk tersebut dan mendidik para sahabat agar menyadari bahwa nilai kemuliaan seseorang bukan dilihat dari rupa atau hartanya, melainkan dari ketakwaan yang ada di dalam hatinya.",
    kataPilihan: [
      { arab: "لَا تَحَاسَدُوْا", transliterasi: "Laa Tahaasaduu", arti: "Jangan saling iri atau dengki. Yaitu jangan merasa benci atau tidak suka melihat orang lain mendapatkan nikmat dan kebahagiaan." },
      { arab: "لَا يَخْذُلُهُ", transliterasi: "Laa Yakhdzuluhu", arti: "Tidak menelantarkannya. Maksudnya adalah tidak membiarkan saudaranya kesusahan sendirian ketika ia sangat membutuhkan bantuan." },
      { arab: "عِرْضُهُ", transliterasi: "'Irdhuhu", arti: "Kehormatan atau nama baiknya. Mengingatkan bahwa mengejek, memfitnah, atau mencemarkan nama baik seseorang adalah dosa besar yang diharamkan." }
    ]
  },
  {
    id: 36,
    judul: "Keutamaan Menolong Sesama dan Menuntut Ilmu",
    arab: "عَنْ أَبِيْ هُرَيْرَةَ رَضِيَ اللهُ عَنْهُ، عَنِ النَّبِيِّ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ قَالَ: «مَنْ نَفَّسَ عَنْ مُؤْمِنٍ كُرْبَةً مِنْ كُرَبِ الدُّنْيَا، نَفَّسَ اللهُ عَنْهُ كُرْبَةً مِنْ كُرَبِ يَوْمِ الْقِيَامَةِ، وَمَنْ يَسَّرَ عَلَى مُعْسِرٍ، يَسَّرَ اللهُ عَلَيْهِ فِيْ الدُّنْيَا وَالْآخِرَةِ، وَمَنْ سَتَرَ مُسْلِمًا، سَتَرَهُ اللهُ فِيْ الدُّنْيَا وَالْآخِرَةِ، وَاللهُ فِيْ عَوْنِ الْعَبْدِ مَا كَانَ الْعَبْدُ فِيْ عَوْنِ أَخِيْهِ، وَمَنْ سَلَكَ طَرِيْقًا يَلْتَمِسُ فِيْهِ عِلْمًا، سَهَّلَ اللهُ لَهُ بِهِ طَرِيْقًا إِلَى الْجَنَّةِ، وَمَا اجْتَمَعَ قَوْمٌ فِيْ بَيْتٍ مِنْ بُيُوْتِ اللهِ، يَتْلُوْنَ كِتَابَ اللهِ، وَيَتَدَارَسُوْنَهُ بَيْنَهُمْ، إِلَّا نَزَلَتْ عَلَيْهِمُ السَّكِيْنَةُ، وَغَشِيَتْهُمُ الرَّحْمَةُ، وَحَفَّتْهُمُ الْمَلَائِكَةُ، وَذَكَرَهُمُ اللهُ فِيْمَنْ عِنْدَهُ، وَمَنْ بَطَّأَ بِهِ عَمَلُهُ، لَمْ يُسْرِعْ بِهِ نَسَبُهُ». رَوَاهُ مُسْلِمٌ بِهَذَا اللَّفْظِ.",
    transliterasi: "Man naffasa 'an mu'minin kurbatan min kurabid-dunyaa naffasallaahu 'anhu kurbatan...",
    terjemahan: "Dari Abu Hurairah radhiyallahu 'anhu, dari Nabi shallallahu 'alaihi wa sallam, beliau bersabda, \"Barang siapa yang melapangkan satu kesulitan seorang beriman dari kesusahan-kesusahan dunia, niscaya Allah akan melapangkan darinya kesulitan pada hari kiamat. Barang siapa yang memberi kemudahan kepada orang yang sedang kesulitan, niscaya Allah akan memudahkan urusannya di dunia dan akhirat. Barang siapa yang menutupi aib (keburukan) seorang muslim, niscaya Allah akan menutupi aibnya di dunia dan akhirat. Allah akan senantiasa menolong hamba-Nya selama hamba tersebut mau menolong saudaranya. Barang siapa yang menempuh jalan untuk mencari ilmu, niscaya Allah akan memudahkan baginya jalan menuju surga. Tidaklah suatu kelompok berkumpul di salah satu rumah Allah (masjid) untuk membaca Al-Qur'an dan mempelajarinya bersama-sama, melainkan akan turun kepada mereka ketenteraman jiwa, mereka diliputi oleh kasih sayang Allah, dinaungi oleh para malaikat, dan Allah membanggakan mereka di hadapan para malaikat di sisi-Nya. Dan barang siapa yang lambat amal kebaikannya, maka garis keturunannya (kebangsawanannya) tidak akan bisa mempercepatnya masuk surga.\"",
    rawi: "Abu Hurairah",
    sumber: "HR. Muslim",
    kualitas: "Shahih",
    status: "belum",
    durasiAudio: "3:30",
    urgensi: [
      "Menolong orang lain mendatangkan pertolongan Allah. Setiap kebaikan yang kita berikan—seperti meringankan beban teman, membantu orang yang susah, atau menjaga rahasia keburukan orang lain—pasti akan dibalas oleh Allah dengan kemudahan hidup di dunia dan akhirat.",
      "Keutamaan menuntut ilmu dan membaca Al-Qur'an. Berangkat belajar ilmu yang bermanfaat dan berkumpul untuk mengaji bersama adalah cara paling mudah untuk meraih ketenangan hati dan membuka pintu surga.",
      "Kemuliaan dinilai dari amal, bukan keturunan. Seseorang tidak bisa selamat di akhirat hanya karena ia berasal dari keluarga terpandang atau kaya jika ia sendiri malas berbuat baik."
    ],
    konteks: "Rasulullah shallallahu 'alaihi wa sallam menyampaikan hadis yang sangat indah dan lengkap ini untuk menumbuhkan semangat tolong-menolong di antara sesama manusia serta mendorong para sahabat untuk gemar belajar. Nabi ingin membangun masyarakat yang saling peduli, saling menjaga nama baik, dan rajin menuntut ilmu. Melalui hadis ini, Nabi juga menegaskan bahwa di hadapan Allah semua orang setara, dan yang membedakan derajat manusia hanyalah ketakwaan serta amal salehnya.",
    kataPilihan: [
      { arab: "نَفَّسَ", transliterasi: "Naffasa", arti: "Melapangkan, meringankan, atau membebaskan seseorang dari kesempitan dan beban hidup yang berat." },
      { arab: "السَّكِيْنَةُ", transliterasi: "As-Sakiinatu", arti: "Ketenteraman, kedamaian hati, dan rasa tenang yang diturunkan oleh Allah kepada orang-orang yang gemar beribadah dan belajar agama." },
      { arab: "نَسَبُهُ", transliterasi: "Nasabuhu", arti: "Garis keturunan atau asal-usul keluarganya. Menjelaskan bahwa nama besar keluarga tidak berguna di akhirat tanpa diiringi oleh amal saleh pribadi." }
    ]
  },
  {
    id: 37,
    judul: "Amalan Kebaikan itu Dilipatgandakan",
    arab: "عَن ابْنِ عَبَّاسٍ رَضِيَ اللهُ عَنْهُمَا عَنِ رسول الله صلى الله عليه وسلم فِيْمَا يَرْوِيْهِ عَنْ رَبِّهِ تَبَارَكَ وَتَعَالَى أَنَّهُ قَالَ: إِنَّ اللهَ كَتَبَ الْحَسَنَاتِ وَالسَّيِّئَاتِ ثُمَّ بَيَّنَ ذَلِكَ، فَمَنْ هَمَّ بِحَسَنَةٍ فَلَمْ يَعْمَلْهَا كَتَبَهَا اللهُ عِنْدَهُ حَسَنَةً كَامِلَةً، وَإِنْ هَمَّ بِهَا فَعَمِلَهَا كَتَبَهَا اللهُ عِنْدَهُ عَشْرَ حَسَنَاتٍ إِلَى سَبْعِمِائَةِ ضِعْفٍ إِلَى أَضْعَافٍ كَثِيْرَةٍ، وَإِنْ هَمَّ بِسَيِّئَةٍ فَلَمْ يَعْمَلْهَا كَتَبَهَا اللهُ عِنْدَهُ حَسَنَةً كَامِلَةً، وَإِنْ هَمَّ بِهَا فَعَمِلَهَا كَتَبَهَا اللهُ سَيِّئَةً وَاحِدَةً.",
    transliterasi: "Innallaaha katabal hasanaati was sayyi-aati tsumma bayyana dzaalik...",
    terjemahan: "Dari Ibnu Abbas radhiyallahu 'anhuma, dari Rasulullah shallallahu 'alaihi wa sallam tentang apa yang beliau riwayatkan dari Tuhannya Tabaraka wa Ta'ala: \"Sesungguhnya Allah menetapkan kebaikan dan keburukan, kemudian menjelaskannya. Barang siapa berniat melakukan kebaikan lalu tidak mengerjakannya, Allah mencatat baginya satu kebaikan penuh. Jika ia berniat lalu mengerjakannya, Allah mencatat baginya 10 kebaikan hingga 700 kali lipat bahkan berlipat-lipat ganda. Dan barang siapa berniat melakukan keburukan lalu tidak mengerjakannya, Allah mencatat baginya satu kebaikan penuh. Jika ia berniat lalu mengerjakannya, Allah mencatat baginya satu keburukan saja.\"",
    rawi: "Ibnu 'Abbas",
    sumber: "HR. Bukhari dan Muslim",
    kualitas: "Shahih",
    status: "belum",
    durasiAudio: "2:45",
    urgensi: [
      "Menunjukkan betapa luasnya kasih sayang dan kemurahan Allah dalam melipatgandakan pahala kebaikan.",
      "Niat baik yang tulus sudah langsung dinilai dan dihadiahi pahala oleh Allah meskipun belum sempat dikerjakan.",
      "Menahan diri dari berbuat dosa setelah sempat berniat buruk justru bernilai satu pahala kebaikan penuh."
    ],
    konteks: "Rasulullah shallallahu 'alaihi wa sallam menyampaikan Hadis Qudsi ini untuk memberikan semangat dan harapan bagi seluruh umat manusia agar senantiasa memenuhi hati dengan niat-niat yang baik.",
    kataPilihan: [
      { arab: "هَمَّ", transliterasi: "Hamma", arti: "Berniat kuat atau memiliki keinginan kuat dalam hati untuk melakukan sesuatu." },
      { arab: "ضِعْفٍ", transliterasi: "Dhi'fin", arti: "Kelipatan atau perlipatan ganda dari pahala kebaikan." },
      { arab: "سَيِّئَةً وَاحِدَةً", transliterasi: "Sayyi-atan Waahidatan", arti: "Satu keburukan saja, tanpa dilipatgandakan oleh Allah." }
    ]
  },
  {
    id: 38,
    judul: "Menjadi Hamba yang Dicintai Allah",
    arab: "عَنْ أَبِي هُرَيْرَةَ رَضِيَ اللَّهُ عَنْهُ قَالَ: قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: إِنَّ اللَّهَ تَعَالَى قَالَ: مَنْ عَادَى لِي وَلِيًّا فَقَدْ آذَنْتُهُ بِالْحَرْبِ، وَمَا تَقَرَّبَ إِلَيَّ عَبْدِي بِشَيْءٍ أَحَبَّ إِلَيَّ مِمَّا افْتَرَضْتُهُ عَلَيْهِ، وَلَا يَزَالُ عَبْدِي يَتَقَرَّبُ إِلَيَّ بِالنَّوَافِلِ حَتَّى أُحِبَّهُ، فَإِذَا أَحْبَبْتُهُ كُنْتُ سَمْعَهُ الَّذِي يَسْمَعُ بِهِ، وَبَصَرَهُ الَّذِي يُبْصِرُ بِهِ، وَيَدَهُ الَّتِي يَبْطُشُ بِهَا، وَرِجْلَهُ الَّتِي يَمْشِي بِهَا، وَلَئِنْ سَأَلَنِي لَأُعْطِيَنَّهُ، وَلَئِنِ اسْتَعَاذَنِي لَأُعِيذَنَّهُ.",
    transliterasi: "Man 'aadaa lii waliyyan faqad aadzantuhu bil-harb...",
    terjemahan: "Dari Abu Hurairah radhiyallahu 'anhu, ia berkata: Rasulullah shallallahu 'alaihi wasallam bersabda bahwa Allah Ta'ala berfirman: \"Barangsiapa yang memusuhi wali-Ku (orang yang Aku sayangi), maka Aku menyatakan perang kepadanya. Tidaklah hamba-Ku mendekatkan diri kepada-Ku dengan sesuatu yang lebih Aku cintai daripada ibadah wajib yang Aku perintahkan kepadanya. Dan hamba-Ku senantiasa mendekatkan diri kepada-Ku dengan ibadah tambahan (sunnah) hingga Aku mencintainya. Jika Aku telah mencintainya, Aku akan membimbing pendengarannya, penglihatannya, tangannya, dan kakinya agar selalu melakukan kebaikan. Jika ia meminta kepada-Ku, pasti Aku beri. Jika ia meminta perlindungan kepada-Ku, pasti Aku lindungi.\"",
    rawi: "Abu Hurairah",
    sumber: "HR. Al-Bukhari",
    kualitas: "Shahih",
    status: "belum",
    durasiAudio: "3:15",
    urgensi: [
      "Mengajarkan bahwa ibadah wajib (seperti shalat lima waktu) adalah hal paling utama yang harus kita lakukan setiap hari.",
      "Menjelaskan bahwa rajin melakukan ibadah tambahan (sunnah) adalah cara terbaik agar kita bisa sangat disayangi oleh Allah.",
      "Memberikan jaminan bahwa Allah akan selalu menjaga diri kita, membimbing kita berbuat baik, serta mengabulkan doa-doa kita."
    ],
    konteks: "Hadis ini tidak memiliki peristiwa khusus (Asbabul Wurud) yang melatarbelakanginya. Secara umum, Rasulullah SAW menyampaikan Hadis Qudsi ini sebagai bimbingan rohani untuk memotivasi umat Islam agar tekun beribadah. Melalui hadis ini, Allah menunjukkan kasih sayang-Nya yang sangat besar kepada hamba yang taat, serta memberikan peringatan agar tidak ada orang yang berani mengganggu atau menyakiti orang-orang baik yang dicintai-Nya.",
    kataPilihan: [
      { arab: "عَادَى", transliterasi: "Aadaa", arti: "Memusuhi atau membenci. Menjelaskan tentang larangan bersikap jahat atau menyakiti orang-orang baik yang disayangi oleh Allah." },
      { arab: "افْتَرَضْتُهُ", transliterasi: "Iftaradhtuhu", arti: "Ibadah yang diwajibkan. Menjelaskan tentang tugas-tugas utama dari Allah yang harus kita kerjakan, seperti shalat lima waktu." },
      { arab: "النَّوَافِلُ", transliterasi: "An-Nawaafil", arti: "Ibadah tambahan atau sunnah. Menjelaskan tentang ibadah ekstra di luar yang wajib, seperti shalat sunnah, untuk menambah kebaikan dan pahala kita." }
    ]
  },
  {
    id: 39,
    judul: "Kasih Sayang Allah untuk Kesalahan yang Tidak Sengaja",
    arab: "عَنِ ابْنِ عَبَّاسٍ رَضِيَ اللَّهُ عَنْهُمَا أَنَّ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ قَالَ: إِنَّ اللَّهَ تَجَاوَزَ لِي عَنْ أُمَّتِي الْخَطَأَ وَالنِّسْيَانَ وَمَا اسْتُكْرِهُوا عَلَيْهِ.",
    transliterasi: "Innallaaha tajaawaza lii 'an ummatil khatha-a wan nisyaana wa mastukrihuu 'alayh...",
    terjemahan: "Dari Ibnu Abbas radhiyallahu 'anhuma, bahwa Rasulullah shallallahu 'alaihi wasallam bersabda: \"Sesungguhnya Allah memaafkan demi aku (dan demi kemuliaanku) beberapa kesalahan dari umatku, yaitu perbuatan yang tidak disengaja (keliru), lupa, dan apa yang dipaksakan kepada mereka.\"",
    rawi: "Ibnu Abbas",
    sumber: "HR. Ibnu Majah dan Al-Baihaqi",
    kualitas: "Hasan",
    status: "belum",
    durasiAudio: "1:30",
    urgensi: [
      "Menunjukkan betapa luasnya rahmat dan kasih sayang Allah SWT yang tidak membebani hamba-Nya di luar batas kemampuan mereka.",
      "Mengajarkan bahwa Islam adalah agama yang penuh kemudahan, di mana kita tidak berdosa atas kesalahan yang benar-benar tidak sengaja, lupa, atau dipaksa.",
      "Memberikan ketenangan batin agar kita tidak merasa putus asa atau dihantui rasa bersalah yang berlebihan saat melakukan kekhilafan yang tidak disengaja."
    ],
    konteks: "Hadis ini berhubungan erat dengan turunnya ayat Al-Quran (Surah Al-Baqarah ayat 284) yang menyatakan bahwa Allah akan menghisab semua yang terbetik dalam hati manusia. Ayat ini sempat membuat para sahabat Nabi merasa sangat cemas dan takut karena merasa tidak sanggup mengontrol bisikan hati mereka. Menanggapi kecemasan ini, Allah menurunkan keringanan melalui ayat berikutnya (Surah Al-Baqarah ayat 286) yang berisi doa agar tidak dihukum jika lupa atau bersalah tanpa sengaja. Rasulullah SAW kemudian menyampaikan hadis ini untuk menegaskan bahwa Allah telah mengabulkan doa tersebut dan memberikan kelonggaran istimewa ini khusus untuk umat Islam.",
    kataPilihan: [
      { arab: "تَجَاوَزَ", transliterasi: "Tajawaza", arti: "Memaafkan atau membiarkan. Menjelaskan bahwa Allah tidak mencatat dosa bagi umat Islam yang melakukan kesalahan di luar kehendak sadar mereka." },
      { arab: "الْخَطَأَ", transliterasi: "Al-Khatha'a", arti: "Kekeliruan atau tindakan tidak sengaja. Menjelaskan perbuatan salah yang terjadi tanpa niat buruk, seperti meleset saat melakukan sesuatu." },
      { arab: "اسْتُكْرِهُوا", transliterasi: "Ustukrihuu", arti: "Dipaksa atau diancam. Menjelaskan keadaan di mana seseorang tidak memiliki pilihan bebas karena nyawa atau keselamatannya terancam oleh orang lain." }
    ]
  },
  {
    id: 40,
    judul: "Menjadi Pengembara di Dunia",
    arab: "عَنِ ابْنِ عُمَرَ رَضِيَ اللَّهُ عَنْهُمَا قَالَ: أَخَذَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ بِمَنْكِبَيَّ فَقَالَ: كُنْ فِي الدُّنْيَا كَأَنَّكَ غَرِيبٌ أَوْ عَابِرُ سَبِيلٍ. وَكَانَ ابْنُ عُمَرَ رَضِيَ اللَّهُ عَنْهُمَا يَقُولُ: إِذَا أَمْسَيْتَ فَلَا تَنْتَظِرِ الصَّبَاحَ، وَإِذَا أَصْبَحْتَ فَلَا تَنْتَظِرِ الْمَسَاءَ، وَخُذْ مِنْ صِحَّتِكَ لِمَرَضِكَ، وَمِنْ حَيَاتِكَ لِمَوْتِكَ.",
    transliterasi: "Kun fid-dunyaa ka-annaka ghariibun aw 'aabiru sabiil...",
    terjemahan: "Dari Ibnu Umar radhiyallahu 'anhuma, ia berkata: Rasulullah shallallahu 'alaihi wasallam memegang kedua pundakku, lalu bersabda: \"Jadilah engkau di dunia ini seakan-akan sebagai orang asing atau seorang pengembara (musafir).\" Dan Ibnu Umar radhiyallahu 'anhuma pernah mengatakan: \"Jika engkau berada di sore hari, janganlah menunggu datangnya pagi. Dan jika engkau berada di pagi hari, janganlah menunggu datangnya sore. Pergunakanlah waktu sehatmu sebelum datang waktu sakitmu, dan waktu hidupmu sebelum datang kematianmu.\"",
    rawi: "Ibnu Umar",
    sumber: "HR. Al-Bukhari",
    kualitas: "Shahih",
    status: "belum",
    durasiAudio: "2:10",
    urgensi: [
      "Mengingatkan kita bahwa dunia hanyalah tempat tinggal sementara, dan akhirat adalah rumah kita yang abadi.",
      "Mengajarkan pentingnya menggunakan waktu luang dan masa sehat kita untuk berbuat baik sebelum datangnya kesulitan.",
      "Memberikan nasihat agar kita tidak menunda-nunda amal saleh atau taubat, karena tidak ada yang tahu kapan ajal akan menjemput."
    ],
    konteks: "Hadis ini tidak memiliki peristiwa khusus yang melatarbelakanginya. Secara umum, Rasulullah SAW menyampaikan nasihat ini secara langsung kepada Abdullah bin Umar ketika ia masih sangat muda. Rasulullah SAW memegang kedua pundak Ibnu Umar agar ia memusatkan perhatian penuh dan memahami pesan yang disampaikan. Konteks hadis ini adalah mendidik generasi muda agar memiliki kesadaran bahwa kehidupan dunia hanyalah tempat singgah untuk mengumpulkan bekal menuju akhirat.",
    kataPilihan: [
      { arab: "غَرِيبٌ", transliterasi: "Ghariibun", arti: "Orang asing. Menjelaskan orang yang tidak menetap lama di suatu tempat, sehingga ia tidak terlalu terikat atau menaruh hati yang dalam pada tempat tersebut." },
      { arab: "عَابِرُ سَبِيلٍ", transliterasi: "'Aabiru sabiilin", arti: "Pengembara atau penyeberang jalan. Menjelaskan orang yang sedang melakukan perjalanan jauh dan hanya singgah sebentar untuk mengumpulkan bekal agar bisa sampai ke tujuan." },
      { arab: "بِمَنْكِبَيَّ", transliterasi: "Bimankibayya", arti: "Kedua pundakku. Menjelaskan tindakan penuh kasih sayang Rasulullah SAW saat menyentuh bahu Abdullah bin Umar untuk menumbuhkan rasa kedekatan dan kesiapan sebelum menyampaikan nasihat berharga." }
    ]
  },
  {
    id: 41,
    judul: "Tundukkan Hawa Nafsu pada Syariat",
    arab: "عَنْ أَبِي مُحَمَّدٍ عَبْدِ اللَّهِ بْنِ عَمْرِو بْنِ الْعَاصِ رَضِيَ اللَّهُ عَنْهُمَا قَالَ: قَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ: لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى يَكُونَ هَوَاهُ تَبَعًا لِمَا جِئْتُ بِهِ.",
    transliterasi: "Laa yu'minu ahadukum hattaa yakuuna hawaahu tabi'an limaa ji'tu bih...",
    terjemahan: "Dari Abu Muhammad Abdullah bin 'Amr bin Al-'Ash radhiyallahu 'anhuma, ia berkata: Rasulullah shallallahu 'alaihi wasallam bersabda: \"Tidak sempurna iman salah seorang dari kalian sampai hawa nafsunya mengikuti ajaran yang aku bawa.\"",
    rawi: "Abdullah bin 'Amr bin Al-'Ash",
    sumber: "Kitab Al-Hujjah (HR. Al-Baihaqi)",
    kualitas: "Hasan",
    status: "belum",
    durasiAudio: "1:40",
    urgensi: [
      "Menegaskan bahwa keimanan kita belum dianggap sempurna jika kita masih mendahulukan keinginan pribadi di atas aturan agama.",
      "Mengajarkan kita untuk selalu mengendalikan hawa nafsu dan menyelaraskannya dengan ajaran Al-Quran serta Sunnah.",
      "Memberikan batasan yang jelas agar kita tidak menggunakan logika atau adat istiadat yang bertentangan dengan syariat Islam."
    ],
    konteks: "Hadis ini tidak memiliki peristiwa khusus yang melatarbelakangi penyampaiannya secara spesifik. Secara umum, Rasulullah SAW menyampaikan hadis ini sebagai pedoman hidup yang sangat penting bagi umat Islam. Konteks hadis ini adalah penegasan tentang tanda keimanan yang sejati. Nabi ingin membimbing para sahabat dan seluruh umat agar tidak menjadikan hawa nafsu sebagai pemandu dalam mengambil keputusan, melainkan menjadikan wahyu dan ajaran Islam sebagai satu-satunya penuntun arah dalam hidup.",
    kataPilihan: [
      { arab: "لَا يُؤْمِنُ", transliterasi: "Laa yu'minu", arti: "Tidak beriman. Menjelaskan tentang belum tercapainya kesempurnaan iman di dalam diri seseorang jika ia belum memenuhi syarat yang disebutkan." },
      { arab: "هَوَاهُ", transliterasi: "Hawaahu", arti: "Hawa nafsunya. Menjelaskan keinginan, kecenderungan, atau emosi pribadi yang sering kali mengajak manusia pada hal-hal yang kurang baik." },
      { arab: "تَبَعًا", transliterasi: "Tab'an", arti: "Mengikuti atau tunduk. Menjelaskan kesediaan hati untuk menyelaraskan seluruh pikiran dan tindakan dengan aturan yang telah Allah tetapkan." }
    ]
  },
  {
    id: 42,
    judul: "Luasnya Ampunan Allah",
    arab: "عَنْ أَنَسِ بْنِ مَالِكٍ رَضِيَ اللَّهُ عَنْهُ قَالَ: سَمِعْتُ رَسُولَ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ يَقُولُ: قَالَ اللَّه تَبَارَكَ وَتَعَالَى: يَا ابْنَ آدَمَ، إِنَّكَ مَا دَعَوْتَنِي وَرَجَوْتَنِي غَفَرْتُ لَكَ عَلَى مَا كَانَ فِيكَ وَلَا أُبَالِي، يَا ابْنَ آدَمَ، لَوْ بَلَغَتْ ذُنُوبُكَ عَنَانَ السَّمَاءِ ثُمَّ اسْتَغْفَرْتَنِي غَفَرْتُ لَكَ وَلَا أُبَالِي، يَا ابْنَ آدَمَ، إِنَّكَ لَوْ أَتَيْتَنِي بِقُرَابِ الْأَرْضِ خَطَايَا ثُمَّ لَقِيتَنِي لَا تُشْرِكُ بِي شَيْئًا لَأَتَيْتُكَ بِقُرَابِهَا مَغْفِرَةً.",
    transliterasi: "Yabna Aadama, innaka maa da'awtanii wa rajawtanii ghafartu laka 'alaa maa kaana fiika wa laa ubaalii...",
    terjemahan: "Dari Anas bin Malik radhiyallahu 'anhu, ia berkata: Aku mendengar Rasulullah shallallahu 'alaihi wasallam bersabda, \"Allah Tabaraka wa Ta'ala berfirman: 'Wahai anak Adam, selama engkau memohon kepada-Ku dan berharap kepada-Ku, Aku akan mengampuni dosa yang telah kamu lakukan, dan Aku tidak peduli (seberapa banyak dosamu). Wahai anak Adam, seandainya dosa-dosamu menumpuk setinggi langit, kemudian engkau meminta ampunan kepada-Ku, pasti Aku ampuni, dan Aku tidak peduli. Wahai anak Adam, sesungguhnya jika engkau datang kepada-Ku dengan membawa dosa sepenuh bumi, kemudian engkau menemui-Ku dalam keadaan tidak menyekutukan Aku dengan sesuatu pun, pasti Aku akan mendatangimu dengan membawa ampunan sepenuh bumi pula.'\"",
    rawi: "Anas bin Malik",
    sumber: "HR. At-Tirmidzi",
    kualitas: "Hasan Shahih",
    status: "belum",
    durasiAudio: "3:30",
    urgensi: [
      "Menunjukkan betapa luas dan tanpa batasnya ampunan Allah bagi hamba-Nya yang mau bertaubat dengan tulus.",
      "Menegaskan pentingnya tauhid (mengesakan Allah) sebagai syarat mutlak dimaafkannya segala dosa di akhirat.",
      "Memotivasi kita untuk tidak pernah berputus asa dari rahmat Allah, sesering apa pun kita melakukan kesalahan di masa lalu."
    ],
    konteks: "Hadis ini tidak memiliki peristiwa khusus yang melatarbelakanginya secara spesifik. Secara umum, Rasulullah SAW menyampaikan nasihat berbentuk kabar gembira dari hadis qudsi ini untuk menghibur jiwa-jiwa manusia yang merasa dibayangi oleh banyaknya dosa masa lalu. Konteks pengajarannya adalah untuk menyeimbangkan rasa takut terhadap siksa Allah dengan rasa harap akan ampunan-Nya. Allah ingin menegaskan bahwa pintu taubat selalu terbuka lebar bagi siapa saja yang mau kembali kepada-Nya dengan menjaga kemurnian iman (tauhid) dan tanpa menyekutukan-Nya.",
    kataPilihan: [
      { arab: "دَعَوْتَنِي", transliterasi: "Da'autanii", arti: "Engkau memohon kepada-Ku. Menjelaskan tentang pentingnya berdoa secara tulus hanya kepada Allah ketika mengharapkan pengampunan atas dosa-dosa kita." },
      { arab: "عَنَانَ السَّمَاءِ", transliterasi: "'Anaanas-samaa-i", arti: "Setinggi awan di langit. Menjelaskan perumpamaan tumpukan dosa yang sangat banyak hingga membumbung tinggi, namun tetap bisa dihapus dengan satu kali permohonan ampunan yang jujur." },
      { arab: "لَا تُشْرِكُ", transliterasi: "Laa tusyriku", arti: "Tidak menyekutukan. Menjelaskan tentang kewajiban menjaga kemurnian tauhid, yaitu tidak menyembah atau menyandarkan ibadah kepada selain Allah sebagai syarat agar dosa-dosa kita diampuni." }
    ]
  }
];

export const lastOpenedHadis = hadisData[4]; // Hadis ke-5
