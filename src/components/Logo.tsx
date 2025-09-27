import React from 'react';
import styled from 'styled-components';

const LogoContainer = styled.div<{ size?: 'small' | 'medium' | 'large' }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${props => {
    switch (props.size) {
      case 'small': return '0.5rem';
      case 'large': return '1rem';
      default: return '0.75rem';
    }
  }};
`;

const LogoIcon = styled.div<{ size?: 'small' | 'medium' | 'large' }>`
  width: ${props => {
    switch (props.size) {
      case 'small': return '40px';
      case 'large': return '80px';
      default: return '60px';
    }
  }};
  height: ${props => {
    switch (props.size) {
      case 'small': return '40px';
      case 'large': return '80px';
      default: return '60px';
    }
  }};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Circle = styled.div`
  width: 100%;
  height: 100%;
  border: 2px solid #9ca3af;
  border-radius: 50%;
  position: relative;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Rose = styled.div`
  width: 60%;
  height: 60%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RosePetals = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Petal = styled.div<{ rotation: number; delay: number }>`
  position: absolute;
  width: 20px;
  height: 30px;
  background: linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%);
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
  transform: rotate(${props => props.rotation}deg);
  transform-origin: center bottom;
  animation: bloom 2s ease-out ${props => props.delay}s forwards;
  opacity: 0;

  @keyframes bloom {
    0% {
      opacity: 0;
      transform: rotate(${props => props.rotation}deg) scale(0);
    }
    100% {
      opacity: 1;
      transform: rotate(${props => props.rotation}deg) scale(1);
    }
  }
`;

const RoseStem = styled.div`
  position: absolute;
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);
  width: 3px;
  height: 20px;
  background: #5b21b6;
  border-radius: 2px;
`;

const RoseLeaf = styled.div<{ side: 'left' | 'right' }>`
  position: absolute;
  bottom: -5px;
  ${props => props.side === 'left' ? 'left: -8px;' : 'right: -8px;'}
  width: 8px;
  height: 12px;
  background: #5b21b6;
  border-radius: 50% 0 50% 0;
  transform: ${props => props.side === 'left' ? 'rotate(-30deg)' : 'rotate(30deg)'};
`;

const CompanyName = styled.div<{ size?: 'small' | 'medium' | 'large' }>`
  font-family: 'Georgia', 'Times New Roman', serif;
  font-weight: 700;
  color: #374151;
  font-size: ${props => {
    switch (props.size) {
      case 'small': return '1rem';
      case 'large': return '2rem';
      default: return '1.5rem';
    }
  }};
  letter-spacing: 0.05em;
  text-align: center;
`;

const ServiceName = styled.div<{ size?: 'small' | 'medium' | 'large' }>`
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  font-weight: 500;
  color: #374151;
  font-size: ${props => {
    switch (props.size) {
      case 'small': return '0.7rem';
      case 'large': return '1.2rem';
      default: return '0.9rem';
    }
  }};
  letter-spacing: 0.1em;
  text-align: center;
  text-transform: uppercase;
`;

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ size = 'medium', showText = true }) => {
  return (
    <LogoContainer size={size}>
      <LogoIcon size={size}>
        <Circle>
          <Rose>
            <RosePetals>
              {/* Rose petals in a circular pattern */}
              <Petal rotation={0} delay={0.1} />
              <Petal rotation={45} delay={0.2} />
              <Petal rotation={90} delay={0.3} />
              <Petal rotation={135} delay={0.4} />
              <Petal rotation={180} delay={0.5} />
              <Petal rotation={225} delay={0.6} />
              <Petal rotation={270} delay={0.7} />
              <Petal rotation={315} delay={0.8} />
            </RosePetals>
            <RoseStem />
            <RoseLeaf side="left" />
            <RoseLeaf side="right" />
          </Rose>
        </Circle>
      </LogoIcon>
      {showText && (
        <>
          <CompanyName size={size}>ROSE & STONE</CompanyName>
          <ServiceName size={size}>BOOKKEEPING</ServiceName>
        </>
      )}
    </LogoContainer>
  );
};

export default Logo;
