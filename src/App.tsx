import { useState, useEffect } from 'react';
import { ChevronDown, Target, TrendingUp, Mail, Phone, Linkedin, Award, Users, Lightbulb, Rocket, ExternalLink, X } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      const sections = ['hero', 'summary', 'experience', 'projects', 'skills',  'education', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const summary = "Marketing Analyst with 4+ years of experience analyzing and improving marketing performance across education, media, and digital platforms. Delivered a 14% engagement lift and 10% conversion growth by using SQL, GA4, Tableau, and A/B testing to turn marketing data into actionable decisions that improved acquisition and content performance.";

  
  const experience = [
    {
      company: "University of Massachusetts",
      role: "AI Marketing Researcher",
      location: "North Dartmouth, MA",
      dates: "Jun 2025 – Present",
      highlights: [
        "Executed 50+ AI-assisted content testing analyses to identify 20+ SEO visibility gaps, increasing organic discovery by 18%.",
        "Benchmarked 500+ keyword rankings and intent signals in BrightEdge, driving a 15% engagement lift.",
        "Built segmentation models from 10,000+ CRM records defining 6 high-intent personas, improving CTR by 12%.",
        "Developed dashboards tracking 15+ funnel KPIs enabling data-driven outreach optimization (+15% efficiency)."
      ]
    },
    {
      company: "University of Massachusetts",
      role: "Marketing Assistant",
      location: "North Dartmouth, MA",
      dates: "Oct 2023 – May 2025",
      highlights: [
        "Analyzed 15,000+ CRM records to optimize acquisition channels, improving funnel efficiency by 12%.",
        "Built CRO dashboards using Excel, SQL, and Tableau reducing reporting time by 30%.",
        "Improved digital engagement by 14% across email and web campaigns.",
        "Produced weekly analytics insights for stakeholders to drive faster decisions."
      ]
    },
    {
      company: "Filmart Studios (Telemart Network)",
      role: "Advertisement Production Manager",
      location: "Indore, India",
      dates: "May 2021 – Mar 2023",
      highlights: [
        "Maintained 25,000+ record marketing datasets improving targeting accuracy by 18%.",
        "Modeled 10,000+ campaign data points using SQL and Python improving utilization by 22%.",
        "Tracked KPIs across 50+ national TV campaigns increasing operational efficiency by 20%."
      ]
    },
    {
      company: "Byju’s",
      role: "Business Development Associate (Marketing Analytics)",
      location: "Indore, India",
      dates: "Jul 2020 – Dec 2020",
      highlights: [
        "Analyzed 30,000+ inbound leads improving conversion rate by 22%.",
        "Ran A/B testing and SAS funnel analysis improving outreach efficiency by 18%.",
        "Improved campaign ROI by 20% through attribution insights."
      ]
    },
    {
      company: "CreatorUp Inc.",
      role: "Lead Generation Associate",
      location: "Mumbai, India",
      dates: "May 2019 – Jun 2020",
      highlights: [
        "Optimized enrichment workflows across 20,000+ leads reducing manual effort by 40%.",
        "Improved qualified lead conversion by 10% using segmentation analytics."
      ]
    }
  ];


  
  const projects = [
    {
      title: "Marketing Campaign Performance Analytics – Statewide Election",
      subtitle: "Real-time Dashboard Analytics",
      category: "Marketing Analytics",
      introduction: "Built real-time dashboards tracking reach, conversions, and geographic coverage.",
      problem: "Campaign teams lacked centralized visibility of field performance.",
      objective: "Enable faster data-driven campaign execution.",
      methodology: [
        "Integrated live data feeds into Tableau dashboards.",
        "Tracked regional engagement and conversion metrics.",
        "Enabled drill-down reporting for field optimization."
      ],
      results: [
        "Improved target audience coverage by 25%.",
        "Supported execution across 100+ field units.",
        "Enabled leadership to optimize messaging in near real time."
      ],
      conclusion: "Demonstrated real-world analytics impact on large-scale campaign execution."
    }
  ];


  
  const skillCategories = [
    {
      icon: Target,
      title: 'Marketing & Growth',
      skills: ['GA4', 'SEO / SEM', 'Google Ads', 'BrightEdge', 'Attribution Modeling', 'CRO', 'Campaign Analytics']
    },
    {
      icon: TrendingUp,
      title: 'Data & Visualization',
      skills: ['SQL', 'Excel', 'Python (Pandas, Matplotlib)', 'Tableau', 'Looker Studio']
    },
    {
      icon: Users,
      title: 'Experimentation',
      skills: ['A/B Testing', 'Hypothesis Testing', 'Predictive Modeling', 'KPI Reporting']
    },
    {
      icon: Lightbulb,
      title: 'CRM & Platforms',
      skills: ['Salesforce', 'HubSpot', 'Marketo', 'LeadSquared', 'Apollo']
    }
  ];




  return (
    <div className="min-h-screen bg-cream">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-md border-b border-brown/20">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-display text-black tracking-wide">HIMANSHU JAIN</div>
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'hero', label: 'Home' },
                { id: 'summary', label: 'Summary' },
                { id: 'experience', label: 'Experience' },
                { id: 'projects', label: 'Projects' },
                { id: 'skills', label: 'Skills' },
                { id: 'education', label: 'Education' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-light tracking-wide transition-colors duration-300 ${
                    activeSection === item.id ? 'text-black font-medium' : 'text-brown hover:text-black'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="mb-12">
              <img 
                src="images/image.png"
                alt="Himanshu Jain"
                className="w-36 h-36 rounded-full mx-auto mb-6 object-cover border-4 border-brown/30 shadow-lg"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-display text-black mb-6 tracking-wide">
              HIMANSHU JAIN
            </h1>
            <div className="text-lg text-brown mb-2 font-light tracking-widest">
            Marketing Analyst | Growth & Performance Analytics | SQL, GA4, Tableau
            </div>
            <div className="text-sm uppercase tracking-[0.3em] text-brown/80 mb-1">
              NORTH DARTMOUTH, MA, USA
            </div>
            <div className="w-24 h-0.5 bg-brown mx-auto mb-10"></div>
            <p className="text-lg text-brown mb-10 max-w-4xl mx-auto leading-relaxed font-light">
              {summary}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={() => scrollToSection('experience')}
                className="bg-black text-white px-10 py-4 font-light tracking-wide hover:bg-brown transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                🔧 VIEW EXPERIENCE
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="border border-black text-black px-10 py-4 font-light tracking-wide hover:bg-black hover:text-white transition-all duration-300"
              >
                📬 CONTACT
              </button>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16 text-center">
            {[
             
            ].map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-sm shadow-sm border border-brown/10">
                <div className="text-xs tracking-widest text-brown/70 mb-2">{stat.label}</div>
                <div className="text-3xl font-display text-black mb-1">{stat.value}</div>
                <div className="text-sm text-brown font-light">{stat.detail}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <ChevronDown 
              className="w-6 h-6 text-brown/60 mx-auto animate-bounce cursor-pointer hover:text-black transition-colors"
              onClick={() => scrollToSection('summary')}
            />
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section id="summary" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">SUMMARY</h2>
            <p className="text-lg text-brown max-w-3xl mx-auto font-light">
              Tier-1/Tier-2 support specialist who blends automation, cloud awareness, and documentation discipline to keep hybrid environments healthy.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: Target,
                title: 'Incident Readiness',
                detail: 'Built runbooks, on-call notes, and Splunk dashboards to triage outages faster and prevent repeat issues.'
              },
              {
                icon: Rocket,
                title: 'Automation Mindset',
                detail: 'Python + SQL scripts across logs, ETL, and validation workflows cut manual toil by 30-40%.'
              },
              {
                icon: Lightbulb,
                title: 'People-First Support',
                detail: 'Partner with engineering, ops, and business teams to translate technical fixes into user-friendly updates.'
              }
            ].map((card, index) => (
              <div key={index} className="bg-cream p-8 rounded-sm shadow-sm border border-brown/10 text-center">
                <div className="w-14 h-14 bg-black mx-auto mb-6 flex items-center justify-center">
                  <card.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-display text-black mb-4 tracking-wide">{card.title.toUpperCase()}</h3>
                <p className="text-brown leading-relaxed font-light">{card.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">WORK EXPERIENCE</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-3xl mx-auto font-light">
              Focused on resilient infrastructure, accessible support, and measurable uptime.
            </p>
          </div>
          <div className="space-y-10">
            {experience.map((role, index) => (
              <div key={index} className="bg-white p-8 rounded-sm shadow-sm border border-brown/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-display text-black tracking-wide">{role.role}</h3>
                    <p className="text-brown font-medium">{role.company}</p>
                  </div>
                  <div className="text-sm text-brown/80 font-light mt-2 md:mt-0">
                    {role.location} · {role.dates}
                  </div>
                </div>
                <ul className="space-y-3">
                  {role.highlights.map((highlight, i) => (
                    <li key={i} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto  px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">PROJECTS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              Automation, analytics, and infrastructure projects that pair uptime goals with user empathy.
            </p>
          </div>
          <div className="flex justify-center">
          <div className="grid  gap-8 justify-items-center place-content-center">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-cream p-6 rounded-sm hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1 w-full max-w-[320px]"
                onClick={() => setSelectedProject(index)}
              >
                <div className="mb-3">
                  <span className="text-xs font-medium text-brown bg-white px-3 py-1 tracking-wide">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-display text-black mb-3 tracking-wide leading-tight">
                  {project.title}
                </h3>
                <p className="text-sm text-brown mb-4 font-light">
                  {project.subtitle}
                </p>
                <p className="text-brown leading-relaxed font-light text-sm line-clamp-3">
                  {project.introduction}
                </p>
                <div className="mt-4 flex items-center text-brown hover:text-black transition-colors">
                  <span className="text-sm font-light">View Details</span>
                  <ExternalLink className="w-4 h-4 ml-2" />
                </div>
              </div>
            ))}
          </div>
          </div>
          <div className="text-center mt-12">
            <p className="text-brown font-light">
              Need implementation breakdowns or architecture diagrams?
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-black ml-1 font-regular italic"
              >
                Reach out for detailed case studies and logs.
              </button>
            </p>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject !== null && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white max-w-4xl max-h-[90vh] overflow-y-auto rounded-sm">
            <div className="sticky top-0 bg-white border-b border-brown/20 p-6 flex items-center justify-between">
              <h2 className="text-2xl font-display text-black tracking-wide">
                {projects[selectedProject].title}
              </h2>
              <button 
                onClick={() => setSelectedProject(null)}
                className="text-brown hover:text-black transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-6 space-y-8">
              <div>
                <span className="text-sm font-medium text-brown bg-cream px-3 py-1 tracking-wide">
                  {projects[selectedProject].category}
                </span>
                <p className="text-brown font-light mt-2">
                  {projects[selectedProject].subtitle}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">INTRODUCTION</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].introduction}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">PROBLEM STATEMENT</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].problem}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">OBJECTIVE</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].objective}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">METHODOLOGY</h3>
                <ul className="space-y-2">
                  {projects[selectedProject].methodology.map((item, index) => (
                    <li key={index} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">RESULTS</h3>
                <ul className="space-y-2">
                  {projects[selectedProject].results.map((item, index) => (
                    <li key={index} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">CONCLUSION</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].conclusion}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">SKILLS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              Hands-on support, automation, and reporting toolkit
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {skillCategories.map((category, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-black mx-auto mb-8 flex items-center justify-center">
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-display text-black mb-6 tracking-wide">{category.title.toUpperCase()}</h3>
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-sm text-brown font-light">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

     

      {/* Education */}
      <section id="education" className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-display text-black mb-6 tracking-wide">EDUCATION</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-6"></div>
          </div>
          <div className="bg-white p-8 rounded-sm shadow-sm border border-brown/10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-2xl font-display text-black tracking-wide">University of Massachusetts Dartmouth</h3>
                <p className="text-brown font-medium">Master of Business Administration · Business Analytics</p>
              </div>
              <div className="text-sm text-brown/80 font-light mt-2 md:mt-0">
                North Dartmouth, MA · Sep 2023 – May 2025
              </div>
            </div>
            <p className="text-brown leading-relaxed font-light">
              Coursework blending distributed systems, cloud design, and analytics—reinforcing the infrastructure mindset I bring to support roles.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display mb-8 tracking-wide">CONTACT</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-xl text-white/80 max-w-3xl mx-auto font-light">
              Let’s troubleshoot, automate, or brainstorm how to keep your environment resilient.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-8 max-w-md mx-auto">
            <div className="flex items-center">
              <Phone className="w-6 h-6 text-brown mr-6" />
              <a 
                href="tel:+19257655000"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                +1 (774) 503 9829
              </a>
            </div>
            <div className="flex items-center">
              <Linkedin className="w-6 h-6 text-brown mr-6" />
              <a 
                href="https://www.linkedin.com/in/himanshujainn/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
            <div className="flex items-center">
              <Mail className="w-6 h-6 text-brown mr-6" />
              <a 
                href="mailto:himanshuj.mba@gmail.com"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                himanshuj.mba@gmail.com
              </a>
            </div>
            {/* <div className="flex items-center">
              <ExternalLink className="w-6 h-6 text-brown mr-6" />
              <a 
                href="https://git"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                GitHub
              </a>
            </div> */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brown text-white/80 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="font-light tracking-wide">
            © 2025 Himanshu Jain · Technical Support & Infrastructure.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;