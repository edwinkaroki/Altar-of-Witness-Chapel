import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import ThemeBanner from '@/components/ThemeBanner';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServiceTimesSection from '@/components/ServiceTimesSection';
import FellowshipSection from '@/components/FellowshipSection';
import YouthChurchSection from '@/components/YouthChurchSection';
import UpcomingEventsSection from '@/components/UpcomingEventsSection';
import SermonsSection from '@/components/SermonsSection';
import DonateSection from '@/components/DonateSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import FloatingAssistant from '@/components/FloatingAssistant';

export default function Home() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    // Initialize AOS
    if (window.AOS) {
      window.AOS.init({
        duration: 400,
        easing: 'ease-in-out',
        once: true,
      });
    }

    // Handle scroll for back-to-top button
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <HeroSection />
      <ThemeBanner />
      
      <main className="flex-1">
        <AboutSection />
        <ServiceTimesSection />
        <FellowshipSection />
        <YouthChurchSection />
        <UpcomingEventsSection />
        <SermonsSection />
        <DonateSection />
        <ContactSection />
      </main>

      <Footer showBackToTop={showBackToTop} onBackToTop={scrollToTop} />
      <FloatingAssistant />

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40"
          aria-label="Back to top"
        >
          <i className="fas fa-arrow-up"></i>
        </button>
      )}
    </div>
  );
}
