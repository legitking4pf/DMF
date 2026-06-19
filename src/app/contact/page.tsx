"use client";
import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { DynamicMotionDiv as MotionDiv } from '@/components/motion/DynamicMotion';


import type { Variants } from "framer-motion";
import {
  ShieldCheck,
  ArrowRight,
  Lock,
  CheckCircle2,
  Globe,
  Landmark,
  Fingerprint,
  Zap,
  Send,
} from "lucide-react";

export default function ExecutiveContact() {
  const [message, setMessage] = useState("");
  const [charCount, setCharCount] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const maxChars = 1200;

  useEffect(() => setCharCount(message.length), [message]);

  const containerVars = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };

  const itemVars: Variants = {
    hidden: { opacity: 0, y: 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!message.trim()) return;

    setSubmitting(true);

    const formData = {
      name: (e.currentTarget as any).name.value,
      email: (e.currentTarget as any).email.value,
      intent: (e.currentTarget as any).intent.value,
      message: message,
      ts: Date.now(), // prevents caching issues
    };

    try {
      const res = await fetch("https://formspree.io/f/xojnqyjg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-cache",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSucceeded(true);
        setMessage("");
        setCharCount(0);
      } else {
        console.error("Form submission failed", res.statusText);
        alert("Transmission failed ❌");
      }
    } catch (err) {
      console.error(err);
      alert("Transmission failed ❌");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-gold/30">

      {/* === HERO / HEADER === */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(197,157,72,0.18),transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#0B0D0F_0%,#0E1114_60%,#0B0D0F_100%)]" />
        <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,rgba(255,255,255,0.4)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.4)_1px,transparent_1px)] bg-[size:64px_64px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-20 pt-28">
          <MotionDiv
            variants={containerVars}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end"
          >
            <MotionDiv variants={itemVars} className="lg:col-span-8">
              <div className="flex items-center gap-4 mb-8">
                <Fingerprint className="w-4 h-4 text-gold-light" />
                <span className="text-gold-light text-[10px] font-black tracking-[0.45em] uppercase">
                  Secure Channel // GFA Executive
                </span>
              </div>

              <h1 className="text-huge font-display uppercase leading-[0.95] tracking-tight">
                Strategic
                <br />
                <span className="text-gold italic font-serif font-light">
                  Inquiry
                </span>
              </h1>

              <p className="mt-8 max-w-xl text-sm text-white leading-relaxed">
                Encrypted institutional access for CAO & CTO-level engagements.
                Briefings only. Vetted. Actionable.
              </p>
            </MotionDiv>

            <MotionDiv
              variants={itemVars}
              className="lg:col-span-4 lg:text-right"
            >
              <p className="text-[11px] uppercase tracking-[0.35em] text-white/80 font-bold">
                Institutional Ops
                <br />
                Strategic Growth
                <br />
                Technology Sovereignty
              </p>
            </MotionDiv>
          </MotionDiv>
        </div>
      </section>

      {/* === BODY === */}
      <section className="max-w-7xl mx-auto px-6 lg:px-20 py-24 grid grid-cols-1 lg:grid-cols-12 gap-20 bg-[#FBFBF9] text-obsidian">
        {/* LEFT: PILLARS */}
        <MotionDiv
          variants={containerVars}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="lg:col-span-5 space-y-14"
        >
          <MotionDiv variants={itemVars}>
            <div className="flex items-center gap-5 mb-4">
              <div className="w-12 h-12 flex items-center justify-center border border-gold-dark text-gold-light rounded-md">
                <Landmark size={18} />
              </div>
              <h2 className="text-2xl font-display uppercase">
                Wealth Acceleration
              </h2>
            </div>
            <p className="text-ash leading-relaxed border-l-2 border-gold-dark pl-5">
              Capital deployment strategies designed to scale institutional
              assets with jurisdictional awareness and sovereign tech control.
            </p>
          </MotionDiv>

          <MotionDiv variants={itemVars}>
            <div className="flex items-center gap-5 mb-4">
              <div className="w-12 h-12 flex items-center justify-center border border-gold-dark text-gold-light rounded-md">
                <Zap size={18} />
              </div>
              <h2 className="text-2xl font-display uppercase">
                Digital Integration
              </h2>
            </div>
            <p className="text-ash leading-relaxed border-l-2 border-gold-dark pl-5">
              Zero-trust infrastructure, fintech modernization, and interoperable
              executive systems across the Atlántida ecosystem.
            </p>
          </MotionDiv>

          <MotionDiv variants={itemVars} className="pt-6">
            <div className="flex items-center gap-3 text-[11px] uppercase tracking-widest text-ash font-mono">
              <Globe size={14} className="text-gold-light" />
              Tegucigalpa • HND — ES — GT
            </div>
          </MotionDiv>
        </MotionDiv>

        {/* RIGHT: FORM */}
        <MotionDiv
          variants={containerVars}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="lg:col-span-7"
        >
          <div className="bg-white p-8 md:p-12 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.12)] border border-obsidian/6 relative overflow-hidden rounded-md">
            <div className="absolute top-6 right-6 opacity-6">
              <Lock size={110} />
            </div>

            <div className="flex justify-between items-center mb-10 relative z-10">
              <h3 className="text-[10px] font-black uppercase tracking-[0.45em] text-gold">
                Briefing Transmission
              </h3>
              <div className="flex gap-1">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-1 h-1 bg-gold rounded-full" />
                ))}
              </div>
            </div>

            <AnimatePresence mode="wait">
              {succeeded ? (
                <MotionDiv
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-16 space-y-5"
                  aria-live="polite"
                >
                  <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 size={44} className="text-gold" />
                  </div>
                  <h4 className="text-2xl font-display uppercase tracking-tight">
                    Transmission Successful
                  </h4>
                  <p className="text-ash text-sm font-medium uppercase tracking-[0.2em]">
                    Logged to GFA Executive Registry
                  </p>
                  <button
                    onClick={() => setSucceeded(false)}
                    className="mt-6 inline-flex items-center gap-2 px-5 py-3 bg-obsidian text-white uppercase text-[11px] font-bold tracking-[0.35em] hover:bg-gold hover:text-obsidian transition"
                  >
                    New Transmission <ArrowRight size={14} />
                  </button>
                </MotionDiv>
              ) : (
                <form
                  onSubmit={submitForm}
                  autoComplete="off"
                  noValidate
                  className="space-y-6 relative z-10"
                  aria-label="Executive briefing form"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-[9px] font-black uppercase tracking-[0.35em] text-ash">
                        Identity
                      </label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Principal Name"
                        required
                        className="mt-2 bg-transparent border-b border-obsidian/10 py-3 text-base focus:border-gold-dark outline-none placeholder:text-obsidian/30"
                      />
                    </div>

                    <div>
                      <label className="text-[9px] font-black uppercase tracking-[0.35em] text-ash">
                        Secure Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="official@domain.com"
                        required
                        className="mt-2 bg-transparent border-b border-obsidian/10 py-3 text-base focus:border-gold-dark outline-none placeholder:text-obsidian/30"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[9px] font-black uppercase tracking-[0.35em] text-ash">
                      Strategic Intent
                    </label>
                    <select
                      name="intent"
                      className="mt-2 bg-transparent border-b border-obsidian/10 py-3 text-base focus:border-gold-dark outline-none cursor-pointer appearance-none w-full"
                    >
                      <option>Wealth Acceleration Opportunity</option>
                      <option>GFA Strategic Growth Network Inquiry</option>
                      <option>Digital Integration Partnership</option>
                      <option>Executive Protocol Consultation</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[9px] font-black uppercase tracking-[0.35em] text-ash">
                      Detailed Briefing
                    </label>
                    <textarea
                      name="message"
                      rows={6}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Define objectives and scope… (concise)"
                      className="mt-2 bg-transparent border border-obsidian/8 rounded p-3 text-base focus:border-gold-dark outline-none resize-none min-h-[120px]"
                      maxLength={maxChars}
                    />
                    <div className="flex justify-between items-center mt-2 text-[11px] text-ash">
                      <span>{charCount}/{maxChars}</span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting || !message.trim()}
                    className="group w-full bg-obsidian text-white py-4 text-[12px] font-black uppercase tracking-[0.45em] hover:bg-gold hover:text-obsidian transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 shadow"
                  >
                    {submitting ? "TRANSMITTING..." : "Send Securely"}
                    <Send size={14} />
                  </button>
                </form>
              )}
            </AnimatePresence>
          </div>
        </MotionDiv>
      </section>

      {/* FOOTER */}
      <footer className="py-14 border-t border-white/10 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <ShieldCheck className="mx-auto text-gold-light mb-4" size={36} />
          <p className="text-[10px] font-black uppercase tracking-[0.45em] text-ash">
            Encrypted Under GFA Governance Protocols
          </p>
        </div>
      </footer>
    </main>
  );
}