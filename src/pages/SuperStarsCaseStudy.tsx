import CaseStudyHero from "../components/CaseStudy/CaseStudyHero";
import CaseStudyOverview from "../components/CaseStudy/CaseStudyOverview";
import CaseStudyEvolution from "../components/CaseStudy/CaseStudyEvolution";
import CaseStudyLearnings from "../components/CaseStudy/CaseStudyLearnings";
import { useEffect } from "react";

function SuperStarsCaseStudy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="case-study">
      <CaseStudyHero />
      <CaseStudyOverview />
      <CaseStudyEvolution />
      <CaseStudyLearnings />
    </section>
  );
}

export default SuperStarsCaseStudy;
