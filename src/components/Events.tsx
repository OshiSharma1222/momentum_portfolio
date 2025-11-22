import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Calendar, Users } from "lucide-react";

const Events = () => {
  const events = [
    {
      title: "Mastering Chemical Equilibrium: Qc vs Kc Explained with a Fun Analogy",
      description: "An engaging chemistry lecture where Anshul Sir uses a fun analogy. Learn how the comparison between Qc and Kc determines the direction a reaction will proceed.",
      thumbnail: "https://img.youtube.com/vi/xQUv4vR6qAQ/maxresdefault.jpg",
      videoId: "xQUv4vR6qAQ",
      date: "Chemistry Lecture",
      participants: "Anshul Sir",
      videoUrl: "https://www.youtube.com/live/xQUv4vR6qAQ?si=C_4l1u-tCh4uAOz_",
    },
    {
      title: "Thermodynamics Made Simple: First Law, Processes, and Path Dependence",
      description: "Ashish Sir kicks off the thermodynamics series by covering the fundamental laws and concepts, including the Zeroth Law and the Ideal Gas Equation. The lecture provides a deep dive into the First Law of Thermodynamics (Q = ΔU + W)",
      thumbnail: "https://img.youtube.com/vi/FpXYsEA0YtA/maxresdefault.jpg",
      videoId: "FpXYsEA0YtA",
      date: "Physics Lecture",
      participants: "Ashish Sir",
      videoUrl: "https://youtu.be/FpXYsEA0YtA?si=NT-mEJZnnkVpQWli",
    },
    {
      title: "NEET 2024 Success Story: Amaan & Rahul's Journey to NDMC Medical College",
      description: "Two successful NEET 2024 candidates, Amaan Malik (665 marks) and Rahul, share their subject-wise preparation strategies that led them to secure seats at NDMC Medical College. keaways include the focus on NCERT, consistent notes revision, and time management tips.",
      thumbnail: "https://img.youtube.com/vi/WY3JX9TwLHw/maxresdefault.jpg",
      videoId: "WY3JX9TwLHw",
      date: "Success Story",
      participants: "Amaan & Rahul",
      videoUrl: "https://youtu.be/WY3JX9TwLHw?si=M8WPxSZBDb2sQ3W1",
    },
  ];

  return (
    <section id="events" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Content We Deliver
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dive into dynamic study experiences, hands-on tasks, and peer learning environments 
            crafted to elevate your journey at Momentum Academy
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <Card className="overflow-hidden bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,185,255,0.3)] group cursor-pointer h-full"
                onClick={() => window.open(event.videoUrl, '_blank')}
              >
                <div className="relative h-48 overflow-hidden group">
                  <img
                    src={event.thumbnail}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <motion.div 
                      whileHover={{ scale: 1.2 }}
                      className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center shadow-xl"
                    >
                      <svg className="w-6 h-6 ml-1" viewBox="0 0 24 24" fill="white">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </motion.div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-white">{event.title}</h3>
                  <p className="text-muted-foreground mb-4">{event.description}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4 text-primary" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4 text-secondary" />
                      {event.participants}
                    </div>
                  </div>
                  <Button 
                    className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(event.videoUrl, '_blank');
                    }}
                  >
                    Watch Video
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
