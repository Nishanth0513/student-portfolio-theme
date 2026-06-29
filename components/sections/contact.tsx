"use client";

import { useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Download,
  Code2,
  Send,
  Loader2,
} from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/social";
import { contactInfo } from "@/lib/data";
import { SectionHeader } from "@/components/shared/section-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MagneticButton } from "@/components/shared/magnetic-button";

const socialLinks = [
  { icon: Mail, label: "Email", href: `mailto:${contactInfo.email}`, value: contactInfo.email },
  { icon: Phone, label: "Phone", href: `tel:${contactInfo.phone.replace(/\s/g, "")}`, value: contactInfo.phone },
  { icon: LinkedInIcon, label: "LinkedIn", href: contactInfo.linkedin, value: "LinkedIn Profile" },
  { icon: GitHubIcon, label: "GitHub", href: contactInfo.github, value: "GitHub Profile" },
];

export function Contact() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus("error");
      setLoading(false);
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.get("name"),
          from_email: formData.get("email"),
          message: formData.get("message"),
        },
        publicKey,
      );
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Contact" subtitle="Let's build something together" />

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {socialLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.label === "Email" || link.label === "Phone" ? undefined : "_blank"}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-2xl border border-slate-200/60 dark:border-slate-700/60 bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <link.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{link.label}</p>
                  <p className="font-medium">{link.value}</p>
                </div>
              </motion.a>
            ))}

            <div className="flex flex-wrap gap-3 pt-4">
              <MagneticButton
                size="sm"
                onClick={() => window.open(contactInfo.resumeUrl, "_blank")}
              >
                <Download className="h-4 w-4" />
                Resume
              </MagneticButton>
              <MagneticButton
                variant="outline"
                size="sm"
                onClick={() => window.open(contactInfo.portfolioRepo, "_blank")}
              >
                <Code2 className="h-4 w-4" />
                Portfolio Source
              </MagneticButton>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-slate-200/60 dark:border-slate-700/60 bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl p-8 shadow-xl space-y-5"
            >
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" placeholder="Your name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message..."
                  required
                />
              </div>

              {status === "success" && (
                <p className="text-sm text-emerald-600 dark:text-emerald-400">
                  Message sent successfully!
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-red-600 dark:text-red-400">
                  Failed to send. Configure EmailJS env variables or try emailing directly.
                </p>
              )}

              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Send className="h-4 w-4" />
                )}
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
