import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../hooks/store";

// Define a type for the slice state
interface TestState {
  value: number;
}

// Define the initial state using that type
const initialState: TestState = {
  value: 0
};

export const testSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    setTest: (state, data) => {
      state.value = data.payload.value;
    },
    clearTest: (state) => {
      state = initialState;
    }
  }
});

export const { setTest, clearTest } = testSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectTest = (state: RootState) => state.test.value;

export default testSlice.reducer;
