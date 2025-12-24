
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
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800/40 to-slate-900/60"></div>
      
      {/* Floating Geometric Shapes */}
      <div className="absolute top-10 left-10 w-20 h-20 border border-emerald-500/30 rotate-45 animate-spin" style={{animationDuration: '15s'}}></div>
      <div className="absolute top-32 right-16 w-16 h-16 bg-violet-500/20 rotate-12 animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 border-2 border-emerald-400/25 rounded-full animate-bounce" style={{animationDuration: '6s'}}></div>
      <div className="absolute bottom-40 right-12 w-12 h-12 bg-gradient-to-r from-emerald-500/30 to-violet-500/30 transform rotate-45 animate-pulse delay-1000"></div>
      
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'linear-gradient(rgba(16, 185, 129, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.2) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}></div>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-violet-500 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              I'm an innovative Full-Stack Developer and Embedded Systems Engineer with a passion for creating 
              technology solutions that make a real-world impact. My expertise spans IoT systems, assistive 
              technologies, and scalable web applications.
            </p>
            
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              Currently pursuing Computer Science and Engineering at the University of Mines and Technology while contributing 
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
              <Card key={index} className="bg-slate-800/70 border-slate-600 hover:bg-slate-700/70 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <highlight.icon className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                  <h3 className="text-white font-semibold mb-2">{highlight.title}</h3>
                  <p className="text-slate-400 text-sm">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Award Achievement Section */}
        <div className="bg-slate-800/60 rounded-2xl p-8 border border-slate-600">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-8 h-8 text-amber-400" />
                <h3 className="text-2xl font-bold text-white">Innovation Achievement</h3>
              </div>
              <h4 className="text-xl text-emerald-400 font-semibold mb-4">
                5th Place - 9th UMaT Innovation & Career Fair 2025
              </h4>
              <p className="text-slate-300 leading-relaxed">
                Our team's ANIWA Smart Lens System earned recognition at the prestigious UMaT Innovation Fair. 
                This achievement highlights our commitment to developing assistive technologies that make a real 
                difference in people's lives, particularly for the visually impaired community.
              </p>
            </div>
            <div className="relative">
              <img 
                src="/lovable-uploads/c76743b2-105e-4c74-bdfa-108418083af0.png" 
                alt="Thomas Appiah and team at UMaT Innovation & Career Fair 2025"
                className="rounded-lg shadow-lg w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
