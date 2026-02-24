import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import ThemeBtn from "./components/ThemeBtn";
import { ThemeProvider } from "./context/theme";

function App() {
  const [themeMode, setTheme] = useState("light");
  console.log("theme mode: ", themeMode);
  const lightTheme = () => setTheme("light");
  const darkTheme = () => setTheme("dark");

  useEffect(() => {
    const doc = document.querySelector("html");
    doc.classList.remove("light", "dark");
    doc.classList.add(themeMode);
    console.log("use effect: ", themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
