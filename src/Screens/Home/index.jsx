import { useState } from 'react'
import '../../App.css'
import project1 from '../../assets/project/SolarPanel/solarpanel1.jpg';
import project2 from '../../assets/project/SalesApp/SAPBusinessoneApp1.jpg';
import project3 from '../../assets/project/SolarPanel/solarpanel3.jpg';
import project4 from '../../assets/project/SolarPanel/solarpanel4.jpg';

import PI from '../../assets/profile-image.svg'
import gh from '../../assets/github-icon.svg'
import li from '../../assets/linkedin-icon.svg'

import NavBar from '../../components/Navbar';

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
        <NavBar />

        <section className="header-container">
          <img
            className="profile-image"
            src={PI}
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
                <p className="project-company">{product.company}</p>
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
            ><img src={li} alt="Linkedin"
              /></a>
            <a href="#" target="_blank"><img src={gh} alt="GitHub" /></a>
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

