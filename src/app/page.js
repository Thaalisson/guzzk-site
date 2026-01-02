import Contact from "@/components/Contact.jsx"; 
import AboutMe from "@/components/AboutMe";
import Music from "@/components/Music";
import Shows from "@/components/Shows";
import BackToTop from "@/components/BackToTop";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="home">
      <section id="home">
        <Hero />
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
