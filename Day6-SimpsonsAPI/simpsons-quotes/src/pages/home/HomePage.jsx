import "./homePage.css";

function Home() {
  return (
    <section className="home">
      <p className="home__welcome-message">Welcome to</p>
      <h1 className="home__title">
        <span className="home__title-span">Simp</span>
        Quote
      </h1>
      <br />
      <h6
        style={{
          color: "lightgray",
          fontWeight: "lighter",
        }}
      >
        Created by Luis Mendez
      </h6>
    </section>
  );
}

export default Home;
