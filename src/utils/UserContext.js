import { createContext } from "react";

export const UserContext = createContext({
  user: "Slytherin",
  email: "xyz@yahoo.com",
});
UserContext.displayName = "UserCredentials";
export const theme = createContext("light");
theme.displayName = "Apptheme";
