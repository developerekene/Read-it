import React from "react";
import AppEntry from "./src/ui/AppEntry";
import { Provider } from "react-redux";
import { store } from "./src/redux/Store";

export default function App() {
  return (
    <Provider store={store}>
      <AppEntry />
    </Provider>
  );
}
