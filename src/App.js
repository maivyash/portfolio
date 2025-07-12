import logo from "./logo.svg";
import "./App.css";
import LetterGlitch from "./tools/Background";
import TypingText from "./tools/TerminalTypingEffect";
import image from "./asset/mainhero.jpg";
import sticker from "./asset/aboutsticker.png";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import CircularGallery from "./tools/CircularGallery";
import SpotlightCard from "./tools/SpotlightCard";
import SplashCursor from "./tools/SplashCursor";
import PixelCard from "./tools/PixelCard";
import ppthandlerprojectimagefrom from "./asset/ppthandler.png";
import healthhubprojectimagefrom from "./asset/healthhubss.png";
import collegesurferprojectimagefrom from "./asset/collegesurfer.png";
import Dock from "./tools/Dock";
import { FaHome, FaUser, FaCode, FaTasks, FaEnvelope } from "react-icons/fa";

function App() {
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
  return (
    <>
      <SplashCursor />

      <LetterGlitch
        glitchSpeed={50}
        centerVignette={true}
        outerVignette={false}
        smooth={true}
      />
      <main className="homepage">
        <section id="hero" className="hero">
          <div className="hero-text">
            <h1>
              Hi, I'm <span className="highlight">Yash Gupta</span>
            </h1>
            <TypingText />
            <div className="hero-buttons">
              <button
                className="btn-primary"
                onClick={() => {
                  window.open("https://github.com/maivyash");
                }}
              >
                View GitHub
              </button>
            </div>
          </div>
          <img src={image} alt="Coding" className="hero-image" />
        </section>

        <section id="about" className="about">
          <h2>About Me</h2>
          <div className="about-content">
            <div className="about-image">
              <img src={sticker} alt="About" />
            </div>
            <div>
              <h3>Computer Science Engineering Student</h3>
              <p>
                I’m a Third year Computer Science student... passionate about
                solving complex problems and building impactful applications.
              </p>
              <ul className="about-list">
                <li>BTech in Computer Science</li>
                <li>Pune, India</li>
                <li>Hindi, English</li>
              </ul>
              <div className="social-icons">
                <FaGithub
                  size={"1.7rem"}
                  onClick={() => {
                    window.open("https://github.com/maivyash");
                  }}
                />
                <FaLinkedin
                  size={"1.7rem"}
                  onClick={() => {
                    window.open("https://www.linkedin.com/in/maivyash/");
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="skills">
          <h2>My Skills</h2>
          <div className="skills-content">
            <div className="skills-bars">
              {[
                { name: "JavaScript/TypeScript", percent: 90 },
                { name: "Python", percent: 85 },
                { name: "Java", percent: 80 },
                { name: "HTML/CSS", percent: 95 },
                { name: "SQL", percent: 75 },
              ].map((skill) => (
                <div key={skill.name}>
                  <p>{skill.name}</p>
                  <div className="bar">
                    <div
                      className="fill"
                      style={{ width: `${skill.percent}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="expertise-boxes">
              <SpotlightCard
                className="custom-spotlight-card"
                spotlightColor="rgba(255, 191, 64, 0.2)"
              >
                <div>WebDeveloper</div>
              </SpotlightCard>
              <SpotlightCard
                className="custom-spotlight-card"
                spotlightColor="rgba(24, 232, 255, 0.2)"
              >
                <div>Machine Learning</div>
              </SpotlightCard>
              <SpotlightCard
                className="custom-spotlight-card"
                spotlightColor="rgba(58, 255, 51, 0.2)"
              >
                <div>Mobile Development</div>
              </SpotlightCard>
              <SpotlightCard
                className="custom-spotlight-card"
                spotlightColor="rgba(254, 49, 247, 0.2)"
              >
                <div>Cloud Computing</div>
              </SpotlightCard>
            </div>
          </div>
          <div className="circular-gallery-container">
            <CircularGallery items={skillImages} bend={0} borderRadius={0.05} />
          </div>
        </section>

        <section id="projects" className="projects">
          <h2>My Projects</h2>
          <div className="project-cards">
            <PixelCard variant="blue" className="project-pixel-card">
              <div className="project-card-content">
                <img src={ppthandlerprojectimagefrom} />
                <h3>AI hand Gesture Presentation</h3>
                <p>A model that identifies Gestures with high accuracy.</p>
                <div className="card-links">
                  <a href="https://github.com/maivyash/PPT_HANDLER">
                    Source Code
                  </a>

                  <a href="#">Demo</a>
                </div>
              </div>
            </PixelCard>

            <PixelCard variant="yellow" className="project-pixel-card">
              <div className="project-card-content">
                <img src={healthhubprojectimagefrom} />
                <h3>HealthHub</h3>
                <p>
                  A full-stack AI powered website with Medical Track And AI
                  Assistance.
                </p>
                <div className="card-links">
                  <a href="https://github.com/maivyash/healthhub">
                    Source Code
                  </a>
                  <a href="https://healthhub-zeta.vercel.app/">Demo</a>
                </div>
              </div>
            </PixelCard>

            <PixelCard variant="pink" className="project-pixel-card">
              <div className="project-card-content">
                <img src={collegesurferprojectimagefrom} />
                <h3>CollegeSurfer</h3>
                <p>A mobile app Manage Each College Functions .</p>
                <div className="card-links">
                  <a href="https://github.com/maivyash/CollegeSurfer">
                    Source Code
                  </a>
                  <a href="#">Demo</a>
                </div>
              </div>
            </PixelCard>
          </div>
        </section>

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
            <form className="contact-form">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="text" placeholder="Subject" />
              <textarea placeholder="Message"></textarea>
              <button className="btn-primary">Send Message</button>
            </form>
          </div>
        </section>
        <footer className="footer">
          © 2025 Yash Gupta. All rights reserved.
        </footer>
        <Dock
          items={items}
          panelHeight={68}
          baseItemSize={50}
          magnification={70}
        />
      </main>
    </>
  );
}

export default App;
