"use client";

import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Server, Smartphone, CreditCard, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function AboutSection() {
  const { personal } = PORTFOLIO_DATA;

  const highlights = [
    {
      icon: Server,
      title: "Backend & System Architecture",
      desc: "Perancangan backend berorientasi objek (OOP PHP) dengan Laravel, Yii2, dan CodeIgniter, mengutamakan skalabilitas dan keamanan data tingkat tinggi.",
    },
    {
      icon: Smartphone,
      title: "Full-Stack & Mobile Solution",
      desc: "Menghubungkan frontend interaktif React.js/Next.js dan aplikasi mobile Android berbasis Flutter ke satu pusat RESTful API yang efisien.",
    },
    {
      icon: CreditCard,
      title: "FinTech & Payment Gateway",
      desc: "Pengalaman mendalam mengintegrasikan Paytend BaaS, Global e-Payment (GEP), Midtrans, BlueOcean Pay, dan regulasi Bank Indonesia untuk e-money.",
    },
    {
      icon: ShieldCheck,
      title: "Enterprise & Public Sector",
      desc: "Rekam jejak terbukti membangun SIMRS (6 modul rumah sakit) dan rangkaian sistem e-Government di berbagai kota dan kabupaten.",
    },
  ];

  return (
    <section id="tentang" className="py-20 bg-slate-100/50 dark:bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold tracking-wider text-blue-600 dark:text-blue-400 uppercase bg-blue-50 dark:bg-blue-950/70 px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800">
            Profil & Latar Belakang
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Dedikasi 8+ Tahun Menghadirkan Solusi Perangkat Lunak Skala Besar
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Dari fondasi teknik perangkat keras & mikrokontroler saat kuliah Sistem Komputer hingga
            menjadi Backend & Full-Stack Architect yang dipercaya menangani sistem perbankan virtual,
            rumah sakit, dan institusi pemerintahan.
          </p>
        </div>

        {/* Narrative Box */}
        <div className="mt-12 bg-white dark:bg-slate-900 p-8 sm:p-10 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm">
          <div className="space-y-4 text-slate-600 dark:text-slate-300 text-base leading-relaxed">
            {personal.bio.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-800 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-2.5 text-sm font-semibold text-slate-700 dark:text-slate-200">
              <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
              <span>Berpengalaman kerja remote & kolaborasi tim internasional (Kuala Lumpur & Indonesia)</span>
            </div>
            <div className="flex items-center gap-2.5 text-sm font-semibold text-slate-700 dark:text-slate-200">
              <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
              <span>Terbiasa dengan standar keamanan JWT, enkripsi finansial, dan audit kode</span>
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:border-blue-500/50 hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/70 text-blue-600 dark:text-blue-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
