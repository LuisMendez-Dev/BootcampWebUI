import "./magazineHeader.css";

function MagazineHeader() {
  return (
    <header className="magazine__header">
      <h3 className="magazine__subtitle" id="mainTitle">
        The international journal of science / 15 February 2024
      </h3>
      <hr className="magazine__separator" role="presentation" />
      <h1 className="magazine__title">nature</h1>
    </header>
  );
}

export default MagazineHeader;
