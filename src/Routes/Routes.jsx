import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";

import Recipes from "../pages/Recipes";
import Login from "../forms/Login";
import SignUp from "../forms/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "chef/:id",
    element: <Recipes></Recipes>,
    loader: ({ params }) => fetch(`http://localhost:5000/chefs/${params.id}`),
  },
]);

export default router;
