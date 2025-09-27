import React from 'react';
import styled from 'styled-components';

const LogoContainer = styled.div<{ size?: 'small' | 'medium' | 'large' }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${props => {
    switch (props.size) {
      case 'small': return '0.4rem';
      case 'large': return '0.8rem';
      default: return '0.6rem';
    }
  }};
`;

const LogoIcon = styled.div<{ size?: 'small' | 'medium' | 'large' }>`
  width: ${props => {
    switch (props.size) {
      case 'small': return '50px';
      case 'large': return '100px';
      default: return '75px';
    }
  }};
  height: ${props => {
    switch (props.size) {
      case 'small': return '50px';
      case 'large': return '100px';
      default: return '75px';
    }
  }};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CompanyName = styled.div<{ size?: 'small' | 'medium' | 'large' }>`
  font-family: 'Times New Roman', serif;
  font-size: ${props => {
    switch (props.size) {
      case 'small': return '0.8rem';
      case 'large': return '1.4rem';
      default: return '1.1rem';
    }
  }};
  font-weight: 400;
  color: #7E888C;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  line-height: 1.1;
`;

const Tagline = styled.div<{ size?: 'small' | 'medium' | 'large' }>`
  font-family: 'Arial', sans-serif;
  font-size: ${props => {
    switch (props.size) {
      case 'small': return '0.6rem';
      case 'large': return '1rem';
      default: return '0.8rem';
    }
  }};
  font-weight: 400;
  color: #7E888C;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  line-height: 1;
`;

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  showText?: boolean;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 'medium', showText = true, className }) => {
  return (
    <LogoContainer size={size} className={className}>
      <LogoIcon size={size}>
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer circle border */}
          <circle
            cx="50"
            cy="50"
            r="48"
            fill="none"
            stroke="#7E888C"
            strokeWidth="2"
          />
          {/* Inner circle border */}
          <circle
            cx="50"
            cy="50"
            r="42"
            fill="none"
            stroke="#7E888C"
            strokeWidth="1"
          />
          
          {/* Rose illustration */}
          {/* Rose petals - outer layer */}
          <path
            d="M50 20 C45 15, 35 18, 35 25 C35 30, 40 32, 45 28 C47 26, 48 24, 50 20 Z"
            fill="#8B7B96"
          />
          <path
            d="M50 20 C55 15, 65 18, 65 25 C65 30, 60 32, 55 28 C53 26, 52 24, 50 20 Z"
            fill="#8B7B96"
          />
          <path
            d="M50 20 C52 25, 58 30, 65 28 C70 26, 72 20, 68 15 C65 12, 60 15, 58 18 C56 19, 53 19, 50 20 Z"
            fill="#8B7B96"
          />
          <path
            d="M50 20 C48 25, 42 30, 35 28 C30 26, 28 20, 32 15 C35 12, 40 15, 42 18 C44 19, 47 19, 50 20 Z"
            fill="#8B7B96"
          />
          
          {/* Rose petals - middle layer */}
          <path
            d="M50 25 C47 22, 42 24, 42 28 C42 31, 45 32, 48 30 C49 29, 50 27, 50 25 Z"
            fill="#8B7B96"
          />
          <path
            d="M50 25 C53 22, 58 24, 58 28 C58 31, 55 32, 52 30 C51 29, 50 27, 50 25 Z"
            fill="#8B7B96"
          />
          
          {/* Rose petals - inner layer */}
          <path
            d="M50 30 C48 28, 46 29, 46 32 C46 33, 47 34, 48 33 C49 32, 50 31, 50 30 Z"
            fill="#8B7B96"
          />
          <path
            d="M50 30 C52 28, 54 29, 54 32 C54 33, 53 34, 52 33 C51 32, 50 31, 50 30 Z"
            fill="#8B7B96"
          />
          
          {/* Rose center */}
          <circle
            cx="50"
            cy="35"
            r="3"
            fill="#8B7B96"
          />
          
          {/* Rose stem */}
          <path
            d="M50 38 L50 65"
            stroke="#7E888C"
            strokeWidth="2"
            strokeLinecap="round"
          />
          
          {/* Rose leaves */}
          <path
            d="M50 50 Q45 48, 42 52 Q45 54, 50 52"
            fill="#7E888C"
          />
          <path
            d="M50 55 Q55 53, 58 57 Q55 59, 50 57"
            fill="#7E888C"
          />
        </svg>
      </LogoIcon>
      {showText && (
        <>
          <CompanyName size={size}>
            ROSE & STONE
          </CompanyName>
          <Tagline size={size}>
            BOOKKEEPING
          </Tagline>
        </>
      )}
    </LogoContainer>
  );
};

export default Logo;
