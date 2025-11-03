import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RESUME_URL = "https://resume-pdf-rajeshvelraj.s3.ap-south-2.amazonaws.com/RajeshKumar_FSD.pdf";
function AboutMe({ aboutMeRef }) {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('about');
  

  const skills = {
    languages: [
      'JavaScript', 'Python', 'Java', 'C', 'C++', 'HTML', 'CSS', 'Dart'
    ],
    frontend: [
      'ReactJS', 'Redux', 'Flutter', 'Bloc'
    ],
    backend: [
      'NodeJS', 'ExpressJS', 'FastAPI'
    ],
    databases: [
      'MongoDB', 'SQL', 'HanaDB', 'Firebase'
    ],
    cloud: [
      'AWS (S3)', 'Microsoft Azure', 'Pamdelina'
    ],
    dataVisualization: [
      'Power BI', 'BOBJ', 'BeX Query', 'SAC'
    ],
    automation: [
      'UFT', 'Selenium', 'OAE', 'TASE'
    ],
    tools: [
      'Git', 'GitHub', 'MasterCraft', 'SAP BI/BW', 'SAP ERP/ECC', 'SAP HANA Studio'
    ],
    libraries: [
      'Pandas', 'NumPy', 'Matplotlib', 'Dotenv', 'HTTP'
    ]
  };

  return (
    <section ref={aboutMeRef} className="min-h-screen flex flex-col items-center justify-center p-4 gap-6 py-20">
      <div className='z-auto text-smoke p-4 md:p-12 lg:p-20 max-w-5xl mx-auto backdrop-blur-3xl rounded-3xl border border-border-color/20 shadow-2xl'>
        
        {/* Header */}
        <div className="mb-8">
          <h1 className='text-4xl font-bold mb-2 bg-linear-to-r from-teal-400 to-purple-500 bg-clip-text text-transparent'>
            Rajesh Kumar V
          </h1>
          <p className='text-xl text-text-main/80'>Full Stack Developer</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-4 mb-8 border-b border-border-color/30">
          <button
            onClick={() => setActiveTab('about')}
            className={`px-6 py-3 font-semibold transition-all ${
              activeTab === 'about'
                ? 'text-teal-400 border-b-2 border-teal-400'
                : 'text-text-main/60 hover:text-text-main'
            }`}
          >
            About
          </button>
          <button
            onClick={() => setActiveTab('skills')}
            className={`px-6 py-3 font-semibold transition-all ${
              activeTab === 'skills'
                ? 'text-teal-400 border-b-2 border-teal-400'
                : 'text-text-main/60 hover:text-text-main'
            }`}
          >
            Skills
          </button>
        </div>

        {/* Tab Content */}
        <div className="min-h-[400px]">
          {activeTab === 'about' && (
            <div className="space-y-6 animate-fadeIn">
              <p className='text-lg leading-relaxed text-text-main/90'>
                Highly skilled and detail-oriented software developer with <span className="text-teal-400 font-semibold">6 years of experience</span> designing, developing, and deploying enterprise-level applications at <span className="text-purple-400 font-semibold">Tata Consultancy Services</span>.
              </p>
              <p className='text-lg leading-relaxed text-text-main/90'>
                Specialized in building modern web applications with expertise in <span className="text-teal-400 font-semibold">ReactJS, NodeJS, Python, and FastAPI</span>. Proven track record in disaster recovery solutions, automation testing, and SAP integrations.
              </p>
              <p className='text-lg leading-relaxed text-text-main/90'>
                Strong problem-solving skills with the ability to work effectively in team-based environments, delivering robust solutions that enhance business continuity and operational efficiency.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <div className="backdrop-blur-lg bg-teal-500/10 border border-teal-500/30 rounded-xl p-4">
                  <div className="text-3xl font-bold text-teal-400">6+</div>
                  <div className="text-sm text-text-main/70">Years Experience</div>
                </div>
                <div className="backdrop-blur-lg bg-indigo-500/10 border border-indigo-500/30 rounded-xl p-4">
                  <div className="text-3xl font-bold text-indigo-400">20+</div>
                  <div className="text-sm text-text-main/70">Technologies</div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'skills' && (
            <div className="space-y-6 animate-fadeIn">
              {/* Languages */}
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-teal-400">Programming Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.languages.map((skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 backdrop-blur-lg bg-smoke/20 border border-border-color/30 rounded-full text-sm text-text-main hover:bg-teal-500/20 hover:border-teal-500/50 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Frontend */}
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-purple-400">Frontend Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.frontend.map((skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 backdrop-blur-lg bg-smoke/20 border border-border-color/30 rounded-full text-sm text-text-main hover:bg-purple-500/20 hover:border-purple-500/50 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Backend */}
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-indigo-400">Backend Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.backend.map((skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 backdrop-blur-lg bg-smoke/20 border border-border-color/30 rounded-full text-sm text-text-main hover:bg-indigo-500/20 hover:border-indigo-500/50 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Databases */}
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-emerald-400">Databases</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.databases.map((skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 backdrop-blur-lg bg-smoke/20 border border-border-color/30 rounded-full text-sm text-text-main hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Cloud */}
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-sky-400">Cloud Platforms</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.cloud.map((skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 backdrop-blur-lg bg-smoke/20 border border-border-color/30 rounded-full text-sm text-text-main hover:bg-sky-500/20 hover:border-sky-500/50 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Data Visualization */}
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-orange-400">Data Visualization</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.dataVisualization.map((skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 backdrop-blur-lg bg-smoke/20 border border-border-color/30 rounded-full text-sm text-text-main hover:bg-orange-500/20 hover:border-orange-500/50 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Automation & Testing */}
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-rose-400">Automation & Testing</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.automation.map((skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 backdrop-blur-lg bg-smoke/20 border border-border-color/30 rounded-full text-sm text-text-main hover:bg-rose-500/20 hover:border-rose-500/50 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tools & Libraries */}
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-amber-400">Tools & Libraries</h3>
                <div className="flex flex-wrap gap-2">
                  {[...skills.tools, ...skills.libraries].map((skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 backdrop-blur-lg bg-smoke/20 border border-border-color/30 rounded-full text-sm text-text-main hover:bg-amber-500/20 hover:border-amber-500/50 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Resume Button */}
        <div className="mt-8 flex justify-center">
          <button 
            className="backdrop-blur-md px-6 py-3 rounded-full text-smoke font-semibold border border-border-color bg-linear-to-r from-teal-500/20 to-purple-500/20 hover:from-teal-500/30 hover:to-purple-500/30 transition-all transform hover:scale-105" 
            onClick={() => { window.open(RESUME_URL, '_blank'); }}
          >
            View Full Resume →
          </button>
        </div>
      </div>

    </section>
  );
}

export default AboutMe;
