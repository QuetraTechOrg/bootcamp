import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  taskList: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,

  //reducers is for synchronous actions
  reducers: {
    saveNewTask: (state, { payload }) => {
      state.taskList = [...state.taskList, payload];
    },
    deleteTask: (state, { payload }) => {
      state.taskList = state.taskList.filter(
        (item, index) => index !== payload
      );
    },
    updateTask: (state, { payload }) => {
      const indexOfValueToChange = payload.index;
      const newValue = payload.newValue;
      state.taskList[indexOfValueToChange] = newValue;
    },
  },

  //extrareducers is asynchronous action
});

// Action creators are generated for each case reducer function
export const { saveNewTask, deleteTask, updateTask } = todoSlice.actions;

export default todoSlice.reducer;
