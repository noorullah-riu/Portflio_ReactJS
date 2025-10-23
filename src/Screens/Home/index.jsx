import { useState } from 'react'
import '../../App.css'
import project1 from '../../assets/project/SolarPanel/solarpanel1.jpg';
import project2 from '../../assets/project/SalesApp/SAPBusinessoneApp1.jpg';
import project3 from '../../assets/project/SolarPanel/solarpanel3.jpg';
import project4 from '../../assets/project/SolarPanel/solarpanel4.jpg';

export default function Home() {
  const [count, setCount] = useState(0)

  const products = [
    {
      id: 1,
      name: "Solar Monitoring App",
      description: "Real-time solar data visualization and analytics.",
      company: "SunTech Energy",
      image: project1,
    },
    {
      id: 2,
      name: "IoT Control Dashboard",
      description: "Smart device management with live metrics and alerts.",
      company: "TechHive Ltd",
      image: project2,
    },
    {
      id: 3,
      name: "AI Energy Predictor",
      description: "Forecast solar performance using machine learning.",
      company: "GreenPulse AI",
      image: project1,
    },
    {
      id: 4,
      name: "Solar Monitoring App",
      description: "Real-time solar data visualization and analytics.",
      company: "SunTech Energy",
      image: project1,
    },
    {
      id: 5,
      name: "IoT Control Dashboard",
      description: "Smart device management with live metrics and alerts.",
      company: "TechHive Ltd",
      image: project1,
    },
    {
      id: 6,
      name: "AI Energy Predictor",
      description: "Forecast solar performance using machine learning.",
      company: "GreenPulse AI",
      image: project1,
    },
    {
      id: 7,
      name: "Solar Monitoring App",
      description: "Real-time solar data visualization and analytics.",
      company: "SunTech Energy",
      image: project1,
    },
    {
      id: 8,
      name: "IoT Control Dashboard",
      description: "Smart device management with live metrics and alerts.",
      company: "TechHive Ltd",
      image: project1,
    },
    {
      id: 9,
      name: "AI Energy Predictor",
      description: "Forecast solar performance using machine learning.",
      company: "GreenPulse AI",
      image: project1,
    },
  ];

  return (
    <body>
      <header id="hero">
        <nav className="navbar">
          <div className="container">

            <h1 id="logo">
              <a href="https://github.com/CommunityPro/portfolio-html"
              ><img src="./src/assets/logo.png" alt="Your Logo"
                /></a>
            </h1>
            <ul className="nav-menu">
              <li><a className="nav-link" href="#projects">PROJECTS</a></li>
              <li><a className="nav-link" href="#">CONTACT</a></li>
              {/* <li><a className="nav-link" href="#">BlOG</a></li> */}
              <li>
                <a
                  className="nav-link btn btn-primary"
                  href="https://github.com/CommunityPro/portfolio-html"
                >RESUME <i className="fas fa-arrow-right"></i
                ></a>
              </li>

              <div className="theme-switch">
                <input type="checkbox" id="switch" />
                <label className="toggle-icons" for="switch">
                  <img className="moon" src="./src/assets/moon.svg" />
                  <img className="sun" src="./src/assets/sun.svg" />
                </label>
              </div>
            </ul>
            <div className="hamburger">
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
          </div>
        </nav>

        <section className="header-container">
          <img
            className="profile-image"
            src="./src/assets/profile-image.svg"
            alt=""
          />
          <h1>Hi I'm Noor Ullah</h1>

          <div className="content-text">
            <h2>Building Mobile App </h2>
            <h2>Android & IOS .</h2>

            <p>
              A Frontend Developer and Visual Designer with experience in web
              design, brand identity and product design.
            </p>
          </div>
          <a
            href="https://github.com/CommunityPro/portfolio-html"
            className="btn btn-secondary"
            target="_blank">Connect With Me</a>
        </section>
      </header>

      <section id="projects" className="project-container container">
        <div className="division"></div>
        <div className="content-text">
          <h2>Projects</h2>
          <p>Check out some of my personal and paid projects</p>
        </div>

        <article className="project">
          {products.map((product) => (
            <div className="project-card" key={product.id}>
              <img src={product.image} alt={product.name} className="project-img" />

              <div className="project-info">
                <h3 className="project-name">{product.name}</h3>
                <p className="project-desc">{product.description}</p>
                <p classNName="project-company">{product.company}</p>
              </div>
            </div>
          ))}

        </article>
        {/* 
      <a href="#" className="btn btn-secondary"
        target="_blank" >See More <i className="fas fa-arrow-right"></i
      ></a> */}
      </section>

      <footer id="footer">
        <div className="container">
          <a href="mailto:communitypro47@gmail.com">NoorUllah.RIU@gmail.com</a>
          <div className="social">
            {/* <a href="#" target="_blank"
            ><img src="./src/assets/facebook-icon.svg" alt="Facebook"
          /></a> */}
            {/* <a href="#" target="_blank"><img src="./src/assets/twitter-icon.svg" alt="Twitter" /></a> */}
            <a href="#" target="_blank"
            ><img src="./src/assets/linkedin-icon.svg" alt="Linkedin"
              /></a>
            <a href="#" target="_blank"><img src="./src/assets/github-icon.svg" alt="GitHub" /></a>
            {/* <a href="#" target="_blank"
            ><img src="./src/assets/hashnode-icon.svg" alt="Hashnode"
          /></a> */}
          </div>

          <p>Copyright &copy; Communitypro <span id="datee"></span>, All rights reserved</p>
        </div>
      </footer>
      <script src="./src/js/script.js"></script>
    </body>
  )
}

