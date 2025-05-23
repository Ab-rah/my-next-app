import { useState, useEffect } from "react";
import { Code, Coffee, Cpu, Database, Layout, Server, Users, Zap } from "lucide-react";

export default function AboutMe() {
  const [isVisible, setIsVisible] = useState(false);
  
  // Animation trigger on scroll
  useEffect(() => {
    const handleScroll = () => {
      // Trigger animation when user scrolls to this section
      const scrollPosition = window.scrollY;
      if (scrollPosition > 600) {
        setIsVisible(true);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Skills with icons
  const skills = [
    { name: "Frontend Development", icon: <Layout />, description: "Creating responsive and accessible user interfaces with modern frameworks" },
    { name: "Backend Development", icon: <Server />, description: "Building scalable APIs and server-side applications" },
    { name: "Database Design", icon: <Database />, description: "Designing efficient database schemas and writing optimized queries" },
    { name: "UI/UX Design", icon: <Users />, description: "Crafting intuitive user experiences with a focus on usability" },
    { name: "Performance Optimization", icon: <Zap />, description: "Optimizing applications for speed and efficiency" },
    { name: "DevOps", icon: <Cpu />, description: "Setting up CI/CD pipelines and managing cloud infrastructure" }
  ];

  return (
    <div className="relative w-full bg-gradient-to-b from-purple-950 to-indigo-950 py-24 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Center gradient circle */}
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-600/20 rounded-full filter blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        
        {/* Bottom right gradient circle */}
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-600/20 rounded-full filter blur-3xl"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      {/* Content container */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Profile visual */}
          <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="relative">
              {/* Main profile card */}
              <div className="relative rounded-2xl overflow-hidden border border-white/20 backdrop-blur-md bg-gradient-to-br from-white/10 to-white/5 p-1 shadow-xl">
                <div className="bg-gradient-to-br from-indigo-900/80 to-purple-900/80 rounded-xl overflow-hidden p-8">
                  {/* Profile image and decorative elements */}
                  <div className="flex justify-center mb-8 relative">
                    <div className="relative">
                      {/* Abstract background shape */}
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full transform scale-110 blur-lg opacity-50"></div>
                      
                      {/* Profile image placeholder */}
                      <div className="relative w-48 h-48 rounded-full border-4 border-white/20 overflow-hidden">
                        <img src="/api/placeholder/200/200" alt="Profile" className="w-full h-full object-cover" />
                      </div>
                      
                      {/* Decorative elements */}
                      <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-gradient-to-r from-cyan-400 to-cyan-500 flex items-center justify-center text-white">
                        <Code size={20} />
                      </div>
                      <div className="absolute bottom-0 -left-4 w-12 h-12 rounded-full bg-gradient-to-r from-purple-400 to-purple-500 flex items-center justify-center text-white">
                        <Coffee size={24} />
                      </div>
                    </div>
                  </div>
                  
                  {/* Stats and metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="text-center p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                      <div className="text-3xl font-bold text-white mb-1">1.5</div>
                      <div className="text-xs text-white/70">Years Experience</div>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                      <div className="text-3xl font-bold text-white mb-1">5+</div>
                      <div className="text-xs text-white/70">Projects</div>
                    </div>
                    <div className="text-center p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                      <div className="text-3xl font-bold text-white mb-1">5+</div>
                      <div className="text-xs text-white/70">Happy Clients</div>
                    </div>
                  </div>
                  
                  {/* Tech stack */}
                  <div>
                    <h3 className="text-white text-sm font-medium mb-3">Tech Stack</h3>
                    <div className="flex flex-wrap gap-2">
                    <div className="px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500/20 to-cyan-500/10 text-cyan-300 text-xs border border-cyan-500/30">
                        Python
                      </div>
                      <div className="px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500/20 to-cyan-500/10 text-cyan-300 text-xs border border-cyan-500/30">
                        React.js
                      </div>
                      <div className="px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/20 to-blue-500/10 text-blue-300 text-xs border border-blue-500/30">
                        Next.js
                      </div>
                      <div className="px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-purple-500/10 text-purple-300 text-xs border border-purple-500/30">
                        Node.js
                      </div>
                      <div className="px-3 py-1 rounded-full bg-gradient-to-r from-green-500/20 to-green-500/10 text-green-300 text-xs border border-green-500/30">
                        MongoDB
                      </div>
                      <div className="px-3 py-1 rounded-full bg-gradient-to-r from-pink-500/20 to-pink-500/10 text-pink-300 text-xs border border-pink-500/30">
                        GraphQL
                      </div>
                      <div className="px-3 py-1 rounded-full bg-gradient-to-r from-yellow-500/20 to-yellow-500/10 text-yellow-300 text-xs border border-yellow-500/30">
                        JavaScript
                      </div>
                      <div className="px-3 py-1 rounded-full bg-gradient-to-r from-indigo-500/20 to-indigo-500/10 text-indigo-300 text-xs border border-indigo-500/30">
                        TypeScript
                      </div>
                      <div className="px-3 py-1 rounded-full bg-gradient-to-r from-teal-500/20 to-teal-500/10 text-teal-300 text-xs border border-teal-500/30">
                        TailwindCSS
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative floating elements */}
              <div className="absolute -top-6 -right-6 w-16 h-16 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-500 shadow-lg transform -rotate-12 animate-float">
                <div className="w-full h-full flex items-center justify-center text-white">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.258 9.77251 19.9887C9.5799 19.7194 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6643 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742 9.96512 4.0113 9.77251C4.28059 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50054 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.10405 7.04 4.29L7.1 4.35C7.33568 4.58054 7.63502 4.73519 7.95941 4.794C8.28381 4.85282 8.61838 4.81312 8.92 4.68H9C9.29577 4.55324 9.54802 4.34276 9.72569 4.07447C9.90337 3.80618 9.99872 3.49179 10 3.17V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right column - About text */}
          <div className={`transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {/* Section badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm mb-6 border border-white/10">
              <span className="w-2 h-2 rounded-full bg-cyan-400 mr-2 animate-pulse"></span>
              <span className="text-xs font-medium text-cyan-400">About Me</span>
            </div>
            
            {/* Section headline */}
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Passionate <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Full-Stack Developer</span></h2>
            
            {/* About text */}
            <div className="text-white/70 space-y-4 mb-8">
              <p>
                I'm a full-stack developer with a passion for creating beautiful, functional, and user-friendly web applications. With over 5 years of experience in the industry, I've worked on a wide range of projects from small business websites to complex enterprise applications.
              </p>
              <p>
                My journey in web development began with a curiosity about how things work on the internet. This curiosity has evolved into a deep understanding of modern web technologies and best practices. I believe in writing clean, maintainable code and building applications that provide real value to users.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through blog posts and tutorials.
              </p>
            </div>
            
            {/* Skills list */}
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">What I Do</h3>
              <div className="grid grid-cols-1 gap-4">
                {skills.map((skill, index) => (
                  <div 
                    key={index} 
                    className="flex gap-4 items-start p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:bg-white/10"
                  >
                    <div className="text-cyan-400 mt-1">
                      {skill.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">{skill.name}</h4>
                      <p className="text-white/70 text-sm">{skill.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}