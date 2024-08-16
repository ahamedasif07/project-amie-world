import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom';
import Home from './Pages/Home/Home.jsx';
import LayOut from './LayOut.jsx';
import './index.css';

const router = createBrowserRouter([
    {
        path: '/',
        element: <LayOut></LayOut>,
        children: [
            {
                path :'/', 
                element: <Home />,
            },
        ],
    },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);