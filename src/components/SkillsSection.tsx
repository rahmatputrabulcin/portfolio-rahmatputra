"use client";

import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Server, Layout, Database, CreditCard, Check, Code } from "lucide-react";

export default function SkillsSection() {
  const { skillsCategories } = PORTFOLIO_DATA;

  const iconMap: Record<string, any> = {
    Server,
    Layout,
    Database,
    CreditCard,
  };

  return (
    <section id="keahlian" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold tracking-wider text-blue-600 dark:text-blue-400 uppercase bg-blue-50 dark:bg-blue-950/70 px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800">
            Tech Stack & Capabilities
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Keahlian Teknis & Alat Pengembangan
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-300">
            Daftar teknologi yang secara aktif saya gunakan untuk membangun sistem handal, aman, dan
            siap produksi.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsCategories.map((cat, idx) => {
            const Icon = iconMap[cat.icon] || Code;
            return (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900 rounded-3xl p-7 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center shadow-md shadow-blue-500/20">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Standar industri & best-practices
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                        skill.highlight
                          ? "bg-blue-50 text-blue-700 border border-blue-200 dark:bg-blue-950/70 dark:text-blue-300 dark:border-blue-800/80 shadow-sm"
                          : "bg-slate-100 text-slate-700 dark:bg-slate-800/80 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                      }`}
                    >
                      {skill.highlight && <Check className="w-3 h-3 text-blue-600 dark:text-blue-400" />}
                      <span>{skill.name}</span>
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
