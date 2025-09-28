import React, { memo } from 'react';
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
      case 'small': return '120px';
      case 'large': return '240px';
      default: return '180px';
    }
  }};
  height: auto;
  object-fit: contain;
  
  @media (max-width: 768px) {
    width: ${props => {
      switch (props.size) {
        case 'small': return '90px'; /* 50% bigger than 60px */
        case 'large': return '180px'; /* 50% bigger than 120px */
        default: return '120px'; /* 50% bigger than 80px */
      }
    }};
  }
  
  @media (max-width: 480px) {
    width: ${props => {
      switch (props.size) {
        case 'small': return '67px'; /* 50% bigger than 45px */
        case 'large': return '150px'; /* 50% bigger than 100px */
        default: return '97px'; /* 50% bigger than 65px */
      }
    }};
  }
`;

const FallbackLogo = styled.div<{ size?: 'small' | 'medium' | 'large' }>`
  width: ${props => {
    switch (props.size) {
      case 'small': return '120px';
      case 'large': return '240px';
      default: return '180px';
    }
  }};
  height: ${props => {
    switch (props.size) {
      case 'small': return '120px';
      case 'large': return '240px';
      default: return '180px';
    }
  }};
  background: #7E888C;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: ${props => {
    switch (props.size) {
      case 'small': return '1.2rem';
      case 'large': return '2.4rem';
      default: return '1.8rem';
    }
  }};
  text-align: center;
  line-height: 1;
  
  @media (max-width: 768px) {
    width: ${props => {
      switch (props.size) {
        case 'small': return '90px'; /* 50% bigger than 60px */
        case 'large': return '180px'; /* 50% bigger than 120px */
        default: return '120px'; /* 50% bigger than 80px */
      }
    }};
    height: ${props => {
      switch (props.size) {
        case 'small': return '90px'; /* 50% bigger than 60px */
        case 'large': return '180px'; /* 50% bigger than 120px */
        default: return '120px'; /* 50% bigger than 80px */
      }
    }};
    font-size: ${props => {
      switch (props.size) {
        case 'small': return '0.9rem'; /* 50% bigger than 0.6rem */
        case 'large': return '1.8rem'; /* 50% bigger than 1.2rem */
        default: return '1.2rem'; /* 50% bigger than 0.8rem */
      }
    }};
  }
  
  @media (max-width: 480px) {
    width: ${props => {
      switch (props.size) {
        case 'small': return '67px'; /* 50% bigger than 45px */
        case 'large': return '150px'; /* 50% bigger than 100px */
        default: return '97px'; /* 50% bigger than 65px */
      }
    }};
    height: ${props => {
      switch (props.size) {
        case 'small': return '67px'; /* 50% bigger than 45px */
        case 'large': return '150px'; /* 50% bigger than 100px */
        default: return '97px'; /* 50% bigger than 65px */
      }
    }};
    font-size: ${props => {
      switch (props.size) {
        case 'small': return '0.67rem'; /* 50% bigger than 0.45rem */
        case 'large': return '1.5rem'; /* 50% bigger than 1rem */
        default: return '0.97rem'; /* 50% bigger than 0.65rem */
      }
    }};
  }
`;

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  showText?: boolean;
  className?: string;
}

const Logo: React.FC<LogoProps> = memo(({ size = 'medium', showText = true, className }) => {
  const [imageError, setImageError] = React.useState(false);

  const handleImageError = React.useCallback(() => {
    console.error('Logo image failed to load: /logo.png');
    setImageError(true);
  }, []);

  return (
    <LogoContainer size={size} className={className}>
      {imageError ? (
        <FallbackLogo size={size}>
          R&S
        </FallbackLogo>
      ) : (
        <LogoImage 
          size={size}
          src={`${process.env.PUBLIC_URL || ''}/logo.png`} 
          alt="Rose & Stone Bookkeeping Logo"
          onError={handleImageError}
        />
      )}
    </LogoContainer>
  );
});

Logo.displayName = 'Logo';

export default Logo;
