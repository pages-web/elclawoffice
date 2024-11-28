import React, { ReactNode } from "react";
import { useInView } from "react-intersection-observer";
import styled, { keyframes, css } from "styled-components";

// Animation keyframes
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(90%);
  }
  to {
    opacity: 1;
    transform: translateY(6%);
  }
`;

// Styled component using a transient prop ($inView)
const AnimatedDiv = styled.div<{ $inView: boolean }>`
  opacity: 0;
  ${({ $inView }) =>
    $inView &&
    css`
      animation: ${fadeIn} 1s forwards;
    `}
`;

// Props interface for the component
interface ScrollAnimationComponentProps {
  children: ReactNode;
}

// Functional component
const ScrollAnimationComponentSection2: React.FC<ScrollAnimationComponentProps> = ({ children }) => {
  const { ref, inView } = useInView({
    // threshold: 0.1, // Adjust this as needed
  });

  return (
    <AnimatedDiv ref={ref} $inView={inView}>
      {children}
    </AnimatedDiv>
  );
};

export default ScrollAnimationComponentSection2;
