import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-sm text-muted-foreground"
          >
            © {currentYear} Luv Takkar. Designed with ♥ and passion for great UX.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center gap-6"
          >
            <a
              href="#hero"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Back to top ↑
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
