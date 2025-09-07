
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "twenethomas36@gmail.com",
      href: "mailto:twenethomas36@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+233 271 692 568",
      href: "tel:+233271692568"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Tarkwa, Ghana",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/Twenethomas",
      color: "hover:text-gray-400"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/thomas-appiah",
      color: "hover:text-blue-400"
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:twenethomas36@gmail.com",
      color: "hover:text-green-400"
    }
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Network Connection Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-800/50 to-slate-900"></div>
      
      {/* Connection Lines */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
          <path d="M100,100 Q300,200 500,100 T900,200" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1" fill="none">
            <animate attributeName="stroke-dasharray" values="0,1000;1000,1000;0,1000" dur="8s" repeatCount="indefinite"/>
          </path>
          <path d="M200,300 Q400,200 600,300 T1000,200" stroke="rgba(20, 184, 166, 0.3)" strokeWidth="1" fill="none">
            <animate attributeName="stroke-dasharray" values="0,1000;1000,1000;0,1000" dur="10s" repeatCount="indefinite"/>
          </path>
          <path d="M150,500 Q350,400 550,500 T950,400" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="1" fill="none">
            <animate attributeName="stroke-dasharray" values="0,1000;1000,1000;0,1000" dur="12s" repeatCount="indefinite"/>
          </path>
        </svg>
      </div>
      
      {/* Network Nodes */}
      <div className="absolute top-20 left-20 w-3 h-3 bg-blue-500/50 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-32 w-2 h-2 bg-teal-500/60 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-32 left-32 w-2.5 h-2.5 bg-blue-400/50 rounded-full animate-pulse delay-2000"></div>
      <div className="absolute bottom-20 right-20 w-3 h-3 bg-teal-400/50 rounded-full animate-pulse delay-500"></div>
      <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-blue-300/60 rounded-full animate-pulse delay-1500"></div>
      <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-teal-300/60 rounded-full animate-pulse delay-3000"></div>
      
      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.3) 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }}></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto mb-4"></div>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, innovative projects, or potential collaborations. 
            Let's build something amazing together!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
            <div className="space-y-4 mb-8">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-center group">
                  {contact.href ? (
                    <a 
                      href={contact.href}
                      className="flex items-center w-full p-4 rounded-lg bg-slate-800/30 border border-slate-700 hover:bg-slate-700/30 hover:border-blue-500/30 transition-all duration-300"
                    >
                      <contact.icon className="w-5 h-5 text-blue-400 mr-4 flex-shrink-0" />
                      <div>
                        <p className="text-slate-400 text-sm">{contact.label}</p>
                        <p className="text-white group-hover:text-blue-400 transition-colors">
                          {contact.value}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center w-full p-4 rounded-lg bg-slate-800/30 border border-slate-700">
                      <contact.icon className="w-5 h-5 text-blue-400 mr-4 flex-shrink-0" />
                      <div>
                        <p className="text-slate-400 text-sm">{contact.label}</p>
                        <p className="text-white">{contact.value}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Connect on Social</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-lg bg-slate-800/30 border border-slate-700 hover:bg-slate-700/30 hover:border-blue-500/30 text-slate-400 ${social.color} transition-all duration-300 hover:scale-110`}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Call to Action */}
          <div>
            <Card className="bg-slate-800/30 border-slate-700">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Ready to Collaborate?</h3>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  Whether you're looking for a skilled developer for your next project, 
                  interested in discussing innovative solutions, or simply want to connect 
                  with a fellow tech enthusiast, I'd love to hear from you.
                </p>
                
                <div className="space-y-4">
                  <div className="p-4 bg-slate-900/50 rounded-lg border border-slate-600">
                    <h4 className="text-white font-semibold mb-2">Currently Available For:</h4>
                    <ul className="text-slate-300 text-sm space-y-1">
                      <li>• Full-stack web development projects</li>
                      <li>• IoT and embedded systems consulting</li>
                      <li>• Mobile app development (Flutter)</li>
                      <li>• Assistive technology solutions</li>
                      <li>• Research collaborations</li>
                    </ul>
                  </div>
                  
                  <Button 
                    size="lg" 
                    className="w-full bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white hover:scale-105 transition-all duration-300"
                    asChild
                  >
                    <a href="mailto:twenethomas36@gmail.com">
                      <Send className="w-5 h-5 mr-2" />
                      Send Me a Message
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-slate-700">
          <p className="text-slate-400">
            © 2025 Thomas Appiah. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
