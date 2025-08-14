// import logo from "./logo.svg";
import "./App.css";
// import LetterGlitch from "./tools/Background";
import TypingText from "./tools/TerminalTypingEffect";
// import image from "./asset/mainhero.jpg";
import profileImage from "./asset/aboutsticker.png";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
// import CircularGallery from "./tools/CircularGallery";
// import SpotlightCard from "./tools/SpotlightCard";
// import SplashCursor from "./tools/SplashCursor";
// import PixelCard from "./tools/PixelCard";
import ppthandlerprojectimagefrom from "./asset/ppthandler.png";
import healthhubprojectimagefrom from "./asset/healthhubss.png";
import collegesurferprojectimagefrom from "./asset/collegesurfer.png";
import Dock from "./tools/Dock";
import { FaHome, FaUser, FaCode, FaTasks, FaEnvelope, FaGraduationCap, FaSchool, FaUniversity, FaRegCommentDots, FaPaperPlane, FaMapMarkerAlt, FaPhone, FaClock, FaWhatsapp, FaExternalLinkAlt } from "react-icons/fa";
import { useRef, useState } from "react";
import useInView from "./tools/useInView";
// import { IconCloud } from "./tools/logoCloud";
// import TechMarquee from "./tools/techMarquee";
// import Squares from "./tools/Backgrounds/Squares/Squares";
import VideoKrishna from "./asset/krishna.mp4";
import ChromaGrid from "./tools/Components/ChromaGrid/ChromaGrid";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];
function App() {
  //
  //contact
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();
    
    setStatus("Sending...");

    try {
      const response = await fetch("https://formspree.io/f/mvgqoypz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send. Try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Error sending message.");
    }
    
    return false; // Additional safeguard
  };
  //contact
  const skillImages = [
    {
      image: "https://img.icons8.com/color/96/javascript.png",
      text: "JavaScript",
    },
    { image: "https://img.icons8.com/color/96/python.png", text: "Python" },
    { image: "https://img.icons8.com/color/96/java.png", text: "Java" },
    { image: "https://img.icons8.com/color/96/html-5.png", text: "HTML" },
    { image: "https://img.icons8.com/color/96/css3.png", text: "CSS" },
    { image: "https://img.icons8.com/color/96/mysql.png", text: "SQL" },
    {
      image: "https://img.icons8.com/color/96/react-native.png",
      text: "React",
    },
    { image: "https://img.icons8.com/color/96/nodejs.png", text: "Node.js" },
    { image: "https://img.icons8.com/color/96/firebase.png", text: "Firebase" },
    { image: "https://img.icons8.com/color/96/docker.png", text: "Docker" },
  ];
  const educationData = [
    {
      title: "10th Board",
      place: "SSC Maharastra • Jalna, India",
      period: "2021 COMPLETED",
      icon: <FaSchool size={20} />,
    },
    {
      title: "Diploma in Computer Engineering",
      place: "MSBTE • Gondia, India",
      period: "2021 - 2024",
      icon: <FaGraduationCap size={20} />,
    },
    {
      title: "Bachelor of Technology (CSE)",
      place: "Pune University • Pune, India",
      period: "2024 - 2027",
      icon: <FaUniversity size={20} />,
    },
  ];
  const items = [
    {
      icon: <FaHome size={24} />,
      label: "Home",
      onClick: () =>
        document.getElementById("hero").scrollIntoView({ behavior: "smooth" }),
    },
    {
      icon: <FaUser size={24} />,
      label: "About",
      onClick: () =>
        document.getElementById("about").scrollIntoView({ behavior: "smooth" }),
    },
    {
      icon: <FaTasks size={24} />,
      label: "Projects",
      onClick: () =>
        document
          .getElementById("projects")
          .scrollIntoView({ behavior: "smooth" }),
    },
    {
      icon: <FaEnvelope size={24} />,
      label: "Contact",
      onClick: () =>
        document
          .getElementById("contact")
          .scrollIntoView({ behavior: "smooth" }),
    },
  ];
  const projectsData = [
    {
      title: "HealthHub",
      description:
        "A full-stack AI powered website with medical report tracking, doctor booking, and AI assistant integration.",
      image: healthhubprojectimagefrom,
      source: "https://github.com/maivyash/healthhub",
      demo: "https://healthhub-zeta.vercel.app/",
      category: "Web App",
      tech: ["Next.js", "Tailwind", "Prisma", "PostgreSQL", "OpenAI"],
    },
    {
      title: "PPT Handler",
      description:
        "AI-based gesture recognition tool that lets you control PowerPoint presentations hands-free.",
      image: ppthandlerprojectimagefrom,
      source: "https://github.com/maivyash/PPT_HANDLER",
      demo: null,
      category: "Tool",
      tech: ["Python", "OpenCV", "MediaPipe"],
    },
    {
      title: "CollegeSurfer",
      description:
        "Mobile app for managing college operations — attendance, assignments, profiles, and notices.",
      image: collegesurferprojectimagefrom,
      source: "https://github.com/maivyash/CollegeSurfer",
      demo: null,
      category: "Mobile App",
      tech: ["Flutter", "Firebase"],
    },
  ];

  function SectionWrapper({ children }) {
    const ref = useRef();
    useInView(ref, "0px 0px -20% 0px"); // triggers slightly before fully visible
    return (
      <div ref={ref} className="animate-item">
        {children}
      </div>
    );
  }

  // Usage in sections:

  return (
    <>
      <main className="homepage">
        <SectionWrapper>
          <section id="hero" className="hero iconcloud-wrapper">
            <div className="hero-text-inside-cloud">
              <h1>
                Hi, I'm <span className="highlight">Yash Gupta</span>
              </h1>
              <TypingText />
              <div className="hero-buttons">
                <button
                  className="btn-primary"
                  onClick={() => window.open("https://github.com/maivyash")}
                >
                  View GitHub
                </button>
                <button
                  className="btn-primary"
                  onClick={() =>
                    window.open(
                      "https://drive.google.com/file/d/1akawk6mhbgSX27S6aDK_DDdjXnf1EPKE/view?usp=sharing"
                    )
                  }
                >
                  View Resume
                </button>
              </div>
            </div>
          </section>
        </SectionWrapper>

        <SectionWrapper>
          <section id="about" className="about-container enhanced-about">
            <div className="about-header">
              <h2 className="section-title">About Me</h2>
              <p className="section-subtitle">
                Passionate developer crafting digital experiences across the full stack
              </p>
            </div>

            <div className="about-content">
              <div className="about-left enhanced-about-left">
                <div className="avatar-wrap">
                  <img src={profileImage} alt="Yash Gupta" className="avatar" />
                  <span className="avatar-ring" />
                  <span className="avatar-glow" />
                </div>
                <h2>Yash Gupta</h2>
                <p className="subtitle">Aspiring Software Engineer</p>
                
                <div className="about-badges">
                  <span className="badge">Full Stack</span>
                  <span className="badge">Mobile Dev</span>
                  <span className="badge">Cloud Native</span>
                </div>

                <div className="about-stats">
                  <div className="stat">
                    <span className="num">2</span>
                    <span className="label">Hackathons</span>
                  </div>
                  <div className="stat">
                    <span className="num">8+</span>
                    <span className="label">Projects</span>
                  </div>
                  <div className="stat">
                    <span className="num">10+</span>
                    <span className="label">Technologies</span>
                  </div>
                </div>

                <div className="social-icons">
                  <FaLinkedin
                    size={"1.7rem"}
                    onClick={() => {
                      window.open("https://www.linkedin.com/in/maivyash/");
                    }}
                  />
                  <FaGithub
                    size={"1.7rem"}
                    onClick={() => {
                      window.open("https://github.com/maivyash");
                    }}
                  />
                </div>
              </div>

              <div className="about-right enhanced-about-right">
                <div className="card about-card">
                  <div className="card-header">
                    <h3>My Journey</h3>
                    <div className="card-icon">🚀</div>
                  </div>
                  <p>
                    I'm a computer science student passionate about creating
                    impactful software. I enjoy working across the stack—from
                    frontend interfaces to backend logic and cloud deployment.
                    <br />
                    <br />
                    I've worked with tools, frameworks, and platforms across Web,
                    Mobile, Marketing, Cloud, and DevOps.
                  </p>
                </div>

                <div className="card skills-card">
                  <div className="card-header">
                    <h3>Technical Skills</h3>
                    <div className="card-icon">⚡</div>
                  </div>
                  <div className="skills-grid">
                    <div className="skill-category">
                      <h4>Languages & Frameworks</h4>
                      <div className="skill-tags">
                        <span className="tag">Python</span>
                        <span className="tag">JavaScript</span>
                        <span className="tag">TypeScript</span>
                        <span className="tag">Dart</span>
                        <span className="tag">React</span>
                        <span className="tag">Next.js</span>
                        <span className="tag">Flutter</span>
                        <span className="tag">Node.js</span>
                      </div>
                    </div>
                    <div className="skill-category">
                      <h4>Tools & Platforms</h4>
                      <div className="skill-tags">
                        <span className="tag">GitHub</span>
                        <span className="tag">Firebase</span>
                        <span className="tag">Docker</span>
                        <span className="tag">AWS</span>
                        <span className="tag">Figma</span>
                        <span className="tag">Postman</span>
                      </div>
                    </div>
                    <div className="skill-category">
                      <h4>DevOps & Cloud</h4>
                      <div className="skill-tags">
                        <span className="tag">CI/CD</span>
                        <span className="tag">Kubernetes</span>
                        <span className="tag">Nginx</span>
                        <span className="tag">Vercel</span>
                        <span className="tag">Netlify</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card education-card">
                  <div className="card-header">
                    <h3>Education Path</h3>
                    <div className="card-icon">🎓</div>
                  </div>
                  <div className="education-tree">
                    <div className="tree-line"></div>
                    {educationData.map((edu, idx) => (
                      <div
                        className={`tree-node ${idx % 2 === 0 ? "left" : "right"}`}
                        key={edu.title}
                        style={{ animationDelay: `${0.2 + idx * 0.2}s` }}
                      >
                        <div className="tree-node-content">
                          <div className="tree-icon">{edu.icon}</div>
                          <div className="tree-text">
                            <h4>{edu.title}</h4>
                            <span>{edu.place}</span>
                            <p>{edu.period}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </SectionWrapper>

        <SectionWrapper>
          <section id="projects" className="projects redesigned-projects">
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">
              A selection of projects that highlight my skills and experience in
              software development.
            </p>

            <div className="project-card-grid">
              {projectsData.map((project) => (
                <div className="project-card" key={project.title}>
                  <div className="project-badge">{project.category}</div>
                  <div className="project-media">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-img"
                    />
                  </div>
                  <div className="project-info">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    {project.tech && (
                      <div className="project-tags">
                        {project.tech.map((t) => (
                          <span className="tag" key={`${project.title}-${t}`}>{t}</span>
                        ))}
                      </div>
                    )}
                    <div className="project-actions">
                      <a
                        className="project-btn"
                        href={project.source}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.title} source code`}
                      >
                        <FaGithub />
                        <span>Source</span>
                      </a>
                      {project.demo != null ? (
                        <a
                          className="project-btn primary"
                          href={project.demo}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${project.title} live demo`}
                        >
                          <FaExternalLinkAlt />
                          <span>Demo</span>
                        </a>
                      ) : (
                        false
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </SectionWrapper>
        <SectionWrapper>
          <section className="gita-section">
            <div className="video-overlay">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="gita-video"
                src={VideoKrishna} // or wherever your file is
              ></video>
              <div className="gita-text">
                <h1 className="fade-in-line1">
                  Karmanye vadhikaraste ma phaleshu kadachana,
                  <br />
                  Ma karma phala hetur bhur ma te sango’stvakarmani.
                </h1>
                <h3 className="fade-in-line2">
                  You have a right to perform your duties, but you are not
                  entitled to the fruits of your actions.
                  <br />
                  Do not let the fruits of action be your motive, nor let your
                  attachment be to inaction.
                </h3>
                <p className="fade-in-line3">— Bhagavad Gita 2.47</p>
              </div>
            </div>
          </section>
        </SectionWrapper>

        <div>
          <section id="contact" className="contact contact-enhanced">
            <h2>Get In Touch</h2>
            <div className="contact-content">
              <div className="contact-info card contact-info-card">
                <div className="contact-badges">
                  <span className="badge"><FaClock size={14} /> Typically replies within 24 hrs</span>
                  <span className="badge"><FaMapMarkerAlt size={14} /> Pune, India</span>
                </div>
                <div className="contact-details">
                  <div className="detail"><FaEnvelope /> <span>Email:</span> <a href="mailto:guptayash2005.yg@gmail.com">guptayash2005.yg@gmail.com</a></div>
                  <div className="detail"><FaPhone /> <span>Phone:</span> <a href="tel:+918767339461">+91 8767339461</a></div>
                </div>
                <div className="contact-chips">
                  <a href="mailto:guptayash2005.yg@gmail.com" className="chip"><FaEnvelope /> Email me</a>
                  <a href="tel:+918767339461" className="chip"><FaPhone /> Call me</a>
                  <a href="https://wa.me/918767339461" target="_blank" rel="noreferrer" className="chip"><FaWhatsapp /> WhatsApp</a>
                </div>
                <div className="social-icons">
                  <FaLinkedin
                    size={"1.7rem"}
                    onClick={() => {
                      window.open("https://www.linkedin.com/in/maivyash/");
                    }}
                  />
                  <FaGithub
                    size={"1.7rem"}
                    onClick={() => {
                      window.open("https://github.com/maivyash");
                    }}
                  />
                </div>
              </div>
              <form 
                onSubmit={handleSubmit} 
                className="contact-form card contact-form-card" 
                noValidate
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && e.target.type !== 'textarea') {
                    e.preventDefault();
                  }
                }}
              >
                <div className="form-field">
                  <span className="label-text">Name</span>
                  <div className="input-with-icon">
                    <span className="icon"><FaUser /></span>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-field">
                  <span className="label-text">Email</span>
                  <div className="input-with-icon">
                    <span className="icon"><FaEnvelope /></span>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-field">
                  <span className="label-text">Message</span>
                  <div className="input-with-icon textarea">
                    <span className="icon"><FaRegCommentDots /></span>
                    <textarea
                      name="message"
                      required
                      placeholder="Tell me about your project, role, or say hello..."
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <button type="submit" className={`btn-submit ${status === "Sending..." ? "loading" : ""}`}>
                  <span className="plane"><FaPaperPlane /></span>
                  <span>Send message</span>
                  <span className="spinner" />
                </button>

                <div className={`status-toast ${status ? "show" : ""} ${status.toLowerCase().includes("success") ? "success" : (status.toLowerCase().includes("failed") || status.toLowerCase().includes("error")) ? "error" : "info"}`}>
                  {status}
                </div>
              </form>
            </div>
          </section>
        </div>
        <footer className="footer">
          © 2025 Yash Gupta. All rights reserved.
        </footer>

        <Dock
          items={items}
          panelHeight={40}
          baseItemSize={30}
          magnification={50}
        />
      </main>
    </>
  );
}

export default App;
