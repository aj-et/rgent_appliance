'use client'
import { useEffect, useState } from "react";
import Image from "next/image";
import {
  AboutUsPage,
  ContactUsPage,
  FAQPage,
  HeroPage,
  MakeAppointmentPage,
  ReviewsPage,
  ServicesPage
} from "../components/pages";

export default function Home() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="mb-[100px] relative">
      <div id="hero">
        <HeroPage />
      </div>

      <div id="about-us">
        <AboutUsPage />
      </div>

      <div id="services">
        <ServicesPage />
      </div>

      <div id="make-appointment">
        <MakeAppointmentPage />
      </div>

      <div id="reviews">
        <ReviewsPage />
      </div>

      <div id="faq">
        <FAQPage />
      </div>

      <div id="contact-us">
        <ContactUsPage />
      </div>

      {showButton && (
        <button
          onClick={handleScrollToTop}
          className="scroll-to-top-button"
        >
          ↑ Top
        </button>
      )}
    </div>
  );
}
