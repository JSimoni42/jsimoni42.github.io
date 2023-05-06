import React from "react"
import { createRoot } from "react-dom/client"
import { RouterProvider, createBrowserRouter } from "react-router-dom"

import IndexPage from "./pages/index"
import CreditsPage from "./pages/credits"
import ErrorPage from "./pages/error"

const rootElement = document.getElementById("root")

if (!rootElement) throw new Error("Root element not found")

const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/credits",
    element: <CreditsPage />,
  },
])

const root = createRoot(rootElement)
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
