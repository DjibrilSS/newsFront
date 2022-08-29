import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
  news: [],
  category: [],
  comment: [],
};

export const newsThunk = createAsyncThunk("news/fetch", async (_, thunkAPI) => {
  try {
    const res = await fetch("http://localhost:4000/news");
    return await res.json();
  } catch (e) {
    thunkAPI.rejectWithValuse(e);
  }
});
export const categoryThunk = createAsyncThunk(
  "category/fetch",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4000/category");
      return await res.json();
    } catch (e) {
      thunkAPI.rejectWithValuse(e);
    }
  }
);
export const commentThunk = createAsyncThunk(
  "comment/fetch",
  async (_, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4000/comment");
      return await res.json();
    } catch (e) {
      thunkAPI.rejectWithValuse(e);
    }
  }
);
export const commentAdd = createAsyncThunk(
  "comment/Add",
  async ({ id, input }, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:4000/comment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${thunkAPI.getState().application.token}`,
        },
        body: JSON.stringify({ news: id.id, text: input }),
      });

      return await res.json();
    } catch (e) {
      thunkAPI.rejectWithValuse(e);
    }
  }
);

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder.addCase(newsThunk.fulfilled, (state, action) => {
      state.news = action.payload;
    });
    builder.addCase(categoryThunk.fulfilled, (state, action) => {
      state.category = action.payload;
    });
    builder.addCase(commentThunk.fulfilled, (state, action) => {
      state.comment = action.payload;
    });
    builder.addCase(commentAdd.fulfilled, (state, action) => {
      state.comment.push(action.payload);
    });
  },
});

export default newsSlice.reducer;
