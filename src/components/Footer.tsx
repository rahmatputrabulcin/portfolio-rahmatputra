import { PORTFOLIO_DATA } from "@/data/portfolio";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-blue-600 text-white font-bold flex items-center justify-center text-xs">
            RP
          </div>
          <span>
            © {currentYear} <strong>{PORTFOLIO_DATA.personal.name}</strong>. All rights reserved.
          </span>
        </div>

        <div className="flex items-center gap-6 font-medium">
          <a href="#tentang" className="hover:text-blue-600 transition-colors">
            Tentang
          </a>
          <a href="#pengalaman" className="hover:text-blue-600 transition-colors">
            Pengalaman
          </a>
          <a href="#proyek" className="hover:text-blue-600 transition-colors">
            Proyek
          </a>
          <a
            href={PORTFOLIO_DATA.personal.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={PORTFOLIO_DATA.personal.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
