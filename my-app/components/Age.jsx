'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // Importing Framer Motion for animations

export default function AgeVerification() {
  const [isVerified, setIsVerified] = useState(() => {
    // Initialize the state based on localStorage during first render
    return localStorage.getItem('ageVerified') === 'true';
  });
  const [showWelcome, setShowWelcome] = useState(false);
  const [showDeny, setShowDeny] = useState(false);

  const handleVerification = (answer) => {
    if (answer === 'yes') {
      setShowWelcome(true);
      setTimeout(() => {
        setShowWelcome(false);
        setIsVerified(true); // After the welcome animation (1 second), allow access
        localStorage.setItem('ageVerified', 'true'); // Store the verification flag in localStorage
      }, 1000); // 1 second delay for the animation
    } else {
      setShowDeny(true); // Show "Access Denied" popup
      setTimeout(() => {
        window.location.href = 'https://google.com'; // Redirect after 2 seconds
      }, 2000); // Delay before redirecting
    }
  };

  // If already verified, do not show the modal
  if (isVerified) {
    return (
      <div>
        {/* Main site content here */}
      </div>
    );
  }

  return (
    <>
      {/* Modal de Vérification d'Âge */}
      {!showWelcome && !showDeny && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center max-w-sm w-full md:max-w-md">
            <motion.img
              src="/vapehood.png" // Replace this with the actual path of your logo
              alt="Vape Hood"
              className="mx-auto mb-4"
              initial={{ y: 0 }}
              animate={{ y: [0, -10, 0] }} // Bouncing effect
              transition={{ repeat: Infinity, duration: 2 }}
            />
            <h2 className="text-xl font-bold mb-4">VÉRIFICATION D{"'"}ÂGE</h2>
            <p className="text-gray-600 mb-4">
              Les produits disponibles sur Vape Hood sont réservés aux adultes d{"'"}âge légal uniquement. En entrant sur notre site Web, vous affirmez que vous êtes d{"'"}âge légal pour fumer dans votre juridiction et que vous acceptez d{"'"}être vérifié par l{"'"}âge.
            </p>
            <p className="text-red-500 font-semibold mb-4">
              Nous ne livrerons pas à toute personne de moins de 21 ans.
            </p>
            <h3 className="font-medium text-lg mb-4">ÊTES-VOUS D{"'"}ÂGE LÉGAL POUR FUMER ?</h3>
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => handleVerification('no')}
                className="bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
              >
                NON
              </button>
              <button
                onClick={() => handleVerification('yes')}
                className="bg-black text-white py-2 px-4 rounded hover:bg-black-700"
              >
                OUI
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Welcome Popup Animation */}
      {showWelcome && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 flex items-center justify-center z-50"
        >
          {/* Add content here for welcome message */}
        </motion.div>
      )}

      {/* Access Denied Popup Animation */}
      {showDeny && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 flex items-center justify-center z-50"
        >
          <div className="bg-white rounded-lg p-8 text-center max-w-sm w-full">
            <h1 className="text-3xl font-bold mb-4 text-red-600">Accès Refusé</h1>
            <p className="text-gray-600 mb-4">Vous devez avoir l{"'"}âge légal pour fumer afin d{"'"}entrer sur ce site.</p>
          </div>
        </motion.div>
      )}
    </>
  );
}
