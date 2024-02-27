import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite + React</h1>
      <h2
        style={{
          color: "red",
        }}
      >
        Luis Fernando Mendez Marques
      </h2>
      <h3
        style={{
          color: "blue",
        }}
      >
        Bootcamp Web UI
      </h3>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
