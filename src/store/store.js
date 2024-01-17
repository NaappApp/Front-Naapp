import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import rootReducer from "./rootReducer";

export default configureStore({
  reducer: {
    reducer: rootReducer,
    user: userReducer
  }
});
