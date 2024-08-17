import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom';
import Home from './Pages/Home/Home.jsx';
import LayOut from './LayOut.jsx';
import './index.css';

import Animes from './Pages/Animes.jsx';
import Movies from './Pages/Movies.jsx';
import Error from './Pages/Error.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <LayOut></LayOut>,
        // errorElement : <Error></Error>,
        children: [
            {
                path :'/', 
                element: <Home />,
            },
            {
                path : '/anime',
                loader : ()=> fetch('anime.json'),
                element : <Animes></Animes>
            },
            {
                path :'/movies',
                loader : ()=> fetch('movie.json'),
                element : <Movies></Movies>
            }
        ],
    },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);