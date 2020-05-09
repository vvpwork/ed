// import { combineReducers } from "redux";
import { createSlice } from "@reduxjs/toolkit";

// export const test_action = createAction("TEST_ACTION");
// const modalReducer = createReducer([], {
//   [test_action]: (state, action) => [...state, action.payload]
// });

const test_reducer = createSlice({
  name: "test_reducer",
  initialState: [],
  reducers: {
    test_action(state, action) {
      state.push(action.payload);
    }
  }
});

export const { test_action } = test_reducer.actions;
export default test_reducer.reducer;
