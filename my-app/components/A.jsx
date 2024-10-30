import React from 'react';

const InfoSection = () => {
  return (
    <div className="bg-white py-10 px-4 sm:px-6 lg:px-8 -mt-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Achetez en ligne sur Vape Tunisie :</h2>
        <p className="text-lg mb-6">
          Avec <span className="font-bold">VapeTunisie</span> profitez d'un large choix de produits aux <span className="font-bold">meilleur prix</span>.
          Nous vous proposons un catalogue diversifié de produits de plusieurs marques aux meilleurs tarifs.
          Nous sommes une entreprise engagée, notre objectif primordial est la satisfaction des besoins et envies de nos clients.
          Les goûts... ça ne se discute pas ! À chacun son shopping, ses préférences et avec VapeTunisie, il y en a pour tous les goûts et pour tous les budgets.
          Faites vos choix et nous vous offrons la garantie d'une <span className="font-bold">livraison fiable</span>, rapide et sécurisée, à domicile.
        </p>
        <p className="text-lg">
          Nous sommes disponibles pour répondre à toutes vos questions - N'hésitez pas à nous contacter via WhatsApp : <span className="font-bold">29 588 272</span>
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        <div>
          <img src="/path/to/icon1.png" alt="Secure Payment" className="mx-auto h-10 w-10" />
          <h3 className="mt-2 text-sm font-bold">100% Sécurisé</h3>
          <p className="text-sm">Paiement</p>
        </div>
        <div>
          <img src="/path/to/icon2.png" alt="Customer Service" className="mx-auto h-10 w-10" />
          <h3 className="mt-2 text-sm font-bold">Service Clients</h3>
          <p className="text-sm">7/7J</p>
        </div>
        <div>
          <img src="/path/to/icon3.png" alt="Quality Guarantee" className="mx-auto h-10 w-10" />
          <h3 className="mt-2 text-sm font-bold">Garantie de la qualité</h3>
          <p className="text-sm">Satisfait ou échangé</p>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
