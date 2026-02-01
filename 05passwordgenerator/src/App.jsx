import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [useNum, setUseNum] = useState(false);
  const [useChar, setUseChar] = useState(false);

  const [password, setPassword] = useState(generateCode);

  const generatePassword = useCallback(generateCode, [length, useNum, useChar]);

  const passRef = useRef(null);

  useEffect(() => {
    const newPassword = generatePassword();
    setPassword(newPassword);
  }, [generatePassword]);

  return (
    <>
      <div className="bg-gray-600 p-4 flex flex-col gap-2">
        <div style={{ display: "flex" }}>
          <input
            type="text"
            style={{ backgroundColor: "white", flex: 1 }}
            value={password}
            ref={passRef}
            readOnly
          />
          <button
            style={{
              backgroundColor: "rgb(0, 120, 212)",
              color: "white",
              fontWeight: "bold",
            }}
            onClick={copytoClipboard}
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
          <input
            type="range"
            name="length"
            id="range"
            onChange={sliderHandler}
          />
          <label htmlFor="range">Length ({length})</label>
          <input
            type="checkbox"
            name="numberAllowed"
            id="number"
            onChange={() => {
              setUseNum(!useNum);
            }}
          />
          <label htmlFor="number">Include Numbers</label>
          <input
            type="checkbox"
            name="charactersAllowed"
            id="character"
            onChange={() => {
              setUseChar(!useChar);
            }}
          />
          <label htmlFor="character">Include Special Charactres</label>
        </div>
      </div>
    </>
  );

  function generateCode() {
    let code = "";
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (useNum) chars += "0123456789";
    if (useChar) chars += "!@#$%^&*";

    for (let i = 1; i <= length; i++) {
      code += chars[Math.floor(Math.random() * chars.length)];
    }
    return code;
  }

  function sliderHandler(e) {
    const newLen = e.target.value;
    console.log(newLen);
    setLength(newLen);
  }

  function copytoClipboard() {
    passRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }
}

export default App;
