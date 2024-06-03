import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    createBrowserRouter,
    Navigate,
    Outlet,
    RouterProvider,
} from 'react-router-dom'
import './index.css'

// local imports
import Home from './pages/Home'
import Root from './routes/Root'
import Error from './pages/Error'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Navigate to="/home" />,
            },
            {
                path: 'home',
                element: <Home />,
            },
        ],
    },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
