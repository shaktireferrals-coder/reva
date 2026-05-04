import React from "react";
import { HashLink } from "react-router-hash-link";
import { Globe, ShieldCheck, TrendingUp, CheckCircle2 } from "lucide-react";
import { motion, Variants } from "framer-motion";

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

const Services = () => {
    return (
        <motion.section 
          className="services-page" style={{ paddingBottom: "4rem" }}
          initial="hidden" animate="show" variants={staggerContainer}
        >
            <div style={{ textAlign: "center", marginBottom: "6rem" }}>
              <motion.div variants={fadeUpVariant} className="hero-badge" style={{ display: "inline-block", marginBottom: "1rem" }}>Our Expertise</motion.div>
              <motion.h2 variants={fadeUpVariant} className="section-title" style={{ margin: 0, fontSize: "4rem", letterSpacing: "-0.03em" }}>What We <span>Do</span></motion.h2>
              <motion.p variants={fadeUpVariant} style={{ color: "var(--text-muted)", maxWidth: "600px", margin: "1.5rem auto 0", fontSize: "1.2rem" }}>
                Delivering end-to-end electronic component distribution solutions with unmatched reliability.
              </motion.p>
            </div>

            <motion.div 
              className="category-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem", marginBottom: "4rem" }}
              variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}
            >
                <motion.div variants={fadeUpVariant} className="glass-card">
                    <Globe size={40} color="var(--accent-blue)" style={{ marginBottom: "1.5rem" }} />
                    <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem", color: "var(--text-main)" }}>Global Component Sourcing</h3>
                    <p style={{ color: "var(--text-muted)", fontSize: "1.05rem" }}>We source electronic components from a worldwide network, including hard-to-find and obsolete parts.</p>
                </motion.div>
                <motion.div variants={fadeUpVariant} className="glass-card">
                    <ShieldCheck size={40} color="var(--accent-blue)" style={{ marginBottom: "1.5rem" }} />
                    <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem", color: "var(--text-main)" }}>Quality Assurance</h3>
                    <p style={{ color: "var(--text-muted)", fontSize: "1.05rem" }}>Every component goes through strict inspection and verification to eliminate counterfeit risks.</p>
                </motion.div>
                <motion.div variants={fadeUpVariant} className="glass-card">
                    <TrendingUp size={40} color="var(--accent-blue)" style={{ marginBottom: "1.5rem" }} />
                    <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem", color: "var(--text-main)" }}>Supply Chain Support</h3>
                    <p style={{ color: "var(--text-muted)", fontSize: "1.05rem" }}>We help businesses manage shortages, reduce downtime, and maintain continuity.</p>
                </motion.div>
            </motion.div>

            <motion.div 
              className="services-bottom-row" style={{ marginTop: "8rem", gap: "6rem", display: "grid", gridTemplateColumns: "1fr 1fr", alignItems: "start", marginBottom: "8rem" }}
              variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}
            >
                <div className="reasons-section">
                    <motion.h2 variants={fadeUpVariant} style={{ fontSize: "2.5rem", marginBottom: "3.5rem", color: "var(--text-main)", letterSpacing: "-0.02em" }}>Why Choose Reva Electronics LLP</motion.h2>
                    <motion.div variants={staggerContainer} style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
                        {[
                            "Fast response within 24 hours",
                            "Competitive global pricing",
                            "Expertise in shortage & obsolete parts",
                            "Dedicated support for every inquiry",
                            "Flexible sourcing solutions"
                        ].map((reason, i) => (
                            <motion.div key={i} variants={fadeUpVariant} style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
                                <div style={{ background: "var(--accent-emerald)", borderRadius: "50%", width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: "0 0 15px rgba(16, 185, 129, 0.4)" }}>
                                    <CheckCircle2 color="#fff" size={24} />
                                </div>
                                <span style={{ color: "#F3F4F6", fontSize: "1.2rem", fontWeight: 500 }}>{reason}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                <div className="industries-section">
                    <motion.h2 variants={fadeUpVariant} style={{ fontSize: "2.5rem", marginBottom: "3.5rem", color: "var(--text-main)", letterSpacing: "-0.02em" }}>Industries Served</motion.h2>
                    <motion.div variants={staggerContainer} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                        {[
                            "Automotive",
                            "Industrial Automation",
                            "Consumer Electronics",
                            "Telecom",
                            "Aerospace & Defense"
                        ].map((industry, i) => (
                            <motion.div key={i} variants={fadeUpVariant} className="glass-card" style={{ padding: "1.8rem 1rem", textAlign: "center", borderRadius: "16px", cursor: "default", transition: "transform 0.2s ease" }}>
                                <span style={{ color: "var(--text-main)", fontSize: "1.1rem", fontWeight: 600 }}>{industry}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.div>

            <motion.div 
              className="glass-card" style={{ textAlign: "center", marginTop: "6rem", padding: "5rem 2rem", background: "rgba(16, 185, 129, 0.03)", borderColor: "rgba(16, 185, 129, 0.2)" }}
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ type: "spring", stiffness: 80, damping: 20 }} viewport={{ once: true }}
            >
              <h2 style={{ fontSize: "3rem", marginBottom: "1rem", color: "var(--text-main)", letterSpacing: "-0.03em" }}>Ready to streamline your supply chain?</h2>
              <p style={{ color: "var(--text-muted)", fontSize: "1.2rem", marginBottom: "3rem" }}>
                Get access to millions of electronic components with guaranteed authenticity.
              </p>
              <HashLink smooth to="/#rfq" className="btn-emerald" style={{ display: "inline-block", textDecoration: "none", fontSize: "1.2rem", padding: "1.2rem 3rem" }}>
                Get Started today
              </HashLink>
            </motion.div>
        </motion.section>
    );
};

export default Services;
