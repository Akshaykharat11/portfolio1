"use client";
import { useState } from "react";
import { Mail, Phone, MapPin, Calendar, Flag, Heart, User, Linkedin, Code, Briefcase, GraduationCap, Award, FileText, Github } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>("about");

  const personalInfo = {
    name: "Akshay Ashok Kharat",
    email: "akshaykharatt@gmail.com",
    phone: "9321875166",
    location: "Mumbai",
    dob: "11th August 1996",
    nationality: "Indian",
    maritalStatus: "Married",
    gender: "Male",
    linkedin: "https://www.linkedin.com/in/akshay-kharat-12091a265",
    github: "https://github.com/Akshaykharat11",
    photo: "/profile.jpeg"
  };

  const experience = [
    {
      title: "MERN Stack Developer",
      company: "Nexcore Alliance",
      period: "2025",
      location: "Mumbai, India",
      type: "current"
    },
    {
      title: "Desktop Support Engineer L2",
      company: "Wipro (IT Source Global Service Pvt ltd)",
      client: "Client (Colgate)",
      period: "2024 – 2025",
      location: "Mumbai, India"
    },
    {
      title: "Desktop Support Engineer",
      company: "Wipro (Infiniminds private limited)",
      client: "Client (HDFC Bank)",
      period: "2022 – 2023",
      location: "Mumbai, India"
    }
  ];

  const education = [
    {
      degree: "B.S.C IT",
      institution: "Mumbai University (Valia College)",
      period: "2019 – 2022",
      location: "Mumbai, India"
    },
    {
      degree: "H.S.C",
      institution: "Bharatiya Vidya Bhavans College Of Arts Commerce & Science",
      period: "2017",
      location: "Andheri West, Mumbai, India"
    },
    {
      degree: "S.S.C",
      institution: "Eden High School And Junior College Of Arts Commerce & Science",
      period: "2014",
      location: "Mumbai, India"
    }
  ];

  const skills = {
    technical: ["HTML5", "CSS5", "JavaScript (ES6)", "React.js", "Tailwind CSS", "Next.js", "MongoDB"],
    other: ["Responsive Design", "UI/UX Principles", "API Integration", "State Management (useState, useEffect, Context API)", "Figma Design"]
  };

  const projects = [
    {
      name: "Animated Login Form",
      tech: "Visme + HTML, CSS",
      description: [
        "Designed and implemented an animated login form using Visme's interactive design features and embedded it seamlessly into a custom HTML/CSS webpage.",
        "Created character-based motion animations to enhance user engagement and interactivity.",
        "Developed a responsive layout ensuring compatibility across devices and browsers.",
        "Demonstrated the ability to blend creative design with frontend development, integrating visual storytelling into functional UI."
      ]
    },
    {
      name: "Weather Mood Journal",
      tech: "React.js, Tailwind CSS, OpenWeather API, JavaScript, HTML, CSS",
      description: [
        "Developed a dynamic Weather Mood Journal using React.js and Tailwind CSS.",
        "Integrated OpenWeather API to fetch and display live weather conditions (temperature, humidity, wind).",
        "Implemented mood tracking and timeline visualization for analyzing weather's impact on emotions.",
        "Added responsive UI with background animations and icons for clear weather visualization.",
        "Optimized app performance using React hooks and modular components for reusability."
      ]
    },
    {
      name: "AI Notes Application",
      tech: "React & Tailwind CSS",
      description: [
        "Developed a responsive single-page note-taking application using React, Tailwind CSS, and functional components to manage state and complex UI interactions.",
        "Implemented end-to-end state management for notes, including creation, editing, searching, filtering (by tag), and persistence using localStorage.",
        "Designed a clean, fully responsive UI with complex layout management (flex/grid) to ensure optimal experience on both mobile and desktop.",
        "Integrated a dedicated AI analysis feature to process note content and generate on-demand summaries and sentiment scores (Positive/Negative/Neutral)."
      ]
    }
  ];

  const languages = ["Marathi", "Hindi", "English"];

  const certificates = [
    "Pursued Cyber Security Course from Anudip Foundation",
    "Best Engineer Performance Award Certificate By Wipro (Colgate)"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="bg-black/30 backdrop-blur-md sticky top-0 z-50 border-b border-purple-500/20">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              {personalInfo.name}
            </h1>
            <div className="flex flex-wrap gap-4 text-sm">
              {["about", "experience", "education", "skills", "projects", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`px-4 py-2 rounded-lg transition-all capitalize ${
                    activeSection === section
                      ? "bg-purple-600 text-white shadow-lg shadow-purple-500/50"
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        {/* About Section */}
        {activeSection === "about" && (
          <div className="space-y-8 animate-fadeIn">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <User className="w-8 h-8 text-purple-400" />
                <h2 className="text-3xl font-bold text-white">About Me</h2>
              </div>
              
              {/* Profile Photo */}
              <div className="flex justify-center mb-8">
                <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-purple-500 shadow-2xl shadow-purple-500/50">
                  <Image
                    src={personalInfo.photo}
                    alt={personalInfo.name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-300">
                    <Mail className="w-5 h-5 text-purple-400" />
                    <span>{personalInfo.email}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Phone className="w-5 h-5 text-purple-400" />
                    <span>{personalInfo.phone}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <MapPin className="w-5 h-5 text-purple-400" />
                    <span>{personalInfo.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Calendar className="w-5 h-5 text-purple-400" />
                    <span>{personalInfo.dob}</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-300">
                    <Flag className="w-5 h-5 text-purple-400" />
                    <span>{personalInfo.nationality}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Heart className="w-5 h-5 text-purple-400" />
                    <span>{personalInfo.maritalStatus}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <User className="w-5 h-5 text-purple-400" />
                    <span>{personalInfo.gender}</span>
                  </div>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start">
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all shadow-lg hover:shadow-xl">
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                </a>
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white rounded-lg transition-all shadow-lg hover:shadow-xl">
                  <Github className="w-5 h-5" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
            
            {/* Description */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20 shadow-xl">
              <div className="p-6 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl border border-purple-500/30">
                <h3 className="text-xl font-semibold text-white mb-3">MERN Stack Developer</h3>
                <p className="text-gray-300 leading-relaxed">
                  Passionate MERN Stack Developer with expertise in building modern, responsive web applications. 
                  Experienced in Desktop Support Engineering and currently focused on full-stack development using 
                  cutting-edge technologies like React.js, Next.js, MongoDB, and Tailwind CSS.
                </p>
              </div>
            </div>

            {/* Languages & Certificates */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/20">
                <h3 className="text-xl font-bold text-white mb-4">Languages</h3>
                <div className="flex flex-wrap gap-3">
                  {languages.map((lang, index) => (
                    <span key={index} className="px-4 py-2 bg-purple-600/30 rounded-lg text-gray-200 border border-purple-500/30">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/20">
                <div className="flex items-center gap-2 mb-4">
                  <Award className="w-6 h-6 text-purple-400" />
                  <h3 className="text-xl font-bold text-white">Certificates & Awards</h3>
                </div>
                <ul className="space-y-2">
                  {certificates.map((cert, index) => (
                    <li key={index} className="text-gray-300 flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Experience Section */}
        {activeSection === "experience" && (
          <div className="space-y-6 animate-fadeIn">
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="w-8 h-8 text-purple-400" />
              <h2 className="text-3xl font-bold text-white">Professional Experience</h2>
            </div>
            {experience.map((exp, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20 shadow-xl ${
                exp.type === "current" ? "ring-2 ring-purple-500" : ""
              }`}>
                {exp.type === "current" && (
                  <span className="inline-block px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded-full mb-4">
                    CURRENT POSITION
                  </span>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                <p className="text-purple-400 text-lg mb-2">{exp.company}</p>
                {exp.client && <p className="text-gray-400 mb-2">{exp.client}</p>}
                <div className="flex flex-wrap gap-4 text-gray-300 text-sm">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {exp.location}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Education Section */}
        {activeSection === "education" && (
          <div className="space-y-6 animate-fadeIn">
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-8 h-8 text-purple-400" />
              <h2 className="text-3xl font-bold text-white">Education</h2>
            </div>
            {education.map((edu, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20 shadow-xl">
                <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                <p className="text-purple-400 text-lg mb-2">{edu.institution}</p>
                <div className="flex flex-wrap gap-4 text-gray-300 text-sm">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {edu.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {edu.location}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Skills Section */}
        {activeSection === "skills" && (
          <div className="space-y-6 animate-fadeIn">
            <div className="flex items-center gap-3 mb-8">
              <Code className="w-8 h-8 text-purple-400" />
              <h2 className="text-3xl font-bold text-white">Skills</h2>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-4">Technical Skills</h3>
              <div className="flex flex-wrap gap-3">
                {skills.technical.map((skill, index) => (
                  <span key={index} className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white shadow-lg">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-4">Other Skills</h3>
              <div className="flex flex-wrap gap-3">
                {skills.other.map((skill, index) => (
                  <span key={index} className="px-4 py-2 bg-purple-600/30 rounded-lg text-gray-200 border border-purple-500/30">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Projects Section */}
        {activeSection === "projects" && (
          <div className="space-y-6 animate-fadeIn">
            <div className="flex items-center gap-3 mb-8">
              <FileText className="w-8 h-8 text-purple-400" />
              <h2 className="text-3xl font-bold text-white">Projects</h2>
            </div>
            {projects.map((project, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20 shadow-xl">
                <h3 className="text-2xl font-bold text-white mb-2">{project.name}</h3>
                <p className="text-purple-400 mb-4">
                  <span className="font-semibold">Tech Stack:</span> {project.tech}
                </p>
                <ul className="space-y-2">
                  {project.description.map((desc, i) => (
                    <li key={i} className="text-gray-300 flex items-start gap-2">
                      <span className="text-purple-400 mt-1">•</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* Contact Section */}
        {activeSection === "contact" && (
          <div className="animate-fadeIn">
            <div className="flex items-center gap-3 mb-8">
              <Mail className="w-8 h-8 text-purple-400" />
              <h2 className="text-3xl font-bold text-white">Get In Touch</h2>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-purple-500/20 shadow-xl">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="p-6 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl border border-purple-500/30">
                    <Mail className="w-8 h-8 text-purple-400 mb-3" />
                    <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                    <a href={`mailto:${personalInfo.email}`} className="text-gray-300 hover:text-purple-400 transition-colors">
                      {personalInfo.email}
                    </a>
                  </div>
                  <div className="p-6 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl border border-purple-500/30">
                    <Phone className="w-8 h-8 text-purple-400 mb-3" />
                    <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                    <a href={`tel:${personalInfo.phone}`} className="text-gray-300 hover:text-purple-400 transition-colors">
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="p-6 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl border border-purple-500/30">
                    <MapPin className="w-8 h-8 text-purple-400 mb-3" />
                    <h3 className="text-lg font-semibold text-white mb-2">Location</h3>
                    <p className="text-gray-300">{personalInfo.location}</p>
                  </div>
                  <div className="p-6 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl border border-purple-500/30">
                    <Linkedin className="w-8 h-8 text-purple-400 mb-3" />
                    <h3 className="text-lg font-semibold text-white mb-2">LinkedIn</h3>
                    <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-purple-400 transition-colors">
                      Connect on LinkedIn
                    </a>
                  </div>
                  <div className="p-6 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl border border-purple-500/30">
                    <Github className="w-8 h-8 text-purple-400 mb-3" />
                    <h3 className="text-lg font-semibold text-white mb-2">GitHub</h3>
                    <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-purple-400 transition-colors">
                      View GitHub Profile
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-black/30 backdrop-blur-md border-t border-purple-500/20 mt-20">
        <div className="container mx-auto px-6 py-8">
          <div className="text-center">
            <p className="text-gray-400 mb-2">
              © 2025 {personalInfo.name}. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm">
              Built with Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}
