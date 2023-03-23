import { useContext } from "react";
import { theme } from "./utils/UserContext";

export default function ContactUs() {
  const appTheme = useContext(theme);
  return <p>{appTheme}</p>;
}
