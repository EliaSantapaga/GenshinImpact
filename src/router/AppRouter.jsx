import { createBrowserRouter } from "react-router-dom";
import Characters from "../pages/Characters";
import Root from "../pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Characters />,
      },
    ],
  },
]);

export default router;
