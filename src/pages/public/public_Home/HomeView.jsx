import { useState } from "react";
import { getPageMetadata } from "../../../utils/seo";
import {
  HeroSection,
  QuizModal,
  FeaturesSection,
  HowItWorksSection,
  WhyChooseUsSection,
  FinalCTASection,
} from "./components";

const HomeView = () => {
  const metadata = getPageMetadata("home");

  // Quiz State
  const [showQuiz, setShowQuiz] = useState(false);

  const handleOpenQuiz = () => setShowQuiz(true);
  const handleCloseQuiz = () => setShowQuiz(false);

  return (
    <>
      <div className="min-h-screen">
        <HeroSection onOpenQuiz={handleOpenQuiz} />
        <QuizModal isOpen={showQuiz} onClose={handleCloseQuiz} />
        <FeaturesSection />
        <HowItWorksSection />
        <WhyChooseUsSection onOpenQuiz={handleOpenQuiz} />
        <FinalCTASection onOpenQuiz={handleOpenQuiz} />
      </div>
    </>
  );
};

export default HomeView;
