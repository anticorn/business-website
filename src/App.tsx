import React, { useState, useEffect, useCallback } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #ffffff;
    color: #2c2c2c;
    line-height: 1.6;
    text-rendering: optimizeLegibility;
    -webkit-text-size-adjust: 100%;
  }

  html {
    scroll-behavior: smooth;
  }

  ::selection {
    background-color: #e8f4f8;
    color: #2c2c2c;
  }
`;

const AppContainer = styled.div`
  min-height: 100vh;
  background: #ffffff;
`;

const Main = styled.main`
  position: relative;
`;

function App() {
  const [isLogoTransitioning, setIsLogoTransitioning] = useState(false);
  const [showHeaderOnMobile, setShowHeaderOnMobile] = useState(false);

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    const isMobile = window.innerWidth <= 768;
    const viewportHeight = window.innerHeight;
    
    if (isMobile) {
      // Logo transition happens between 20% and 50% of viewport
      const shouldTransition = scrollY > viewportHeight * 0.2 && scrollY <= viewportHeight * 0.5;
      setIsLogoTransitioning(shouldTransition);
      
      // Show header when scrolling past 50% of viewport height
      const shouldShowHeader = scrollY > viewportHeight * 0.5;
      setShowHeaderOnMobile(shouldShowHeader);
    } else {
      // Desktop: always show header, no logo transition
      setShowHeaderOnMobile(true);
      setIsLogoTransitioning(false);
    }
  }, []);

  useEffect(() => {
    // Initialize mobile visibility - start hidden on mobile, visible on desktop
    const isMobile = window.innerWidth <= 768;
    setShowHeaderOnMobile(!isMobile);
    
    // Run initial scroll check
    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [handleScroll]);

  return (
    <AppContainer>
      <GlobalStyle />
      <Header 
        isLogoTransitioning={isLogoTransitioning}
        showOnMobile={showHeaderOnMobile}
      />
      <Main>
        <Hero isLogoTransitioning={isLogoTransitioning} />
        <About />
        <Services />
        <Portfolio />
        <Contact />
      </Main>
      <Footer />
    </AppContainer>
  );
}

export default App;