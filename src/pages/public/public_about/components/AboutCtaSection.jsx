import React from "react";
import { BookOpen } from "lucide-react";
import { Link } from "react-router";
import Button from "../../../../Components/ui/Button";

const AboutCtaSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-28 bg-linear-to-br from-primary-600 via-primary-700 to-emerald-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <BookOpen
            size={48}
            className="mx-auto mb-6 md:mb-8 text-white drop-shadow-lg md:w-16 md:h-16 lg:w-18 lg:h-18"
          />
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6 md:mb-8 leading-tight">
            Ready to Start Your Credit Education?
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white opacity-95 mb-8 md:mb-12 leading-relaxed px-2">
            Join thousands learning how to take control of their credit the
            right way
          </p>
          <Link to="/register">
            <Button
              size="lg"
              className="bg-white! text-primary-600! hover:bg-gray-50! hover:text-primary-700! shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 text-sm md:text-base"
            >
              Get Started Today
            </Button>
          </Link>
          <p className="text-xs sm:text-sm text-white opacity-80 mt-6 md:mt-8">
            No credit card required • Start immediately • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutCtaSection;
