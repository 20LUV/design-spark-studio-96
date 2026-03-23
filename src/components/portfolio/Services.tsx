import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, LayoutDashboard, FileText, Smartphone, Palette, Image } from "lucide-react";

const services = [
  { title: "Website Design & Development", icon: Globe, description: "Modern, responsive websites tailored to your brand and goals." },
  { title: "CRM Systems", icon: LayoutDashboard, description: "Custom CRM solutions to streamline your business operations." },
  { title: "Brochures", icon: FileText, description: "Eye-catching brochure designs that communicate your message effectively." },
  { title: "App Design", icon: Smartphone, description: "Intuitive mobile and web app interfaces with great user experience." },
  { title: "Brand & Logo Design", icon: Palette, description: "Memorable brand identities and logos that stand out." },
  { title: "Flyers", icon: Image, description: "Creative flyer designs for events, promotions, and marketing." },
];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="text-label mb-4 inline-block">Services</span>
          <h2 className="heading-section">What Work I Can Do For You</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-card shadow-soft card-hover text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mx-auto mb-4">
                <service.icon className="w-7 h-7 text-accent-foreground" />
              </div>
              <h3 className="heading-card mb-2">{service.title}</h3>
              <p className="text-body text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
