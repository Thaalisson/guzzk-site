import "../styles/global.css"; 
import Releases from "@/components/Releases.jsx";
import Contact from "@/components/Contact.jsx"; 
import AboutMe from "@/components/AboutMe";
import Music from "@/components/Music";
import Shows from "@/components/Shows";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <main className="home">
      <section id="releases">
        <Releases/>
      </section>

      <section id="about-me">
        <AboutMe />
      </section>

      <section id="music">
        <Music/>
      </section>

      <section id="shows-section">
        <Shows/>
      </section>

      <section id="contact">
        <Contact />
      </section>

      <BackToTop /> 
    </main>
  );
}
