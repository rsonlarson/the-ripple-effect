import { useEffect, useMemo, useState } from "react";
import {
  Navigate,
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import { ScrollToTop } from "@/lib/scroll-to-top";
import SplashScreen from "@/components/SplashScreen";

import HomePage from "@/components/pages/HomePage";
import AboutPage from "@/components/pages/AboutPage";
import ProjectsPage from "@/components/pages/ProjectsPage";
import ProjectDetailPage from "@/components/pages/ProjectDetailPage";
import DonatePage from "@/components/pages/DonatePage";

// Layout component that includes ScrollToTop and SplashScreen
function Layout() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const splashShown = sessionStorage.getItem("splashScreenShown");
    if (splashShown) setShowSplash(false);
  }, []);

  const handleSplashComplete = () => {
    setShowSplash(false);
    sessionStorage.setItem("splashScreenShown", "true");
  };

  return (
    <>
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      <ScrollToTop />
      <Outlet />
    </>
  );
}

export default function AppRouter() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const router = useMemo(() => {
    if (!isClient) return null;

    return createBrowserRouter(
      [
        {
          path: "/",
          element: <Layout />,
          children: [
            { index: true, element: <HomePage />, handle: { routeMetadata: { pageIdentifier: "home" } } },
            { path: "about", element: <AboutPage />, handle: { routeMetadata: { pageIdentifier: "about" } } },
            { path: "projects", element: <ProjectsPage />, handle: { routeMetadata: { pageIdentifier: "projects" } } },
            { path: "projects/:id", element: <ProjectDetailPage />, handle: { routeMetadata: { pageIdentifier: "project-detail" } } },
            { path: "donate", element: <DonatePage />, handle: { routeMetadata: { pageIdentifier: "donate" } } },
            { path: "*", element: <Navigate to="/" replace /> },
          ],
        },
      ],
      { basename: import.meta.env.BASE_URL }
    );
  }, [isClient]);

  if (!router) return null;

  return <RouterProvider router={router} />;
}
