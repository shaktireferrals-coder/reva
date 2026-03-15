import React from "react";

const App = () => {
  console.log("App component is rendering");
  return (
    <div className="app-root">
      {/* ...existing code... */}
        <header className="header">
          <h1>Reva Electronics</h1>
          <p>The deepest source for electronic components</p>
        </header>
        {/* Service Highlights */}
        <section className="services">
          <div className="service-card">Faster Shipping</div>
          <div className="service-card">5 Star Services</div>
          <div className="service-card">Instant Delivery</div>
          <div className="service-card">24/7 Support</div>
        </section>
        {/* Featured Products */}
        <section className="products">
          <h2>Featured Products</h2>
          <div className="product-list">
            <div className="product-card">RP120Q-4812SRW/N-HC</div>
            <div className="product-card">LCA10-14F-L</div>
            <div className="product-card">MBN25SS1W01</div>
            <div className="product-card">MT44K32M36RB-093E:A</div>
          </div>
        </section>
        {/* Categories */}
        <section className="categories">
          <h2>Browse by Category</h2>
          <div className="category-list">
            <div className="category-card">Automation & Control</div>
            <div className="category-card">Integrated Circuits (ICs)</div>
            <div className="category-card">Passive Components</div>
            <div className="category-card">Connectors</div>
            <div className="category-card">Power Supply</div>
            <div className="category-card">Wires & Cables</div>
            <div className="category-card">Fans & Blowers</div>
            <div className="category-card">Switches</div>
            <div className="category-card">LED & Sensors</div>
          </div>
        </section>
        {/* RFQ Form */}
        <section className="rfq">
          <h2>Request for Quote</h2>
          <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Business Email" />
            <input type="text" placeholder="Company" />
            <textarea placeholder="Target delivery window / notes" />
            <button type="submit">Submit RFQ</button>
          </form>
        </section>
        {/* Contact */}
        <footer className="contact">
          <h2>Contact</h2>
          <p>Email: sales@reva-electronics.com</p>
          <p>Phone: +91-00000-00000</p>
          <p>Serving OEMs, EMS and design houses worldwide</p>
        </footer>
    </div>
  );
};

export default App;
