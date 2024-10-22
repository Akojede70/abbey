import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  id: string | null;
  firstName: string | null;
  lastName: string | null;
  isLoggedIn: boolean;
}

const initialState: UserState = {
  id: null,
  firstName: null,
  lastName: null,
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<{ id: string; firstName: string; lastName: string }>) => {
      state.id = action.payload.id;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.isLoggedIn = true;
    },
    logOutUser: (state) => {
      state.id = null;
      state.firstName = null;
      state.lastName = null;
      state.isLoggedIn = false;
    },
  },
});

export const { setUser, logOutUser } = userSlice.actions;

export default userSlice.reducer;
