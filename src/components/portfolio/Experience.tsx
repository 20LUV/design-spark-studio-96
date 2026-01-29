import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    id: 1,
    role: "Senior Product Designer",
    company: "TechFlow Inc.",
    period: "2022 — Present",
    description:
      "Leading design for the core product team, establishing design systems, and mentoring junior designers. Shipped redesign that increased user retention by 32%.",
    highlights: ["Design Leadership", "Design Systems", "User Research"],
  },
  {
    id: 2,
    role: "UI/UX Designer",
    company: "Creative Studio Co.",
    period: "2020 — 2022",
    description:
      "Designed end-to-end experiences for B2B SaaS products. Led user research initiatives and created interactive prototypes for stakeholder presentations.",
    highlights: ["B2B SaaS", "Prototyping", "Client Workshops"],
  },
  {
    id: 3,
    role: "Junior Designer",
    company: "Digital Agency XYZ",
    period: "2019 — 2020",
    description:
      "Started my design journey working on diverse client projects from e-commerce to mobile apps. Built strong foundation in visual design and UX principles.",
    highlights: ["Visual Design", "Responsive Web", "Mobile Apps"],
  },
];

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" ref={ref}>
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-label mb-4 inline-block">Journey</span>
          <h2 className="heading-section">Work Experience</h2>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className={`relative pl-8 md:pl-0 pb-12 last:pb-0 ${
                index % 2 === 0
                  ? "md:pr-[calc(50%+2rem)] md:text-right"
                  : "md:pl-[calc(50%+2rem)]"
              }`}
            >
              {/* Dot */}
              <div
                className={`absolute left-0 md:left-1/2 w-3 h-3 rounded-full bg-primary md:-translate-x-1/2 top-1`}
              />

              {/* Card */}
              <div className="bg-card p-6 rounded-xl shadow-soft">
                <span className="text-sm font-medium text-primary">
                  {exp.period}
                </span>
                <h3 className="heading-card mt-1">{exp.role}</h3>
                <p className="text-muted-foreground font-medium mb-3">
                  {exp.company}
                </p>
                <p className="text-body text-sm mb-4">{exp.description}</p>

                {/* Highlights */}
                <div
                  className={`flex flex-wrap gap-2 ${
                    index % 2 === 0 ? "md:justify-end" : ""
                  }`}
                >
                  {exp.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="px-3 py-1 text-xs font-medium bg-accent text-accent-foreground rounded-full"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
