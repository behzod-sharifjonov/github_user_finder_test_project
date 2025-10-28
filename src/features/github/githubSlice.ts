import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface GithubState {
  username: string;
}

const initialState: GithubState = {
  username: "",
};

const githubSlice = createSlice({
  name: "github",
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
  },
});

export const { setUsername } = githubSlice.actions;
export default githubSlice.reducer;
