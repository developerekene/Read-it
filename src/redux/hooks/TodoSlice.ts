import { createSlice } from "@reduxjs/toolkit";
import { Todo } from "../../utils/InterFace";

const initialState: Todo = {
  title: "",
};

export const TodoSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      const { title } = action.payload;
      state.title = title;
      // console.log("User state Data", state);
    },
  },
});

export default TodoSlice.reducer;
export const { addUser } = TodoSlice.actions;
