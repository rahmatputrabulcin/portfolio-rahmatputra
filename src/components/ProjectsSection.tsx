"use client";

import { useState } from "react";
import { PORTFOLIO_DATA, Project } from "@/data/portfolio";
import { ExternalLink, Download, Layers, ShieldCheck } from "lucide-react";

export default function ProjectsSection() {
  const { projects } = PORTFOLIO_DATA;
  const categories = ["Semua", "FinTech", "Healthcare", "Enterprise", "GovTech", "SaaS"];
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filteredProjects =
    activeCategory === "Semua"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="proyek" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold tracking-wider text-blue-600 dark:text-blue-400 uppercase bg-blue-50 dark:bg-blue-950/70 px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800">
            Showcase Hasil Karya
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Proyek & Sistem Unggulan
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-300">
            Beberapa aplikasi skala produksi yang telah saya kembangkan di sektor FinTech,
            Manajemen Rumah Sakit (SIMRS), Enterprise ERP, dan Layanan Publik.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === cat
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/25 scale-105"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={idx}
              className="flex flex-col bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-7 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-blue-500/40 transition-all group"
            >
              {/* Category & Role */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 dark:bg-blue-950/80 dark:text-blue-300">
                  {project.category}
                </span>
                <span className="text-[11px] font-medium text-slate-400">
                  {project.role}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed flex-grow">
                {project.description}
              </p>

              {/* Highlights */}
              <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 space-y-1.5">
                {project.highlights.map((h, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-500 dark:text-slate-400">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              {/* Tech stack */}
              <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-1.5">
                {project.techStack.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] font-medium px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links / Actions */}
              {(project.links || project.apkLinks) && (
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
                  {project.links && project.links.length > 0 && (
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                        Tautan Sistem & Portal:
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.links.map((link, lIdx) => {
                          const isMaster = link.label.includes("Co-Brand");
                          return (
                            <a
                              key={lIdx}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                                isMaster
                                  ? "bg-amber-500 text-white hover:bg-amber-600 shadow-sm shadow-amber-500/20"
                                  : "bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900"
                              }`}
                            >
                              <ExternalLink className="w-3.5 h-3.5" />
                              <span>{link.label}</span>
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {project.apkLinks && project.apkLinks.length > 0 && (
                    <div className="pt-1">
                      <p className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-2 flex items-center gap-1">
                        <span>Aplikasi Android (APK Live):</span>
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.apkLinks.map((apk, aIdx) => (
                          <a
                            key={aIdx}
                            href={apk.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 text-xs font-semibold hover:bg-emerald-100 dark:hover:bg-emerald-900 transition-all border border-emerald-200/60 dark:border-emerald-800/60"
                          >
                            <Download className="w-3.5 h-3.5 text-emerald-600" />
                            <span>{apk.label}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
