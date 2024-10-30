'use client';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion'; // Import Framer Motion for animations

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const [inView, setInView] = useState(false); // State to check if the component is in view

  const predefinedFeedback = [
    { id: 1, name: 'Soufien Jbeli', feedback: 'Très bon service💯👌', rating: 5 },
    { id: 2, name: 'Ali Dachi', feedback: 'من غير منازعة مفماش خير منكم من إستقبال و جودة 👏❤', rating: 5 },
    { id: 3, name: 'Samer Khemiri', feedback: 'Chhade men andi tbarkla alik walh betawfik 🥰', rating: 5 },
    { id: 4, name: 'Mbarki Mourad Mb', feedback: 'ماشاءالله عليك و ربي يباركلك', rating: 5 },
    { id: 5, name: 'Amor Ben Mahmoud', feedback: 'يعطيك الصحة زيزو الباهي ربي يوفقك و يباركلك', rating: 5 },
    { id: 6, name: 'Hamza MK', feedback: 'حاجة مزيانة برشة و عن تجربة يعطيك الصحة عزيز برافو واصل', rating: 5 },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5, // Stagger each child by 0.5 second
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  // Use Intersection Observer to detect when the component is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // Disconnect observer after the first intersection
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    const section = document.getElementById('feedback-section');
    if (section) {
      observer.observe(section);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Head>
        <title>Commentaires Professionnels</title>
        
      </Head>

      {/* Page Content */}
      <div className="text-[14px] text-neutral-700  flex flex-col items-center p-4   my-14 sm:mt-14 sm:mb-32">
        {/* Title at the top */}
        <h1 className="text-3xl font-bold text-black mt-6 mb-6 text-center">Les avis de nos clients.</h1>

        {/* Predefined Feedback Cards */}
        <motion.div
          id="feedback-section" // Add an ID for the Intersection Observer
          className="mt-8 w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 px-4 lg:px-0"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'} // Trigger animation based on inView state
        >
          {predefinedFeedback.map((item, index) => (
            <motion.div
              key={item.id}
              className={`bg-white p-5 rounded-lg shadow-md transform hover:scale-105 transition-all duration-500 ${index >= 4 && 'hidden sm:block'}`} // Hide extra items on mobile
              variants={itemVariants}
            >
              <h2 className="text-lg font-semibold mb-2 text-black text-center">{item.name}</h2>
              <p className="text-gray-700 text-center">{item.feedback}</p>
              <div className="flex justify-center mt-3">
                {[...Array(item.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
                {[...Array(5 - item.rating)].map((_, i) => (
                  <span key={i} className="text-gray-300 text-lg">★</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Optional Success Popup */}
        {showPopup && (
          <motion.div
            className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white p-5 rounded-xl shadow-lg text-center">
              <p className="text-xl font-semibold">Votre avis a été soumis et sera examiné!</p>
            </div>
          </motion.div>
        )}
      </div>
    </>
  );
}
