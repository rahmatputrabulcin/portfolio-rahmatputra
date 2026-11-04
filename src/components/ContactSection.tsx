"use client";

import { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Github,
  Check,
  Copy,
  ExternalLink,
} from "lucide-react";

export default function ContactSection() {
  const { personal } = PORTFOLIO_DATA;
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="kontak" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 text-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold tracking-wider uppercase bg-white/20 px-3.5 py-1 rounded-full backdrop-blur-md">
              Mari Berkolaborasi
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight">
              Tertarik Merekrut atau Berkolaborasi dalam Proyek?
            </h2>
            <p className="mt-4 text-sm sm:text-base text-blue-100 leading-relaxed">
              Saya terbuka untuk peluang posisi **Senior Backend Developer**, **Full-Stack Developer**,
              maupun peran kepemimpinan teknis secara **Remote** maupun **Onsite**.
            </p>

            {/* Quick Action CTA */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={personal.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-blue-800 font-bold text-sm shadow-lg hover:bg-blue-50 hover:scale-105 active:scale-95 transition-all"
              >
                <Send className="w-4 h-4 text-blue-600" />
                <span>Chat via WhatsApp Langsung</span>
              </a>

              <button
                onClick={copyEmail}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-900/60 hover:bg-blue-900/80 border border-white/20 font-semibold text-sm transition-all"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Email Berhasil Disalin!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-blue-200" />
                    <span>Salin Alamat Email</span>
                  </>
                )}
              </button>
            </div>

            {/* Contact Details Grid */}
            <div className="mt-12 pt-10 border-t border-white/20 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-blue-200" />
                </div>
                <div>
                  <p className="text-xs text-blue-200 font-medium">Email Resmi</p>
                  <a
                    href={`mailto:${personal.email}`}
                    className="text-xs sm:text-sm font-semibold hover:underline break-all"
                  >
                    {personal.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-blue-200" />
                </div>
                <div>
                  <p className="text-xs text-blue-200 font-medium">Telepon / WhatsApp</p>
                  <a
                    href={personal.socials.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm font-semibold hover:underline"
                  >
                    {personal.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-blue-200" />
                </div>
                <div>
                  <p className="text-xs text-blue-200 font-medium">Domisili</p>
                  <p className="text-xs sm:text-sm font-semibold">Padang Pariaman, Sumbar</p>
                </div>
              </div>
            </div>

            {/* Socials Link Row */}
            <div className="mt-8 flex justify-center items-center gap-4">
              <a
                href={personal.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-all hover:scale-110"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={personal.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-all hover:scale-110"
                title="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={personal.socials.certificatesDrive}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-all hover:scale-110"
                title="Google Drive"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
