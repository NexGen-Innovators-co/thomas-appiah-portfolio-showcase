
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Globe, Smartphone, Cpu, Eye, Database, Palette, Box } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "JavaScript/TypeScript", "Dart", "C/C++", "SQL"],
      color: "from-blue-500 to-blue-600",
      icon: Code
    },
    {
      title: "Web Development",
      skills: ["React", "Flask", "Node.js", "REST APIs", "WebSockets", "Socket.IO"],
      color: "from-green-500 to-green-600",
      icon: Globe
    },
    {
      title: "Mobile & Cross-Platform",
      skills: ["Flutter", "Cross-platform development", "Platform Channels"],
      color: "from-purple-500 to-purple-600",
      icon: Smartphone
    },
    {
      title: "Embedded Systems & IoT",
      skills: ["Raspberry Pi", "Arduino", "LoRa Communication", "GPIO", "I2C", "UART"],
      color: "from-orange-500 to-orange-600",
      icon: Cpu
    },
    {
      title: "AI/ML & Computer Vision",
      skills: ["YOLOv8", "OpenCV", "Tesseract OCR", "OpenAI Whisper"],
      color: "from-red-500 to-red-600",
      icon: Eye
    },
    {
      title: "Cloud & Database",
      skills: ["Firebase", "Heroku", "SQL Server", "SQLite", "Git/GitHub", "CI/CD"],
      color: "from-teal-500 to-teal-600",
      icon: Database
    },
    {
      title: "UI/UX & Styling",
      skills: ["Bootstrap", "Tailwind CSS", "Shadcn/UI", "Responsive design"],
      color: "from-pink-500 to-pink-600",
      icon: Palette
    },
    {
      title: "3D & Visualization",
      skills: ["Blender", "A-Frame", "WebGL", "Immersive technologies"],
      color: "from-indigo-500 to-indigo-600",
      icon: Box
    }
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Tech-inspired Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800/90 to-slate-900"></div>
      
      {/* Circuit Board Pattern */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `linear-gradient(90deg, transparent 24%, rgba(16, 185, 129, 0.4) 25%, rgba(16, 185, 129, 0.4) 26%, transparent 27%, transparent 74%, rgba(139, 92, 246, 0.4) 75%, rgba(139, 92, 246, 0.4) 76%, transparent 77%, transparent),
                           linear-gradient(transparent 24%, rgba(16, 185, 129, 0.4) 25%, rgba(16, 185, 129, 0.4) 26%, transparent 27%, transparent 74%, rgba(139, 92, 246, 0.4) 75%, rgba(139, 92, 246, 0.4) 76%, transparent 77%, transparent)`,
          backgroundSize: '80px 80px'
        }}></div>
      </div>
      
      {/* Moving Code Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 text-emerald-500/30 font-mono text-xs animate-pulse">{"{ code: 'innovation' }"}</div>
        <div className="absolute top-1/2 right-0 text-violet-500/30 font-mono text-xs animate-pulse delay-1000">{"<developer />"}</div>
        <div className="absolute bottom-1/4 left-1/4 text-emerald-400/30 font-mono text-xs animate-pulse delay-2000">{"function() { return 'future'; }"}</div>
      </div>
      
      {/* Binary Rain Effect */}
      <div className="absolute inset-0 opacity-10 overflow-hidden">
        <div className="absolute animate-pulse" style={{
          top: '10%', left: '10%', 
          fontFamily: 'monospace', 
          color: 'rgba(16, 185, 129, 0.4)',
          fontSize: '10px',
          lineHeight: '12px'
        }}>
          01010011<br/>01101111<br/>01100110<br/>01110100
        </div>
        <div className="absolute animate-pulse delay-1000" style={{
          top: '20%', right: '15%', 
          fontFamily: 'monospace', 
          color: 'rgba(139, 92, 246, 0.4)',
          fontSize: '10px',
          lineHeight: '12px'
        }}>
          01001000<br/>01100001<br/>01110010<br/>01100100
        </div>
      </div>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-violet-500 mx-auto mb-4"></div>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit spanning full-stack development, embedded systems, and cutting-edge technologies
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="bg-slate-800/60 border-slate-600 hover:bg-slate-700/60 transition-all duration-300 hover:scale-105"
            >
              <CardContent className="p-6">
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg mb-4 flex items-center justify-center`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="bg-slate-700/50 text-slate-200 hover:bg-slate-600/50 transition-colors duration-200"
                    >
                      {skill}
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

export default Skills;
