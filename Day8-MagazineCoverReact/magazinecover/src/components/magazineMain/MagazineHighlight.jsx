import "./magazineHighlight.css";

function MagazineHighlight() {
  return (
    <section
      className="magazine__content"
      aria-labelledby="highlightTopic"
      aria-describedby="highlightSummary"
    >
      <div className="magazine__highlight">
        <h2 className="magazine__topic" id="highlightTopic">
          CLIMATE
          <br />
          STRESS
        </h2>
        <hr className="magazine__separator" role="presentation" />
        <p className="magazine__summary" id="highlightSummary">
          Amazon rainforest&apos;s ecosystem could reach a tipping point by 2050
        </p>
      </div>
    </section>
  );
}

export default MagazineHighlight;
