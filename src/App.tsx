import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import SuperStarsCaseStudy from "./pages/SuperStarsCaseStudy";

function App() {
  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Contact />
              </>
            }
          />

          <Route
            path="/projects/super-stars"
            element={<SuperStarsCaseStudy />}
          />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
