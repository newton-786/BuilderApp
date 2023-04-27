import {createSlice} from '@reduxjs/toolkit';

interface State {
  user: any;
  authToken: any;
  fcmToken: any;
  isFirstTime: any;
  userLocation: any;
}

const initialState: State = {
  user: null,
  authToken: null,
  fcmToken: null,
  isFirstTime: true,
  userLocation: null,
};

export const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },

  },
});

export const {
  setUser,

} = userReducer.actions;

export default userReducer.reducer;
