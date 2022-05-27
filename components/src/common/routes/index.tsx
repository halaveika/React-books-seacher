import React from 'react';
import AboutPage from '../../pages/about';
import MainPage from '../../pages/main';
import NotFoundPage from '../../pages/not-found';

const routes = [
  { path: '/', element: <MainPage title="cards" /> },
  { path: '/about', element: <AboutPage title="about" /> },
  {
    path: '/404',
    element: <NotFoundPage title="not found page" />,
  },
];

export default routes;
