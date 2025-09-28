import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Logo from './Logo';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: #ffffff;
  overflow: hidden;
  padding-top: 80px; /* Account for fixed header */
  will-change: transform;
  
  @media (max-width: 768px) {
    padding-top: 0; /* No padding needed since header is hidden initially */
    min-height: 100vh;
  }
`;

const HeroContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
  position: relative;
  z-index: 2;
`;

const LogoSection = styled(motion.div)<{ isTransitioning: boolean }>`
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  position: ${props => props.isTransitioning ? 'fixed' : 'relative'};
  top: ${props => props.isTransitioning ? '1rem' : 'auto'};
  left: ${props => props.isTransitioning ? '2rem' : 'auto'};
  z-index: ${props => props.isTransitioning ? '1002' : 'auto'};
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  
  @media (max-width: 768px) {
    top: ${props => props.isTransitioning ? '0.5rem' : 'auto'};
    left: ${props => props.isTransitioning ? '1rem' : 'auto'};
  }
`;

const HeroTitle = styled(motion.h1)`
  font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
  font-size: clamp(2.5rem, 8vw, 5rem);
  font-weight: 300;
  color: #2c2c2c;
  margin-bottom: 1.5rem;
  line-height: 1.1;
  letter-spacing: -0.02em;
  
  @media (max-width: 768px) {
    font-size: clamp(2rem, 6vw, 3.5rem);
    margin-bottom: 1rem;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
  font-size: clamp(1.1rem, 3vw, 1.5rem);
  color: #6b7280;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  font-weight: 300;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: clamp(1rem, 4vw, 1.3rem);
    margin-bottom: 2rem;
    padding: 0 1rem;
  }
`;

const CTAButton = styled(motion.a)`
  display: inline-block;
  padding: 1rem 2.5rem;
  background: #2c2c2c;
  color: white;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 500;
  font-size: 1.1rem;
  transition: transform 0.2s ease, background-color 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;
  border: 2px solid #2c2c2c;
  margin-right: 1rem;
  margin-bottom: 1rem;
  font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
  will-change: transform;
  backface-visibility: hidden;

  &:hover {
    background: transparent;
    color: #2c2c2c;
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(44, 44, 44, 0.2);
  }
  
  @media (max-width: 768px) {
    padding: 0.875rem 2rem;
    font-size: 1rem;
    margin-right: 0.5rem;
    margin-bottom: 0.75rem;
    min-height: 44px; /* Better touch target */
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const SecondaryButton = styled(motion.a)`
  display: inline-block;
  padding: 1rem 2.5rem;
  background: transparent;
  color: #2c2c2c;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 500;
  font-size: 1.1rem;
  transition: transform 0.2s ease, background-color 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;
  border: 2px solid #2c2c2c;
  margin-bottom: 1rem;
  font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
  will-change: transform;
  backface-visibility: hidden;

  &:hover {
    background: #2c2c2c;
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(44, 44, 44, 0.2);
  }
  
  @media (max-width: 768px) {
    padding: 0.875rem 2rem;
    font-size: 1rem;
    margin-bottom: 0.75rem;
    min-height: 44px; /* Better touch target */
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #6b7280;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #2c2c2c;
  }
`;

const ScrollText = styled.span`
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  font-weight: 300;
`;

const ScrollIcon = styled(motion.div)`
  font-size: 1.2rem;
`;

const BackgroundElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  z-index: 1;
`;

const Circle = styled(motion.div)<{ size: number; top: string; left?: string; right?: string; color: string }>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 50%;
  background: ${props => props.color};
  top: ${props => props.top};
  left: ${props => props.left || 'auto'};
  right: ${props => props.right || 'auto'};
  opacity: 0.1;
`;

const Hero: React.FC = () => {
  const [isLogoTransitioning, setIsLogoTransitioning] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const isMobile = window.innerWidth <= 768;
      
      // Start transition when scrolling past 30% of viewport height
      if (isMobile && scrollY > window.innerHeight * 0.3) {
        setIsLogoTransitioning(true);
      } else if (isMobile && scrollY <= window.innerHeight * 0.1) {
        setIsLogoTransitioning(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <HeroSection id="home">
      <BackgroundElements>
        <Circle
          size={300}
          top="10%"
          left="10%"
          color="#6b7280"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <Circle
          size={200}
          top="60%"
          right="15%"
          color="#2c2c2c"
          animate={{
            y: [0, 20, 0],
            x: [0, -10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <Circle
          size={150}
          top="30%"
          right="30%"
          color="#9ca3af"
          animate={{
            y: [0, -15, 0],
            x: [0, 5, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </BackgroundElements>

      <HeroContainer>
        <LogoSection
          isTransitioning={isLogoTransitioning}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <Logo size={isLogoTransitioning ? "small" : "large"} showText={!isLogoTransitioning} />
        </LogoSection>

        <HeroTitle
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Professional
          <br />
          Bookkeeping Services
        </HeroTitle>

        <HeroSubtitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Expert bookkeeping and accounting services to keep your business
          finances organized, compliant, and growing with precision and care.
        </HeroSubtitle>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <CTAButton href="#contact">
            Get Free Consultation
          </CTAButton>
          <SecondaryButton href="#services">
            Our Services
          </SecondaryButton>
        </motion.div>
      </HeroContainer>

      <ScrollIndicator onClick={scrollToNext}>
        <ScrollText>Scroll to explore</ScrollText>
        <ScrollIcon
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
          </svg>
        </ScrollIcon>
      </ScrollIndicator>
    </HeroSection>
  );
};

export default Hero;
