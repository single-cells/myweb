import React from "react";
import { RouterProvider } from "react-router-dom";
import { _router } from "./assets/router/router";

import "./assets/i18n/i18n.js"



function App() {
  return (

    <RouterProvider router={_router}></RouterProvider>

  );
}

export default App;
