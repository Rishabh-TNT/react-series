import { useContext } from "react";
import userContext from "../context/userContext";

export default function Login() {
  const { user, setUser } = useContext(userContext);
  return (
    <>
      <input
        type="text"
        name="user"
        id="user"
        placeholder="user"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
    </>
  );
}
