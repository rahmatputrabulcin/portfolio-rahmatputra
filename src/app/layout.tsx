import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rahmat Putra, S.Kom | Software Developer",
  description:
    "Portofolio Profesional Rahmat Putra, S.Kom. Software Developer dengan 8+ tahun pengalaman dalam arsitektur web PHP (Laravel, Yii2, CodeIgniter), React.js, Next.js, Flutter, FinTech, SIMRS, dan e-Government.",
  keywords: [
    "Rahmat Putra",
    "Software Developer",
    "Backend Developer",
    "Full-Stack Developer",
    "Laravel",
    "Yii2",
    "PHP",
    "React.js",
    "Flutter",
    "FinTech",
    "SIMRS",
    "Padang Pariaman",
    "Web Developer Indonesia",
  ],
  authors: [{ name: "Rahmat Putra, S.Kom" }],
  openGraph: {
    title: "Rahmat Putra, S.Kom | Software Developer",
    description:
      "8+ Tahun Pengalaman membangun Arsitektur Web Skala Besar, RESTful API, FinTech, SIMRS, dan E-Government.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-['Plus_Jakarta_Sans',sans-serif] antialiased bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
