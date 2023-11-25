import React from "react";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Carousel from "@/components/Carousel";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";

const Index: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-primary-blue">
      <Navbar />
      <Hero />
      <Carousel />
      <Features />

      {/* White background for Testimonials */}
      <div className="sm:flex-1 lg:flex flex-row bg-white py-12">
        <Testimonials />
      </div>

      {/*pink background for FAQ   */}
      <div className="sm:flex-1 lg:flex flex-row bg-primary-pink py-12">
        <FAQ />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;