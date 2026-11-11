const Disclaimer = () => {
  return (
    <>
      <style>{`
        .disclaimer-page {
          min-height: 70vh;
          padding: 48px 20px 64px;
          color: #1f2937;
          background: #f8fafc;
          font-family: Arial, sans-serif;
        }

        .disclaimer-container {
          max-width: 900px;
          margin: 0 auto;
        }

        .disclaimer-header {
          padding: 42px 36px;
          color: #fff;
          text-align: center;
          background: linear-gradient(135deg, #172554, #2563eb);
          border-radius: 16px;
        }

        .disclaimer-header h1 {
          margin: 0 0 12px;
          font-size: clamp(2rem, 5vw, 2.75rem);
        }

        .disclaimer-header p {
          max-width: 640px;
          margin: 0 auto;
          color: #dbeafe;
          line-height: 1.7;
        }

        .disclaimer-content {
          display: grid;
          gap: 18px;
          margin-top: 24px;
        }

        .disclaimer-section {
          padding: 24px 28px;
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          box-shadow: 0 4px 14px rgba(15, 23, 42, 0.04);
        }

        .disclaimer-section h2 {
          margin: 0 0 10px;
          color: #1e40af;
          font-size: 1.2rem;
        }

        .disclaimer-section p {
          margin: 0;
          color: #4b5563;
          line-height: 1.75;
        }

        .disclaimer-updated {
          margin: 22px 0 0;
          color: #6b7280;
          font-size: 0.9rem;
          text-align: center;
        }

        @media (max-width: 600px) {
          .disclaimer-page {
            padding: 30px 16px 44px;
          }

          .disclaimer-header {
            padding: 32px 22px;
          }

          .disclaimer-section {
            padding: 21px;
          }
        }
      `}</style>

      <main className="disclaimer-page">
        <div className="disclaimer-container">
          <header className="disclaimer-header">
            <h1>Disclaimer</h1>
            <p>
              Please read this information about the content and services
              provided through ShopNest.
            </p>
          </header>

          <div className="disclaimer-content">
            <section className="disclaimer-section">
              <h2>Product information</h2>
              <p>
                We work to keep product descriptions, images, prices, and
                availability accurate and up to date. Product colors and
                appearance may vary depending on your screen, and occasional
                errors or omissions may occur. Please contact us if you need
                clarification before placing an order.
              </p>
            </section>

            <section className="disclaimer-section">
              <h2>Pricing and availability</h2>
              <p>
                Products, prices, offers, and availability may change without
                notice. An item in your cart is not reserved, and an order is
                subject to confirmation and availability.
              </p>
            </section>

            <section className="disclaimer-section">
              <h2>External websites</h2>
              <p>
                Our site may include links to third-party websites for
                convenience. ShopNest does not control those websites and is
                not responsible for their content, services, or privacy
                practices. Visiting an external site is at your discretion.
              </p>
            </section>

            <section className="disclaimer-section">
              <h2>Limitation of information</h2>
              <p>
                Information on this site is provided for general shopping
                purposes. To the extent permitted by applicable law, ShopNest
                makes no guarantee that all site information will always be
                complete, current, or error-free. Nothing in this disclaimer
                limits rights that cannot be limited under applicable law.
              </p>
            </section>

            <section className="disclaimer-section">
              <h2>Contact us</h2>
              <p>
                If you have a question about this disclaimer or information on
                our site, please contact the ShopNest support team through the
                contact details provided on our website.
              </p>
            </section>
          </div>

          <p className="disclaimer-updated">Last updated: November 2026</p>
        </div>
      </main>
    </>
  );
};

export default Disclaimer;