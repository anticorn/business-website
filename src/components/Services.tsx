import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ServicesSection = styled.section`
  padding: 8rem 0;
  background: #ffffff;
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

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-bottom: 3rem;
  }
`;

const ServiceCard = styled(motion.div)`
  background: white;
  padding: 3rem 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  border: 1px solid rgba(0, 0, 0, 0.05);
  position: relative;
  overflow: hidden;
  will-change: transform;
  backface-visibility: hidden;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  }
  
  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    border-radius: 12px;
    
    &:hover {
      transform: translateY(-4px);
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #e8f4f8 0%, #d1e7dd 100%);
  }
`;

const ServiceIcon = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #e8f4f8 0%, #d1e7dd 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  color: #2c2c2c;
`;

const ServiceTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 500;
  color: #2c2c2c;
  margin-bottom: 1rem;
  letter-spacing: -0.01em;
`;

const ServiceDescription = styled.p`
  color: #6b7280;
  line-height: 1.7;
  margin-bottom: 1.5rem;
  font-weight: 300;
`;

const ServiceFeatures = styled.ul`
  list-style: none;
  margin-bottom: 2rem;
`;

const ServiceFeature = styled.li`
  color: #6b7280;
  margin-bottom: 0.5rem;
  font-size: 0.95rem;
  position: relative;
  padding-left: 1.5rem;
  font-weight: 300;

  &::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: #10b981;
    font-weight: 600;
  }
`;

const ServicePrice = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: #2c2c2c;
  margin-bottom: 1rem;
`;

const ServiceButton = styled(motion.a)`
  display: inline-block;
  padding: 0.8rem 2rem;
  background: #2c2c2c;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 500;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  border: 2px solid #2c2c2c;

  &:hover {
    background: transparent;
    color: #2c2c2c;
    transform: translateY(-2px);
  }
`;

const CTA = styled(motion.div)`
  text-align: center;
  background: white;
  padding: 4rem 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
`;

const CTATitle = styled.h3`
  font-size: 2rem;
  font-weight: 300;
  color: #2c2c2c;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
`;

const CTADescription = styled.p`
  font-size: 1.1rem;
  color: #6b7280;
  margin-bottom: 2rem;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
  font-weight: 300;
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

  &:hover {
    background: transparent;
    color: #2c2c2c;
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(44, 44, 44, 0.2);
  }
`;

const Services: React.FC = () => {

  return (
    <ServicesSection id="services">
      <Container>
        <SectionHeader
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <SectionTitle>Our Services</SectionTitle>
          <SectionSubtitle>
            Specialized bookkeeping services tailored to your industry needs. We help you maintain
            accurate financial records and make informed business decisions.
          </SectionSubtitle>
        </SectionHeader>

        <ServicesGrid>
          <ServiceCard
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0 }}
            viewport={{ once: true }}
          >
            <ServiceIcon>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </ServiceIcon>
            <ServiceTitle>Property Management</ServiceTitle>
            <ServiceDescription>Specialized bookkeeping for property management companies, including tenant rent tracking, maintenance expenses, and property-specific financial reporting.</ServiceDescription>
            <ServiceFeatures>
              <ServiceFeature>Rent Collection Tracking</ServiceFeature>
              <ServiceFeature>Maintenance Expense Management</ServiceFeature>
              <ServiceFeature>Property Financial Statements</ServiceFeature>
              <ServiceFeature>Tenant Ledger Management</ServiceFeature>
              <ServiceFeature>Property Tax Preparation</ServiceFeature>
            </ServiceFeatures>
            <ServicePrice>From $300/month</ServicePrice>
            <ServiceButton href="#contact">Get Started</ServiceButton>
          </ServiceCard>

          <ServiceCard
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <ServiceIcon>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
              </svg>
            </ServiceIcon>
            <ServiceTitle>Short-term & Long-term Rental</ServiceTitle>
            <ServiceDescription>Comprehensive bookkeeping for rental properties, including Airbnb, vacation rentals, and traditional long-term leases with specialized tracking and reporting.</ServiceDescription>
            <ServiceFeatures>
              <ServiceFeature>Rental Income Tracking</ServiceFeature>
              <ServiceFeature>Expense Categorization</ServiceFeature>
              <ServiceFeature>Depreciation Management</ServiceFeature>
              <ServiceFeature>Occupancy Reporting</ServiceFeature>
              <ServiceFeature>Tax Deduction Optimization</ServiceFeature>
            </ServiceFeatures>
            <ServicePrice>From $250/month</ServicePrice>
            <ServiceButton href="#contact">Get Started</ServiceButton>
          </ServiceCard>

          <ServiceCard
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <ServiceIcon>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </ServiceIcon>
            <ServiceTitle>Service Industries</ServiceTitle>
            <ServiceDescription>Specialized bookkeeping for service-based businesses including consulting, professional services, and other service-oriented companies.</ServiceDescription>
            <ServiceFeatures>
              <ServiceFeature>Project-based Accounting</ServiceFeature>
              <ServiceFeature>Time Tracking Integration</ServiceFeature>
              <ServiceFeature>Client Billing Management</ServiceFeature>
              <ServiceFeature>Service Revenue Recognition</ServiceFeature>
              <ServiceFeature>Industry-specific Reporting</ServiceFeature>
            </ServiceFeatures>
            <ServicePrice>From $200/month</ServicePrice>
            <ServiceButton href="#contact">Get Started</ServiceButton>
          </ServiceCard>

          <ServiceCard
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <ServiceIcon>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
              </svg>
            </ServiceIcon>
            <ServiceTitle>Small Business - Sole Props & Partnerships</ServiceTitle>
            <ServiceDescription>Comprehensive bookkeeping services for small businesses, sole proprietorships, and partnerships with personalized attention and industry expertise.</ServiceDescription>
            <ServiceFeatures>
              <ServiceFeature>Monthly Bookkeeping</ServiceFeature>
              <ServiceFeature>Tax Preparation</ServiceFeature>
              <ServiceFeature>Financial Reporting</ServiceFeature>
              <ServiceFeature>Business Registration Support</ServiceFeature>
              <ServiceFeature>Partnership Agreement Assistance</ServiceFeature>
            </ServiceFeatures>
            <ServicePrice>From $150/month</ServicePrice>
            <ServiceButton href="#contact">Get Started</ServiceButton>
          </ServiceCard>

        </ServicesGrid>

        <CTA
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <CTATitle>Ready to Get Your Books in Order?</CTATitle>
          <CTADescription>
            Let's discuss how we can help streamline your finances
            with our expertise and commitment to accuracy.
          </CTADescription>
          <CTAButton href="#contact">
            Schedule a Free Consultation
          </CTAButton>
        </CTA>
      </Container>
    </ServicesSection>
  );
};

export default Services;
