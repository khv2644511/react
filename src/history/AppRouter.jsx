import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

export default function AppRouter() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <p>Home</p>,
      errorElement: <p>Not Found😝</p>,
    },
    {
      path: "/videos",
      element: <p>Videos</p>,
    },
  ]);

  return <RouterProvider router={router} />;
}
