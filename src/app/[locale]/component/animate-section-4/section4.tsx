"use client";

import React, { ReactNode } from "react";
import { useInView } from "react-intersection-observer";
import styled, { keyframes, css } from "styled-components";

// Keyframes for the animation
const fadeIn = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 1;
    transform: translateY(-50%);
  }
`;

// Styled component with a transient prop
const AnimatedDiv = styled.div<{ $inView: boolean }>`
  opacity: 0; // Initial opacity

  ${({ $inView }) =>
    $inView &&
    css`
      animation: ${fadeIn} 25s forwards;
    `}
`;

// Component props interface
interface ScrollAnimationComponentProps {
  children: ReactNode;
}

// Scroll animation component
const ScrollAnimationComponentSection4: React.FC<ScrollAnimationComponentProps> = ({ children }) => {
  const { ref, inView } = useInView({
    threshold: 0.01, // Trigger when 10% of the element is in view
  });

  return (
    <AnimatedDiv ref={ref} $inView={inView}>
      {children}
    </AnimatedDiv>
  );
};

export default ScrollAnimationComponentSection4;
