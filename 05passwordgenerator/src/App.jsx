import { useState } from "react";
import "./App.css";
function App() {
  const [length, setLength] = useState(8);

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
          <input type="range" name="length" id="range" onInput={generateCode} />
          <label htmlFor="range">Length</label>
          <input type="checkbox" name="numberAllowed" id="number" />
          <label htmlFor="number">Include Numbers</label>
          <input type="checkbox" name="charactersAllowed" id="character" />
          <label htmlFor="character">Include Special Charactres</label>
        </div>
      </div>
    </>
  );
  function generateCode() {
    console.log("length: ", length);
    const input = document.querySelector('input[type="text"]');
    // const alpha = String.fromCharCode(Math.floor(Math.random() * 58 + 65));
    const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const alphanum = alpha + "0123456789";
    let code = "";
    const useNum = true;

    for (let i = 0; i <= length; i++) {
      code += useNum
        ? alphanum[Math.floor(Math.random() * alphanum.length + 1)]
        : alpha[Math.floor(Math.random() * alpha.length + 1)];
    }
    input.value = code;
  }
}

export default App;
