export interface Project {
  title: string;
  category: "FinTech" | "GovTech" | "Healthcare" | "Enterprise" | "SaaS";
  role: string;
  period?: string;
  description: string;
  highlights: string[];
  techStack: string[];
  links?: {
    label: string;
    url: string;
  }[];
  apkLinks?: {
    label: string;
    url: string;
  }[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  description: string;
  achievements: string[];
  techStack: string[];
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: { name: string; level?: string; highlight?: boolean }[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Rahmat Putra, S.Kom",
    badge: "Available for Senior / Lead / Full-Stack Opportunities",
    title: "Senior Backend & Full-Stack Developer",
    subtitle:
      "8+ Tahun Pengalaman membangun Arsitektur Web Skala Besar, RESTful API, FinTech, Sistem Informasi Manajemen Rumah Sakit (SIMRS), dan E-Government.",
    bio: [
      "Saya adalah Software Developer profesional dengan pengalaman lebih dari 8 tahun di industri teknologi. Keahlian inti saya berfokus pada Backend Development menggunakan OOP PHP (Laravel, Yii2, CodeIgniter) serta modern frontend berbasis React.js, Next.js, dan JavaScript modern.",
      "Selain web architecture, saya berpengalaman dalam optimasi basis data (MySQL, MariaDB, PostgreSQL), integrasi Payment Gateway & Banking API (Midtrans, Paytend BaaS, BlueOcean Pay, Global e Payment), serta pengembangan aplikasi mobile Android menggunakan Flutter untuk solusi Full-Stack komprehensif.",
      "Telah sukses merancang dan mengimplementasikan sistem berskala enterprise, perbankan virtual/fintech multi-negara, sistem manajemen rumah sakit terpadu, hingga berbagai sistem e-Government di lingkungan instansi pemerintahan.",
    ],
    avatarUrl: "/profile.jpg",
    phone: "+62 822-8812-6500",
    phoneClean: "6282288126500",
    email: "rahmatputrankri@gmail.com",
    location: "Padang Pariaman, Sumatera Barat, Indonesia (Open to Remote & Onsite)",
    socials: {
      github: "https://github.com/rahmatputrabulcin",
      linkedin: "https://www.linkedin.com/in/rahmatputraid/",
      whatsapp: "https://wa.me/6282288126500?text=Halo%20Pak%20Rahmat%20Putra,%20saya%20tertarik%20dengan%20profil%20dan%20portofolio%20Anda.",
      certificatesDrive:
        "https://drive.google.com/drive/folders/1Dq7MLY3wWehFbe-38SVVRuMe7MZ4TO0p",
      portfolioWeb: "https://aplikasiambo.my.id",
    },
    metrics: [
      { label: "Tahun Pengalaman", value: "8+" },
      { label: "Sistem & Proyek Sukses", value: "25+" },
      { label: "Integrasi Payment & Banking", value: "6+" },
      { label: "Cakupan Solusi", value: "Web & Mobile" },
    ],
  },

  skillsCategories: [
    {
      title: "Backend & Architecture",
      icon: "Server",
      skills: [
        { name: "PHP (OOP)", highlight: true },
        { name: "Laravel Framework", highlight: true },
        { name: "Yii2 Framework", highlight: true },
        { name: "CodeIgniter (CI3/CI4)", highlight: true },
        { name: "RESTful API Design", highlight: true },
        { name: "JWT (JSON Web Token)", highlight: true },
        { name: "Microservices & Monolith" },
        { name: "Node.js (Express)" },
      ],
    },
    {
      title: "Frontend & Mobile",
      icon: "Layout",
      skills: [
        { name: "React.js", highlight: true },
        { name: "Next.js (App Router)", highlight: true },
        { name: "Flutter (Android)", highlight: true },
        { name: "JavaScript (ES6+)", highlight: true },
        { name: "Tailwind CSS", highlight: true },
        { name: "Bootstrap" },
        { name: "HTML5 & CSS3" },
        { name: "jQuery" },
      ],
    },
    {
      title: "Databases & Storage",
      icon: "Database",
      skills: [
        { name: "MySQL / MariaDB", highlight: true },
        { name: "PostgreSQL", highlight: true },
        { name: "MongoDB" },
        { name: "Query Optimization & Indexing", highlight: true },
        { name: "Database Schema Architecture", highlight: true },
        { name: "Relational Modeling" },
      ],
    },
    {
      title: "Payment, FinTech & APIs",
      icon: "CreditCard",
      skills: [
        { name: "Midtrans Payment Gateway", highlight: true },
        { name: "Paytend BaaS (Card Issuing)", highlight: true },
        { name: "Global e Payment (GEP)", highlight: true },
        { name: "BlueOcean Pay mPOS", highlight: true },
        { name: "WhatsApp Gateway API", highlight: true },
        { name: "Postman API Testing" },
        { name: "Git & GitHub" },
        { name: "Linux Server (Ubuntu)" },
      ],
    },
  ] as SkillCategory[],

  experiences: [
    {
      company: "Cooper Group Technology",
      role: "Senior Backend Developer",
      period: "Jul 2023 – Mar 2026",
      location: "Ekocheras Office Tower, Kuala Lumpur, Malaysia (Remote)",
      type: "Full-Time Remote",
      description:
        "Memimpin perancangan dan implementasi arsitektur REST API serta backend untuk solusi perbankan virtual, FinTech multi-negara, e-wallet, dan sistem Point of Sale (POS) cloud.",
      achievements: [
        "Membangun REST API dan core backend untuk sistem MIMONE Spa & Wellness Management yang terhubung ke cloud POS.",
        "Mengembangkan backend, multi-tenant loan engine, dan aplikasi Flutter Android untuk platform FinTech Ezlend di berbagai negara.",
        "Mengintegrasikan Global e-Payment (GEP) API untuk platform RC365 Virtual Banking.",
        "Mengintegrasikan Paytend BaaS API untuk pembukaan akun kartu, penerbitan, aktivasi, dan manajemen kartu debit/kredit.",
        "Membangun mPOS REST API terintegrasi dengan payment gateway BlueOcean Pay provider.",
        "Membangun backend untuk World Digital Identity & Currency Authority (WICA).",
      ],
      techStack: [
        "PHP (Yii2 & Laravel)",
        "REST API",
        "Flutter (Android)",
        "MySQL",
        "JWT",
        "Payment Gateways",
        "Banking APIs",
      ],
    },
    {
      company: "Sekretariat Daerah (SETDA) Kab. Agam",
      role: "Tenaga Ahli Programmer",
      period: "Feb 2023 – Jul 2023",
      location: "Bagian Administrasi Pembangunan, Kab. Agam, Sumatera Barat",
      type: "Kontrak Tenaga Ahli",
      description:
        "Bertanggung jawab sebagai tenaga ahli pengembang aplikasi monitoring pembangunan daerah berbasis proses administrasi pemerintahan.",
      achievements: [
        "Merancang dan mengembangkan aplikasi e-PAMPAM (bap.agamkab.go.id) untuk tata kelola administrasi pembangunan daerah.",
        "Mengintegrasikan alur data penetapan pemenang tender pengadaan dari sistem LPSE nasional ke paket kegiatan dinas.",
        "Mengotomasi pelacakan progres fisik dan pencairan dana anggaran kegiatan proyek pembangunan daerah.",
      ],
      techStack: ["PHP CodeIgniter", "MySQL", "JavaScript", "Bootstrap", "LPSE Data Integration"],
    },
    {
      company: "RSUD Prof. H. Muhammad Yamin, S.H",
      role: "Programmer Web Sistem Informasi Manajemen",
      period: "Mar 2022 – Des 2022",
      location: "Kota Pariaman, Sumatera Barat",
      type: "In-House Full-Time",
      description:
        "Mengembangkan SIMRS (Sistem Informasi Manajemen Rumah Sakit) terpadu untuk efisiensi operasional medis, administrasi, dan layanan pasien Rumah Sakit Umum Daerah.",
      achievements: [
        "Merancang arsitektur 6 modul kritis rumah sakit: Rawat Inap (Inpatient), Rawat Jalan (Outpatient), dan IGD (Emergency Room).",
        "Membangun modul Sistem Antrean Pasien real-time untuk memangkas waktu tunggu loket.",
        "Mengembangkan Modul Farmasi (e-Resep & stok obat) dan Modul Gudang Logistik medis terintegrasi.",
      ],
      techStack: ["PHP (OOP)", "MySQL / MariaDB", "JavaScript", "HTML5/CSS3", "Hospital Workflows"],
    },
    {
      company: "PT Cronos Studio Indonesia",
      role: "Programmer Web",
      period: "Mei 2022 – Jan 2023",
      location: "Depok, Jawa Barat (Remote)",
      type: "Remote",
      description:
        "Membangun aplikasi enterprise skala besar, financial payment gateway, dan backend POS untuk klien korporat.",
      achievements: [
        "Mengembangkan aplikasi BANTEX ERP menggunakan framework Yii2 yang mencakup seluruh proses bisnis dari front-line sales hingga akuntansi backend.",
        "Mengembangkan aplikasi Zipay (zipay.reksapay.com / admin.purwantara.com), penyedia uang elektronik berlisensi Bank Indonesia dengan framework Laravel.",
        "Mengembangkan REST API aman berbasis JWT untuk aplikasi Payment of Sale (Kasir) yang menghubungkan frontend dan aplikasi mobile.",
      ],
      techStack: ["Laravel", "Yii2", "REST API", "JWT", "MySQL", "FinTech / Bank Indonesia Compliance"],
    },
    {
      company: "Dinas Komunikasi dan Informatika (DISKOMINFO) Kota Pariaman",
      role: "Database Administrator & Web Programmer",
      period: "Jun 2019 – Mar 2022",
      location: "Kota Pariaman, Sumatera Barat",
      type: "Pemerintah Daerah",
      description:
        "Mengelola basis data seluruh dinas kota dan memprogram sistem e-Government untuk pelayanan publik serta operasional birokrasi Kota Pariaman.",
      achievements: [
        "Membangun SIPINTAR (PPDB Online Kota Pariaman) untuk pendaftaran siswa baru se-kota secara transparan.",
        "Mengembangkan SILASIH (Sistem Pelanggan Air Bersih) untuk pencatatan dan pembayaran tagihan PDAM secara online.",
        "Mengembangkan SIAJO (Sistem Informasi Jabatan Online) untuk evaluasi dan analisis jabatan ASN secara digital.",
        "Membangun sistem inventarisasi kendaraan dinas (EBPKB) dan sistem lab lingkungan hidup (SMILING / Elabor).",
        "Mengembangkan SIAMIN untuk monitoring progres pembangunan fisik infrastruktur kota.",
      ],
      techStack: ["Yii2 Framework", "MySQL / MariaDB", "Database Administration", "Linux", "E-Government"],
    },
  ] as Experience[],

  projects: [
    {
      title: "Ezlend Multi-Country FinTech & Multi-Tenant Loan Ecosystem",
      category: "FinTech",
      role: "Lead Backend Developer & Flutter Mobile Developer",
      description:
        "Ekosistem platform teknologi finansial pinjaman online multi-negara (Hong Kong, Australia, dll.) dengan sistem Co-Brand Master Management terpusat yang mengelola seluruh tenant backend, scoring kredit otomatis, audit verifikasi, dan aplikasi mobile Android.",
      highlights: [
        "Sistem Co-Brand (Live Master) sebagai master kontrol dan manajemen terpusat seluruh link tenant pinjaman.",
        "REST API performa tinggi untuk transaksi perbankan dan pinjaman finansial aman berstandar enkripsi.",
        "Membangun aplikasi Android mandiri menggunakan Flutter untuk ribuan pengguna aktif di berbagai negara.",
        "Multi-instansi backend aktif: Co-Brand Master, Choi Kee HK, Vertex Finance, EasyLoan AUD, Lala Lend, dan Ezlend.",
      ],
      techStack: [
        "PHP Yii2",
        "RESTful API",
        "Flutter (Android)",
        "Multi-Tenant Architecture",
        "MySQL",
        "JWT Security",
        "Co-Brand Master Engine",
      ],
      links: [
        { label: "⭐ Co-Brand Master Management", url: "https://live-master.ez-lend.loans/backend/" },
        { label: "Choi Kee HK (Backend)", url: "https://api.choikeehk.org/backend/web/site/login" },
        { label: "Choi Kee HK (Landing)", url: "https://choikeehk.org/" },
        { label: "Ezlend (Backend)", url: "https://api.ez-lend.loans/backend/" },
        { label: "Ezlend (Landing)", url: "https://new.ez-lend.loans/" },
        { label: "Vertex Finance (Backend)", url: "https://api.vertexfinanceloan.com/backend/" },
        { label: "Vertex Finance (Landing)", url: "https://www.vertexfinanceloan.com/" },
        { label: "EasyLoan AUD (Backend)", url: "https://api.easyloanaud.org/backend/" },
        { label: "Lala Lend (Backend)", url: "https://api.lalalend.org/backend/" },
        { label: "Lala Lend (Landing)", url: "https://lalalend.org/" },
      ],
      apkLinks: [
        { label: "APK Ezlend Live", url: "https://api.ez-lend.loans/site/download?file=ezlend-live.apk" },
        { label: "APK Choi Kee HK", url: "https://api.choikeehk.org/site/download?file=choikee-live.apk" },
        { label: "APK EasyLoan AUD", url: "https://api.easyloanaud.org/site/download?file=easyloan-live.apk" },
        { label: "APK Vertex Loan", url: "https://api.vertexfinanceloan.com/site/download?file=myloan-live.apk" },
        { label: "APK Lala Lend", url: "https://api.lalalend.org/site/download?file=lalalend-prod.apk" },
      ],
    },
    {
      title: "SIMRS - Sistem Informasi Manajemen RSUD Pariaman",
      category: "Healthcare",
      role: "Full-Stack Web Programmer",
      description:
        "Sistem ERP rumah sakit komprehensif berstandar BLUD yang mendigitisasi alur layanan medis, farmasi, serta rekam data pasien dari pendaftaran hingga kepulangan.",
      highlights: [
        "6 Modul terpadu: Rawat Inap, Rawat Jalan, IGD, Antrean, Farmasi, & Gudang Logistik.",
        "Validasi resep digital otomatis dan pengurangan waktu tunggu antrean pasien.",
        "Penyimpanan rekam medis terpusat dengan performa query cepat pada basis data besar.",
      ],
      techStack: ["PHP (OOP)", "MySQL", "JavaScript", "Data Modeling", "High Availability"],
      links: [{ label: "Portal RSUD", url: "https://rsudmyamin.sumbarprov.go.id/" }],
    },
    {
      title: "MIMONE Spa & Wellness Cloud POS",
      category: "Enterprise",
      role: "Backend Architect & API Developer",
      description:
        "Solusi manajemen wellness & spa enterprise di Malaysia dengan modul reservasi, inventori produk, treatment tracking, dan POS kasir terintegrasi.",
      highlights: [
        "REST API resmi untuk sinkronisasi POS offline & online.",
        "Integrasi Shopline eCommerce API & third-party loyalty modules.",
        "Panel backend manajemen cabang multi-outlet di Kuala Lumpur.",
      ],
      techStack: ["PHP (OOP)", "REST API", "Shopline API", "MySQL", "Cloud POS"],
      links: [
        { label: "POS Landing", url: "https://fd-mimone-pos.cgtechnology.io/" },
        { label: "HQ Backend", url: "https://hq-mimone-pos.cgtechnology.io/backend/web/" },
      ],
    },
    {
      title: "Zipay E-Money & Purwantara Payment System",
      category: "FinTech",
      role: "Backend Programmer",
      description:
        "Sistem uang elektronik berizin resmi dari Bank Indonesia yang melayani transaksi digital, membership registration, dan layanan keuangan syariah.",
      highlights: [
        "Arsitektur berbasis Laravel dengan standar keamanan enkripsi finansial ketat.",
        "Integrasi sistem pembayaran Purwantara dan verifikasi identitas instan.",
      ],
      techStack: ["Laravel Framework", "REST API", "PostgreSQL/MySQL", "Bank Indonesia Regulations"],
      links: [
        { label: "Purwantara Admin", url: "https://admin.purwantara.com/" },
      ],
    },
    {
      title: "Bantex Enterprise ERP",
      category: "Enterprise",
      role: "Core Web Programmer",
      description:
        "Sistem perencanaan sumber daya perusahaan (ERP) untuk mendukung proses bisnis manufaktur & distribusi, mencakup siklus supply chain, penjualan, hingga pembukuan akuntansi.",
      highlights: [
        "Otomatisasi pencatatan jurnal umum, neraca laba-rugi, dan stok pergudangan.",
        "Arsitektur modular dengan Yii2 untuk efisiensi pemrosesan data ribuan SKU produk.",
      ],
      techStack: ["Yii2 Framework", "OOP PHP", "MySQL", "Accounting Logic", "RBAC"],
    },
    {
      title: "e-PAMPAM & Pariaman e-Government Suite",
      category: "GovTech",
      role: "Lead Systems Architect & Database Administrator",
      description:
        "Rangkaian aplikasi tata kelola pemerintahan Kota Pariaman & Kab. Agam (e-PAMPAM, PPDB Online SIPINTAR, SIAJO, SILASIH PDAM).",
      highlights: [
        "Menghubungkan data lelang LPSE dengan eksekusi anggaran APBD daerah secara akuntabel.",
        "Melayani puluhan ribu siswa baru pendaftar sekolah dan pelanggan PDAM secara online.",
      ],
      techStack: ["PHP CodeIgniter & Yii2", "MySQL", "Government Security", "LPSE API"],
      links: [
        { label: "Portal e-PAMPAM", url: "https://bap.agamkab.go.id" },
        { label: "SIPINTAR PPDB", url: "https://sipintar.pariamankota.go.id" },
      ],
    },
    {
      title: "Invite Ambo - Digital Invitation SaaS",
      category: "SaaS",
      role: "Creator & Full-Stack Developer",
      description:
        "Platform undangan digital interaktif mandiri yang dilengkapi fitur RSVP online, buku tamu digital, integrasi WhatsApp Gateway, dan pembayaran otomatis via Midtrans.",
      highlights: [
        "Automated WhatsApp notification blast dengan nama tamu dinamis.",
        "Payment gateway Midtrans instan untuk aktivasi paket undangan digital.",
      ],
      techStack: ["CodeIgniter 4", "Midtrans Payment API", "WhatsApp Gateway", "MySQL"],
      links: [
        { label: "Live Application", url: "https://invite.aplikasiambo.my.id" },
        { label: "Portal Belajar Ambo", url: "https://aplikasiambo.my.id" },
      ],
    },
  ] as Project[],

  education: [
    {
      institution: "STMIK JAYANUSA Padang",
      degree: "Sarjana Komputer (S.Kom) - Sistem Komputer",
      gpa: "IPK 3.43 / 4.00",
      period: "2010 – 2014",
      thesis:
        "Skripsi: 'Digital Waterpass dengan Accelerometer' — merancang alat ukur kemiringan digital presisi menggunakan sensor accelerometer dan mikrokontroler hardware.",
    },
    {
      institution: "SMAN 2 Pariaman",
      degree: "Ilmu Pengetahuan Alam (IPA)",
      period: "Lulus",
      thesis:
        "Aktif di Majelis Permusyawarahan Kelas (MPK) & Meraih Peringkat ke-11 Kompetisi Matematika IPA CUP tingkat SMA se-Sumatera Barat.",
    },
  ],

  certifications: [
    { name: "Dicoding Indonesia", desc: "Front-End & Back-End Web Developer Learning Path" },
    { name: "Alterra Academy", desc: "Backend Engineering & RESTful API Architecture" },
    { name: "Digital Talent Scholarship (DTS Kominfo x Progate)", desc: "Web Development Fullstack Certificate" },
    { name: "PKS Digital Academy", desc: "Database Architecture & Advanced PHP Programming" },
    { name: "Santri Koding", desc: "Modern Fullstack Web & Frameworks" },
  ],
};

