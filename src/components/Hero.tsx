"use client";

import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4 z-10"
        >
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white" style={{ fontFamily: "'Arnoire', serif" }}>
              Welcome to Momentum Academy
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto italic">
              Where aspirations meet the right direction.
            </p>
            <p className="text-lg text-gray-200 mb-20 max-w-3xl mx-auto">"We are the driving force behind tomorrow’s Doctors and Engineers. With expert mentorship and a proven track record in JEE and NEET, we transform potential into performance. Whether you are aiming for the IITs or top Medical Colleges, this is where your journey to the top rank begins.
            </p>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-12"></div>
        </motion.div>
        
        {/* Scroll Indicator - moved outside motion.div */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
          <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-cyan-400 rounded-full" />
          </div>
        </div>
      </AuroraBackground>
    </section>
  );
};

export default Hero;
