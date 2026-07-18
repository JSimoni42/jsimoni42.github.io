import React from "react"
import { createRoot } from "react-dom/client"
import { RouterProvider, createBrowserRouter } from "react-router-dom"

import IndexPage from "./pages/index"
import ErrorPage from "./pages/error"
import ResumePage from "./pages/resume"

const rootElement = document.getElementById("root")

if (!rootElement) throw new Error("Root element not found")

const router = createBrowserRouter([
  {
    path: "/resume",
    element: <ResumePage />,
  },
  {
    path: "/",
    element: <IndexPage />,
    errorElement: <ErrorPage />,
  },
])

const root = createRoot(rootElement)
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
