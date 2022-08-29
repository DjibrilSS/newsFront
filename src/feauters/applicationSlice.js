import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
  error: null,
  load: false,
  token: localStorage.getItem("token"),
};

export const fetchLogin = createAsyncThunk(
  "fetch/login",
  async ({ loginUp, passwordUp }, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4000/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ login: loginUp, password: passwordUp }),
      });
      const token = await res.json();
      console.log(token);
      return token;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const fetchLogup = createAsyncThunk(
  "fetch/logup",
  async ({ loginIn, passwordIn }, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ login: loginIn, password: passwordIn }),
      });
      const token = await res.json();
      localStorage.setItem("token", token);
      console.log(token);
      return token;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

const applicationSlice = createSlice({
  name: "application",
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLogin.pending, (state, action) => {
        state.load = true;
      })
      .addCase(fetchLogin.fulfilled, (state, action) => {
        state.load = false;
      })
      .addCase(fetchLogup.fulfilled, (state, action) => {
        state.token = action.payload
      });
  },
});

export default applicationSlice.reducer;
