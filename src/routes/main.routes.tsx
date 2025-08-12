import App from "@/App";
import SigninPage from "@/pages/auth/SigninPage";
import DiscoverPage from "@/pages/discover/DiscoverPage";
import HomePage from "@/pages/homepage/HomePage";
import type { RouteObject } from "react-router-dom";

const main_routes: RouteObject = {
  path: "/",
  element: <App />,
  children: [
    { index: true, element: <HomePage /> },
    { path: "discover", element: <DiscoverPage /> },
    { path: "signin", element: <SigninPage /> }
  ],
};

export default main_routes;
