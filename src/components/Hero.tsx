import profileImage from "../assets/roy-profile.jpg";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="hero-intro">Hi, I'm</p>

        <h1 className="hero-name">Roy Arnold</h1>

        <h2 className="hero-title">Junior Web Developer</h2>

        <p className="hero-description">
          I'm a junior web developer building responsive, user-friendly
          applications with React and TypeScript. I enjoy turning ideas into
          polished, practical projects and expanding my skills through hands-on
          development.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            View My Work
          </a>

          <a href="/roy-arnold-cv.pdf" download className="btn btn-secondary">
            Download CV
          </a>
        </div>
      </div>
      <div className="hero-image">
        <img src={profileImage} alt="Roy Arnold" />
      </div>
    </section>
  );
}

export default Hero;
