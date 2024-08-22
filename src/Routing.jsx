import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import LayOut from "./LayOut.jsx";
import "./index.css";

import Animes from "./Pages/Animes.jsx";
import Movies from "./Pages/Movies.jsx";
import Error from "./Pages/Error.jsx";
import Cartoons from "./Pages/Cartoons.jsx";
import AnimeDetailCard from "./Components/AnimeDetailCard.jsx";
import MoviesDetails from "./Components/MoviesDetails.jsx";
import CarttonDetails from "./Components/CarttonDetails.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut></LayOut>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/anime",
        loader: () => fetch("anime.json"),
        element: <Animes></Animes>,
      },
      {
        path: "/movies",
        loader: () => fetch("movie.json"),
        element: <Movies></Movies>,
      },
      {
        path: "/cartoons",
        loader: () => fetch("cartoon.json"),
        element: <Cartoons></Cartoons>,
      },
      {
        path: "/details/:id",
        loader: () => fetch("anime.json"),
        element: <AnimeDetailCard></AnimeDetailCard>,
      },
      {
        path: "/moviedetails/:id",
        element: <MoviesDetails></MoviesDetails>,
      },
      {
        path: "/carttondetails/:id",
        element: <CarttonDetails></CarttonDetails>,
      },
    ],
  },
]);
