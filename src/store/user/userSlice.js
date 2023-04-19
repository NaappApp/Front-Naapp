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
    createAccout: (state, action) => {
      console.log("createAccout", action.payload);
      fetch("https://naappapirec.azurewebsites.net/api/Auth/register", {
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

export const { updateUser } = userSlice.actions;
export default userSlice.reducer;
