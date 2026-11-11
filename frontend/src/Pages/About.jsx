

const About = () => {
  return (
    <>
      <style>{`
        .about-page {
          font-family: Arial, sans-serif;
          color: #333;
          margin: 0;
          background: #fff;
        }

        .about-hero {
          background: linear-gradient(135deg, #172554, #2563eb);
          color: white;
          text-align: center;
          padding: 75px 20px;
        }

        .about-hero h1 {
          font-size: 42px;
          margin-bottom: 15px;
        }

        .about-hero p {
          font-size: 17px;
          max-width: 650px;
          margin: auto;
          line-height: 1.7;
        }

        .about-container {
          max-width: 1100px;
          margin: auto;
          padding: 55px 20px;
        }

        .about-intro {
          text-align: center;
          margin-bottom: 45px;
        }

        .about-intro h2,
        .about-card h2 {
          color: #1e40af;
          font-size: 28px;
          margin-bottom: 15px;
        }

        .about-intro p {
          max-width: 800px;
          margin: auto;
          line-height: 1.8;
          color: #4b5563;
        }

        .about-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 25px;
          margin-bottom: 50px;
        }

        .about-card {
          background: #f8fafc;
          padding: 30px;
          border-radius: 12px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.06);
        }

        .about-card p {
          color: #666;
          line-height: 1.8;
        }

        .why-section {
          text-align: center;
        }

        .why-section h2 {
          font-size: 30px;
          color: #1e40af;
          margin-bottom: 30px;
        }

        .why-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .why-item {
          padding: 25px 18px;
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 12px;
        }

        .why-item span {
          font-size: 35px;
        }

        .why-item h3 {
          color: #1e40af;
          margin: 15px 0 10px;
        }

        .why-item p {
          color: #666;
          line-height: 1.6;
          font-size: 14px;
        }

        .about-cta {
          background: #eff6ff;
          padding: 45px 20px;
          text-align: center;
          margin-top: 50px;
          border-radius: 12px;
        }

        .about-cta h2 {
          color: #1e40af;
          margin-bottom: 12px;
        }

        .about-cta p {
          color: #555;
          margin-bottom: 20px;
        }

        .about-cta a {
          display: inline-block;
          background: #2563eb;
          color: white;
          padding: 12px 28px;
          border-radius: 6px;
          text-decoration: none;
          font-weight: bold;
        }

        .about-cta a:hover {
          background: #1d4ed8;
        }

        @media (max-width: 768px) {
          .about-hero h1 {
            font-size: 32px;
          }

          .about-grid,
          .why-grid {
            grid-template-columns: 1fr;
          }

          .about-container {
            padding: 35px 16px;
          }
        }
      `}</style>

      <div className="about-page">

        {/* Hero Section */}
        <section className="about-hero">
          <h1>About ShopNest</h1>
          <p>
            Your one-stop destination for quality products,
            amazing deals, and a seamless online shopping experience.
          </p>
        </section>

        <div className="about-container">

          {/* Introduction */}
          <section className="about-intro">
            <h2>Who We Are</h2>
            <p>
              Welcome to ShopNest! We believe shopping should be simple,
              convenient, and enjoyable. Our platform brings together a
              wide range of products to help customers find everything
              they need in one place. We are committed to delivering
              quality products, competitive prices, and excellent
              customer service.
            </p>
          </section>

          {/* Mission and Vision */}
          <section className="about-grid">

            <div className="about-card">
              <h2>Our Mission</h2>
              <p>
                Our mission is to make online shopping accessible and
                convenient for everyone by offering quality products,
                affordable prices, secure payments, and reliable
                customer support.
              </p>
            </div>

            <div className="about-card">
              <h2>Our Vision</h2>
              <p>
                Our vision is to become a trusted online shopping
                destination where customers can discover great
                products, enjoy a smooth shopping journey, and shop
                with complete confidence.
              </p>
            </div>

          </section>

          {/* Why Choose Us */}
          <section className="why-section">
            <h2>Why Choose ShopNest?</h2>

            <div className="why-grid">

              <div className="why-item">
                <span>🛍️</span>
                <h3>Quality Products</h3>
                <p>
                  Explore a wide selection of carefully listed products
                  for your everyday needs.
                </p>
              </div>

              <div className="why-item">
                <span>💰</span>
                <h3>Affordable Prices</h3>
                <p>
                  Enjoy competitive prices and great value with every
                  purchase.
                </p>
              </div>

              <div className="why-item">
                <span>🔒</span>
                <h3>Secure Shopping</h3>
                <p>
                  Shop confidently with a focus on secure transactions
                  and customer privacy.
                </p>
              </div>

              <div className="why-item">
                <span>🚚</span>
                <h3>Reliable Delivery</h3>
                <p>
                  We aim to make your shopping experience convenient
                  from checkout to delivery.
                </p>
              </div>

              <div className="why-item">
                <span>💬</span>
                <h3>Customer Support</h3>
                <p>
                  We value our customers and strive to provide helpful
                  support whenever needed.
                </p>
              </div>

              <div className="why-item">
                <span>❤️</span>
                <h3>Customer First</h3>
                <p>
                  Your satisfaction is our priority, and we continuously
                  work to improve your shopping experience.
                </p>
              </div>

            </div>
          </section>

          {/* Call to Action */}
          <section className="about-cta">
            <h2>Happy Shopping with ShopNest!</h2>
            <p>
              Discover your favorite products and enjoy a better way
              to shop online.
            </p>
            <a href="/products">Explore Products</a>
          </section>

        </div>
      </div>
    </>
  );
};

export default About;