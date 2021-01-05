import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from 'src/containers/Header';
import Home from 'src/components/Home';
import Footer from 'src/components/Footer';
import Login from 'src/containers/Login';
import Subscribe from 'src/containers/Subscribe';
import ParentProfil from 'src/containers/ProfilParent';
import PropTypes from 'prop-types';
import LegalMentions from 'src/components/LegalMentions';
import NotFound from '../NotFound';

// import './styles';

const Oskool = ({ checkIsLogged }) => {
  checkIsLogged();
  return (
    <div className="oskool">
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/subscribe" exact>
          <Subscribe />
        </Route>
        <Route path="/profil" exact>
          <ParentProfil />
        </Route>
        <Route path="/mentions-legales" exact>
          <LegalMentions />
        </Route>
        <Route path="/plan-du-site" exact>
          <div>Plan du site</div>
        </Route>
        <Route path="/contact" exact>
          <div>Contactez-nous</div>
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

Oskool.propTypes = {
  checkIsLogged: PropTypes.func.isRequired,
};

export default Oskool;
