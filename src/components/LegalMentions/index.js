/* eslint-disable max-len */
import React from 'react';
import './styles.scss';

const LegalMentions = () => (
  <main className="LegalMentions">
    <h1 className="LegalMentions__title">MENTIONS LÉGALES</h1>
    <article className="LegalMentions__article">
      <h3 className="LegalMentions__subtitle">Editeur</h3>
      <p>Le site O'skool est édité par l'équipe de développement O'skool </p>
      <h3>Responsable de publication</h3>
      <p>O'skool</p>
      <h3 className="LegalMentions__subtitle">Déclaration CNIL</h3>
      <p>
        Conformément aux dispositions de la loi 78-17 du 6 janvier 1978 modifiée, l’Utilisateur dispose d’un droit d’accès, de modification et de suppression des informations collectées par O'skool.
      </p>
      <p>
        Ce site est proposé en différents langages web (HTML5, Javascript, CSS, etc…) pour un meilleur confort d’utilisation et un graphisme plus agréable, nous vous recommandons de recourir à des navigateurs modernes comme Internet explorer, Safari, Firefox, Google Chrome, etc…
        Toutefois, des erreurs ou omissions peuvent survenir. L’internaute devra donc s’assurer de l’exactitude des informations auprès de , et signaler toutes modifications du site qu’il jugerait utile. n’est en aucun cas responsable de l’utilisation faite de ces informations, et de tout préjudice direct ou indirect pouvant en découler.
      </p>
    </article>
  </main>
);

export default LegalMentions;
