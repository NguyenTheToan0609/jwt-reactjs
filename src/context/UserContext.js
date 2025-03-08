import React, { useEffect } from "react";
import { getUserAccount } from "../service/userService";
const UserContext = React.createContext(null);

const UserProvider = ({ children }) => {
  const userDefaul = {
    isAuthenticated: false,
    token: "",
    account: {},
    isLoading: true,
  };
  const [user, setUser] = React.useState(userDefaul);

  const loginContext = (userData) => {
    setUser({ ...userData, isLoading: false });
  };

  const logout = () => {
    setUser((user) => ({
      name: "",
      auth: false,
    }));
  };

  const fetchUser = async () => {
    let res = await getUserAccount();
    if (res && res.EC === 0) {
      let groupWithRoles = res.DT.groupWithRoles;
      let email = res.DT.email;
      let username = res.DT.username;
      let token = res.DT.access_token;

      let data = {
        isAuthenticated: true,
        token,
        account: {
          groupWithRoles,
          email,
          username,
        },
        isLoading: false,
      };
      setUser(data);
    } else {
      setUser({ ...userDefaul, isLoading: false });
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, loginContext, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
