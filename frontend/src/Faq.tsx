import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { Plus, Minus, CheckCircle2 } from "lucide-react";

const faqData = [
  { q: "What is Reva Electronics LLP?", a: "We are an independent distributor of electronic components, specialising in sourcing from global markets. We help businesses find hard-to-find and obsolete parts with strict quality assurance." },
  { q: "What kind of components do you supply?", a: "We source a wide range of electronic components, including ICs, passive components, connectors, power supplies, wires and cables, fans and blowers, switches, LEDs, sensors, and automation & control products." },
  { q: "Do you provide quality assurance?", a: "Yes, every component undergoes strict inspection and verification to eliminate counterfeit risks and ensure reliability." },
  { q: "How quickly can I expect delivery?", a: "We offer fast shipping and aim for on-time delivery. Standard shipping timelines apply based on location, and we also offer expedited options for urgent requirements." },
  { q: "Can I request samples for testing?", a: "Yes, we offer component samples for testing and evaluation purposes. Please contact our sales team with your requirements." },
  { q: "What industries do you serve?", a: "We serve various industries including automotive, industrial automation, consumer electronics, telecom, aerospace & defense, and more." },
  { q: "Do you provide technical documentation?", a: "Yes, we provide datasheets and technical documentation for all our components. Please contact our sales team with your requirements." },
  { q: "How do I place an order?", a: "You can contact us through our website, email, or phone. Our sales team will assist you with the ordering process." },
  { q: "Do you offer component sourcing services?", a: "Yes, we provide global sourcing services for electronic components, including hard-to-find and obsolete parts." },
  { q: "What is your return policy?", a: "Please refer to our Returns Policy page for detailed information on returns and refunds." },
  { q: "Do you offer custom component solutions?", a: "Yes, we provide custom component solutions tailored to your specific requirements. Please contact our sales team with your requirements." },
  { q: "How do I contact your sales team?", a: "You can contact our sales team through our website, email, or phone. Our sales team will assist you with your requirements." },
  { q: "Do you provide component testing services?", a: "Yes, we provide component testing services to ensure quality and reliability. Please contact our sales team with your requirements." },
  { q: "How do I request a quote?", a: "You can request a quote through our website, email, or phone. Our sales team will assist you with your requirements." },
  { q: "Do you provide technical support?", a: "Yes, our team provides technical assistance for component selection and integration. Please contact us with your technical requirements." },
  { q: "What is your typical order processing time?", a: "Our typical order processing time is 24-48 hours, depending on the complexity of the order and availability of components. For urgent requirements, we offer expedited processing and shipping options." },
  { q: "Do you offer volume discounts?", a: "Yes, we provide competitive pricing and volume discounts for bulk orders. Please contact our sales team with your specific requirements to get a customized quote." },
  { q: "Are your components new or refurbished?", a: "We primarily supply new and unused components sourced from authorized manufacturers and distributors. For obsolete or hard-to-find parts, we may offer refurbished options subject to strict quality verification." },
  { q: "Can I track my order?", a: "Yes, once your order is shipped, we provide tracking information so you can monitor its delivery status. You will receive email notifications with tracking details." },
  { q: "Do you provide component kitting services?", a: "Yes, we offer custom kitting services where we assemble and package components according to your specific requirements for easier inventory management and production." },
  { q: "How do you handle component obsolescence?", a: "For obsolete components, we leverage our global network to source replacements or recommend suitable alternatives that meet your technical specifications and quality standards." },
  { q: "Do you offer consignment inventory programs?", a: "Yes, we provide consignment inventory solutions to help you manage stock levels and reduce carrying costs. Please contact our sales team to discuss your requirements." },
  { q: "What is your typical lead time for sourcing components?", a: "Lead times vary depending on component availability and destination. Standard lead times range from 1-4 weeks, with expedited options available for urgent requirements." },
  { q: "Do you provide component sourcing services?", a: "Yes, we provide global sourcing services for electronic components, including hard-to-find and obsolete parts." },
];

const Faq = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="services-page" style={{ paddingBottom: "4rem" }}>
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <div className="hero-badge" style={{ display: "inline-block", marginBottom: "1rem" }}>Support & Info</div>
              <h2 className="section-title" style={{ margin: 0, fontSize: "3.5rem" }}>Frequently Asked <span>Questions</span></h2>
              <p style={{ color: "var(--text-muted)", maxWidth: "600px", margin: "1rem auto 0", fontSize: "1.1rem" }}>
                Everything you need to know about our services, sourcing, and quality assurance.
              </p>
            </div>

            <div style={{ maxWidth: "800px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "8rem" }}>
                {faqData.map((faq, index) => (
                    <div 
                        key={index} 
                        className="glass-card" 
                        style={{ padding: "1.5rem 2rem", cursor: "pointer", transition: "all 0.3s ease" }}
                        onClick={() => toggleFaq(index)}
                    >
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <h3 style={{ margin: 0, fontSize: "1.2rem", color: openIndex === index ? "var(--accent-emerald)" : "var(--text-main)", transition: "color 0.3s ease", paddingRight: "2rem" }}>
                                {faq.q}
                            </h3>
                            <div style={{ flexShrink: 0 }}>
                                {openIndex === index ? <Minus size={20} color="var(--accent-emerald)" /> : <Plus size={20} color="var(--text-muted)" />}
                            </div>
                        </div>
                        {openIndex === index && (
                            <div style={{ marginTop: "1rem", color: "var(--text-muted)", fontSize: "1.05rem", lineHeight: 1.6, borderTop: "1px solid var(--border-glass)", paddingTop: "1rem" }}>
                                {faq.a}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* CTA Block */}
            <div className="glass-card" style={{ textAlign: "center", marginTop: "6rem", padding: "5rem 2rem", background: "rgba(16, 185, 129, 0.03)", borderColor: "rgba(16, 185, 129, 0.2)" }}>
              <h2 style={{ fontSize: "3rem", marginBottom: "1rem", color: "var(--text-main)", letterSpacing: "-0.03em" }}>Still have questions?</h2>
              <p style={{ color: "var(--text-muted)", fontSize: "1.2rem", marginBottom: "3rem" }}>
                Our dedicated support team is ready to help you with your specific supply chain needs.
              </p>
              <HashLink smooth to="#contact" className="btn-ghost" style={{ display: "inline-block", textDecoration: "none", fontSize: "1.2rem", padding: "1.2rem 3rem", marginRight: "1rem" }}>
                Contact Us
              </HashLink>
              <HashLink smooth to="/#rfq" className="btn-emerald" style={{ display: "inline-block", textDecoration: "none", fontSize: "1.2rem", padding: "1.2rem 3rem" }}>
                Get Started today
              </HashLink>
            </div>
        </section>
    );
};

export default Faq;
