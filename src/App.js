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
import { FaHome, FaUser, FaCode, FaTasks, FaEnvelope } from "react-icons/fa";
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
      icon: <FaCode size={24} />,
      label: "Skills",
      onClick: () =>
        document
          .getElementById("skills")
          .scrollIntoView({ behavior: "smooth" }),
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
          <section id="about" className="about-container">
            <div className="about-left">
              <img src={profileImage} alt="Yash Gupta" className="avatar" />
              <h2>Yash Gupta</h2>
              <p className="subtitle">Aspiring Software Engineer</p>
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

            <div className="about-right">
              <div className="card">
                <h3>About Me</h3>
                <p>
                  I'm a computer science student passionate about creating
                  impactful software. I enjoy working across the stack—from
                  frontend interfaces to backend logic and cloud deployment.
                  <br />
                  <br />
                  I’ve worked with tools, frameworks, and platforms across Web,
                  Mobile, Marketing, Cloud, and DevOps.
                </p>
              </div>

              <div className="card">
                <h3>Skills</h3>
                <div className="skills-grid">
                  <div>
                    <h4>Languages & Frameworks</h4>
                    <p>
                      Python, JavaScript, TypeScript, Dart, Go, PHP, .NET,
                      ReactJS, NextJS, Flutter, NodeJS, jQuery
                    </p>
                  </div>
                  <div>
                    <h4>Tools & SDKs</h4>
                    <p>
                      GitHub, Firebase, Shopify, WordPress, Agora, HubSpot,
                      Zeplin, Figma, Postman, Slack, Trello, ClickUp, Zoho CRM,
                      Zendesk
                    </p>
                  </div>
                  <div>
                    <h4>DevOps & Cloud</h4>
                    <p>
                      Docker, Kubernetes, Nginx, DNS, CI/CD, AWS, Google Cloud,
                      Azure, Vercel, Netlify, Heroku, Cloudflare
                    </p>
                  </div>
                  <div>
                    <h4>Marketing & Analytics</h4>
                    <p>
                      Google Ads, Analytics, Trends, Data Studio, GoHighLevel,
                      SEM Rush, Meta Ads, SEO, SEM, Social Media Marketing
                    </p>
                  </div>
                  <div>
                    <h4>Project Management</h4>
                    <p>Jira, Asana, Miro</p>
                  </div>
                </div>
              </div>

              <div className="card">
                <h3>Education</h3>
                <div className="timeline">
                  <div className="timeline-item">
                    <div className="dot"></div>
                    <div className="timeline-content">
                      <h4>10th Board</h4>
                      <span>SSC Maharastra • Jalna, India</span>
                      <p>2021 COMPLETED</p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="dot"></div>
                    <div className="timeline-content">
                      <h4>Diploma in Computer Engineering</h4>
                      <span>MSBTE • Gondia, India</span>
                      <p>2021 - 2024</p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="dot"></div>
                    <div className="timeline-content">
                      <h4>Bachelor of Technology (CSE)</h4>
                      <span>Pune University • Pune, India</span>
                      <p>2024 - 2027</p>
                    </div>
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
              {[
                {
                  title: "HealthHub",
                  description:
                    "A full-stack AI powered website with medical report tracking, doctor booking, and AI assistant integration.",
                  image: healthhubprojectimagefrom,
                  source: "https://github.com/maivyash/healthhub",
                  demo: "https://healthhub-zeta.vercel.app/",
                },
                {
                  title: "PPT Handler",
                  description:
                    "AI-based gesture recognition tool that lets you control PowerPoint presentations hands-free.",
                  image: ppthandlerprojectimagefrom,
                  source: "https://github.com/maivyash/PPT_HANDLER",
                  demo: null,
                },
                {
                  title: "CollegeSurfer",
                  description:
                    "Mobile app for managing college operations — attendance, assignments, profiles, and notices.",
                  image: collegesurferprojectimagefrom,
                  source: "https://github.com/maivyash/CollegeSurfer",
                  demo: null,
                },
              ].map((project) => (
                <div className="project-card" key={project.title}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-img"
                  />
                  <div className="project-info">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="project-links">
                      <a href={project.source} target="_blank" rel="noreferrer">
                        Source Code
                      </a>
                      {project.demo != null ? (
                        <a href={project.demo} target="_blank" rel="noreferrer">
                          Demo
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

        <SectionWrapper>
          <section id="contact" className="contact">
            <h2>Get In Touch</h2>
            <div className="contact-content">
              <div className="contact-info">
                <p>Email: guptayash2005.yg@gmail.com</p>
                <p>Phone: +91 8767339461</p>
                <p>Location: Pune, India</p>
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
              <form onSubmit={handleSubmit} className="contact-form">
                <label>
                  Name:
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </label>

                <label>
                  Email:
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </label>

                <label>
                  Message:
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                  />
                </label>

                <button type="submit">Send</button>

                <p>{status}</p>
              </form>
            </div>
          </section>
        </SectionWrapper>
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
