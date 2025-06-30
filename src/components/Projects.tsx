
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
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
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto mb-4"></div>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Award-winning applications and innovative solutions spanning IoT, web development, and assistive technologies
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-slate-800/30 border-slate-700 hover:bg-slate-700/30 transition-all duration-300 hover:scale-105 group"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-xl text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {project.title}
                      {project.award && <Award className="inline-block w-5 h-5 text-yellow-500 ml-2" />}
                    </CardTitle>
                    <p className="text-blue-400 font-medium text-sm">{project.subtitle}</p>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <p className="text-slate-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                  <ul className="text-slate-300 text-sm space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="outline" 
                      className="border-blue-500/30 text-blue-400 hover:bg-blue-500/10 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
