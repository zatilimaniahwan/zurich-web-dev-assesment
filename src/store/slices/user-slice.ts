import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserState = {
  user: GoogleUserProfile;
};

const initialState: UserState = {
  user: {
    name: "",
    email: "",
    picture: "",
    sub: "",
    id: "",
    image: "",
    iat: 0,
    exp: 0,
    jti: "",
    isAuthenticated: false,
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<GoogleUserProfile>) {
      state.user = action.payload;
    },
    clearUser(state) {
      state.user = initialState.user;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
