import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Trigger exit animation after 3 seconds
    const timer = setTimeout(() => {
      setIsExiting(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleAnimationComplete = () => {
    if (isExiting) {
      onComplete();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={isExiting ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      onAnimationComplete={handleAnimationComplete}
      className="fixed inset-0 z-50 bg-softbeige flex items-center justify-center overflow-hidden pointer-events-none"
    >
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Ripple circles */}
        {[1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            className="absolute border-2 border-primary rounded-full"
            initial={{
              width: '100px',
              height: '100px',
              opacity: 0.8,
            }}
            animate={{
              width: ['100px', '400px', '800px'],
              height: ['100px', '400px', '800px'],
              opacity: [0.8, 0.4, 0],
            }}
            transition={{
              duration: 2.5,
              delay: i * 0.3,
              ease: 'easeOut',
              repeat: isExiting ? 0 : Infinity,
            }}
          />
        ))}

        {/* Center dot */}
        <motion.div
          className="absolute w-4 h-4 bg-primary rounded-full"
          animate={
            isExiting
              ? {
                  scale: [1, 1.2, 0],
                  opacity: [1, 1, 0],
                }
              : {
                  scale: [1, 1.1, 1],
                  opacity: [1, 0.8, 1],
                }
          }
          transition={{
            duration: isExiting ? 0.8 : 1.5,
            ease: 'easeInOut',
            repeat: isExiting ? 0 : Infinity,
          }}
        />

        {/* Text that fades in then out */}
        <motion.div
          className="absolute text-center"
          initial={{ opacity: 0 }}
          animate={isExiting ? { opacity: 0 } : { opacity: [0, 1, 1, 0] }}
          transition={{
            duration: 3,
            times: [0, 0.3, 0.7, 1],
            ease: 'easeInOut',
          }}
        >
          <h1 className="font-heading text-5xl md:text-6xl text-primary mb-4">
            THE RIPPLE
          </h1>
          <p className="font-paragraph text-lg text-secondary">
            Creating waves of positive change
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
