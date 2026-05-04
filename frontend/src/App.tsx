import React, { useState, useEffect } from "react";
import SemiconductorCanvas from "./SemiconductorCanvas";
import { Routes, Route, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { 
  Cpu, Truck, Star, Zap, Clock, Settings, 
  Battery, Wrench, Plug, Diamond, Activity, 
  Wifi, Mail, Phone 
} from "lucide-react";
import { motion, Variants } from "framer-motion";
import Lenis from "lenis";

import Services from "./Services";
import FAQ from "./Faq";
import Linecard from "./Linecard";
import Quality from "./Quality";

const services = [
  { 
    title: "Faster Shipping", 
    desc: "Optimized logistics for rapid delivery worldwide.",
    icon: <Truck size={32} />
  },
  { 
    title: "5 Star Services", 
    desc: "Top-rated support and dedicated account management.",
    icon: <Star size={32} />
  },
  { 
    title: "Instant Delivery", 
    desc: "Automated processing for immediate dispatch.",
    icon: <Zap size={32} />
  },
  { 
    title: "24/7 Support", 
    desc: "Round-the-clock technical and sales assistance.",
    icon: <Clock size={32} />
  }
];

const categories = [
  { name: "Automation & Control", icon: <Settings size={28} /> },
  { name: "Integrated Circuits (ICs)", icon: <Cpu size={28} /> },
  { name: "Passive Components", icon: <Battery size={28} /> },
  { name: "Connectors", icon: <Plug size={28} /> },
  { name: "Power Supply", icon: <Zap size={28} /> },
  { name: "Wires & Cables", icon: <Activity size={28} /> },
  { name: "Fans & Blowers", icon: <Wifi size={28} /> },
  { name: "Switches", icon: <Wrench size={28} /> },
  { name: "LED & Sensors", icon: <Diamond size={28} /> },
];

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 20 } }
};

const scaleUpVariant: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100, damping: 20 } }
};

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
    });
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <div className="app-root">
      <SemiconductorCanvas />
      <div style={{ position: "relative", zIndex: 1 }}>
        <header className="header">
          <div className="header-top">
            <Link to="/" style={{ textDecoration: 'none' }}>
              <h1>Reva <span>Electronics</span></h1>
            </Link>
            <div
              className={`hamburger ${isMenuOpen ? 'open' : ''}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          {/* Navigation Menu */}
          <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
            <Link to="/">Home</Link>
            <HashLink smooth to="#contact">Contact Us</HashLink>
            <HashLink smooth to="/#rfq">Submit RFQ</HashLink>
            <Link to="/quality">Quality</Link>
            <Link to="/services">Services</Link>
            <Link to="/linecard">Line Card</Link>
            <Link to="/Faq">FAQs</Link>
          </nav>
        </header>

        {/* Main Content Routing */}
        <Routes>
          <Route path="/" element={
            <>
              {/* Home Page Hero */}
              <motion.section 
                className="hero-section"
                variants={staggerContainer}
                initial="hidden"
                animate="show"
              >
                <motion.div variants={fadeUpVariant} className="hero-badge">
                  <Cpu size={16} />
                  Premier Electronic Component Distributor
                </motion.div>
                <motion.h2 variants={fadeUpVariant}>Powering Innovation Through <br /><span>Precision Components</span></motion.h2>
                <motion.p variants={fadeUpVariant}>Reva Electronics LLP delivers cutting-edge supply chain solutions. Gain access to a worldwide network of hard-to-find, obsolete, and high-demand electronic components with unparalleled quality assurance.</motion.p>
                <motion.div variants={fadeUpVariant} className="hero-actions">
                  <HashLink smooth to="#rfq" className="btn-primary">Request Quote</HashLink>
                  <Link to="/linecard" className="btn-ghost">View Line Card</Link>
                </motion.div>
              </motion.section>

              {/* Service Highlights */}
              <motion.section 
                className="services-highlights"
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
              >
                {services.map((service, index) => (
                  <motion.div key={index} variants={fadeUpVariant} className="glass-card">
                    <div className="service-icon">{service.icon}</div>
                    <h3>{service.title}</h3>
                    <p>{service.desc}</p>
                  </motion.div>
                ))}
              </motion.section>

              {/* Categories */}
              <motion.section 
                className="categories-section"
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
              >
                <motion.h2 variants={fadeUpVariant} className="section-heading">Browse by Category</motion.h2>
                <motion.p variants={fadeUpVariant} className="section-subheading">Explore our comprehensive range of authentic, verified components sourced from global industry leaders.</motion.p>
                <motion.div variants={staggerContainer} className="category-grid">
                  {categories.map((category, index) => (
                    <motion.div key={index} variants={scaleUpVariant} className="category-card">
                      {category.icon}
                      <h3>{category.name}</h3>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.section>

              {/* RFQ Form */}
              <motion.section 
                className="rfq-section glass-card" id="rfq"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 80, damping: 20 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <h2 className="section-heading">Request for Quote</h2>
                <p className="section-subheading" style={{ marginBottom: "2rem" }}>Get a competitive quote within 24 hours.</p>
                
                <form className="rfq-form">
                  <div className="input-group">
                    <label>Full Name</label>
                    <input type="text" placeholder="John Doe" />
                  </div>
                  <div className="input-group">
                    <label>Business Email</label>
                    <input type="email" placeholder="john@company.com" />
                  </div>
                  <div className="input-group">
                    <label>Company</label>
                    <input type="text" placeholder="Acme Corp" />
                  </div>
                  <div className="input-group">
                    <label>Requirements & Delivery Notes</label>
                    <textarea placeholder="Please specify component numbers, quantities, and target delivery windows..." />
                  </div>
                  <button type="submit" className="btn-emerald">Submit Request for Quote</button>
                </form>
              </motion.section>
            </>
          } />

          <Route path="/services" element={<Services />} />
          <Route path="/Faq" element={<FAQ />} />
          <Route path="/linecard" element={<Linecard />} />
          <Route path="/quality" element={<Quality />} />
        </Routes>

        {/* 2-Column Footer */}
        <footer className="contact-footer" id="contact">
          <div className="footer-content">
            <div className="footer-left">
              <h2>Reva <span>Electronics</span></h2>
              <div className="contact-item">
                <Mail size={20} />
                <span>info@revaelectronics.com</span>
              </div>
              <div className="contact-item">
                <Phone size={20} />
                <span>+1 (234) 567-890</span>
              </div>
            </div>
            
            <div className="footer-right">
              <h3>Global Sourcing. <br/>Delivered Locally.</h3>
              <p>Trusted partner in electronic component distribution.</p>
            </div>
          </div>

          <div className="footer-bottom">
            © 2026 Reva Electronics LLP. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
