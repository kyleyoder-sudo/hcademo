"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowRight, ExternalLink, Check } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { siteConfig, partyPackages } from "@/lib/data";
import { staggerContainer, fadeInUp, fadeIn } from "@/lib/animations";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "general",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative pt-36 pb-20 bg-hca-dark overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-hca-dark via-hca-primary/30 to-hca-dark" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div variants={fadeIn} initial="hidden" animate="visible">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-hca-gold" />
              <span className="font-grotesk text-hca-gold text-xs tracking-[0.3em] uppercase">
                Get in Touch
              </span>
            </div>
            <h1 className="font-playfair text-7xl lg:text-8xl text-hca-cream font-bold leading-none mb-6">
              Contact Us
            </h1>
            <p className="font-grotesk text-hca-cream/60 text-xl max-w-2xl leading-relaxed">
              We&apos;d love to hear from you. Whether you&apos;re registering for classes, booking the theater, or simply have a question — we&apos;re here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── CONTACT CARDS ── */}
      <section className="py-12 bg-hca-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                icon: Phone,
                title: "Call Us",
                value: siteConfig.phone,
                href: `tel:${siteConfig.phone}`,
                desc: "Mon–Fri · 9 AM–6 PM",
              },
              {
                icon: Mail,
                title: "Email Us",
                value: siteConfig.email,
                href: `mailto:${siteConfig.email}`,
                desc: "We respond within 24 hours",
              },
              {
                icon: MapPin,
                title: "Visit Us",
                value: "5200 State Route 39",
                href: "https://maps.google.com/?q=5200+State+Route+39+Millersburg+OH",
                desc: "Millersburg, OH 44654",
              },
            ].map(({ icon: Icon, title, value, href, desc }) => (
              <motion.a
                key={title}
                href={href}
                target={title === "Visit Us" ? "_blank" : undefined}
                rel={title === "Visit Us" ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="group flex items-center gap-5 p-6 rounded-2xl bg-hca-navy border border-white/5 hover:border-hca-accent/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-hca-accent/15 flex items-center justify-center flex-shrink-0 group-hover:bg-hca-accent/25 transition-colors">
                  <Icon className="w-5 h-5 text-hca-accent" />
                </div>
                <div>
                  <p className="font-grotesk text-xs text-hca-cream/40 uppercase tracking-wider mb-0.5">
                    {title}
                  </p>
                  <p className="font-grotesk text-hca-cream font-medium text-sm">{value}</p>
                  <p className="font-grotesk text-hca-cream/40 text-xs mt-0.5">{desc}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT FORM + MAP ── */}
      <section className="section-padding bg-hca-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <ScrollReveal direction="left">
              <h2 className="font-playfair text-4xl text-hca-cream mb-8">
                Send Us a <em className="text-gradient">Message</em>
              </h2>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center text-center py-16"
                >
                  <div className="w-16 h-16 rounded-full bg-hca-gold/20 flex items-center justify-center mb-4">
                    <Check className="w-8 h-8 text-hca-gold" />
                  </div>
                  <h3 className="font-playfair text-3xl text-hca-cream mb-2">Message Received!</h3>
                  <p className="font-grotesk text-hca-cream/60">
                    We&apos;ll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-grotesk text-xs text-hca-cream/50 uppercase tracking-wider block mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full bg-hca-navy border border-white/10 rounded-xl px-4 py-3 text-hca-cream font-grotesk text-sm focus:outline-none focus:border-hca-accent/50 transition-colors placeholder:text-hca-cream/20"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="font-grotesk text-xs text-hca-cream/50 uppercase tracking-wider block mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        className="w-full bg-hca-navy border border-white/10 rounded-xl px-4 py-3 text-hca-cream font-grotesk text-sm focus:outline-none focus:border-hca-accent/50 transition-colors placeholder:text-hca-cream/20"
                        placeholder="(330) 000-0000"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-grotesk text-xs text-hca-cream/50 uppercase tracking-wider block mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full bg-hca-navy border border-white/10 rounded-xl px-4 py-3 text-hca-cream font-grotesk text-sm focus:outline-none focus:border-hca-accent/50 transition-colors placeholder:text-hca-cream/20"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="font-grotesk text-xs text-hca-cream/50 uppercase tracking-wider block mb-2">
                      Subject
                    </label>
                    <select
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      className="w-full bg-hca-navy border border-white/10 rounded-xl px-4 py-3 text-hca-cream font-grotesk text-sm focus:outline-none focus:border-hca-accent/50 transition-colors"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="classes">Class Registration</option>
                      <option value="theatre">Theatre Rental</option>
                      <option value="party">Birthday Party</option>
                      <option value="scholarship">Scholarship</option>
                      <option value="donation">Donation / Sponsorship</option>
                    </select>
                  </div>

                  <div>
                    <label className="font-grotesk text-xs text-hca-cream/50 uppercase tracking-wider block mb-2">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full bg-hca-navy border border-white/10 rounded-xl px-4 py-3 text-hca-cream font-grotesk text-sm focus:outline-none focus:border-hca-accent/50 transition-colors resize-none placeholder:text-hca-cream/20"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-hca-gold text-hca-dark font-semibold rounded-xl hover:bg-hca-gold-light transition-colors font-grotesk flex items-center justify-center gap-2"
                  >
                    Send Message
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </ScrollReveal>

            {/* Map + Info */}
            <ScrollReveal direction="right">
              <h2 className="font-playfair text-4xl text-hca-cream mb-8">
                Find <em className="text-gradient">Us</em>
              </h2>

              {/* Map embed placeholder with directions */}
              <div className="rounded-2xl overflow-hidden mb-6 bg-hca-navy border border-white/5">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3002.123!2d-81.8!3d40.55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88318a1f44bde571%3A0xbf8f282cdb7de0f5!2s5200%20State%20Rte%2039%2C%20Millersburg%2C%20OH%2044654!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="opacity-80"
                />
              </div>

              <div className="space-y-4 mb-6">
                <div className="p-4 rounded-xl bg-hca-navy border border-white/5">
                  <h4 className="font-grotesk text-hca-cream text-sm font-semibold mb-2">Directions</h4>
                  <p className="font-grotesk text-hca-cream/50 text-xs leading-relaxed">
                    Located on the west side of Berlin. Turn into the Burger King in Berlin and continue past the parking lot — look for the HCA sign on the right.
                  </p>
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=5200+State+Route+39+Millersburg+OH"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 border border-hca-cream/15 text-hca-cream/60 hover:text-hca-cream hover:border-hca-cream/30 rounded-xl transition-all font-grotesk text-sm"
              >
                Open in Google Maps
                <ExternalLink className="w-4 h-4" />
              </a>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── BIRTHDAY PARTY PACKAGES ── */}
      <section className="section-padding bg-hca-dark">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-14">
            <div className="flex items-center justify-center gap-4 mb-5">
              <div className="w-12 h-px bg-hca-gold/50" />
              <span className="font-grotesk text-hca-gold text-xs tracking-[0.3em] uppercase">
                Celebrate Here
              </span>
              <div className="w-12 h-px bg-hca-gold/50" />
            </div>
            <h2 className="font-playfair text-5xl text-hca-cream">
              Birthday Party <em className="text-gradient">Packages</em>
            </h2>
            <p className="font-grotesk text-hca-cream/60 mt-4 max-w-xl mx-auto">
              Host an unforgettable birthday party at HCA. All packages include Walnut Creek cupcakes, lemonade & water, an HCA host, and tablecloths & paper products.
            </p>
          </ScrollReveal>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {partyPackages.map((pkg) => (
              <motion.div
                key={pkg.title}
                variants={fadeInUp}
                className="group p-8 rounded-2xl bg-hca-navy border border-white/5 hover:border-hca-gold/20 transition-all duration-300 flex flex-col"
              >
                <div className="text-4xl mb-4">{pkg.icon}</div>
                <h3 className="font-playfair text-2xl text-hca-cream font-bold mb-2">{pkg.title}</h3>
                <p className="font-grotesk text-hca-cream/60 text-sm leading-relaxed mb-5 flex-1">
                  {pkg.description}
                </p>

                <div className="space-y-1.5 mb-6">
                  {pkg.includes.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-hca-gold flex-shrink-0" />
                      <span className="font-grotesk text-hca-cream/60 text-xs">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-5 border-t border-white/5 flex items-center justify-between">
                  <div>
                    <p className="font-grotesk text-xs text-hca-cream/40 uppercase tracking-wider">{pkg.capacity} · {pkg.duration}</p>
                    <p className="font-playfair text-3xl text-gradient font-bold mt-0.5">{pkg.price}</p>
                  </div>
                  <a
                    href={`mailto:${siteConfig.email}?subject=Birthday Party Inquiry - ${pkg.title}`}
                    className="px-4 py-2 bg-hca-gold/10 border border-hca-gold/20 text-hca-gold rounded-lg hover:bg-hca-gold/20 transition-all font-grotesk text-xs font-medium"
                  >
                    Book
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
