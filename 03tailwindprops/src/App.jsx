import "./App.css";
import Card from "./components/Card";

function App() {
  const name = "test";

  if (name) {
    return (
      <>
        <h1 className="bg-green-400 rounded-xl p-4 mb-4">Tailwind Test</h1>
        <Card channel="Chai aur code" arr={true ? "true" : "false"} />
      </>
    );
  } else {
    return (
      <>
        <h1 className="bg-green-400 rounded-xl p-4 mb-4">Tailwind Test</h1>
        <Card channel="Chai aur React" />
      </>
    );
  }
}

export default App;
