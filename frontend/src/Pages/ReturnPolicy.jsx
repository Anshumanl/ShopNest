const ReturnPolicy = () => {
  return (
    <>
      <style>{`
        .return-policy-page {
          min-height: 70vh;
          padding: 48px 20px 64px;
          color: #1f2937;
          background: #f8fafc;
          font-family: Arial, sans-serif;
        }

        .return-policy-container {
          max-width: 900px;
          margin: 0 auto;
        }

        .return-policy-header {
          padding: 42px 36px;
          color: #fff;
          text-align: center;
          background: linear-gradient(135deg, #172554, #2563eb);
          border-radius: 16px;
        }

        .return-policy-header h1 {
          margin: 0 0 12px;
          font-size: clamp(2rem, 5vw, 2.75rem);
        }

        .return-policy-header p {
          max-width: 640px;
          margin: 0 auto;
          color: #dbeafe;
          line-height: 1.7;
        }

        .return-policy-content {
          display: grid;
          gap: 18px;
          margin-top: 24px;
        }

        .return-policy-section {
          padding: 24px 28px;
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          box-shadow: 0 4px 14px rgba(15, 23, 42, 0.04);
        }

        .return-policy-section h2 {
          margin: 0 0 10px;
          color: #1e40af;
          font-size: 1.2rem;
        }

        .return-policy-section p,
        .return-policy-section li {
          color: #4b5563;
          line-height: 1.75;
        }

        .return-policy-section p {
          margin: 0;
        }

        .return-policy-section ul {
          display: grid;
          gap: 8px;
          margin: 12px 0 0;
          padding-left: 22px;
        }

        .return-policy-note {
          margin: 22px 0 0;
          color: #6b7280;
          font-size: 0.9rem;
          text-align: center;
        }

        @media (max-width: 600px) {
          .return-policy-page {
            padding: 30px 16px 44px;
          }

          .return-policy-header {
            padding: 32px 22px;
          }

          .return-policy-section {
            padding: 21px;
          }
        }
      `}</style>

      <main className="return-policy-page">
        <div className="return-policy-container">
          <header className="return-policy-header">
            <h1>Return Policy</h1>
            <p>
              We want you to feel confident shopping with ShopNest. Find out
              what to check and how to get help with a return request.
            </p>
          </header>

          <div className="return-policy-content">
            <section className="return-policy-section">
              <h2>Check your order details</h2>
              <p>
                Return eligibility and any applicable time limits depend on
                the item and the terms shown when you placed your order.
                Review your order confirmation and the product listing for
                those details. If anything is unclear, contact ShopNest
                support before sending an item back.
              </p>
            </section>

            <section className="return-policy-section">
              <h2>How to request a return</h2>
              <ul>
                <li>Contact ShopNest support using the details on our website.</li>
                <li>Share your order number and explain why you are requesting a return.</li>
                <li>Wait for return instructions before shipping an item.</li>
                <li>Pack the item securely and include any required accessories or documentation.</li>
              </ul>
            </section>

            <section className="return-policy-section">
              <h2>Condition of returned items</h2>
              <p>
                Unless your order terms or applicable law say otherwise, items
                should be returned in the condition described in the
                product-specific return terms. Please keep the packaging and
                proof of purchase until your request is resolved.
              </p>
            </section>

            <section className="return-policy-section">
              <h2>Refunds</h2>
              <p>
                Once an approved return has been received and reviewed, we will
                update you about its status. Any refund method and processing
                time will be communicated as part of your return request and
                may depend on your original payment provider.
              </p>
            </section>

            <section className="return-policy-section">
              <h2>Need help?</h2>
              <p>
                If an item arrives damaged, incorrect, or incomplete, contact
                ShopNest support and include your order number and relevant
                details so we can assist you.
              </p>
            </section>
          </div>

          <p className="return-policy-note">
            Your order-specific terms and rights under applicable law take
            precedence over this general information.
          </p>
        </div>
      </main>
    </>
  );
};

export default ReturnPolicy;