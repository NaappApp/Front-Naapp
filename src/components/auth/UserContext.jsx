import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    email: "",
    pseudo: "",
    firstName: "",
    lastName: "",
    bio: "",
    role: "",
    neuroTraits: []
  });

  const updateUser = (newUserData) => {
    setUser((prevState) => ({
      ...prevState,
      ...newUserData
    }));
  };

  return <UserContext.Provider value={{ user, updateUser }}>{children}</UserContext.Provider>;
};
