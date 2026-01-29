import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import caseStudy1 from "@/assets/case-study-1.jpg";
import caseStudy2 from "@/assets/case-study-2.jpg";
import caseStudy3 from "@/assets/case-study-3.jpg";

const caseStudies = [
  {
    id: 1,
    title: "FinFlow Banking App",
    category: "Mobile App Design",
    description:
      "Redesigning the mobile banking experience to increase user engagement by 45% and reduce support tickets by 30%.",
    image: caseStudy1,
    tags: ["UX Research", "UI Design", "Prototyping"],
  },
  {
    id: 2,
    title: "Stylehaus E-Commerce",
    category: "Web Design",
    description:
      "Creating a seamless shopping experience that boosted conversion rates by 28% through simplified checkout flow.",
    image: caseStudy2,
    tags: ["User Testing", "Design System", "Responsive"],
  },
  {
    id: 3,
    title: "Mindful Wellness App",
    category: "Mobile App Design",
    description:
      "Designing a meditation app that helped users build daily habits with 89% retention rate in first month.",
    image: caseStudy3,
    tags: ["User Research", "Gamification", "Visual Design"],
  },
];

function CaseStudyCard({
  study,
  index,
}: {
  study: (typeof caseStudies)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      className="group"
    >
      <div className="bg-card rounded-2xl overflow-hidden shadow-card card-hover">
        {/* Image */}
        <div className="relative h-64 md:h-72 overflow-hidden">
          <img
            src={study.image}
            alt={study.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          <span className="text-sm font-medium text-primary">
            {study.category}
          </span>
          <h3 className="heading-card mt-2 mb-3 group-hover:text-primary transition-colors">
            {study.title}
          </h3>
          <p className="text-body text-sm mb-6">{study.description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {study.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          <Button variant="ghost" className="group/btn -ml-4">
            View Case Study
            <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
          </Button>
        </div>
      </div>
    </motion.article>
  );
}

export function CaseStudies() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="work" className="bg-muted/50" ref={ref}>
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-label mb-4 inline-block">Portfolio</span>
          <h2 className="heading-section mb-4">Featured Case Studies</h2>
          <p className="text-body max-w-2xl mx-auto">
            A selection of projects where I tackled complex problems and
            delivered meaningful results through user-centered design.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={study.id} study={study} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
