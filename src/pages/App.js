import '../styles/App.scss';
import { Menu, X } from 'lucide-react';
import React, {useState} from 'react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }
  return (

    <body>
    <header>
        <nav className='section_navbar'>
            <div className='section_navbar__item_container'>
              <h2>PAULA VELOSA</h2>
            </div>
            <div className='section_navbar__item_container' onClick={toggleMenu}>
              {isMenuOpen ? <X color="white" size={40}/> : <Menu color="white" size={40} />}
            </div>
            <div className='section_navbar__item_container'>
              <a href="mailto:paula.velosa2704@gmail.com" className='main_button'> Contactons-Nous </a>
            </div>
        </nav>
    </header>

    {isMenuOpen && (
      <div className='section_navbar section_navbar_menu'>
        <a href="#about">À Propos</a>
        <a href="#projects">Projets</a>
        <a href="#contact">Contact</a>
        <a href="#future-projects">Projets Futurs</a>
      </div>
    )}

    <section className='section_home_hero'>
        <div className='section_home_hero__content'>
          <span>
            <span> Développeuse </span>
            <span className='section_home_hero_mini' > & </span>
          </span>
          <span > 
            créatrice de contenu
          </span>
          <span>
            <span> spécialisée </span>
            <span> dans </span>
          </span>
          <span className='section_home_hero_pop_title'>
            <span className='section_home_hero_pop_title'> le voyage </span>
            <span className='section_home_hero_pop_title section_home_hero_mini'> & </span>
            <span className='section_home_hero_pop_title'> le fitness</span>
          </span>
        </div>
    </section>

    <section id="about">
        
        <h1>Paula Velosa</h1>
        <p>Étudiante en ingénierie des systèmes, passionnée par le développement web et la création de contenu.</p>
    </section>

    <section id="projects">
        <h2>Projets</h2>
        <div class="project">
            <h3 class="text-3xl font-bold underline" >Quanticon Valley</h3>
            <a rel="stylesheet" href="https://www.quanticonvalley.com/"> quanticonvalley </a>
            <p><strong>Technologies utilisées :</strong> Nextjs</p>
            <p>Ce projet est une application web conçue pour gamifier une Cours de l'universidad Nacional de Colombia. Il m'a permis d'explorer le développement frontend en créant une interface 100% personalisé et intuitive. J'ai utilisé des technologies comme Next js pour construire ce projet, et il m'a aidé à améliorer mes compétences en gestion de SVG.</p>
        </div>
        <div class="project">
          <h3>Husky - Une application d'information fiable</h3>
          <a rel="stylesheet" href="https://github.com/martinlecluse/reseau_social_smart24"> github de Husky </a>
          <p><strong>Technologies utilisées :</strong> Node js, Mongoose, Typescript</p>
          <p>Husky est une application innovante conçue pour promouvoir un accès plus éclairé à l'information. L'objectif principal est de fournir aux utilisateurs un fil d'actualité constitué de contenu en lequel ils ont confiance. Grâce à un algorithme de recommandation, Husky permet de paramétrer le fil d'actualité pour offrir des contenus vérifiés et/ou diversifiés selon les préférences de l'utilisateur.</p>
          <p><strong>mon role :</strong>En tant que développeuse backend, j'ai contribué à l'élaboration des principales fonctionnalités de gestion des données et d'interactions utilisateurs. J'ai également participé au développement frontend pour garantir une interface fluide et intuitive. En collaboration avec mon équipe, nous avons livré un MVP fonctionnel en une semaine.

          </p>
        </div>
        <div class="project">
          <h3>Gestion des dossiers médicaux - Architecture Microservicese</h3>
          <a rel="stylesheet" href="https://github.com/unal-arquisoft-2023"> github du projet </a>
          <p><strong>Technologies utilisées :</strong>Architecture Microservices, Java avec Spring Boot pour les microservices, Communication via API REST, Bases de données distribuées, Docker pour le déploiement et l'orchestration</p>
          <p>Ce projet a été développé dans le cadre du cours d'architecture logicielle. Il s'agit d'une application conçue pour la gestion des dossiers médicaux, facilitant l'accès et la mise à jour sécurisée des informations médicales des patients. Le projet repose sur une architecture de microservices, permettant une meilleure modularité, scalabilité, et résilience.</p>
          <p><strong>mon role :</strong>Dans ce projet, j'ai contribué au développement de plusieurs microservices responsables de la gestion des différentes entités du système, comme les dossiers patients, les rendez-vous, et les prescriptions. J'ai également travaillé sur l'intégration des services via des API RESTful et la gestion des communications entre les services à travers des files de messages.

          </p>
        </div>
    </section>

    <section id="contact">
        <h2>Contact</h2>
        <p>Contactez-moi à <a href="mailto:paula.velosa2704@gmail.com">paula.velosa2704@gmail.com</a></p>
    </section>

    <section id="future-projects">
      <h2>Projets Futurs</h2>
      <p>Voici quelques projets sur lesquels je prévois de travailler dans un avenir proche :</p>
      <ul>
          <li>
              <h3>Application de Bien-Être et Fitness</h3>
              <p>Une plateforme interactive pour aider les utilisateurs à suivre leurs objectifs de fitness, avec des fonctionnalités de suivi de l'alimentation, d'exercices et de bien-être mental.</p>
          </li>
          <li>
              <h3>Site Web pour une Agence de Voyage</h3>
              <p>Création d'un site web responsive pour une agence de voyage, intégrant des fonctionnalités de réservation, des guides de destination et du contenu attrayant pour attirer les voyageurs.</p>
          </li>
          <li>
              <h3>Blog sur les Voyages et le Fitness</h3>
              <p>Un blog dédié au partage d'expériences de voyage, de conseils de fitness et de recettes saines, visant à inspirer une communauté active et engagée.</p>
          </li>
      </ul>
  </section>

    <footer>
        <p>&copy; 2024 Paula Velosa</p>
    </footer>
    </body>
    
  );
}

export default App;
