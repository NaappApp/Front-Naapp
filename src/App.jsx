import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./views/Home";
import { Login } from "./views/auth/Login";
import { Register } from "./views/auth/Register";
import { Dashboard } from "./views/app/Dashboard";
import { Profile } from "./views/app/Profile";
import { Type } from "./views/auth/authPathway/Type";
import { Name } from "./views/auth/authPathway/Name";
import { Legals } from "./views/miscellaneous/Legals";
import { PrivacyPolicy } from "./views/miscellaneous/PrivacyPolicy";
import { NotFound } from "./views/other/NotFound";
import { UserContext } from "./components/auth/UserContext";

export const App = () => {
  const user = {
    email: "example@mail.com",
    pseudo: "example",
    firstName: "John",
    lastName: "Doe",
    bio: "Lorem ipsum dolor sit amet",
    role: "user",
    neuroTraits: ["trait1", "trait2", "trait3"]
  };

  const actions = {
    updateUser: (newUserData) => {
      console.log(`Updating user data with ${newUserData}`);
    }
  };
  return (
    //<AuthContext.Provider value={[state, actions]}>
    <UserContext.Provider value={[user, actions]}>
      <BrowserRouter>
        <Routes>
          <Route index={true} element={<Home />} />

          {/* App */}
          <Route path="app" element={<Dashboard />}>
            <Route path="profile" element={<Profile />} />
          </Route>

          {/* Auth */}
          <Route path="login" element={<Login />} />

          {/* Register */}
          <Route path="register" element={<Register />} />
          <Route path="register/name" element={<Name />} />
          <Route path="register/type" element={<Type />} />
          {/* <Route path="personal" element={<Personal />} /> */}
          {/* <Route path="interest" element={<Interest />} /> */}
          {/* <Route path="following" element={<Follow />} /> */}

          {/* Miscellaneous */}
          <Route path="legals" element={<Legals />} />
          <Route path="privacy" element={<PrivacyPolicy />} />

          {/* Other */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>

    //</AuthContext.Provider>
  );
};
