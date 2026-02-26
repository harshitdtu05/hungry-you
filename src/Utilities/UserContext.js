import { createContext } from "react";

const UserContext = createContext({
  name: "default user",
});

export default UserContext;
