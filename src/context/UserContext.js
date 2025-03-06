import React from "react";

const UserContext = React.createContext({ name: "", auth: false });

const UserProvider = ({ children }) => {
  const [user, setUser] = React.useState({
    isAuthenticated: true,
    token: "",
    account: {},
  });

  const loginContext = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser((user) => ({
      name: "",
      auth: false,
    }));
  };

  return (
    <UserContext.Provider value={{ user, loginContext, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
