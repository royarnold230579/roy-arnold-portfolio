function CaseStudyOverview() {
  return (
    <section className="case-study-overview">
      <h2>The Project Overview</h2>

      <p>
        Super Stars is a stock management application built using React and
        TypeScript.
      </p>

      <p>
        The application manages 15 different product packs, each containing four
        individual components. It allows users to monitor stock levels,
        replenish inventory and process orders.
      </p>

      <p>
        One of the main challenges was ensuring that processing an order
        correctly reduced the stock quantities of every component within the
        selected pack.
      </p>
    </section>
  );
}

export default CaseStudyOverview;
