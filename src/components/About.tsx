import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutSection = styled.section`
  padding: 8rem 0;
  background: white;
  position: relative;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const SectionHeader = styled(motion.div)`
  text-align: center;
  margin-bottom: 6rem;
`;

const SectionTitle = styled.h2`
  font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 300;
  color: #2c2c2c;
  margin-bottom: 1.5rem;
  letter-spacing: -0.02em;
`;

const SectionSubtitle = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
  font-size: 1.2rem;
  color: #6b7280;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  font-weight: 300;
`;


const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
`;

const FeatureCard = styled(motion.div)`
  text-align: center;
  padding: 2rem;
  background: #fafafa;
  border-radius: 12px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  }
`;

const FeatureIcon = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #e8f4f8 0%, #d1e7dd 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  font-size: 2rem;
  color: #2c2c2c;
`;

const FeatureTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 500;
  color: #2c2c2c;
  margin-bottom: 1rem;
  letter-spacing: -0.01em;
`;

const FeatureDescription = styled.p`
  color: #6b7280;
  line-height: 1.6;
  font-weight: 300;
`;

const About: React.FC = () => {

  return (
    <AboutSection id="about">
      <Container>
        <SectionHeader
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <SectionTitle>About Rose & Stone Bookkeeping</SectionTitle>
          <SectionSubtitle>
            We are a professional bookkeeping firm specializing in providing accurate,
            reliable accounting services that help businesses maintain financial health and compliance.
          </SectionSubtitle>
        </SectionHeader>


        <FeaturesGrid>
          <FeatureCard
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0 }}
            viewport={{ once: true }}
          >
            <FeatureIcon>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.91.66.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75S7 14 17 8z"/>
              </svg>
            </FeatureIcon>
            <FeatureTitle>Accurate Records</FeatureTitle>
            <FeatureDescription>We maintain meticulous financial records with precision and attention to detail, ensuring every transaction is properly categorized and documented.</FeatureDescription>
          </FeatureCard>
          
          <FeatureCard
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <FeatureIcon>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A1.5 1.5 0 0 0 18.54 8H16c-.8 0-1.54.37-2.01.99L12 11l-1.99-2.01A2.5 2.5 0 0 0 8 8H5.46c-.8 0-1.54.37-2.01.99L1 13.5V22h2v-6h2.5l2.5 7.5h2L8.5 16H11v6h2zm-6.5 0v-6H9v6h2.5z"/>
              </svg>
            </FeatureIcon>
            <FeatureTitle>Client-Focused</FeatureTitle>
            <FeatureDescription>Every service we provide is tailored to your specific business needs, ensuring you receive personalized bookkeeping solutions that work for you.</FeatureDescription>
          </FeatureCard>
          
          <FeatureCard
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <FeatureIcon>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M2.81 14.126l5.99-5.99 6.01 6.01-5.99 5.99z"/>
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </FeatureIcon>
            <FeatureTitle>Compliance Ready</FeatureTitle>
            <FeatureDescription>We ensure your books are always audit-ready and compliant with current regulations, giving you peace of mind and protecting your business.</FeatureDescription>
          </FeatureCard>
        </FeaturesGrid>
      </Container>
    </AboutSection>
  );
};

export default About;
