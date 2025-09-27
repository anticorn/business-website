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

const LogoImage = styled.img<{ size?: 'small' | 'medium' | 'large' }>`
  width: ${props => {
    switch (props.size) {
      case 'small': return '60px';
      case 'large': return '120px';
      default: return '90px';
    }
  }};
  height: auto;
  object-fit: contain;
`;

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  showText?: boolean;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 'medium', showText = true, className }) => {
  return (
    <LogoContainer size={size} className={className}>
      <LogoImage 
        size={size}
        src="/logo.png" 
        alt="Rose & Stone Bookkeeping Logo"
      />
    </LogoContainer>
  );
};

export default Logo;
