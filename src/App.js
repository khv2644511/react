import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../src/components/pages/Home";
import NotFound from "./components/pages/NotFound";
import Root from "./components/pages/Root";
import Videos from "./components/pages/Videos";
import VideoDetail from "./components/pages/VideoDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "videos", element: <Videos /> },
      { path: "videos/:videoId", element: <VideoDetail /> },
    ],
  },
]);

export default function APP() {
  return <RouterProvider router={router} />;
}
