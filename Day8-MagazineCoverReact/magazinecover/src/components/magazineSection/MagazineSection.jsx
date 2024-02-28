import "./magazineSection.css";

// eslint-disable-next-line react/prop-types
function MagazineSection({ title, titleId, summary, summaryId }) {
  return (
    <section
      className="magazine__section"
      aria-labelledby={titleId}
      aria-describedby={summaryId}
    >
      <h3 className="magazine__section-title" id={titleId}>
        {title}
      </h3>
      <p className="magazine__section-summary" id={summaryId}>
        {summary}
      </p>
    </section>
  );
}

export default MagazineSection;
