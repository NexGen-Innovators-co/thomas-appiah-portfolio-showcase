
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "JavaScript/TypeScript", "Dart", "C/C++", "SQL"],
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Web Development",
      skills: ["React", "Flask", "Node.js", "REST APIs", "WebSockets", "Socket.IO"],
      color: "from-green-500 to-green-600"
    },
    {
      title: "Mobile & Cross-Platform",
      skills: ["Flutter", "Cross-platform development", "Platform Channels"],
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Embedded Systems & IoT",
      skills: ["Raspberry Pi", "Arduino", "LoRa Communication", "GPIO", "I2C", "UART"],
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "AI/ML & Computer Vision",
      skills: ["YOLOv8", "OpenCV", "Tesseract OCR", "OpenAI Whisper"],
      color: "from-red-500 to-red-600"
    },
    {
      title: "Cloud & Database",
      skills: ["Firebase", "Heroku", "SQL Server", "SQLite", "Git/GitHub", "CI/CD"],
      color: "from-teal-500 to-teal-600"
    },
    {
      title: "UI/UX & Styling",
      skills: ["Bootstrap", "Tailwind CSS", "Shadcn/UI", "Responsive design"],
      color: "from-pink-500 to-pink-600"
    },
    {
      title: "3D & Visualization",
      skills: ["Blender", "A-Frame", "WebGL", "Immersive technologies"],
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  return (
    <section className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto mb-4"></div>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit spanning full-stack development, embedded systems, and cutting-edge technologies
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="bg-slate-800/30 border-slate-700 hover:bg-slate-700/30 transition-all duration-300 hover:scale-105"
            >
              <CardContent className="p-6">
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg mb-4 flex items-center justify-center`}>
                  <div className="w-6 h-6 bg-white rounded-sm"></div>
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
