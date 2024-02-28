import MagazineFooter from "../components/magazineFooter/MagazineFooter";
import MagazineHeader from "../components/magazineHeader/MagazineHeader";
import MagazineHighlight from "../components/magazineMain/MagazineHighlight";
import "./magazine.css";

function Magazine() {
  return (
    <article className="magazine">
      <MagazineHeader />
      <MagazineHighlight />
      <MagazineFooter />
    </article>
  );
}

export default Magazine;
