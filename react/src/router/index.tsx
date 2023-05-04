import { createBrowserRouter, redirect } from 'react-router-dom';
import Home from '../components/Home/Home';
import DefaultLayout from '../components/common/DefaultLayout';
import Analytics from '../components/Analytics/Analytics';

const redirectToHome = () => {
  return redirect('/home');
};

export const routes = [
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        path: '/home',
        element: <Home />,
        label: 'home',
      },
      {
        path: '/analysis',
        element: <Analytics />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
