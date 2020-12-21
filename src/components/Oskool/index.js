import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from 'src/components/Header';
import Home from 'src/components/Home';
import Footer from 'src/components/Footer';
import Login from 'src/components/Login';
import LegalMentions from 'src/components/LegalMentions';
import NotFound from '../NotFound';

// import './styles';

const Oskool = () => (
  <div className="oskool">
    <Header />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/login" exact>
        <Login />
      </Route>
      <Route path="/subscrible" exact>
        <div>subscrible</div>
      </Route>
      <Route path="/profil" exact>
        <div>profil</div>
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

export default Oskool;
