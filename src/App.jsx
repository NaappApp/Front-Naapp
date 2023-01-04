import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './views/Home';
import { Account } from './views/auth/Account';
import { Login } from './views/auth/Login';
import { Register } from './views/auth/Register';

import { Legals } from './views/miscellaneous/Legals';
import { PrivacyPolicy } from './views/miscellaneous/PrivacyPolicy';
import { NotFound } from './views/other/NotFound';


export const App = () => {
  return (
    //<AuthContext.Provider value={[state, actions]}>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route index={true} element={<Home />} />

          {/* App */}
          <Route path="/app" element={<Dashboard />}>
            <Route path="profile" element={<Profile />} />
          </Route>

          {/* Auth */}
          <Route path="/auth" element={<Dashboard />}>
            <Route path="login" element={<Login />} />
            {/* Register */}
            <Route path="register" element={<Register />}>
              <Route path="account" element={<Account />} />
              <Route path="type" element={<Type />} />
              {/* Curious */}
              <Route path="curious" element={<Personal />} >
                <Route path="interest" element={<Profile />} />
                <Route path="following" element={<Profile />} />
              </Route>
              {/* Atypical */}
              <Route path="atypical" element={<Personal />} >
                <Route path="interest" element={<Profile />} />
                <Route path="following" element={<Profile />} />
              </Route>
              {/* Profesional */}
              <Route path="profesional" element={<Personal />} >
                <Route path="medical" element={<Profile />} />
                <Route path="interest" element={<Profile />} />
                <Route path="following" element={<Profile />} />
              </Route>
            </Route>
          </Route>

          {/* Miscellaneous */}
          <Route path="/legals" element={<Legals />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />

          {/* Other */}
          <Route path='*' element={<NotFound />} />

        </Routes>
      </Layout>
    </BrowserRouter>
    //</AuthContext.Provider>
  )
}
