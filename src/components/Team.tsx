import team1 from "@/assets/team-member-1.jpg";
import team2 from "@/assets/team-member-2.jpg";
import team3 from "@/assets/team-member-3.jpg";
import { Card } from "@/components/ui/card";
import { Linkedin, Mail, Twitter } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "President",
      image: team1,
      bio: "Leading Momentum Academy with a vision to empower the next generation of entrepreneurs.",
    },
    {
      name: "Sarah Chen",
      role: "Vice President",
      image: team2,
      bio: "Passionate about creating opportunities for students to turn their ideas into reality.",
    },
    {
      name: "Michael Rodriguez",
      role: "Events Director",
      image: team3,
      bio: "Orchestrating memorable events that inspire innovation and foster collaboration.",
    },
  ];

  return (
    <section id="team" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Meet Our Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dedicated leaders driving innovation and fostering an entrepreneurial culture.
          </p>
        </div>

        <div className="flex gap-8 overflow-x-auto pb-4 snap-x snap-mandatory">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="flex-none w-[300px] md:w-[350px] overflow-hidden bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,185,255,0.3)] group animate-fade-in snap-center"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
              </div>
              <div className="p-6 -mt-20 relative z-10">
                <h3 className="text-2xl font-bold mb-1 text-foreground">{member.name}</h3>
                <p className="text-primary font-semibold mb-3">{member.role}</p>
                <p className="text-muted-foreground mb-4">{member.bio}</p>
                <div className="flex gap-3">
                  <button className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </button>
                  <button className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Twitter className="w-5 h-5" />
                  </button>
                  <button className="p-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Mail className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
