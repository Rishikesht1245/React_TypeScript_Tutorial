import { useState } from "react";

// type for the user object
type AuthUser = {
  name: string;
  email: string;
};

const User = () => {
  // informing type script that the user can either be null or AuthUser
  const [user, setUser] = useState<AuthUser>({} as AuthUser);
  const handleLogin = () => {
    setUser({
      name: "viswas",
      email: "vis@gmail.com",
    });
  };
  //   const handleLogout = () => {
  //     setUser({});
  //   };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      {/* <button onClick={handleLogout}>Logout</button> */}
      <div>User name is {user?.name} </div>
      <div>User email is {user?.email}</div>
    </div>
  );
};
export default User;
