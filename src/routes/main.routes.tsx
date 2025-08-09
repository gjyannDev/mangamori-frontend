import App from "@/App";
import DiscoverPage from "@/pages/discover/DiscoverPage";
import HomePage from "@/pages/homepage/HomePage";
import type { RouteObject } from "react-router-dom";

const main_routes: RouteObject = {
  path: "/",
  element: <App />,
  children: [
    { index: true, element: <HomePage /> },
    { path: "discover", element: <DiscoverPage /> },
  ],
};

export default main_routes;
