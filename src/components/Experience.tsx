
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin, TrendingUp } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "AgriIoT Lab Research Intern",
      company: "University of Mines and Technology",
      location: "Tarkwa, Ghana",
      duration: "Jan 2024 - Present",
      type: "Research",
      achievements: [
        "Developed IoT solutions for precision agriculture using LoRa communication",
        "Implemented sensor networks for real-time farm monitoring",
        "Collaborated on agricultural automation systems",
        "Contributed to crop yield prediction research"
      ],
      technologies: ["IoT", "LoRa", "Sensor Networks", "Agriculture Tech", "Data Analytics"]
    },
    {
      title: "Science & Mathematics Tutor",
      company: "Adventist Royal Academy",
      location: "Ghana",
      duration: "Sep 2024 - Jan 2025",
      type: "Education",
      achievements: [
        "Taught science and mathematics to junior high school students (Grades 7-9)",
        "Developed engaging curriculum and assessment methods",
        "Mentored students in STEM subjects",
        "Fostered analytical thinking and problem-solving skills"
      ],
      technologies: ["STEM Education", "Curriculum Design", "Student Mentoring"]
    },
    {
      title: "Branch Manager",
      company: "Obour Herbal and Medical Research Centre",
      location: "Ghana",
      duration: "Nov 2022 - Aug 2023",
      type: "Management",
      highlight: "70% Revenue Increase",
      achievements: [
        "Led digital transformation from paper-based to computerized systems",
        "Achieved 70% increase in annual sales through strategic digitization",
        "Established branch as prominent healthcare facility",
        "Managed operations, staff coordination, and customer relationships",
        "Conducted radio outreach programs for community engagement"
      ],
      technologies: ["Digital Transformation", "Operations Management", "Healthcare Systems"]
    }
  ];

  const education = {
    degree: "Bachelor of Science in Computer Engineering",
    institution: "University of Mines and Technology",
    location: "Tarkwa, Ghana",
    status: "In Progress",
    focus: "Embedded Systems, IoT, Software Engineering"
  };

  return (
    <section className="py-20 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Experience & Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto mb-4"></div>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Professional journey spanning research, education, and business leadership
          </p>
        </div>
        
        {/* Professional Experience */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8">Professional Experience</h3>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card 
                key={index} 
                className="bg-slate-800/30 border-slate-700 hover:bg-slate-700/30 transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl text-white mb-1">
                        {exp.title}
                        {exp.highlight && (
                          <Badge className="ml-3 bg-green-500/20 text-green-400 border-green-500/30">
                            <TrendingUp className="w-3 h-3 mr-1" />
                            {exp.highlight}
                          </Badge>
                        )}
                      </CardTitle>
                      <p className="text-blue-400 font-medium">{exp.company}</p>
                    </div>
                    
                    <div className="flex flex-col md:items-end gap-2">
                      <div className="flex items-center text-slate-400 text-sm">
                        <CalendarDays className="w-4 h-4 mr-1" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center text-slate-400 text-sm">
                        <MapPin className="w-4 h-4 mr-1" />
                        {exp.location}
                      </div>
                      <Badge variant="outline" className="border-slate-600 text-slate-300 w-fit">
                        {exp.type}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start text-slate-300">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="secondary" 
                        className="bg-slate-700/50 text-slate-200 hover:bg-slate-600/50"
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
        
        {/* Education */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8">Education</h3>
          <Card className="bg-slate-800/30 border-slate-700">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <CardTitle className="text-xl text-white mb-1">{education.degree}</CardTitle>
                  <p className="text-blue-400 font-medium">{education.institution}</p>
                </div>
                
                <div className="flex flex-col md:items-end gap-2">
                  <div className="flex items-center text-slate-400 text-sm">
                    <MapPin className="w-4 h-4 mr-1" />
                    {education.location}
                  </div>
                  <Badge variant="outline" className="border-blue-500/30 text-blue-400 w-fit">
                    {education.status}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            
            <CardContent>
              <p className="text-slate-300">
                <span className="font-semibold text-white">Focus Areas:</span> {education.focus}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;
