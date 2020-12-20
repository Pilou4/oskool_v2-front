import React from 'react';
import { Route } from 'react-router-dom';

import './styles.scss';

// quand on ne précise pas de path a un composant Route, celui-ci est afficher tout le temps
// s'il est inséré dans un Switch, il sera considéré comme le default de ce Switch
const NotFound = () => (
  <Route>
    <div className="error">
      <p className="error__text">404</p>
    </div>
  </Route>
);

export default NotFound;
