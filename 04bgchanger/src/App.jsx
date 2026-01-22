import { useState } from "react";
import "./App.css";
import Button from "./Button";

function App() {
  const [color, setColor] = useState("olive");
  return (
    <div
      className="w-full h-screen duration-800 flex flex-col justify-end items-center pb-4"
      style={{ backgroundColor: color }}
    >
      <div className="absolute bottom-4 bg-amber-100 rounded-2xl p-1">
        <Button setColor={setColor} />
        {console.log("color: ", color)}
      </div>
    </div>
  );
}

export default App;
