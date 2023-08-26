import Login from "./Login";
import { ProfileProps } from "./Profile";

type PrivateProps = {
  isLoggedIn: boolean;
  //mention the prop type which the component accepts
  Component: React.ComponentType<ProfileProps>;
};
const Private = ({ isLoggedIn, Component }: PrivateProps) => {
  if (isLoggedIn) {
    return <Component name="Rishikesh" />;
  } else {
    return <Login />;
  }
};
export default Private;
