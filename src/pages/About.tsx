
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/about/HeroSection';
import CompanyOverview from '@/components/about/CompanyOverview';
import StatsSection from '@/components/about/StatsSection';
import MissionVision from '@/components/about/MissionVision';
import TeamSection from '@/components/about/TeamSection';

const About = () => {
  return (
    <div className="page-fade-in">
      <Navbar />
      
      <main>
        <HeroSection />
        <CompanyOverview />
        <StatsSection />
        <MissionVision />
        <TeamSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
