import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./layout/Layout";
import Films from "./films";
import Film from "./films/[id]/index";
import Characters from "./people";
import Character from "./people/[id]/index";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { index: true, element: <Films /> },
      { path: "/:id", element: <Film /> },
      { path: "/people", element: <Characters /> },
      { path: "/people/:id", element: <Character /> },
    ],
  },
]);

const Routes = () => <RouterProvider router={router} />;

export default Routes;
