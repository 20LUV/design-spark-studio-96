import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const designSkills = [
  "UI Design",
  "UX Research",
  "Wireframing",
  "Prototyping",
  "HTML & CSS",
  "Bootstrap",
  "User Flows",
  "Responsive Design",
];

const tools = [
  { name: "Figma", icon: "🎨" },
  { name: "Adobe XD", icon: "💜" },
  { name: "Photoshop", icon: "📷" },
  { name: "Illustrator", icon: "✏️" },
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" ref={ref}>
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-label mb-4 inline-block">Expertise</span>
          <h2 className="heading-section">Skills & Tools</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Design Skills */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <h3 className="heading-card mb-6">Design Skills</h3>
            <div className="flex flex-wrap gap-3">
              {designSkills.map((skill) => (
                <motion.span key={skill} variants={itemVariants} className="skill-pill">
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <h3 className="heading-card mb-6">Tools I Use</h3>
            <div className="grid grid-cols-2 gap-4">
              {tools.map((tool) => (
                <motion.div
                  key={tool.name}
                  variants={itemVariants}
                  className="flex items-center gap-3 p-4 rounded-xl bg-card shadow-soft card-hover"
                >
                  <span className="text-2xl">{tool.icon}</span>
                  <span className="font-medium text-foreground">{tool.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
