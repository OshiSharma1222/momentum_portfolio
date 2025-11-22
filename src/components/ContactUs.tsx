"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactUs = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background via-slate-950 to-background relative overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Interactive Map */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-full order-1 lg:order-1"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-500 h-full">
              <iframe
                src="https://www.google.com/maps?q=28.7020712,77.2763602&hl=en&z=15&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="hover:brightness-110 transition-all duration-500"
              ></iframe>
            </div>
            <a 
              href="https://www.google.com/maps/dir/?api=1&destination=28.7020712,77.2763602&destination_place_id=Momentum+Academy+Yamuna+Vihar+Delhi" 
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-cyan-400 hover:text-cyan-300 text-sm underline"
            >
              Get Directions →
            </a>
          </motion.div>

          {/* Contact Info Only */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8 order-2 lg:order-2"
          >
            {/* Contact Cards */}
            <div className="grid gap-4">
              <motion.div 
                whileHover={{ scale: 1.02, x: 10 }}
                className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 backdrop-blur-sm hover:border-cyan-500/40 transition-all cursor-pointer"
              >
                <div className="p-3 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 shadow-lg">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Email</h3>
                  <p className="text-gray-300 text-sm">contact@momentumacademy.edu</p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.02, x: 10 }}
                className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 backdrop-blur-sm hover:border-purple-500/40 transition-all cursor-pointer"
              >
                <div className="p-3 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Phone</h3>
                  <p className="text-gray-300 text-sm">+91 98765 43210</p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.02, x: 10 }}
                className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 backdrop-blur-sm hover:border-blue-500/40 transition-all cursor-pointer"
              >
                <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Address</h3>
                  <p className="text-gray-300 text-sm">
                    C2/30A, Service Ln, Block C<br />
                    Yamuna Vihar, Delhi, 110053
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
