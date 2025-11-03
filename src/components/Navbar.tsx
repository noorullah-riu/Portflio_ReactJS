import moon from '../assets/moon.svg'
import sun from '../assets/sun.svg'
import logo from '../assets/logo.png'

export default function NavBar() {
    return (
        <>
            <nav className="navbar">
                <div className="container">

                    <h1 id="logo">
                        <a href="https://github.com/CommunityPro/portfolio-html"
                        ><img src={logo} alt="Your Logo"
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
                            >RESUME <i className="fas fa-arrow-right"></i></a>
                        </li>

                        <div className="theme-switch">
                            <input type="checkbox" id="switch" />
                            <label className="toggle-icons">
                                <img className="moon" src= {moon}/>
                                <img className="sun" src={sun} />
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
        </>
    )

}