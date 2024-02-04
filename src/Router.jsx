import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Shop from './components/Shop'
import ErrorPage from './components/ErrorPage'

import App from './App'
import Home from './components/Home'

function Router() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <App />,
            errorElement: <ErrorPage />,
            children: [
                {
                    index: true,
                    element: <Home />,
                },
                {
                    path: 'Shop',
                    element: <Shop  />,
                },
            ],
        },
    ])
    return <RouterProvider router={router} />
}

export default Router
