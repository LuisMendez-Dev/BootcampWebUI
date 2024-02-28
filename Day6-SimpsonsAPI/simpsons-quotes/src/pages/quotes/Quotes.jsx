import "./quotes.css";
import Card from "../../components/card/Card";
import Spinner from "../../components/spinner/Spinner";
import useFetchQuotes from "../../hooks/useFetchQuotes";
import { useState } from "react";
import CardlList from "../../components/cardlist/CardlList";

const BASE_URL = "https://thesimpsonsquoteapi.glitch.me/quotes";
const FILTERED_URL =
  "https://thesimpsonsquoteapi.glitch.me/quotes?count=X&character=Y";

function Quotes() {
  const [searchValue, setSearchValue] = useState("");
  const [rangeValue, setRangeValue] = useState(1);
  const [url, setUrl] = useState(BASE_URL);
  const { data, error, loading, refetchQuotes } = useFetchQuotes(url);

  const handleClick = () => {
    const newUrl = searchValue
      ? FILTERED_URL.replace("X", rangeValue).replace(
          "Y",
          encodeURIComponent(searchValue.trim())
        )
      : BASE_URL;
    setUrl(newUrl);
    refetchQuotes(newUrl);
  };

  const handleCountChange = (event) => {
    setRangeValue(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <section className="quotes">
      <div className="quotes__search">
        <h1 className="quotes__search-title">Discover some Simpsons quotes</h1>
        <div className="quotes__search-inputs">
          <input
            type="text"
            className="quotes__search-input--text"
            placeholder="Search"
            name="search"
            id="search"
            disabled={loading}
            onChange={handleSearchChange}
            autoComplete="off"
          />
          <input
            type="range"
            className="quotes__search-input--range"
            name="count"
            id="count"
            min="1"
            max="15"
            value={rangeValue}
            onChange={handleCountChange}
            disabled={loading}
            style={{ display: !searchValue ? "none" : "block" }}
          />
          <span
            className="quotes__search-range-value"
            style={{ display: !searchValue ? "none" : "block" }}
          >
            {rangeValue}
          </span>
        </div>
      </div>

      {loading && <Spinner />}

      {error && <p className="quotes__error">{error}</p>}

      <CardlList>
        {data &&
          !loading &&
          data.map((quote, index) => (
            <Card
              key={quote.character + index}
              quote={quote.quote}
              characterName={quote.character}
              characterImage={quote.image}
            />
          ))}
      </CardlList>

      {data && !loading && (
        <button className="quotes__button-random" onClick={handleClick}>
          {!searchValue ? "Show me a random quote" : "Search by character"}
        </button>
      )}
    </section>
  );
}

export default Quotes;
