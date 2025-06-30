
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-pattern" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Profile Image Placeholder */}
        <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 to-teal-500 p-1">
          <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center text-4xl font-bold text-white">
            TA
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-fade-in">
          THOMAS APPIAH
        </h1>
        
        <div className="text-xl md:text-2xl text-blue-400 mb-6 animate-fade-in delay-200">
          <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent font-semibold">
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
            <MapPin className="w-4 h-4 text-blue-400" />
            <span>Tarkwa, Ghana</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-blue-400" />
            <span>+233 271 692 568</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-blue-400" />
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
            className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white hover:scale-105 transition-all duration-300"
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
