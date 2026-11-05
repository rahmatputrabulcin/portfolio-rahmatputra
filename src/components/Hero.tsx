"use client";

import Image from "next/image";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import {
  ArrowRight,
  Download,
  Mail,
  Linkedin,
  Github,
  MapPin,
  CheckCircle2,
  ExternalLink,
  Phone,
  FolderCheck,
} from "lucide-react";

export default function Hero() {
  const { personal } = PORTFOLIO_DATA;

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-blue-500/15 via-indigo-500/10 to-teal-400/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Intro & Headline */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-xs font-semibold mb-6 animate-pulse">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>{personal.badge}</span>
            </div>

            {/* Name & Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
              Halo, Saya{" "}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-500 bg-clip-text text-transparent">
                {personal.name}
              </span>
            </h1>

            <p className="mt-3 text-xl sm:text-2xl font-bold text-slate-700 dark:text-slate-200">
              {personal.title}
            </p>

            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              {personal.subtitle}
            </p>

            {/* Location & Quick Info */}
            <div className="mt-4 flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-blue-600" />
                {personal.location}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Phone className="w-4 h-4 text-emerald-600" />
                {personal.phone}
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <a
                href="#proyek"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-lg shadow-blue-600/25 transition-all hover:scale-[1.02] active:scale-95"
              >
                <span>Lihat Karya & Proyek</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personal.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-slate-800 dark:text-slate-100 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm transition-all hover:scale-[1.02] active:scale-95"
              >
                <span>Chat WhatsApp</span>
              </a>

              <a
                href="/CV_Rahmat_Putra.html"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </a>
            </div>

            {/* Social Links Row */}
            <div className="mt-8 flex items-center gap-3">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mr-1">
                Tautan:
              </span>
              <a
                href={personal.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 hover:scale-105 transition-all"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={personal.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white hover:scale-105 transition-all"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="p-2.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 hover:text-rose-600 dark:text-slate-300 dark:hover:text-rose-400 hover:scale-105 transition-all"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={personal.socials.certificatesDrive}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-blue-50 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300 text-xs font-semibold hover:bg-blue-100 dark:hover:bg-blue-900 border border-blue-200 dark:border-blue-800 transition-all shadow-sm hover:scale-105"
                title="Google Drive Folder Sertifikat Resmi"
              >
                <FolderCheck className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span>Google Drive Sertifikat</span>
              </a>
            </div>
          </div>

          {/* Right Column: Profile Photo & Floating Highlights */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative">
              {/* Outer Decorative Rings */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-3xl opacity-20 blur-xl"></div>

              {/* Photo Box */}
              <div className="relative w-64 h-80 sm:w-72 sm:h-96 md:w-80 md:h-[420px] rounded-2xl overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl bg-gradient-to-b from-blue-700 to-slate-900">
                <Image
                  src={personal.avatarUrl}
                  alt={personal.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 384px"
                  priority
                  className="object-cover object-top hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-sm font-bold tracking-tight">Rahmat Putra, S.Kom</p>
                  <p className="text-xs text-blue-200">Software Developer</p>
                </div>
              </div>

              {/* Floating Badge 1 - Top Left */}
              <div className="absolute -top-4 -left-6 sm:-left-8 bg-white dark:bg-slate-800 px-4 py-2.5 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 flex items-center gap-2.5 animate-bounce [animation-duration:4s]">
                <div className="w-8 h-8 rounded-lg bg-red-100 text-red-600 flex items-center justify-center font-bold text-xs">
                  PHP
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-slate-800 dark:text-white">Laravel & Yii2</p>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400">OOP & REST API</p>
                </div>
              </div>

              {/* Floating Badge 2 - Bottom Right */}
              <div className="absolute -bottom-4 -right-4 sm:-right-6 bg-white dark:bg-slate-800 px-4 py-2.5 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-cyan-100 text-cyan-600 flex items-center justify-center font-bold text-xs">
                  📱
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-slate-800 dark:text-white">Flutter & React</p>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400">Web & Android</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="mt-16 sm:mt-24 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {personal.metrics.map((metric, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white/70 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-md hover:border-blue-500/40 transition-all text-center"
            >
              <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                {metric.value}
              </div>
              <div className="mt-1.5 text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-300">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
