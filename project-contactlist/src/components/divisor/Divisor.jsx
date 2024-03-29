import './divisor.css';

function Divisor({ divisorTitle }) {
  return (
    <div className="divisor" aria-labelledby="divisorTitle">
      <h2 id="divisorTitle" className="divisor__title">
        {divisorTitle}
      </h2>
      <hr className="divisor__line" />
    </div>
  );
}

export default Divisor;
