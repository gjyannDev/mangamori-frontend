import App from "@/App";
import SigninPage from "@/pages/auth/SigninPage";
import SignupPage from "@/pages/auth/SignupPage";
import DiscoverPage from "@/pages/discover/DiscoverPage";
import HomePage from "@/pages/homepage/HomePage";
import type { RouteObject } from "react-router-dom";

const main_routes: RouteObject = {
  path: "/",
  element: <App />,
  children: [
    { index: true, element: <HomePage /> },
    { path: "discover", element: <DiscoverPage /> },
    { path: "signin", element: <SigninPage /> },
    { path: "signup", element: <SignupPage /> },
  ],
};

export default main_routes;
