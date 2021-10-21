import "bootstrap/dist/css/bootstrap.min.css";
import "./app.scss";
import NavbarMenu from "./components/navbar/NavbarMenu";
import LandingPage from "./pages/landingpage/LandingPage";
import Portfolio from "./pages/portfolio/Portfolio";
import Resume from "./pages/resume/Resume";
import Skills from "./pages/skills/Skills";
import Contact from "./pages/contact/Contact";
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <NavbarMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections"  >
        <LandingPage />
        <Portfolio />
        <Resume />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}

export default App;
