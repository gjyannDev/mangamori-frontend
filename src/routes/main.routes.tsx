import App from "@/App";
import SigninPage from "@/pages/auth/SigninPage";
import SignupPage from "@/pages/auth/SignupPage";
import DiscoverListPage from "@/pages/discover/DiscoverListPage";
import DiscoverOverviewPage from "@/pages/discover/DiscoverOverviewPage";
import DiscoverPage from "@/pages/discover/DiscoverPage";
import HomePage from "@/pages/homepage/HomePage";
import MangaDetailPage from "@/pages/manga/MangaDetailPage";
import type { RouteObject } from "react-router-dom";
import { mangaDetailsLoader } from "./loaders/manga.loaders";

const main_routes: RouteObject = {
  path: "/",
  element: <App />,
  children: [
    { index: true, element: <HomePage /> },
    {
      path: "discover",
      element: <DiscoverPage />,
      children: [
        { index: true, element: <DiscoverOverviewPage /> },
        { path: ":type", element: <DiscoverListPage /> },
        {
          path: ":type/:id",
          element: <MangaDetailPage />,
          loader: mangaDetailsLoader,
        },
      ],
    },
    { path: "signin", element: <SigninPage /> },
    { path: "signup", element: <SignupPage /> },
  ],
};

export default main_routes;
