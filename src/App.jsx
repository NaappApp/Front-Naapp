import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./views/Home";
import { Login } from "./views/auth/Login";
import { Register } from "./views/auth/Register";
import { Profile } from "./views/app/Profile";
import { NewsPage } from "./views/app/NewsPage";
import { Events } from "./views/app/Events";
import { Parameters } from "./views/app/Parameters";
import { Tips } from "./views/app/Tips";
import { Accounts } from "./views/app/Account";
import { Type } from "./views/auth/authPathway/Type";
import { Name } from "./views/auth/authPathway/Name";
import { Bio } from "./views/auth/authPathway/Bio";
import { Legals } from "./views/miscellaneous/Legals";
import { PrivacyPolicy } from "./views/miscellaneous/PrivacyPolicy";
import { NotFound } from "./views/other/NotFound";
import { Provider } from "react-redux";
import { Interets } from "./views/auth/authPathway/Interets";
import { Follow } from "./views/auth/authPathway/Follow";
import store from "./store/store";

export const App = () => {
  return (
    //<AuthContext.Provider value={[state, actions]}>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route index={true} element={<Home />} />

          {/* App */}
          <Route path="app" element={<NewsPage />}>
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route path="/account" element={<Accounts />} />

          {/* Mock Demo */}
          <Route path="/Events" element={<Events />} />
          <Route path="/tips" element={<Tips />} />
          <Route path="/settings" element={<Parameters />} />

          {/* Auth */}
          <Route path="login" element={<Login />} />

          {/* Register */}
          <Route path="register" element={<Register />} />
          <Route path="register/name" element={<Name />} />
          <Route path="register/type" element={<Type />} />
          <Route path="register/bio" element={<Bio />} />
          {/* <Route path="personal" element={<Personal />} /> */}
          <Route path="register/interest" element={<Interets />} />
          <Route path="register/following" element={<Follow />} />

          {/* Miscellaneous */}
          <Route path="legals" element={<Legals />} />
          <Route path="privacy" element={<PrivacyPolicy />} />

          {/* Other */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Provider>

    //</AuthContext.Provider>
  );
};
