import React from 'react';
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
  return (
    <AppContainer>
      <GlobalStyle />
      <Header />
      <Main>
        <Hero />
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