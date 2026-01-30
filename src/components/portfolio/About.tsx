import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import avatar from "@/assets/avatar.jpg";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="bg-muted/50" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl bg-primary/10 -rotate-6" />
              <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border-2 border-primary/20 rotate-3" />

              {/* Main image */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src={avatar}
                  alt="Luv Takkar - UI/UX Designer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.1 }}
              className="text-label mb-4 inline-block"
            >
              About Me
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="heading-section mb-6"
            >
              Crafting experiences
              <br />
              that people love
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="space-y-4 text-body"
            >
              <p>
                Hi, I'm Luv — a passionate UI/UX Designer with experience designing 
                web and mobile applications that balance business goals with 
                exceptional user experience.
              </p>
              <p>
                My process starts with understanding users. Through UX research, 
                wireframing, and prototyping, I create intuitive designs that 
                solve real problems. I specialize in building scalable design 
                systems and working closely with developers for pixel-perfect delivery.
              </p>
              <p>
                Skilled in Figma, Adobe XD, Illustrator, and Photoshop, I bring 
                ideas to life with attention to detail and a focus on usability.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-3 gap-6 mt-10"
            >
              {[
                { value: "5+", label: "Years Experience" },
                { value: "40+", label: "Projects Delivered" },
                { value: "15+", label: "Happy Clients" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl md:text-4xl font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
