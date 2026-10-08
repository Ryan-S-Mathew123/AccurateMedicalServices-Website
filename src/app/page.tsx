"use client";

import Link from "next/link";
import { ArrowRight, ShieldCheck, CheckCircle2, Award, Users, Globe } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <div className="flex flex-col w-full">

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section ref={heroRef} className="relative min-h-[88vh] flex items-center overflow-hidden">
        <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
          <img
            src="/images/front-page-bg.png"
            alt=""
            className="w-full h-full object-cover object-top"
          />
          {/* Strong left overlay for text legibility, opens up on the right */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/65 to-transparent" />
        </motion.div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 py-20">
          <motion.div style={{ y: textY }} className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0 }}
              className="text-blue-400 text-sm font-bold tracking-[0.2em] uppercase mb-6"
            >
              Established 2008 · Bengaluru, India · ISE Code Certified
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.05] mb-6"
            >
              Medical Supplies.<br />
              <span className="text-white">Built Around</span><br />
              <span className="text-blue-300">Reliability.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.28 }}
              className="text-lg md:text-xl text-slate-300 max-w-xl leading-relaxed mb-10"
            >
              Accurate Medical Service supplies medical equipment and accessories to customers across India, Qatar, Mauritius and the Philippines — with a focus on quality, dependable supply and competitive value.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-3 px-9 py-4 text-base font-bold text-white bg-blue-600 hover:bg-blue-500 active:scale-95 rounded-xl transition-all duration-200 shadow-xl shadow-blue-900/30 tracking-wide"
              >
                Explore Products
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-9 py-4 text-base font-bold text-white bg-white/15 hover:bg-white/25 active:scale-95 border-2 border-white/40 hover:border-white/60 rounded-xl transition-all duration-200 backdrop-blur-md tracking-wide"
              >
                Send an Enquiry
              </Link>
            </motion.div>
          </motion.div>
        </div>

      </section>

      {/* ── TRUST INDICATORS ─────────────────────────────────────────────── */}
      <section className="bg-white border-b border-slate-200 py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-slate-100">
            {[
              { val: "2008", label: "Established" },
              { val: "BLR", label: "Bengaluru Based" },
              { val: "PAN", label: "Across India" },
              { val: "Global", label: "Qatar · Mauritius · Philippines" },
            ].map(({ val, label }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center py-4 px-2 text-center"
              >
                <span className="text-3xl font-extrabold text-slate-900 mb-1">{val}</span>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUSTED BY HOSPITALS ─────────────────────────────────────────── */}
      <section className="bg-slate-50 border-b border-slate-200 py-14 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-10"
          >
            Trusted by Leading Hospitals
          </motion.p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
            {["ASTER", "St. John's Hospital", "KIMS", "Ramaiah Medical", "Rajarajeshwari"].map((name, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ scale: 1.08, color: "#0f172a" }}
                className="text-base md:text-lg font-bold text-slate-400 cursor-default select-none transition-colors"
              >
                {name}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ──────────────────────────────────────────────────────── */}
      <section className="py-28 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center mb-16"
          >
            <p className="text-blue-600 text-xs font-bold uppercase tracking-[0.2em] mb-3">Our Principles</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Why Accurate Medical Service</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: ShieldCheck, title: "Quality", description: "A strong focus on product quality and dependable performance across our entire catalogue." },
              { icon: CheckCircle2, title: "Reliability", description: "Consistent supply and attention to customer requirements, ensuring you have what you need." },
              { icon: Award, title: "Value", description: "Competitive pricing while maintaining the high product quality demanded by the medical sector." },
              { icon: Users, title: "Experience", description: "Deep business experience and domain knowledge developed since our establishment in 2008." },
            ].map(({ icon: Icon, title, description }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="bg-slate-50 border border-slate-100 p-8 rounded-2xl flex flex-col gap-5 cursor-default shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="w-11 h-11 rounded-xl bg-blue-900 text-white flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP ──────────────────────────────────────────────────── */}
      <section className="py-28 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.65 }}
            >
              <p className="text-blue-600 text-xs font-bold uppercase tracking-[0.2em] mb-4">Leadership</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">Guided by Experience</h2>
              <p className="text-xl font-semibold text-slate-900 mb-1">Mr. Vijay AJ</p>
              <p className="text-blue-600 font-semibold text-sm mb-6 uppercase tracking-wider">Managing Director</p>
              <p className="text-slate-600 text-lg leading-relaxed border-l-4 border-blue-400 pl-6">
                Mr. Vijay AJ oversees the operations of Accurate Medical Service and provides leadership and direction to the organization. His domain knowledge, decision-making, dedication and commitment to ethical business practices have contributed to the development of the company.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="relative"
            >
              <div className="aspect-[4/5] max-w-sm mx-auto rounded-2xl bg-slate-200 overflow-hidden shadow-lg flex items-end relative">
                <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:20px_20px] opacity-40" />
                <div className="relative z-10 p-6 bg-white/85 backdrop-blur w-full border-t border-slate-200">
                  <p className="font-bold text-slate-900">Mr. Vijay AJ</p>
                  <p className="text-sm text-slate-500">Managing Director, Accurate Medical Service</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── INTERNATIONAL REACH ─────────────────────────────────────────── */}
      <section className="py-20 bg-blue-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 bg-cover bg-center" style={{ backgroundImage: "url('/images/front-page-bg.png')" }} />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-blue-300 text-xs font-bold uppercase tracking-[0.2em] mb-3">Our Reach</p>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Delivering Beyond Borders</h2>
            <p className="text-slate-300 max-w-xl mx-auto">Served healthcare professionals across India and internationally.</p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {["India (PAN)", "Qatar", "Mauritius", "Philippines"].map((country, i) => (
              <motion.div
                key={country}
                initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                whileHover={{ scale: 1.06, transition: { duration: 0.2 } }}
                className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 bg-white/10 text-white font-bold backdrop-blur-sm cursor-default"
              >
                <Globe className="w-4 h-4 text-blue-300" />
                {country}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUALITY ─────────────────────────────────────────────────────── */}
      <section className="py-28 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <p className="text-blue-600 text-xs font-bold uppercase tracking-[0.2em] mb-3">Our Commitment</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-5">
              Quality Is Not an Add-On.<br />
              <span className="text-blue-900">It Is the Standard.</span>
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed mb-6">
              The company operates around trust, quality and reliability. Every product in our catalogue is chosen to support better healthcare delivery.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-200 bg-blue-50 text-sm font-semibold text-blue-800">
              <ShieldCheck className="w-4 h-4" />
              ISE CODE CERTIFIED
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: ShieldCheck, title: "Product Quality", description: "Focus on quality materials and dependable products. We source from established manufacturers who share our commitment." },
              { icon: CheckCircle2, title: "Reliability", description: "Products selected with attention to performance and functionality, meeting the demanding requirements of healthcare." },
              { icon: Award, title: "Quality Checks", description: "Products evaluated against relevant quality parameters before they enter our supply chain." },
              { icon: Globe, title: "Timely Supply", description: "Reliable delivery and fulfilment of customer requirements. In healthcare, timely supply is critical." },
            ].map(({ icon: Icon, title, description }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="bg-slate-50 border border-slate-100 p-8 rounded-2xl flex flex-col gap-5 cursor-default shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="w-11 h-11 rounded-xl bg-blue-900 text-white flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
