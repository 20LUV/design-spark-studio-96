import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import caseStudyCorecart from "@/assets/case-study-corecart.png";
import caseStudyCrms from "@/assets/case-study-crms.png";
import caseStudyStorefront from "@/assets/case-study-storefront.png";
import caseStudyMemoneet from "@/assets/case-study-memoneet.png";
import caseStudyGrocersGoing from "@/assets/case-study-grocers-going.png";

const caseStudies = [
  {
    id: 1,
    title: "Memoneet – AI Learning Assistant",
    category: "Mobile App · AI UX · EdTech",
    description:
      "Memoneet is an AI-powered learning assistant designed for students, enabling them to ask questions, explore concepts, and learn efficiently through conversational AI.",
    image: caseStudyMemoneet,
    tags: ["Student-friendly UI", "AI Q&A Flow", "Personalized UX"],
    figmaUrl: "https://www.figma.com/design/7hEKTLke8N8JlINI6cY7cn/Memoneet?node-id=0-1&p=f&t=QqurO9iBG97ToELm-0",
  },
  {
    id: 2,
    title: "CRMS – Customer Relationship Management",
    category: "Enterprise Web · Dashboard UX",
    description:
      "Designed an enterprise CRM platform with analytics dashboard, lead management flows, and a comprehensive design system.",
    image: caseStudyCrms,
    tags: ["Analytics Dashboard", "Lead Management", "Design System"],
    figmaUrl: "https://www.figma.com/design/sZwFTIoq5RFoKftbacKZ4r/CRM?t=QqurO9iBG97ToELm-0",
  },
  {
    id: 3,
    title: "CoreCart – Grocery Shopping App",
    category: "Mobile App · UX · UI",
    description:
      "A grocery shopping mobile application with user journeys, cart & checkout UX, and high-fidelity Figma designs.",
    image: caseStudyCorecart,
    tags: ["User Journeys", "Cart & Checkout UX", "High-fidelity Designs"],
    figmaUrl: "https://www.figma.com/design/9FugscFLAleakrapGxSQqQ/Galamine-Corecart-Project?t=QqurO9iBG97ToELm-0",
  },
  {
    id: 4,
    title: "CRMS Storefront",
    category: "Web · E-commerce UX",
    description:
      "E-commerce storefront design featuring product listing, filters, checkout experience, and responsive UI.",
    image: caseStudyStorefront,
    tags: ["Product Listing", "Checkout Experience", "Responsive UI"],
    figmaUrl: "https://www.figma.com/design/sZwFTIoq5RFoKftbacKZ4r/CRM?t=QqurO9iBG97ToELm-0",
  },
  {
    id: 5,
    title: "Grocers Going – Grocery Website",
    category: "Web · E-commerce · Grocery",
    description:
      "A modern grocery delivery website design with fresh product browsing, easy ordering flow, and a clean green-themed UI.",
    image: caseStudyGrocersGoing,
    tags: ["E-commerce", "Grocery Delivery", "Responsive Web"],
    figmaUrl: "https://www.figma.com/design/NuxQADOsT0ljEA4tmAx0yL/Grocers-Going?node-id=0-1&p=f&t=BIcTlXXddNk9VsE2-0",
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
          <Button variant="ghost" className="group/btn -ml-4" asChild>
            <a href={study.figmaUrl} target="_blank" rel="noopener noreferrer">
              View in Figma
              <ExternalLink className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
            </a>
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
          <h2 className="heading-section mb-4">Case Studies</h2>
          <p className="text-body max-w-2xl mx-auto">
            A selection of projects where I tackled complex problems and
            delivered meaningful results through user-centered design.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <CaseStudyCard key={study.id} study={study} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
