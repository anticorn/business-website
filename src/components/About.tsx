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
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 300;
  color: #2c2c2c;
  margin-bottom: 1.5rem;
  letter-spacing: -0.02em;
`;

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  color: #6b7280;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
  font-weight: 300;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  margin-bottom: 6rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const TextContent = styled(motion.div)`
  h3 {
    font-size: 2rem;
    font-weight: 300;
    color: #2c2c2c;
    margin-bottom: 1.5rem;
    letter-spacing: -0.02em;
  }

  p {
    font-size: 1.1rem;
    color: #6b7280;
    line-height: 1.8;
    margin-bottom: 1.5rem;
    font-weight: 300;
  }
`;

const ImagePlaceholder = styled(motion.div)`
  height: 400px;
  background: linear-gradient(135deg, #f0f4f8 0%, #e2e8f0 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #9ca3af;
  font-size: 1.1rem;
  font-weight: 300;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="%23e2e8f0"/><circle cx="75" cy="75" r="1" fill="%23e2e8f0"/><circle cx="50" cy="10" r="0.5" fill="%23cbd5e1"/><circle cx="10" cy="60" r="0.5" fill="%23cbd5e1"/><circle cx="90" cy="40" r="0.5" fill="%23cbd5e1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
    opacity: 0.3;
  }
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

        <ContentGrid>
          <TextContent
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3>Our Philosophy</h3>
            <p>
              At Rose & Stone Bookkeeping, we believe that accurate bookkeeping is the foundation
              of every successful business. We don't just record numbers – we provide
              insights that help you make informed financial decisions.
            </p>
            <p>
              Our approach combines meticulous attention to detail with modern accounting
              technology to deliver reliable, timely, and comprehensive financial services.
              Every transaction matters, every report tells a story.
            </p>
            <p>
              We work closely with our clients to understand their business needs and
              provide customized bookkeeping solutions. From daily transactions to
              year-end reporting, we're your trusted financial partners.
            </p>
          </TextContent>

          <ImagePlaceholder
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Professional Team
          </ImagePlaceholder>
        </ContentGrid>

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
