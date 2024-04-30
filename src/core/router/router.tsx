import { createBrowserRouter, Outlet } from "react-router-dom";
import HelloWorldPage from "../../pages/HelloWorld";
import HomePage from "../../pages/Home";
import RootLayout from "../../template/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <RootLayout>
        <Outlet />
      </RootLayout>
    ),
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/helloworld",
        element: <HelloWorldPage />,
      },
    ],
  },
]);

  export default router;