const initialState = {
  email: "",
  password: "",
  checkPassword: "",
  firstname: "",
  lastname: "",
  bio: "",
  type: "",
  neuroTraits: []
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_USER":
      return {
        ...state,
        email: action.payload.email,
        password: action.payload.password,
        checkPassword: action.payload.checkPassword,
        firstname: action.payload.firstname,
        lastname: action.payload.lastname,
        bio: action.payload.bio,
        type: action.payload.neuroTraits
      };
    default:
      return state;
  }
};

export default userReducer;
