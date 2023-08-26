import { useContext } from "react";
import { ThemeContext } from "./ThemContext";

const Box = () => {
  const theme = useContext(ThemeContext);
  return <div style={{ backgroundColor: theme.primary.main }}>Box</div>;
};
export default Box;
