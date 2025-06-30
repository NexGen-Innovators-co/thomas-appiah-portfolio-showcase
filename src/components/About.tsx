
import { Card, CardContent } from "@/components/ui/card";
import { Award, TrendingUp, Users, Zap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Award,
      title: "Award Winner",
      description: "5th Place - 9th UMaT Innovation & Career Fair 2025"
    },
    {
      icon: TrendingUp,
      title: "Business Impact",
      description: "Achieved 70% revenue increase through digital transformation"
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Developed ANIWA Smart Lens for visually impaired users"
    },
    {
      icon: Users,
      title: "Leadership",
      description: "Branch management and team coordination experience"
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              I'm an innovative Full-Stack Developer and Embedded Systems Engineer with a passion for creating 
              technology solutions that make a real-world impact. My expertise spans IoT systems, assistive 
              technologies, and scalable web applications.
            </p>
            
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              Currently pursuing Computer Engineering at the University of Mines and Technology while contributing 
              to cutting-edge AgriIoT research. I believe in leveraging technology to solve meaningful problems 
              and create positive change in communities.
            </p>
            
            <p className="text-lg text-slate-300 leading-relaxed">
              My experience ranges from hardware integration and embedded systems to modern web frameworks 
              and mobile development. I'm particularly interested in accessibility technology, AI for social good, 
              and sustainable IoT solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-700/50 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <highlight.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-white font-semibold mb-2">{highlight.title}</h3>
                  <p className="text-slate-400 text-sm">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
