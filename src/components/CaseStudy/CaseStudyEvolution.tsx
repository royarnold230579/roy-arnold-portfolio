import beforeScreenshot from "../../assets/case-study/super-stars-before.png";
import modalOverview from "../../assets/case-study/modal-1.png";
import modalStock from "../../assets/case-study/modal-2.png";

function CaseStudyEvolution() {
  return (
    <section className="case-study-evolution">
      <h2>From Expandable Rows to a Modal Interface</h2>

      <p>
        The original version of Super Stars displayed stock management controls
        beneath the pack grid whenever a user selected a product.
      </p>

      <p>
        Although functional, this approach required users to move between the
        pack selection area and the inventory controls further down the page.
      </p>

      <p>
        I redesigned the interface to use a modal window, allowing users to
        manage individual packs without disrupting the main dashboard layout.
      </p>
      <figure className="case-study-image">
        <img
          src={beforeScreenshot}
          alt="Original Super Stars dashboard with an expandable stock management panel beneath the pack grid"
        />

        <figcaption>
          Version 1 — Stock management displayed beneath the pack grid.
        </figcaption>
      </figure>
      <figure className="case-study-image">
        <img
          src={modalOverview}
          alt="Updated Super Stars modal showing pack details, stock actions and product artwork"
        />
        <figcaption>
          Version 2 — Upper section: Pack overview, stock actions and product
          artwork.
        </figcaption>
      </figure>

      <figure className="case-study-image">
        <img
          src={modalStock}
          alt="Updated Super Stars modal showing individual component quantities and stock replenishment controls"
        />
        <figcaption>
          Version 2 — Lower section: Component stock levels and replenishment
          controls.
        </figcaption>
      </figure>
    </section>
  );
}

export default CaseStudyEvolution;
