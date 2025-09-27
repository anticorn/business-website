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
            We offer comprehensive bookkeeping and accounting services to help your business
            maintain accurate financial records and make informed decisions.
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
                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
              </svg>
            </ServiceIcon>
            <ServiceTitle>Monthly Bookkeeping</ServiceTitle>
            <ServiceDescription>Complete monthly bookkeeping services including transaction recording, bank reconciliation, and financial reporting.</ServiceDescription>
            <ServiceFeatures>
              <ServiceFeature>Transaction Recording</ServiceFeature>
              <ServiceFeature>Bank Reconciliation</ServiceFeature>
              <ServiceFeature>Financial Statements</ServiceFeature>
              <ServiceFeature>Expense Categorization</ServiceFeature>
              <ServiceFeature>Monthly Reports</ServiceFeature>
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
                <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5 16 5.67 16 6.5 15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
              </svg>
            </ServiceIcon>
            <ServiceTitle>Tax Preparation</ServiceTitle>
            <ServiceDescription>Professional tax preparation services for individuals and businesses, ensuring compliance and maximizing deductions.</ServiceDescription>
            <ServiceFeatures>
              <ServiceFeature>Individual Tax Returns</ServiceFeature>
              <ServiceFeature>Business Tax Returns</ServiceFeature>
              <ServiceFeature>Tax Planning</ServiceFeature>
              <ServiceFeature>IRS Communication</ServiceFeature>
              <ServiceFeature>Audit Support</ServiceFeature>
            </ServiceFeatures>
            <ServicePrice>From $200/return</ServicePrice>
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
                <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/>
              </svg>
            </ServiceIcon>
            <ServiceTitle>Payroll Services</ServiceTitle>
            <ServiceDescription>Complete payroll processing including calculations, tax filings, and direct deposit management.</ServiceDescription>
            <ServiceFeatures>
              <ServiceFeature>Payroll Processing</ServiceFeature>
              <ServiceFeature>Tax Calculations</ServiceFeature>
              <ServiceFeature>Direct Deposit</ServiceFeature>
              <ServiceFeature>Tax Filings</ServiceFeature>
              <ServiceFeature>Employee Portal</ServiceFeature>
            </ServiceFeatures>
            <ServicePrice>From $50/employee</ServicePrice>
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
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
              </svg>
            </ServiceIcon>
            <ServiceTitle>Financial Consulting</ServiceTitle>
            <ServiceDescription>Strategic financial consulting to help you understand your business performance and plan for growth.</ServiceDescription>
            <ServiceFeatures>
              <ServiceFeature>Financial Analysis</ServiceFeature>
              <ServiceFeature>Budget Planning</ServiceFeature>
              <ServiceFeature>Cash Flow Management</ServiceFeature>
              <ServiceFeature>Business Valuation</ServiceFeature>
              <ServiceFeature>Growth Planning</ServiceFeature>
            </ServiceFeatures>
            <ServicePrice>From $150/hour</ServicePrice>
            <ServiceButton href="#contact">Get Started</ServiceButton>
          </ServiceCard>

          <ServiceCard
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <ServiceIcon>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
              </svg>
            </ServiceIcon>
            <ServiceTitle>QuickBooks Setup</ServiceTitle>
            <ServiceDescription>Complete QuickBooks setup and training to get your business accounting system running smoothly.</ServiceDescription>
            <ServiceFeatures>
              <ServiceFeature>Chart of Accounts Setup</ServiceFeature>
              <ServiceFeature>Bank Integration</ServiceFeature>
              <ServiceFeature>User Training</ServiceFeature>
              <ServiceFeature>Data Migration</ServiceFeature>
              <ServiceFeature>Ongoing Support</ServiceFeature>
            </ServiceFeatures>
            <ServicePrice>From $500 setup</ServicePrice>
            <ServiceButton href="#contact">Get Started</ServiceButton>
          </ServiceCard>

          <ServiceCard
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <ServiceIcon>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"/>
              </svg>
            </ServiceIcon>
            <ServiceTitle>Year-End Services</ServiceTitle>
            <ServiceDescription>Comprehensive year-end accounting services including financial statements, tax preparation, and audit support.</ServiceDescription>
            <ServiceFeatures>
              <ServiceFeature>Financial Statements</ServiceFeature>
              <ServiceFeature>Tax Preparation</ServiceFeature>
              <ServiceFeature>Audit Preparation</ServiceFeature>
              <ServiceFeature>1099 Processing</ServiceFeature>
              <ServiceFeature>Compliance Review</ServiceFeature>
            </ServiceFeatures>
            <ServicePrice>From $1,200/year</ServicePrice>
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
