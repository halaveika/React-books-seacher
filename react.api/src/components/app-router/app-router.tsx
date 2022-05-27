import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import routes from '../../common/routes';

class AppRouter extends React.Component {
  render() {
    return (
      <Routes>
        {routes.map((route) => (
          <Route path={route.path} element={route.element} key={route.path} />
        ))}
        <Route path="*" element={<Navigate replace to="/404" />} />
      </Routes>
    );
  }
}

export default AppRouter;
