import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface SplashScreenProps {
  onComplete: () => void;
  /** how long to stay fully visible before fading out (ms) */
  durationMs?: number;
}

export default function SplashScreen({ onComplete, durationMs = 2000 }: SplashScreenProps) {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsExiting(true), durationMs);
    return () => clearTimeout(timer);
  }, [durationMs]);

  const handleAnimationComplete = () => {
    if (isExiting) onComplete();
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={isExiting ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      onAnimationComplete={handleAnimationComplete}
      // OPAQUE background + block clicks while visible
      className="fixed inset-0 z-50 bg-white flex items-center justify-center overflow-hidden"
    >
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Ripple circles */}
        {[1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            className="absolute border-2 border-primary rounded-full"
            initial={{
              width: "90px",
              height: "90px",
              opacity: 0.9,
            }}
            animate={{
              width: ["90px", "260px", "520px"],
              height: ["90px", "260px", "520px"],
              opacity: [0.9, 0.35, 0],
            }}
            transition={{
              duration: 1.8,
              delay: i * 0.18,
              ease: "easeOut",
              repeat: isExiting ? 0 : Infinity,
            }}
          />
        ))}

        {/* Center dot */}
        <motion.div
          className="absolute w-4 h-4 bg-primary rounded-full"
          animate={
            isExiting
              ? { scale: [1, 1.15, 0], opacity: [1, 1, 0] }
              : { scale: [1, 1.08, 1], opacity: [1, 0.85, 1] }
          }
          transition={{
            duration: isExiting ? 0.4 : 1.2,
            ease: "easeInOut",
            repeat: isExiting ? 0 : Infinity,
          }}
        />
      </div>
    </motion.div>
  );
}

