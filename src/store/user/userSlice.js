import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const setUser = (user) => {
  return {
    type: "user/setUser",
    payload: user
  };
};
/**
 * SET USER
 * @type {AsyncThunk<unknown, void, AsyncThunkConfig>}
 */
export const registerAccountAsync = createAsyncThunk(
  "user/registerAccount",
  async (userData, { rejectWithValue }) => {
    console.log(JSON.stringify(userData));
    try {
      const response = await axios.post(
        "http://naapp-api.devamarion.fr/api/auth/register",
        JSON.stringify(userData),
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );

      const expirationTime = new Date();
      expirationTime.setTime(expirationTime.getTime() + 3 * 60 * 60 * 1000);

      document.cookie = `token=${
        response.data.token
      };  expires=${expirationTime.toUTCString()}`;
      document.cookie = `tokenExpiration=${expirationTime.toUTCString()};`;

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  email: "",
  username: "",
  password: "",
  firstname: "",
  lastname: "",
  biography: "",
  type: "",
  neuroTraits: [],
  status: "idle", // "idle", "loading", "succeeded", "failed"
  error: null
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
      const { email, password, username, firstname, lastname, type, biography } = action.payload;
      state.email = email;
      state.password = password;
      state.username = username;
      state.firstname = firstname;
      state.lastname = lastname;
      state.type = type;
      state.biography = biography;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(updateUser, (state, action) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.checkPassword = action.payload.checkPassword;
      state.username = action.payload.username;
      state.firstname = action.payload.firstname;
      state.lastname = action.payload.lastname;
      state.biography = action.payload.biography;
    });

    builder
      .addCase(registerAccountAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(registerAccountAsync.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(registerAccountAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  }
});

export const { updateUser } = userSlice.actions;

export default userSlice.reducer;
