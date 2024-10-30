"use client";
import React from "react";
import "./page.css";

const About = () => {
  return (
    <div className="about-container">
      <section>
        <h2>Notre Histoire</h2>
        <p>
          Découvrez comment notre parcours a commencé, notre passion pour l'industrie de la vape et notre engagement envers nos clients.
        </p>
      </section>

      <section>
        <h2>Notre Mission</h2>
        <p>
          Chez Vapehood, nous nous efforçons de fournir une expérience de vape sans pareille. Notre mission est de vous offrir une gamme complète de produits de haute qualité, alliant innovation, sécurité et satisfaction client.
        </p>
      </section>

      <section>
        <h2>Notre Sélection</h2>
        <p>
          Explorez notre vaste sélection de vapes et d'accessoires soigneusement choisis pour répondre à vos besoins, que vous soyez novice ou expert. Nous sommes fiers d'offrir des produits de haute qualité provenant de marques réputées pour garantir votre plaisir et votre sécurité.
        </p>
      </section>

      <section>
        <h2>Notre Engagement</h2>
        <p>
          Nous croyons en un service client exceptionnel. Notre équipe dédiée est là pour vous guider, vous conseiller et répondre à toutes vos questions. Chez Vapehood, votre satisfaction est notre priorité.
        </p>
      </section>

      <section>
        <h2>Notre Communauté</h2>
        <p>
          Rejoignez une communauté dynamique d'amateurs de vape. Nous organisons des événements, partageons des conseils et créons un espace où les passionnés de vape peuvent se connecter et échanger.
        </p>
      </section>

      <section>
        <h2>Contactez-Nous</h2>
        <p>
          N'hésitez pas à nous contacter pour toute assistance, conseil ou simplement pour partager votre expérience. Nous sommes ici pour vous aider à profiter pleinement de votre parcours dans le monde de la vape.
        </p>
        <p className="note">NB : Nous n'acceptons pas les paiements par chèque ! Merci</p>
      </section>
    </div>
  );
};

export default About;
