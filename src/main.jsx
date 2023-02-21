import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import Home from "./Home";
import Footer from "./footer";
import ScoreCard from "./ScoreCard";
import { useNavigate } from "react-router-dom";
import About from "./About";
import GameOver from "./GameOver";
import GameCard from "./GameCard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/scores",
    element: <ScoreCard />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/over",
    element: <GameOver />,
  },
  {
    path: "*",
    element: <div>404 NOT FOUND</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>
);
