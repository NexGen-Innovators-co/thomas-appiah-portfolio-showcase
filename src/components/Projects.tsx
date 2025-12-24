
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "StudyHub Platform",
      subtitle: "Educational Learning Management System",
      description: "Comprehensive learning platform revolutionizing student engagement with interactive course management, real-time collaboration tools, and adaptive learning analytics.",
      technologies: ["TypeScript", "React", "Node.js", "MongoDB", "Socket.IO", "Tailwind CSS"],
      features: [
        "Interactive course management system",
        "Real-time collaborative study rooms",
        "Progress tracking and analytics",
        "Peer-to-peer learning networks",
        "Mobile-responsive design"
      ],
      link: "https://studdyhub.vercel.app",
      github: "https://github.com/NexGen-Innovators-co/studdyhub_repo",
      status: "Live"
    },
    {
      title: "Hub of Study Buddies",
      subtitle: "Collaborative Learning Platform",
      description: "A platform designed to connect students for collaborative learning experiences and study group formation.",
      technologies: ["TypeScript", "React", "Tailwind CSS"],
      features: [
        "Study group matching",
        "Collaborative tools",
        "Real-time communication",
        "Learning resource sharing"
      ],
      github: "https://github.com/NexGen-Innovators-co/hub-of-study-buddies"
    },
    {
      title: "MedPrompt",
      subtitle: "Personalized Medical Companion",
      description: "A personalized medical companion application providing health guidance and medical information assistance.",
      technologies: ["Dart", "Flutter", "C++", "CMake"],
      features: [
        "Personalized health recommendations",
        "Medical information lookup",
        "Cross-platform mobile app",
        "Health tracking features"
      ],
      github: "https://github.com/NexGen-Innovators-co/medprompt"
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
      github: "https://github.com/Twenethomas/aniwasmartlens",
      award: true
    },
    {
      title: "TomChat - Real-time Messaging",
      subtitle: "WhatsApp-like Communication System",
      description: "Full-featured messaging platform with real-time communication, friend requests, presence indicators, and cross-platform synchronization.",
      technologies: ["Python", "Flask", "SQL Server", "React", "HTML", "JavaScript", "WebSockets"],
      features: [
        "Real-time messaging with WebSockets",
        "Friend request system",
        "Online presence indicators",
        "Web and desktop clients",
        "Message history management"
      ],
      github: "https://github.com/Twenethomas/TomChatApp"
    },
    {
      title: "AgriConnect Hub",
      subtitle: "Agricultural E-commerce Platform",
      description: "Responsive dashboard platform connecting farmers with buyers, featuring inventory management and secure transaction processing.",
      technologies: ["SCSS", "HTML", "JavaScript", "REST APIs"],
      features: [
        "Farmer-buyer connection platform",
        "Inventory management dashboard",
        "Secure authentication system",
        "Order processing workflow",
        "Responsive UI components"
      ],
      github: "https://github.com/Twenethomas/AgriConnect-Hub"
    },
    {
      title: "Dream House 3D",
      subtitle: "Interactive House Visualization",
      description: "A 3D house visualization and design project showcasing architectural concepts with interactive elements.",
      technologies: ["HTML", "CSS", "JavaScript"],
      features: [
        "3D house visualization",
        "Interactive walkthrough",
        "Responsive design",
        "Architectural showcase"
      ],
      github: "https://github.com/Twenethomas/dreamHousefinished"
    },
    {
      title: "House Simulation in A-Frame",
      subtitle: "Immersive VR Experience",
      description: "Virtual reality house simulation built with A-Frame, providing an immersive 3D walkthrough experience.",
      technologies: ["JavaScript", "A-Frame", "WebGL", "3D Modeling"],
      features: [
        "VR-ready house simulation",
        "Interactive 3D environment",
        "Web-based platform",
        "Immersive walkthrough"
      ],
      github: "https://github.com/Twenethomas/House_simulation_in_aframe"
    },
    {
      title: "Adventist Royal Academy",
      subtitle: "School Website",
      description: "Professional website for Adventist Royal Academy, a basic school, featuring modern design and information management.",
      technologies: ["PHP", "JavaScript", "HTML", "CSS"],
      features: [
        "School information portal",
        "Dynamic content management",
        "Contact and enrollment forms",
        "Responsive design"
      ],
      github: "https://github.com/Twenethomas/Adventistroyal"
    },
    {
      title: "Aracan",
      subtitle: "Web Application",
      description: "A modern web application built with SCSS and JavaScript for enhanced user experience.",
      technologies: ["SCSS", "HTML", "JavaScript"],
      features: [
        "Modern UI design",
        "Responsive layout",
        "Interactive components",
        "Clean architecture"
      ],
      github: "https://github.com/Twenethomas/aracan"
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
                    
                    <div className="flex gap-2">
                      {project.github && (
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-12 h-12 rounded-xl bg-slate-700/50 hover:bg-violet-500/20 border border-slate-600/50 hover:border-violet-500/50 transition-all duration-300 group/link"
                        >
                          <Github className="w-5 h-5 text-slate-400 group-hover/link:text-violet-400 transition-colors" />
                        </a>
                      )}
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
