import React from 'react';
import AboutPage from '../../pages/about';
import MainPage from '../../pages/main';
import ProfilePage from '../../pages/profile';
import NotFoundPage from '../../pages/not-found';
import DetailsPage from '../../pages/details';

const routes = [
  { path: '/', element: <MainPage title="cards" /> },
  { path: '/about', element: <AboutPage title="about" /> },
  { path: '/profile', element: <ProfilePage title="order" /> },
  { path: '/details', element: <DetailsPage title="details" /> },
  {
    path: '/404',
    element: <NotFoundPage title="not found page" />,
  },
];

export default routes;
