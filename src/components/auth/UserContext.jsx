import React, { createContext, useState } from "react";

// Create the context
export const UserContext = createContext();

// Create a provider component
export const UserProvider = ({ children }) => {
  // Define initial user state
  const [user, setUser] = useState({
    email: "",
    pseudo: "",
    firstName: "",
    lastName: "",
    bio: "",
    role: "",
    neuroTraits: []
  });

  // Define function to update the user
  const updateUser = (newUserData) => {
    setUser((prevState) => ({
      ...prevState,
      ...newUserData
    }));
  };

  // Pass user and updateUser function down to children
  return <UserContext.Provider value={{ user, updateUser }}>{children}</UserContext.Provider>;
};
