import { useContext } from "react";
import "./App.css";
import Login from "./components/Login";
import LoginBtn from "./components/LoginBtn";
import Profile from "./components/Profile";
import { loginContext } from "./context/loginContext";

function App() {
  const { login } = useContext(loginContext);
  return (
    <>
      {login ? <Profile /> : <Login />}
      <br />
      <LoginBtn />
    </>
  );
}

export default App;
