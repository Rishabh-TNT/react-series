import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-gray-600 p-4 flex flex-col gap-2">
        <div style={{ display: "flex" }}>
          <input type="text" style={{ backgroundColor: "white", flex: 1 }} />
          <button
            style={{
              backgroundColor: "rgb(0, 120, 212)",
              color: "white",
              fontWeight: "bold",
            }}
          >
            Copy
          </button>
        </div>

        <div
          style={{
            display: "flex",
            gap: "6px",
            margin: "6px",
            color: "rgb(82, 146, 215)",
          }}
        >
          <input type="range" name="length" id="range" />
          <label htmlFor="range">Length</label>
          <input type="checkbox" name="numberAllowed" id="number" />
          <label htmlFor="number">Include Numbers</label>
          <input type="checkbox" name="charactersAllowed" id="character" />
          <label htmlFor="character">Include Special Charactres</label>
        </div>
      </div>
    </>
  );
}

export default App;
