import { Link } from "react-router-dom";

function CaseStudyHero() {
  return (
    <div className="case-study-hero">
      <Link to="/#projects" className="case-study-back">
        ← Back to Portfolio
      </Link>
      <p className="case-study-label">PROJECT CASE STUDY</p>
      <h1>Super Stars — Stock Manager</h1>
      <p>
        How I built and improved a stock management application using React and
        TypeScript.
      </p>
      <div className="case-study-technologies">
        <span>React</span>
        <span>TypeScript</span>
        <span>Vite</span>
        <span>CSS Modules</span>
        <span>localStorage</span>
      </div>
      <a
        href="https://superstars.royarnold.co.uk"
        target="_blank"
        rel="noopener noreferrer"
        className="case-study-demo">
        View Live Application ↗
      </a>
    </div>
  );
}

export default CaseStudyHero;
