import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-violet-500/10"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(16, 185, 129, 0.08) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(139, 92, 246, 0.08) 0%, transparent 50%)`,
          backgroundSize: '400px 400px',
          animation: 'pulse 4s ease-in-out infinite alternate'
        }}></div>
      </div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-emerald-400/40 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-violet-400/50 rounded-full animate-bounce delay-2000"></div>
        <div className="absolute bottom-1/4 right-1/4 w-1.5 h-1.5 bg-emerald-300/40 rounded-full animate-bounce delay-3000"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-violet-300/50 rounded-full animate-bounce delay-500"></div>
      </div>
      
      {/* Dynamic Gradient Orbs */}
      <div className="absolute top-0 -left-40 w-96 h-96 bg-gradient-to-r from-emerald-500/15 to-teal-500/15 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 -right-40 w-96 h-96 bg-gradient-to-l from-violet-500/15 to-purple-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-emerald-500/8 to-violet-500/8 rounded-full blur-3xl animate-spin" style={{animationDuration: '20s'}}></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Profile Image */}
        <div className="w-40 h-40 mx-auto mb-8 relative">
          <img 
            src="/lovable-uploads/a7595d25-6ef0-4f1c-9b04-7d9074c12441.png" 
            alt="Thomas Appiah - Full-Stack Developer"
            className="w-full h-full rounded-2xl object-cover shadow-2xl border-2 border-slate-700/50 hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-slate-900/20 to-transparent"></div>
        </div>
        
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-fade-in">
          THOMAS APPIAH
        </h1>
        
        <div className="text-xl md:text-2xl text-emerald-400 mb-6 animate-fade-in delay-200">
          <span className="bg-gradient-to-r from-emerald-400 to-violet-400 bg-clip-text text-transparent font-semibold">
            Full-Stack Developer | Embedded Systems Engineer | IoT Specialist
          </span>
        </div>
        
        <p className="text-lg text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-300">
          Award-winning developer with expertise in IoT solutions, assistive technologies, and scalable web applications. 
          Currently pursuing Computer Engineering while contributing to cutting-edge AgriIoT research.
        </p>
        
        {/* Contact Info */}
        <div className="flex flex-wrap justify-center gap-6 mb-8 text-slate-300 animate-fade-in delay-400">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-emerald-400" />
            <span>Tarkwa, Ghana</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-emerald-400" />
            <span>+233 271 692 568</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-emerald-400" />
            <span>twenethomas36@gmail.com</span>
          </div>
        </div>
        
        {/* Social Links */}
        <div className="flex justify-center gap-4 animate-fade-in delay-500">
          <Button 
            variant="outline" 
            size="lg" 
            className="bg-slate-800/50 border-slate-600 hover:bg-slate-700 text-white hover:scale-105 transition-all duration-300"
            asChild
          >
            <a href="https://github.com/Twenethomas" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </a>
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="bg-slate-800/50 border-slate-600 hover:bg-slate-700 text-white hover:scale-105 transition-all duration-300"
            asChild
          >
            <a href="https://linkedin.com/in/thomas-appiah" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </a>
          </Button>
          
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-emerald-500 to-violet-500 hover:from-emerald-600 hover:to-violet-600 text-white hover:scale-105 transition-all duration-300"
            asChild
          >
            <a href="mailto:twenethomas36@gmail.com">
              <Mail className="w-5 h-5 mr-2" />
              Contact Me
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
