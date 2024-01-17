import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  pseudo: "",
  firstName: "",
  lastName: "",
  bio: "",
  role: "",
  neuroTraits: []
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    registerAccount: (state, action) => {
      console.log("createAccount", action.payload);
      fetch(`${process.env.REACT_APP_API_BASE_URL}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(action.payload)
      })
        .then((res) => res.json())
        .catch((err) => {
          throw new Error(err);
        })
        .then((data) => {
          console.log(data);
          return { ...state, ...data };
        });
    },
    updateUser: (state, action) => {
      return { ...state, ...action.payload };
    }
  }
});

export const { registerAccount, updateUser } = userSlice.actions;
export default userSlice.reducer;
