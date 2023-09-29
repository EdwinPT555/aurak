import React from "react";
import styled from "styled-components";
import { FiChevronRight } from "react-icons/fi";
const parallax = () => {
  return (
    <Container>
      <ParallaxBackground></ParallaxBackground>
      <ParallaxText className="flex flex-col items-center justify-center">
        <span className="text-6xl font-bold text-white">YOUR FUTURE STARTS HERE</span>
        <p className="text-lg text-white ml-96 flex items-center cursor-pointer">
          READ MORE
          <span className="ml-2 font-semibold text-red-700"><FiChevronRight /></span>
        </p>
      </ParallaxText>
    </Container>
  );
};

export default parallax;


const Container = styled.div`
  position: relative;
  height: 90vh;
  margin-top: -20px;
  overflow: hidden;
`;

const ParallaxBackground = styled.div`
  background-image: url('https://images.pexels.com/photos/6146978/pexels-photo-6146978.jpeg');
  background-size: cover;
  background-position: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1; 

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgb(255 255 255 / 0%), rgba(0, 0, 0, 0.7));
    
  }
`;

const ParallaxText = styled.div`
  position: absolute;
  top: 60%;
  left: 35%;
  transform: translate(-50%, -50%);
  max-width: 700px;
`;