import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const PortfolioSection = styled.section`
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

const FilterButtons = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 4rem;
  flex-wrap: wrap;
`;

const FilterButton = styled(motion.button)<{ active: boolean }>`
  padding: 0.8rem 1.5rem;
  background: ${props => props.active ? '#2c2c2c' : 'transparent'};
  color: ${props => props.active ? 'white' : '#6b7280'};
  border: 2px solid ${props => props.active ? '#2c2c2c' : '#e5e7eb'};
  border-radius: 50px;
  font-weight: 500;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.active ? '#2c2c2c' : '#f8fafc'};
    border-color: #2c2c2c;
    color: ${props => props.active ? 'white' : '#2c2c2c'};
  }
`;

const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const ProjectCard = styled(motion.div)`
  background: #fafafa;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0.05);

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  }
`;

const ProjectImage = styled.div<{ image: string }>`
  height: 250px;
  background: linear-gradient(135deg, #f0f4f8 0%, #e2e8f0 100%);
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #9ca3af;
  font-size: 1.1rem;
  font-weight: 300;

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

const ProjectOverlay = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(44, 44, 44, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${ProjectCard}:hover & {
    opacity: 1;
  }
`;

const OverlayButton = styled(motion.a)`
  width: 50px;
  height: 50px;
  background: white;
  color: #2c2c2c;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-size: 1.2rem;
  transition: all 0.3s ease;

  &:hover {
    background: #f8fafc;
    transform: scale(1.1);
  }
`;

const ProjectContent = styled.div`
  padding: 2rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 500;
  color: #2c2c2c;
  margin-bottom: 0.5rem;
  letter-spacing: -0.01em;
`;

const ProjectDescription = styled.p`
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 1rem;
  font-weight: 300;
`;

const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const ProjectTag = styled.span`
  background: #e8f4f8;
  color: #2c2c2c;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const Modal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
`;

const ModalContent = styled(motion.div)`
  background: white;
  border-radius: 16px;
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
`;

const ModalImage = styled.div<{ image: string }>`
  height: 300px;
  background: linear-gradient(135deg, #f0f4f8 0%, #e2e8f0 100%);
  border-radius: 16px 16px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #9ca3af;
  font-size: 1.1rem;
  font-weight: 300;
`;

const ModalBody = styled.div`
  padding: 2rem;
`;

const ModalTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 500;
  color: #2c2c2c;
  margin-bottom: 1rem;
  letter-spacing: -0.01em;
`;

const ModalDescription = styled.p`
  color: #6b7280;
  line-height: 1.7;
  margin-bottom: 1.5rem;
  font-weight: 300;
`;

const ModalLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const ModalLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  background: #2c2c2c;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 500;
  font-size: 0.95rem;
  transition: all 0.3s ease;

  &:hover {
    background: #1a1a1a;
    transform: translateY(-2px);
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.2rem;
  color: #2c2c2c;
  transition: all 0.3s ease;

  &:hover {
    background: white;
    transform: scale(1.1);
  }
`;

const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const categories = ['All', 'Small Business', 'Restaurant', 'Retail', 'Professional Services'];

  const projects = [
    {
      id: 1,
      title: "Local Restaurant Chain",
      description: "Complete bookkeeping setup and monthly services for a growing restaurant chain with 5 locations.",
      image: "project1.jpg",
      category: "Restaurant",
      tags: ["QuickBooks", "Payroll", "Tax Prep", "Multi-Location"],
      liveUrl: "#",
      githubUrl: "#",
      fullDescription: "This project involved setting up comprehensive bookkeeping for a restaurant chain with multiple locations. We implemented QuickBooks for each location, established standardized chart of accounts, set up automated bank feeds, and created monthly reporting dashboards. The client saw 40% reduction in bookkeeping time and improved cash flow visibility."
    },
    {
      id: 2,
      title: "Tech Startup",
      description: "Financial consulting and bookkeeping services for a fast-growing technology startup.",
      image: "project2.jpg",
      category: "Small Business",
      tags: ["Xero", "Financial Planning", "Investor Reports", "Growth Analysis"],
      liveUrl: "#",
      githubUrl: "#",
      fullDescription: "We provided comprehensive financial services for a tech startup preparing for Series A funding. Our services included setting up cloud-based accounting with Xero, creating investor-ready financial statements, implementing expense tracking systems, and providing monthly financial analysis. The startup successfully raised $2M in funding with our financial documentation."
    },
    {
      id: 3,
      title: "Retail Store Chain",
      description: "Multi-location retail bookkeeping with inventory management and sales tax compliance.",
      image: "project3.jpg",
      category: "Retail",
      tags: ["QuickBooks", "Inventory", "Sales Tax", "Multi-State"],
      liveUrl: "#",
      githubUrl: "#",
      fullDescription: "We managed bookkeeping for a retail chain with 12 stores across 3 states. Our services included daily sales reconciliation, inventory tracking, multi-state sales tax compliance, and monthly financial reporting. We implemented automated systems that reduced manual data entry by 60% and improved accuracy of sales tax filings."
    },
    {
      id: 4,
      title: "Law Firm",
      description: "Professional bookkeeping and trust accounting for a mid-size law firm with complex billing needs.",
      image: "project4.jpg",
      category: "Professional Services",
      tags: ["Trust Accounting", "Time Tracking", "Client Billing", "Compliance"],
      liveUrl: "#",
      githubUrl: "#",
      fullDescription: "We provided specialized bookkeeping services for a law firm with complex trust accounting requirements. Our services included client trust fund management, time tracking integration, automated client billing, and compliance reporting. The firm improved cash flow by 25% through better billing practices and reduced accounting errors to zero."
    },
    {
      id: 5,
      title: "Construction Company",
      description: "Project-based accounting and job costing for a growing construction business.",
      image: "project5.jpg",
      category: "Small Business",
      tags: ["Job Costing", "Project Accounting", "Equipment Tracking", "Progress Billing"],
      liveUrl: "#",
      githubUrl: "#",
      fullDescription: "We implemented project-based accounting for a construction company with multiple ongoing projects. Our services included job costing setup, equipment depreciation tracking, progress billing systems, and project profitability analysis. The company improved project margins by 15% through better cost tracking and billing accuracy."
    },
    {
      id: 6,
      title: "Medical Practice",
      description: "Healthcare practice bookkeeping with insurance billing and patient payment tracking.",
      image: "project6.jpg",
      category: "Professional Services",
      tags: ["Medical Billing", "Insurance Claims", "Patient Payments", "HIPAA Compliance"],
      liveUrl: "#",
      githubUrl: "#",
      fullDescription: "We provided specialized bookkeeping for a medical practice with complex insurance billing requirements. Our services included patient payment tracking, insurance claim reconciliation, HIPAA-compliant record keeping, and monthly financial reporting. The practice reduced billing errors by 80% and improved cash flow through better payment tracking."
    }
  ];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <PortfolioSection id="portfolio">
      <Container>
        <SectionHeader
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <SectionTitle>Success Stories</SectionTitle>
          <SectionSubtitle>
            Explore our recent projects and see how we've helped businesses
            achieve their financial goals with accurate bookkeeping and accounting services.
          </SectionSubtitle>
        </SectionHeader>

        <FilterButtons
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <FilterButton
              key={category}
              active={selectedCategory === category}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </FilterButton>
          ))}
        </FilterButtons>

        <PortfolioGrid>
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedProject(project)}
                whileHover={{ scale: 1.02 }}
              >
                <ProjectImage image={project.image}>
                  {project.title}
                  <ProjectOverlay>
                    <OverlayButton href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
                      </svg>
                    </OverlayButton>
                    <OverlayButton href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </OverlayButton>
                  </ProjectOverlay>
                </ProjectImage>
                <ProjectContent>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  <ProjectTags>
                    {project.tags.map((tag, tagIndex) => (
                      <ProjectTag key={tagIndex}>{tag}</ProjectTag>
                    ))}
                  </ProjectTags>
                </ProjectContent>
              </ProjectCard>
            ))}
          </AnimatePresence>
        </PortfolioGrid>

        <AnimatePresence>
          {selectedProject && (
            <Modal
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <ModalContent
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <CloseButton onClick={() => setSelectedProject(null)}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                  </svg>
                </CloseButton>
                <ModalImage image={selectedProject.image}>
                  {selectedProject.title}
                </ModalImage>
                <ModalBody>
                  <ModalTitle>{selectedProject.title}</ModalTitle>
                  <ModalDescription>{selectedProject.fullDescription}</ModalDescription>
                  <ModalLinks>
                    <ModalLink href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
                      </svg>
                      View Live
                    </ModalLink>
                    <ModalLink href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      View Code
                    </ModalLink>
                  </ModalLinks>
                  <ProjectTags>
                    {selectedProject.tags.map((tag: string, tagIndex: number) => (
                      <ProjectTag key={tagIndex}>{tag}</ProjectTag>
                    ))}
                  </ProjectTags>
                </ModalBody>
              </ModalContent>
            </Modal>
          )}
        </AnimatePresence>
      </Container>
    </PortfolioSection>
  );
};

export default Portfolio;
