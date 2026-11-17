import React from 'react';

import About from './about/About';
import Home from './home/Home';
import Contact from './contact/Contact';

const routes = {
  '/': <Home />,
  '/about': <About />,
  '/contact': <Contact />,
};

export default function MultiPageRoutes() {
  const pathname = window.location.pathname.replace(/\/+$/, '') || '/';

  return routes[pathname] ?? <Home />;
}