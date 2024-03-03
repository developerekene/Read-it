import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { TodoSlice } from "./hooks/TodoSlice";
// ...

export const store = configureStore({
  reducer: {
    todo: TodoSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
