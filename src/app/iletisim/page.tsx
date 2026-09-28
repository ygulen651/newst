"use client";

import React, { useActionState, useRef, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import Image from "next/image";
import { usePageContent } from "@/lib/content/context";
import { Highlight, telHref } from "@/lib/content/format";
import { submitContactMessage, type ContactFormState } from "./actions";

const inputClass =
  "w-full bg-gray-50 border-none px-6 py-5 rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#ea580c]/20 transition-all text-gray-800";

function ContactForm({ onReset }: { onReset: () => void }) {
  const c = usePageContent("contact");
  const [state, formAction, pending] = useActionState<ContactFormState, FormData>(submitContactMessage, { status: "idle" });

  if (state.status === "success") {
    return (
      <div className="space-y-8 text-center py-8">
        <CheckCircle2 className="w-16 h-16 text-[#ea580c] mx-auto" />
        <p className="text-xl text-gray-600 font-light leading-relaxed">{c.text("successMessage")}</p>
        <button type="button" onClick={onReset} className="font-bold text-[#1e3a8a] hover:text-[#ea580c] transition-colors">
          {c.text("sendAnotherButton")}
        </button>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-8">
      <div className="space-y-3">
        <label htmlFor="contact-name" className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-4">
          {c.text("nameLabel")}
        </label>
        <input id="contact-name" name="name" type="text" required maxLength={120} className={inputClass} placeholder={c.text("namePlaceholder")} />
      </div>

      <div className="space-y-3">
        <label htmlFor="contact-email" className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-4">
          {c.text("emailFieldLabel")}
        </label>
        <input id="contact-email" name="email" type="email" required maxLength={200} className={inputClass} placeholder="ornek@sirket.com" />
      </div>

      <div className="space-y-3">
        <label htmlFor="contact-message" className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-4">
          {c.text("messageLabel")}
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          maxLength={5000}
          className={`${inputClass} h-40 resize-none`}
          placeholder={c.text("messagePlaceholder")}
        ></textarea>
      </div>

      {/* Spam trap: hidden from people, filled in by bots. */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

      {state.status === "error" && (
        <p className="rounded-2xl bg-red-50 px-6 py-4 text-sm text-red-600">
          {state.error === "invalid" ? c.text("invalidMessage") : c.text("serverErrorMessage")}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="w-full group bg-[#ea580c] text-white py-6 rounded-3xl font-bold text-lg hover:bg-[#c2410c] transition-all flex items-center justify-center gap-4 disabled:opacity-60"
      >
        {pending ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" /> {c.text("sendingLabel")}
          </>
        ) : (
          <>
            {c.text("submitButton")}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </>
        )}
      </button>
    </form>
  );
}

export default function ContactPage() {
  const c = usePageContent("contact");
  const contact = usePageContent("layout");
  // Bumping the key remounts the form so "send another" starts from a clean state.
  const [formKey, setFormKey] = useState(0);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const rotate = useTransform(smoothProgress, [0, 1], [0, 5]);
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const formY = useTransform(smoothProgress, [0, 1], ["0%", "-10%"]);

  return (
    <>
      <Navbar />
      <main ref={containerRef} className="bg-white overflow-hidden">
        {/* Hero with product visual */}
        <section className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden bg-[#1e3a8a]">
          <motion.div style={{ y: heroY }} className="absolute inset-0 z-0 opacity-45">
            <Image
              src={c.text("heroImage")}
              alt={c.text("heroEyebrow")}
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          <div className="absolute inset-0 bg-gradient-to-b from-[#1e3a8a]/80 via-[#1e3a8a]/50 to-[#1e3a8a] z-0" />

          <div className="relative z-10 text-center space-y-8 max-w-5xl px-6 pt-32">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <span className="text-[#f97316] text-xs font-bold uppercase tracking-[0.5em] mb-6 block">
                {c.text("heroEyebrow")}
              </span>
              <h1 className="text-6xl md:text-9xl font-medium text-white tracking-tighter leading-none">
                {c.text("heroTitleLine1")} <br />
                <span className="text-gray-400">{c.text("heroTitleLine2")}</span>
              </h1>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-32 relative z-20 -mt-24">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
              {/* Contact Information */}
              <div className="space-y-24">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-5xl md:text-7xl font-medium text-[#020817] tracking-tighter mb-8 leading-tight">
                    {c.text("infoTitleLine1")} <br /> <span className="text-[#ea580c]">{c.text("infoTitleLine2")}</span>
                  </h2>
                  <p className="text-xl text-gray-500 font-light leading-relaxed max-w-md">
                    {c.text("infoText")}
                  </p>
                </motion.div>

                <div className="space-y-16">
                  {[
                    { icon: MapPin, title: c.text("addressLabel"), desc: contact.text("address"), href: contact.text("addressMapUrl") },
                    { icon: Phone, title: c.text("phoneLabel"), desc: contact.text("phone"), href: telHref(contact.text("phone")) },
                    { icon: Mail, title: c.text("emailLabel"), desc: contact.text("email"), href: `mailto:${contact.text("email")}` },
                  ].map((item, i) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-8 group"
                    >
                      <div className="mt-2 text-[#ea580c] group-hover:scale-110 transition-transform">
                        <item.icon className="w-8 h-8 stroke-[1.5]" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-[#020817] mb-2">{item.title}</h3>
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                          className="text-lg text-gray-500 whitespace-pre-line font-light leading-relaxed transition-colors hover:text-[#ea580c]"
                        >
                          {item.desc}
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Form */}
              <div className="relative">
                <motion.div
                  style={{ y: formY }}
                  className="relative z-10 rounded-[28px] border border-gray-100 bg-white p-6 shadow-2xl shadow-[#ea580c]/10 sm:rounded-[40px] md:p-16"
                >
                  <div className="mb-12">
                    <h3 className="text-3xl font-bold text-[#020817] mb-4">{c.text("formTitle")}</h3>
                    <div className="w-12 h-1 bg-[#ea580c]" />
                  </div>

                  <ContactForm key={formKey} onReset={() => setFormKey((k) => k + 1)} />
                </motion.div>

                <motion.div
                  style={{ rotate }}
                  className="absolute -top-12 -right-12 w-64 h-64 bg-[#f97316] rounded-full blur-[100px] opacity-20 -z-10"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Bottom band */}
        <section className="py-32 bg-[#1e3a8a] overflow-hidden relative">
          <div className="absolute inset-0 flex items-center opacity-5 pointer-events-none">
            <motion.span
              animate={{ x: [0, -2000] }}
              transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
              className="text-[20rem] font-black text-white tracking-tighter uppercase whitespace-nowrap"
            >
              {c.text("marquee")}
            </motion.span>
          </div>
          <div className="container mx-auto px-6 text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-medium text-white mb-8">
              <Highlight text={c.text("bottomTitle")} className="text-[#f97316]" />
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto font-light">
              {c.text("bottomText")}
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
