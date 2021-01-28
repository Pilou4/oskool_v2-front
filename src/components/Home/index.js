/* eslint-disable react/self-closing-comp */
import React from 'react';
import { Icon } from 'semantic-ui-react';
import ordiTrombi from '../../assets/img/ordi_trombi.webp';
import ordiParent from '../../assets/img/ordi_parent.webp';

import './styles.scss';

const Home = () => (
  <main className="home">
    <div id="corner"></div>
    <section>
      <div className="home__section">
        <img src={ordiTrombi} alt="ordinateur" className="home__section__image" />
        <div className="home__section__info">
          <h2 className="home__section__title">Vous êtes professeur</h2>
          <ul className="home__section__text">
            <li><Icon name="check square" />Retrouver les informations de tous vos élèves.</li>
            <li><Icon name="check square" />Ajouter des évènements scolaires consultables par les parents d'élèves.</li>
            <li><Icon name="check square" />Communiquer directement avec les parents.</li>
          </ul>
        </div>
      </div>
    </section>

    <section>
      <div className="home__section">
        <div className="home__section__info">
          <h2 className="home__section__title">vous êtes parents</h2>
          <ul className="home__section__text">
            <li><Icon name="check square" />Ajouter les informations importantes concernant votre enfant.</li>
            <li><Icon name="check square" />Retrouver les informations de l'enseignant de votre enfant et communiquer directement avec lui.</li>
            <li><Icon name="check square" />Retrouver les sorties scolaires et les modalités de ces dernières dans votre espace personnel.</li>
          </ul>
        </div>
        <img src={ordiParent} alt="" className="home__section__image" />
      </div>
    </section>
  </main>

);

export default Home;
