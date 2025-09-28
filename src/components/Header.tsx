import React, { useState, useEffect, memo, useCallback } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Logo from './Logo';

const HeaderContainer = styled(motion.header)<{ scrolled: boolean; showOnMobile: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${props => props.scrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent'};
  backdrop-filter: ${props => props.scrolled ? 'blur(10px)' : 'none'};
  border-bottom: ${props => props.scrolled ? '1px solid rgba(0, 0, 0, 0.1)' : 'none'};
  transition: background-color 0.2s ease, backdrop-filter 0.2s ease, border-bottom 0.2s ease, transform 0.3s ease;
  padding: 1rem 0;
  will-change: background-color, backdrop-filter, transform;
  
  @media (max-width: 768px) {
    padding: 0.25rem 0;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    transform: ${props => props.showOnMobile ? 'translateY(0)' : 'translateY(-100%)'};
  }
  
  @media (max-width: 480px) {
    padding: 0.2rem 0;
  }
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 768px) {
    padding: 0 0.75rem;
  }
  
  @media (max-width: 480px) {
    padding: 0 0.5rem;
  }
`;

const LogoWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
`;

const NavLinks = styled(motion.ul)<{ isOpen: boolean }>`
  display: flex;
  list-style: none;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(20px);
    flex-direction: column;
    justify-content: center;
    gap: 3rem;
    transform: ${props => props.isOpen ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s ease;
  }
`;

const NavLink = styled(motion.li)`
  a {
    font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
    text-decoration: none;
    color: #2c2c2c;
    font-weight: 500;
    font-size: 0.95rem;
    transition: color 0.3s ease;
    position: relative;

    &:hover {
      color: #6b7280;
    }

    &::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 0;
      height: 2px;
      background: #6b7280;
      transition: width 0.3s ease;
    }

    &:hover::after {
      width: 100%;
    }
  }
`;

const MobileMenuButton = styled(motion.button)`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #2c2c2c;
  cursor: pointer;
  z-index: 1001;

  @media (max-width: 768px) {
    display: block;
  }
`;

const CloseButton = styled(MobileMenuButton)`
  position: fixed;
  top: 2rem;
  right: 2rem;
`;

const Header: React.FC = memo(() => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showOnMobile, setShowOnMobile] = useState(false);
  const [isLogoTransitioning, setIsLogoTransitioning] = useState(false);

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    const isMobile = window.innerWidth <= 768;
    
    setScrolled(scrollY > 50);
    
    // Track logo transition state
    if (isMobile) {
      setIsLogoTransitioning(scrollY > window.innerHeight * 0.3 && scrollY <= window.innerHeight * 0.7);
      setShowOnMobile(scrollY > window.innerHeight * 0.7);
    } else {
      setShowOnMobile(true);
      setIsLogoTransitioning(false);
    }
  }, []);

  useEffect(() => {
    // Initialize mobile visibility - start hidden on mobile, visible on desktop
    const isMobile = window.innerWidth <= 768;
    setShowOnMobile(!isMobile);
    
    // Run initial scroll check
    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [handleScroll]);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <HeaderContainer
      scrolled={scrolled}
      showOnMobile={showOnMobile}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Nav>
        <LogoWrapper
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: isLogoTransitioning ? 0 : 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Logo size="small" showText={false} />
        </LogoWrapper>

        <NavLinks isOpen={isMenuOpen}>
          <CloseButton onClick={closeMenu}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            </svg>
          </CloseButton>
          
          <NavLink
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a href="#home" onClick={closeMenu}>Home</a>
          </NavLink>
          
          <NavLink
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a href="#about" onClick={closeMenu}>About</a>
          </NavLink>
          
          <NavLink
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <a href="#services" onClick={closeMenu}>Services</a>
          </NavLink>
          
          <NavLink
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <a href="#portfolio" onClick={closeMenu}>Portfolio</a>
          </NavLink>
          
          <NavLink
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </NavLink>
        </NavLinks>

        <MobileMenuButton onClick={toggleMenu}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
          </svg>
        </MobileMenuButton>
      </Nav>
    </HeaderContainer>
  );
});

Header.displayName = 'Header';

export default Header;
