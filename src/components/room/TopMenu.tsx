import React from 'react';
import { HashRouter, Link } from 'react-router-dom';

export const TopMenu: React.FC = () => (
  <HashRouter>
    <Link to='/register'>Register</Link>
    <Link to='/login'>Login</Link>
  </HashRouter>
);
