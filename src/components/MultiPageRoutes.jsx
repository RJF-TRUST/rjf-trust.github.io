import React from 'react';

import About from './about/About';
import Home from './home/Home';
import Portfolio from './portfolio/Portfolio';

const routes = {
  '/': <Home />,
  '/about': <About />,
  '/portfolio': <Portfolio />,
};

export default function MultiPageRoutes() {
  const pathname = window.location.pathname.replace(/\/+$/, '') || '/';

  return routes[pathname] ?? <Home />;
}