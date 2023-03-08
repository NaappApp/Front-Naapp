import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './views/Home';
import { Login } from './views/auth/Login';
import { Register } from './views/auth/Register';
import { Dashboard } from './views/app/Dashboard';
import { Profile } from './views/app/Profile';
import { Type } from './views/auth/authPathway/Type';
import { Legals } from './views/miscellaneous/Legals';
import { PrivacyPolicy } from './views/miscellaneous/PrivacyPolicy';
import { NotFound } from './views/other/NotFound';


export const App = () => {
  return (
    //<AuthContext.Provider value={[state, actions]}>
    <BrowserRouter>
      <Routes>
        <Route index={true} element={<Home />} />

        {/* App */}
        <Route path="/app" element={<Dashboard />}>
          <Route path="profile" element={<Profile />} />
        </Route>

        {/* Auth */}
        <Route path="login" element={<Login />} />
        {/* Register */}
        <Route path="register" element={<Register />}>
          <Route path="type" element={<Type />} />
          {/* To be done : <Route path="personal" element={<Personal />} />*/}
          {/* To be done : <Route path="interest" element={<Interest />} />*/}
          {/* To be done : <Route path="following" element={<Follow />} />*/}
        </Route>

        {/* Miscellaneous */}
        <Route path="/legals" element={<Legals />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />

        {/* Other */}
        <Route path='*' element={<NotFound />} />

      </Routes>
    </BrowserRouter>
    //</AuthContext.Provider>
  )
}
