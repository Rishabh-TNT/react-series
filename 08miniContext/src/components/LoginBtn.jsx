import { useContext } from "react";
import { loginContext } from "../context/loginContext";

export default function LoginBtn() {
  const { login, setLogin } = useContext(loginContext);
  return (
    <button
      type="button"
      onClick={() => setLogin(!login)}
      style={{ margin: "24px", display: "inline-block" }}
    >
      {login ? "Logout" : "Login"}
    </button>
  );
}
