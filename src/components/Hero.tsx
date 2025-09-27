import React from 'react';
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
`;

const HeroContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
  position: relative;
  z-index: 2;
`;

const LogoSection = styled(motion.div)`
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
`;

const HeroTitle = styled(motion.h1)`
  font-size: clamp(2.5rem, 8vw, 5rem);
  font-weight: 300;
  color: #2c2c2c;
  margin-bottom: 1.5rem;
  line-height: 1.1;
  letter-spacing: -0.02em;
`;

const HeroSubtitle = styled(motion.p)`
  font-size: clamp(1.1rem, 3vw, 1.5rem);
  color: #6b7280;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  font-weight: 300;
  line-height: 1.6;
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
  transition: all 0.3s ease;
  border: 2px solid #2c2c2c;
  margin-right: 1rem;
  margin-bottom: 1rem;

  &:hover {
    background: transparent;
    color: #2c2c2c;
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(44, 44, 44, 0.2);
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
  transition: all 0.3s ease;
  border: 2px solid #2c2c2c;
  margin-bottom: 1rem;

  &:hover {
    background: #2c2c2c;
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(44, 44, 44, 0.2);
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
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <Logo size="large" showText={true} />
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
