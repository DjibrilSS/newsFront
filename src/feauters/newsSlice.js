import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
  news: [],
};

export const newsThunk = createAsyncThunk("news/fetch", async (_, thunkAPI) => {
  try {
    const res = await fetch("http://localhost:4000/news");
    return await res.json();
  } catch (e) {
    thunkAPI.rejectWithValuse(e);
  }
});

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder.addCase(newsThunk.fulfilled, (state, action) => {
      state.news = action.payload;
    });
  },
});

export default newsSlice.reducer;
