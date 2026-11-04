import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Briefcase, Calendar, MapPin, CheckCircle } from "lucide-react";

export default function ExperienceSection() {
  const { experiences } = PORTFOLIO_DATA;

  return (
    <section id="pengalaman" className="py-20 bg-slate-100/50 dark:bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold tracking-wider text-blue-600 dark:text-blue-400 uppercase bg-blue-50 dark:bg-blue-950/70 px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800">
            Riwayat Karir
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Pengalaman Kerja Profesional
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-300">
            Perjalanan karir lebih dari 8 tahun berkontribusi dalam tim engineering lokal dan
            internasional.
          </p>
        </div>

        {/* Timeline wrapper */}
        <div className="mt-14 relative border-l-2 border-blue-200 dark:border-slate-800 ml-4 sm:ml-8 md:ml-32 space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-6 sm:pl-10 group">
              {/* Timeline marker */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-white dark:bg-slate-900 border-4 border-blue-600 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                <div className="w-2 h-2 rounded-full bg-blue-600" />
              </div>

              {/* Card */}
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-blue-500/40 transition-all">
                {/* Header info */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-4">
                  <div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 dark:bg-blue-950/70 dark:text-blue-300">
                      {exp.type}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-2">
                      {exp.role}
                    </h3>
                    <p className="text-base font-semibold text-blue-600 dark:text-blue-400">
                      {exp.company}
                    </p>
                  </div>

                  <div className="flex flex-col sm:items-end text-xs text-slate-500 dark:text-slate-400 gap-1 mt-2 md:mt-0">
                    <span className="inline-flex items-center gap-1.5 font-medium">
                      <Calendar className="w-3.5 h-3.5 text-blue-600" />
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="mt-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {exp.description}
                </p>

                {/* Achievements List */}
                <div className="mt-5 space-y-2.5">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Pencapaian & Tanggung Jawab Utama:
                  </p>
                  {exp.achievements.map((item, aIdx) => (
                    <div key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-normal">
                      <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-2">
                  {exp.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
