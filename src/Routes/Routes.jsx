import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";

import Recipes from "../pages/Recipes";
import Login from "../forms/Login";
import SignUp from "../forms/SignUp";
import ErrorPage from "../pages/ErrorPage";
import Blog from "../pages/Blog";
import PrivateRoute from "./PrivateRoute";
import Favorite from "../pages/Favorite";
import cartLoader from "../CustomLoader/cartLoader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
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
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/favorite",
        element: (
          <PrivateRoute>
            <Favorite></Favorite>
          </PrivateRoute>
        ),
        loader: cartLoader,
      },
      {
        path: "chef/:id",
        element: (
          <PrivateRoute>
            <Recipes></Recipes>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://chef-server-phi.vercel.app/chefs/${params.id}`)
            .then((res) => res.json())
            .then((data) => data),
      },
    ],
  },
]);

export default router;
