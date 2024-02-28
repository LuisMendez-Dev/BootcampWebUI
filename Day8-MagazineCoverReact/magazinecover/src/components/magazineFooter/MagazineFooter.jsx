import MagazineSection from "../magazineSection/MagazineSection";
import "./magazineFooter.css";

function MagazineFooter() {
  return (
    <footer className="magazine__footer" role="contentinfo">
      <MagazineSection
        title="Blunt instrument"
        titleId="section1Title"
        summary="Mass drug screening could aid precision
                    treatment for cancer"
        summaryId="section1Summary"
      />
      <MagazineSection
        title="Wind exposure"
        titleId="section2Title"
        summary="A global profile of population affected by tropical cyclones"
        summaryId="section2Summary"
      />
      <MagazineSection
        title="Language lesson"
        titleId="section3Title"
        summary="Neural probe reveals how brain encodes elements of speech"
        summaryId="section3Summary"
      />
    </footer>
  );
}

export default MagazineFooter;
