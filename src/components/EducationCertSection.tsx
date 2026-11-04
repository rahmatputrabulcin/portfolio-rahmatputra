import { PORTFOLIO_DATA } from "@/data/portfolio";
import { GraduationCap, Award, ExternalLink, BookOpen } from "lucide-react";

export default function EducationCertSection() {
  const { education, certifications, personal } = PORTFOLIO_DATA;

  return (
    <section id="pendidikan" className="py-20 bg-slate-100/50 dark:bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold tracking-wider text-blue-600 dark:text-blue-400 uppercase bg-blue-50 dark:bg-blue-950/70 px-3 py-1 rounded-full border border-blue-200 dark:border-blue-800">
            Kredensial & Pengembangan Diri
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Pendidikan & Sertifikasi Profesional
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-300">
            Fondasi akademik komputer dan komitmen belajar berkelanjutan melalui program bootcamp
            teknologi terkemuka.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Education Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                Pendidikan Formal
              </h3>
            </div>

            {education.map((edu, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900 p-6 sm:p-7 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm"
              >
                <div className="flex justify-between items-start gap-2">
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                      {edu.institution}
                    </h4>
                    <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                      {edu.degree}
                    </p>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-500">
                    {edu.period}
                  </span>
                </div>

                {edu.gpa && (
                  <div className="mt-2 inline-block text-xs font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 dark:bg-emerald-950/70 dark:text-emerald-300">
                    {edu.gpa}
                  </div>
                )}

                <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {edu.thesis}
                </p>
              </div>
            ))}
          </div>

          {/* Bootcamps & Certifications Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center justify-between gap-3 mb-2">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-md">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Bootcamp & Sertifikasi
                </h3>
              </div>

              <a
                href={personal.socials.certificatesDrive}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 dark:text-blue-400"
              >
                <span>Lihat Bukti Drive</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="bg-white dark:bg-slate-900 p-6 sm:p-7 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
              {certifications.map((cert, cIdx) => (
                <div
                  key={cIdx}
                  className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-slate-900 dark:text-white">
                      {cert.name}
                    </h5>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      {cert.desc}
                    </p>
                  </div>
                </div>
              ))}

              <div className="pt-2">
                <a
                  href={personal.socials.certificatesDrive}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-bold shadow-md shadow-blue-500/20 transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Buka Arsip Sertifikat Resmi di Google Drive</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
