
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "StudyHub Platform",
      subtitle: "Educational Learning Management System",
      description: "Comprehensive learning platform revolutionizing student engagement with interactive course management, real-time collaboration tools, and adaptive learning analytics.",
      technologies: ["React", "Node.js", "MongoDB", "Socket.IO", "JWT", "Tailwind CSS"],
      features: [
        "Interactive course management system",
        "Real-time collaborative study rooms",
        "Progress tracking and analytics",
        "Peer-to-peer learning networks",
        "Mobile-responsive design"
      ],
      link: "https://studdyhub.vercel.app",
      status: "Live"
    },
    {
      title: "ANIWA Smart Lens System",
      subtitle: "🏆 5th Place, 9th UMaT Innovation & Career Fair 2025",
      description: "Award-winning wearable assistive technology system for visually impaired users featuring real-time object detection and OCR text recognition with audio feedback.",
      technologies: ["Raspberry Pi", "YOLOv8", "Tesseract", "Flask", "Flutter", "Socket.IO"],
      features: [
        "Real-time object detection using YOLOv8",
        "OCR text recognition with Tesseract",
        "Flutter mobile companion app",
        "Text-to-speech navigation assistance"
      ],
      award: true
    },
    {
      title: "TomChat - Real-time Messaging Platform",
      subtitle: "WhatsApp-like Communication System",
      description: "Full-featured messaging platform with real-time communication, friend requests, presence indicators, and cross-platform synchronization.",
      technologies: ["Flask", "SQL Server", "React", "JavaFX", "WebSockets"],
      features: [
        "Real-time messaging with WebSockets",
        "Friend request system",
        "Online presence indicators",
        "Web and desktop clients",
        "Message history management"
      ]
    },
    {
      title: "AgroConnect Hub",
      subtitle: "Agricultural E-commerce Platform",
      description: "Responsive dashboard platform connecting farmers with buyers, featuring inventory management and secure transaction processing.",
      technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "REST APIs"],
      features: [
        "Farmer-buyer connection platform",
        "Inventory management dashboard",
        "Secure authentication system",
        "Order processing workflow",
        "Responsive UI components"
      ]
    },
    {
      title: "Corrosion Monitoring System",
      subtitle: "IoT Environmental Monitoring",
      description: "Real-time corrosion detection system using multiple environmental sensors with predictive risk assessment algorithms.",
      technologies: ["Arduino Mega", "Multiple Sensors", "Data Visualization", "Predictive Analytics"],
      features: [
        "Multi-sensor environmental monitoring",
        "Real-time data visualization",
        "Corrosion risk prediction",
        "Magnetic field change detection",
        "IoT dashboard interface"
      ]
    },
    {
      title: "3D Laboratory Simulation",
      subtitle: "Immersive Educational Platform",
      description: "Virtual science laboratory with detailed 3D models and interactive learning environments for educational purposes.",
      technologies: ["Blender", "A-Frame", "WebGL", "3D Modeling"],
      features: [
        "Immersive 3D laboratory environment",
        "Interactive learning simulations",
        "Web-based platform",
        "Real-time user interactions",
        "Educational content integration"
      ]
    }
  ];

  return (
    <section className="py-32 px-4 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 to-slate-800/60"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent flex-1"></div>
            <span className="text-emerald-400 font-mono text-sm tracking-widest uppercase">Portfolio</span>
            <div className="h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent flex-1"></div>
          </div>
          
          <h2 className="text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Selected
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-violet-400">
              Works
            </span>
          </h2>
          
          <p className="text-slate-400 text-xl max-w-3xl leading-relaxed">
            Crafting digital experiences through innovative technology solutions. 
            Each project represents a unique challenge solved with precision and creativity.
          </p>
        </div>
        
        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`group relative ${index % 2 === 0 ? 'lg:pr-32' : 'lg:pl-32'}`}
            >
              {/* Project Number */}
              <div className={`absolute top-0 text-8xl font-bold text-slate-800/30 select-none ${
                index % 2 === 0 ? 'lg:-right-8' : 'lg:-left-8'
              }`}>
                0{index + 1}
              </div>
              
              <Card className="bg-slate-900/80 backdrop-blur-sm border-slate-600/70 hover:border-slate-500/70 transition-all duration-500 group-hover:bg-slate-800/80">
                <CardHeader className="pb-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <CardTitle className="text-2xl text-white group-hover:text-emerald-400 transition-colors duration-300">
                          {project.title}
                        </CardTitle>
                        {project.award && <Award className="w-6 h-6 text-amber-400" />}
                        {project.status && (
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                            <span className="text-green-400 text-sm font-medium">{project.status}</span>
                          </div>
                        )}
                      </div>
                      <p className="text-emerald-400/90 font-medium text-base tracking-wide">{project.subtitle}</p>
                    </div>
                    
                    {project.link && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-12 h-12 rounded-xl bg-slate-700/50 hover:bg-emerald-500/20 border border-slate-600/50 hover:border-emerald-500/50 transition-all duration-300 group/link"
                      >
                        <ExternalLink className="w-5 h-5 text-slate-400 group-hover/link:text-emerald-400 transition-colors" />
                      </a>
                    )}
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Description */}
                    <div className="lg:col-span-2 space-y-6">
                      <p className="text-slate-300 text-lg leading-relaxed">
                        {project.description}
                      </p>
                      
                      {/* Features */}
                      <div>
                        <h4 className="text-white font-semibold mb-4 text-lg">Core Features</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {project.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center gap-3 p-3 rounded-lg bg-slate-800/60 hover:bg-slate-700/60 transition-colors">
                              <div className="w-1.5 h-1.5 bg-gradient-to-r from-emerald-400 to-violet-400 rounded-full"></div>
                              <span className="text-slate-300 text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* Tech Stack */}
                    <div className="space-y-4">
                      <h4 className="text-white font-semibold text-lg">Technology Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge 
                            key={techIndex} 
                            variant="outline" 
                            className="border-slate-600/50 text-slate-300 hover:border-emerald-500/50 hover:text-emerald-400 hover:bg-emerald-500/5 transition-all duration-300 px-3 py-1"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="mt-24 text-center">
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-slate-800/50 border border-slate-700/50">
            <span className="text-slate-300">Interested in collaboration?</span>
            <a href="#contact" className="text-emerald-400 hover:text-emerald-300 transition-colors font-medium">
              Let's connect →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
