import React, { ReactNode } from "react";
import { useInView } from "react-intersection-observer";
import styled, { keyframes, css } from "styled-components";

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

const AnimatedDiv = styled.div<{ inView: boolean }>`
  opacity: 0;
  ${({ inView }) =>
    inView &&
    css`
      animation: ${fadeIn} 1s forwards;
    `}
`;

interface ScrollAnimationComponentProps {
  children: ReactNode;
}

const ScrollAnimationComponentSection2: React.FC<
  ScrollAnimationComponentProps
> = ({ children }) => {
  const { ref, inView } = useInView({
    // threshold: 0.1,
  });

  return (
    <AnimatedDiv ref={ref} inView={inView}>
      {children}
    </AnimatedDiv>
  );
};

export default ScrollAnimationComponentSection2;
