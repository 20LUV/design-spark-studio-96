import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const socialLinks = [
  {
    name: "Email",
    href: "mailto:luvtakkar@gmail.com",
    icon: Mail,
    label: "luvtakkar@gmail.com",
  },
  {
    name: "Phone",
    href: "tel:+918288842142",
    icon: Phone,
    label: "+91 8288842142",
  },
];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="bg-muted/50" ref={ref}>
      <div className="section-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <span className="text-label mb-4 inline-block">Get in Touch</span>

          <h2 className="heading-section mb-6">
            Let's design something
            <br />
            <span className="gradient-text">meaningful together</span>
          </h2>

          <p className="text-body mb-10">
            I'm always excited to collaborate on interesting projects. Whether
            you have a clear vision or just an idea, let's talk about how we can
            bring it to life.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            <Button variant="hero" size="xl" asChild>
              <a href="mailto:luvtakkar@gmail.com">
                Start a Conversation
                <ArrowUpRight className="w-5 h-5" />
              </a>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12"
          >
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
              >
                <link.icon className="w-5 h-5" />
                <span className="text-sm font-medium link-underline">
                  {link.label}
                </span>
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
