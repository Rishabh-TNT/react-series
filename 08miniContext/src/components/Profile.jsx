import { useContext } from "react";
import userContext from "../context/userContext";

export default function Profile() {
  const { user } = useContext(userContext);
  return <>Welcome {user}</>;
}
