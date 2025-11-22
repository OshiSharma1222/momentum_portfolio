import { motion } from "framer-motion";
import { Italic } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left side - Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="pt-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Driven by Vision
            </h2>
            <p className="text-3xl md:text-4xl font-bold text-blue-500 mb-6">
              Defined by Impact
            </p>
            <p className="text-base text-gray-300 leading-relaxed mb-6">
              The <strong>Momentum Academy </strong> is a premier educational institute in Yamuna Vihar dedicated to fostering academic brilliance among aspiring engineers and doctors. In a competitive landscape where the right guidance is crucial for success, we bridge the gap between potential and performance for students targeting JEE and NEET.
            </p>
            <p className="text-base text-gray-300 leading-relaxed mb-6">
              We are working towards providing comprehensive conceptual clarity and strategic exam preparation.
              With our <strong>expert faculty, Daily Practice Problems (DPPs), Weekly Test Series, and personalized mentorship </strong> from industry veterans, we create a disciplined ecosystem for learning. 
              The team’s dedication is evident in our remarkable impact, 
              with <strong>hundreds of selections in top Medical and Engineering colleges</strong> and
              a consistent track record of producing top rankers every year..
            </p>
            
          </motion.div>

          {/* Right side - Images */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="rounded-2xl overflow-hidden border-2 border-gray-800 hover:border-blue-500/50 transition-all duration-300 h-[300px]"
            >
              <img 
                src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=500&h=600&fit=crop" 
                alt="Team collaboration" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="rounded-2xl overflow-hidden border-2 border-gray-800 hover:border-blue-500/50 transition-all duration-300 h-[300px] mt-12"
            >
              <img 
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&h=600&fit=crop" 
                alt="Innovation event" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
