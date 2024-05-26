import { createBrowserRouter } from "react-router-dom";
import MonstadtCharacters from "../pages/MonstadtCharacters";
import Root from "../pages/Root";
import LiyueCharacters from "../pages/LiyueCharacters";
import InazumaCharacters from "../pages/InazumaCharacters";
import SumeruCharacters from "../pages/SumeruCharacters";
import FontaineCharacters from "../pages/FontaineCharacters";
import NatlanCharacters from "../pages/NatlanCharacters";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <MonstadtCharacters />,
      },
      {
        path: "/monstadt",
        element: <MonstadtCharacters />,
      },
      {
        path: "/liyue",
        element: <LiyueCharacters />,
      },
      {
        path: "/inazuma",
        element: <InazumaCharacters />,
      },
      {
        path: "/sumeru",
        element: <SumeruCharacters />,
      },
      {
        path: "/fontaine",
        element: <FontaineCharacters />,
      },
      {
        path: "/natlan",
        element: <NatlanCharacters />,
      },
    ],
  },
]);

export default router;
