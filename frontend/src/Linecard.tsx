import React from "react";

const manufacturers = [
  { category: "Semiconductors", brands: ["Texas Instruments", "Analog Devices", "Microchip", "NXP", "STMicroelectronics", "Infineon", "ON Semiconductor"] },
  { category: "Passive Components", brands: ["Murata", "TDK", "Yageo", "Vishay", "KEMET", "Panasonic", "Samsung Electro-Mechanics"] },
  { category: "Connectors & Cables", brands: ["TE Connectivity", "Molex", "Amphenol", "JST", "Hirose", "Phoenix Contact", "Samtec"] },
  { category: "Power & Relays", brands: ["Omron", "Mean Well", "CUI Inc", "XP Power", "Panasonic", "TDK-Lambda", "Vicor"] },
  { category: "Optoelectronics", brands: ["Osram", "Cree", "Lumileds", "Rohm", "Lite-On", "Kingbright", "Everlight"] },
  { category: "Electromechanical", brands: ["C&K", "Nidec", "E-Switch", "Alps Alpine", "Grayhill", "Honeywell", "Bourns"] }
];

const Linecard = () => {
    return (
        <section className="services-page" style={{ paddingBottom: "4rem" }}>
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <div className="hero-badge" style={{ display: "inline-block", marginBottom: "1rem" }}>Authorized & Independent</div>
              <h2 className="section-title" style={{ margin: 0, fontSize: "3.5rem" }}>Global <span>Line Card</span></h2>
              <p style={{ color: "var(--text-muted)", maxWidth: "600px", margin: "1rem auto 0", fontSize: "1.1rem" }}>
                We source from a trusted global network of industry-leading manufacturers. Quality assured components, delivered fast.
              </p>
            </div>

            <div className="category-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))" }}>
                {manufacturers.map((group, index) => (
                    <div key={index} className="glass-card" style={{ padding: "2.5rem" }}>
                        <h3 style={{ fontSize: "1.5rem", color: "var(--accent-emerald)", marginBottom: "1.5rem", borderBottom: "1px solid var(--border-glass)", paddingBottom: "0.5rem" }}>
                          {group.category}
                        </h3>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem" }}>
                          {group.brands.map((brand, i) => (
                            <span key={i} className="industry-pill" style={{ fontSize: "0.9rem", padding: "0.4rem 0.8rem" }}>
                              {brand}
                            </span>
                          ))}
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="glass-card" style={{ textAlign: "center", marginTop: "2rem" }}>
              <h3 style={{ color: "var(--text-main)" }}>Looking for a specific component?</h3>
              <p style={{ marginBottom: "1.5rem", color: "var(--text-muted)" }}>Our global sourcing network can find hard-to-find and obsolete parts.</p>
              <a href="/#rfq" className="btn-emerald" style={{ display: "inline-block", textDecoration: "none" }}>Submit Request for Quote</a>
            </div>
        </section>
    );
};

export default Linecard;
